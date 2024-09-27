import { VueWrapper, mount } from '@vue/test-utils'
import { beforeEach, describe, expect, it } from 'vitest'
import NameForm from '../NameForm.vue'

describe('NameForm', () => {
  let wrapper: VueWrapper

  beforeEach(() => {
    wrapper = mount(NameForm, {})
  })

  it('should render', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('Is label shown', () => {
    expect(wrapper.get('label').text()).toEqual('Name')
  })
})
