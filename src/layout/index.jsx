const Layout = {
  setup() {
    return () => <div>
      <div class="divide-y divide-gray-200">
      <span class="decoration-clone bg-gradient-to-b from-yellow-400 to-red-500 text-transparent">
        Hello <br/>
        World
      </span>
      </div>
      <header>这里是头部</header>
      <div>这里是侧栏</div>
    </div>
  }
}

export default Layout