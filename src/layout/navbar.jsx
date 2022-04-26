import { treeNode } from "../docs";
import NavbarItem from "./navbarItem";

export default {
  name: "Navbar",
  setup() {
    return () => (
      <aside class="fixed w-80 top-16 pt-2 h-full flex-col transition-transform lg:translate-x-0">
        <ul class="mr-12 border-r overflow-auto">
          <NavbarItem nodeData={{ ...treeNode, title: "文章列表" }} />
        </ul>
      </aside>
    );
  },
};
