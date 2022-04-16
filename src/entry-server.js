import { createSSRApp } from 'vue'
import App from './App'

export default function() {
  const app = createSSRApp(App)

  return {
    app
  }
}