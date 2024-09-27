import { createApp, type App } from 'vue'

export function withSetup<T>(composable: () => T): [T, App] {
  let result!: T

  const app = createApp({
    setup() {
      result = composable()
      return () => {}
    }
  })

  app.mount(document.createElement('div'))

  return [result, app]
}
