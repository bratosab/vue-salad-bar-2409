import { toppingsMock } from '../mocks/toppings.mock'

describe('Salad Bar', () => {
  it('Salad bar starts correctly', () => {
    cy.visit('/')
    cy.contains('h1', 'Welcome to Salad Bar')
  })

  describe('Personalise salad', () => {
    beforeEach(() => {
      cy.intercept('GET', '**/toppings', {
        statusCode: 200,
        body: toppingsMock
      }).as('getToppings')

      cy.visit('/')
      cy.get('form input').type('Mike')
      cy.get('form button').click()
    })

    it('Verify /toppings API', () => {
      // cy.wait('@getToppings').its('response.statusCode').should('be.oneOf', [200, 304])

      cy.wait('@getToppings').should(({ request, response }) => {
        expect(request.method).to.equal('GET')

        expect(response?.statusCode).to.be.oneOf([200, 304])
        if (response?.statusCode === 200) {
          expect(response?.body).to.have.property('length').and.equal(4)
        }
      })
    })

    it('select first topping', () => {
      cy.wait('@getToppings')

      cy.get('ul[data-cy="topping-list"] li').first().as('firstTopping')
      cy.get('@firstTopping').contains('Cheese')
      cy.get('@firstTopping').find('button').click()
    })
  })
})
