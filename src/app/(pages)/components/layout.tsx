import React from "react";
import dynamic from "next/dynamic";
import SidebarLdr from "@/components/ui/loaders/sidebar-ldr";
import SideNavLdr from "@/components/ui/loaders/sidenav-ldr";
const SideBar = dynamic(() => import('@/components/components-cmp/sidebar'), {ssr: false, loading: () => <SidebarLdr/>})
const SideNavigation = dynamic(() => import('@/components/components-cmp/side-navigation'), { loading: () => <SideNavLdr/>, ssr: false })
const Pagination = dynamic(() => import('@/components/components-cmp/pagination'), { ssr: false })

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="w-full px-2 flex gap-2 mx-auto max-w-7xl">
      <SideBar />
      <section className="flex-grow p-3 md:p-5 space-y-5 overflow-x-hidden">
        {children}
        <Pagination />
      </section>
      <SideNavigation />
    </main>
  );
};

export default layout;
