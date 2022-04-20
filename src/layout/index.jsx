import { RouterView } from 'vue-router'
import Navbar from './navbar'

const Layout = {
  setup() {
    return () => (
      <div class="relative">
        <header class="fixed h-12 w-full leading-12 px-4">Header</header>
        <Navbar />
        <div class="pl-80">
          <div class="container mx-auto pt-12">
            <RouterView />
          </div>
        </div>
      </div>
    )
  }
}

export default Layout