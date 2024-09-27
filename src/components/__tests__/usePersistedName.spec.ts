import { describe, expect, it } from 'vitest'
import { usePersistedName } from '../../composables/usePersistedName'
import { withSetup } from './helpers/withSetup'

describe('usePersistedName', () => {
  it('should return persisted name', () => {
    const nameToTest = 'John'
    localStorage.setItem('name', nameToTest)

    const [{ name }] = withSetup(() => usePersistedName())

    expect(name.value).toBe(nameToTest)
  })
})
