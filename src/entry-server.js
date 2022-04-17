import { createSSRApp } from 'vue'
import createRouter from './router'
import { createMemoryHistory } from  'vue-router'
import App from './App'

export default function() {
  const app = createSSRApp(App)
  const router = createRouter(createMemoryHistory())

  app.use(router)

  return {
    app,
    router
  }
}