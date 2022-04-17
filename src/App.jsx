import { RouterView, RouterLink } from "vue-router"

export default {
  setup() {
    return () => <div>
      Hello Vue JSX!
      <RouterLink to="/home">
        Home
      </RouterLink>
      <RouterView />
    </div>
  }
}