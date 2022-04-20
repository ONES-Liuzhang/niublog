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
          ? <RouterLink class="inline-block px-4 py-2" to={nodeData.routeName}>{ nodeData.title }</RouterLink> 
          : <div class="cursor-default px-2 py-2">{ nodeData.title }</div>
        }
        { childrens }
      </li>
    }
  }
}

export default NavbarItem