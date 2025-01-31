import React from "react";
import { PiSidebarSimpleDuotone } from "react-icons/pi";
import DevDrawerV2, {
  DrawerTrigger,
} from "../../drawers/(dev-drawer-v2)/dev-drawer-v2";
import { TbLayoutSidebarLeftCollapse } from "react-icons/tb";

const Sidebar = ({
  sidebarConfig,
  isCollapsed = true,
}) => (
  <aside className="h-full hidden w-64 has-[:checked]:w-14 transition-all flex-shrink-0 border-r border-ACCENT/30 md:flex flex-col overflow-hidden *:p-2">
    <input
      disabled={!isCollapsed}
      type="checkbox"
      id="DevSidebarToggle"
      className="hidden peer"
    />
    <div className="w-full h-12 flex-shrink-0 peer-checked:*:hidden peer-checked:justify-center p-2  gap-2 bg-LIGHT dark:bg-DARK flex items-center border-b border-ACCENT/30">
      <div className="!block">{sidebarConfig.header.icon}</div>
      <div>{sidebarConfig.header.title}</div>
    </div>
    <div className="overflow-y-auto peer-checked:hidden flex-grow [&::-webkit-scrollbar]:hidden">
      {sidebarConfig.content.onOpen}
    </div>
    {/* Conditionally render onClose only if collapsed */}
    {isCollapsed && sidebarConfig.content.onClose && (
      <div className="overflow-y-auto peer-checked:block hidden flex-grow [&::-webkit-scrollbar]:hidden">
        {sidebarConfig.content.onClose}
      </div>
    )}

    {sidebarConfig.footer && (
      <>
        <div className="peer-checked:hidden w-full border-t p-2 flex items-center border-ACCENT/30">
          {sidebarConfig.footer.onOpen}
        </div>
        {/* Conditionally render onClose only if collapsed */}
        {isCollapsed && sidebarConfig.footer.onClose && (
          <div className="peer-checked:grid w-full border-t p-2 hidden place-content-center border-ACCENT/30">
            {sidebarConfig.footer.onClose}
          </div>
        )}
      </>
    )}
  </aside>
);

const MobileSidebarDrawer = ({
  sidebarConfig,
}) => (
  <DevDrawerV2
    position="left"
    openBtn={
      <button className="md:hidden block text-ACCENT">
        <PiSidebarSimpleDuotone size={28} />
      </button>
    }
  >
    <aside className="w-full flex h-dvh flex-col overflow-hidden *:p-2">
      <div className="w-full p-2 gap-2 bg-LIGHT dark:bg-DARK flex items-center justify-between border-b border-ACCENT/30 rounded-t-xl">
        <div className="flex items-center gap-2">
          <div className="!block">{sidebarConfig.header.icon}</div>
          <div>{sidebarConfig.header.title}</div>
        </div>
        <DrawerTrigger>
          <TbLayoutSidebarLeftCollapse size={25} />
        </DrawerTrigger>
      </div>
      <div className="overflow-y-auto flex-grow">
        <DrawerTrigger>{sidebarConfig.content.onOpen}</DrawerTrigger>
      </div>
      {/* Hide onClose in mobile view */}
      <div className="overflow-y-auto flex-grow hidden">
        {sidebarConfig.content.onClose}
      </div>
      {sidebarConfig.footer && (
        <DrawerTrigger>
          <div className="peer-checked:hidden w-full border-t p-2 flex items-center border-ACCENT/30">
            {sidebarConfig.footer.onOpen}
          </div>
        </DrawerTrigger>
      )}
    </aside>
  </DevDrawerV2>
);

const DashboardLayout = ({
  sidebarConfig,
  isCollapsed = true,
  topHeaderConfig,
  children,
}) => (
  <div className="w-full h-screen bg-white dark:bg-black overflow-hidden flex flex-row">
    <Sidebar sidebarConfig={sidebarConfig} isCollapsed={isCollapsed} />

    <section className="h-full flex-grow flex flex-col overflow-hidden">
      <div className="w-full h-12 flex-shrink-0  border-ACCENT/30 border-b flex items-center p-2 px-3 justify-between">
        <div className="flex items-center gap-2">
          <div className="block md:hidden text-xl">
            {sidebarConfig.header.icon}
          </div>
          <div className="flex items-center divide-x divide-ACCENT/40 *:px-3">
            {isCollapsed && (
              <label
                htmlFor="DevSidebarToggle"
                className="cursor-pointer hidden md:block text-ACCENT"
              >
                <PiSidebarSimpleDuotone size={28} />
              </label>
            )}
            <MobileSidebarDrawer sidebarConfig={sidebarConfig} />
            <div className="text-lg ">{topHeaderConfig?.left}</div>
          </div>
        </div>
        <div className="grid place-content-center gap-2">
          {topHeaderConfig?.right}
        </div>
      </div>
      <main className="overflow-y-auto flex-grow *:max-w-7xl *:mx-auto p-2">
        {children}
      </main>
    </section>
  </div>
);

export default DashboardLayout;
