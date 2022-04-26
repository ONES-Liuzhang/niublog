import { RouterView } from "vue-router";
import Navbar from "./navbar";

const Layout = {
  setup() {
    return () => (
      <div class="relative">
        <header class="sticky top-0 z-40 lg:z-50 w-full max-w-8xl mx-auto bg-white flex-none flex h-16">
          <div class="flex-none pl-4 sm:pl-6 xl:pl-8 flex items-center border-b border-gray-200 lg:border-b-0 lg:w-60 xl:w-72">
            <img class="h-full w-auto py-2" src="/assets/logo.png" />
          </div>
          <div class="flex-auto border-b border-gray-200 flex items-center justify-end px-4 sm:px-6 lg:mx-6 lg:px-0 xl:mx-8">
            <a>Articals</a>
            <a>About</a>
          </div>
        </header>
        <Navbar />
        <div class="pl-80">
          <div class="container mx-auto pt-12 markdown-body md:max-w-screen-md">
            <RouterView />
          </div>
        </div>
      </div>
    );
  },
};

export default Layout;
