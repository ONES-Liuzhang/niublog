import { RouterLink } from "vue-router"

const NavbarItem = {
  name: 'NavbarItem',
  props: {
    nodeData: Object
  },
  setup(props) {
    const { nodeData } = props

    /** render */
    return () => {
      if(!nodeData) return null

      const childrens = nodeData.children && nodeData.children.length > 0 
      ? <ul>
        { nodeData.children.map(node => <NavbarItem key={node.title} nodeData={ node }/>) }
        </ul> 
      : null

      return <li>
        {nodeData.routeName 
          ? <RouterLink class="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500" to={nodeData.routeName}>
            <span class="rounded-md absolute inset-0 bg-cyan-50 opacity-0"></span>
            <span class="relative">{ nodeData.title }</span>
          </RouterLink> 
          : <div class="pt-6 px-3 mb-3 lg:mb-3 uppercase tracking-wide font-semibold text-sm lg:text-xs text-gray-900 cursor-default">{ nodeData.title }</div>
        }
        { childrens }
      </li>
    }
  }
}

export default NavbarItem