import { treeNode } from '../docs'
import NavbarItem from './navbarItem'

export default {
  name: 'Navbar',
  setup() {
    return () => 
    <aside 
      class="fixed w-80 top-12 h-full flex-col transition-transform  lg:translate-x-0">
        <ul>
          <NavbarItem nodeData={{...treeNode, title: '文章列表'}}/>
        </ul>
    </aside>
  }
}