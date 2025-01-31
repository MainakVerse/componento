import React from "react";
import { RxDashboard } from "react-icons/rx";
import { CgLogOut } from "react-icons/cg";
import DashboardLayout from "./dashboard-layout";

const DashboardLayoutUsage = () => {
  return (
    <DashboardLayout
      // isCollapsed={false}
      topHeaderConfig={{
        left: <h2>Dashboard</h2>,
        right:<button>Profile</button>,
      }}
      sidebarConfig={{
        header: {
          title: <h2 className="text-2xl font-semibold">LOGO</h2>,
          icon: <RxDashboard className="text-2xl font-semibold" />,
        },
        footer: {
          onOpen: (
            <button className="text-lg flex items-center gap-2">
              <CgLogOut className="text-2xl" /> Logout
            </button>
          ),
          onClose: (
            <button className="text-lg">
              <CgLogOut className="text-2xl" />
            </button>
          ),
        },
        content: {
          onOpen: (
            <div className="w-full h-40 rounded-md bg-LIGHT dark:bg-DARK" />
          ),
          onClose: (
            <div className="w-full h-10 rounded-full bg-LIGHT dark:bg-DARK" />
          ),
        },
      }}
    >
      <section className="space-y-4">
        {Array.from({ length: 10 }).map((_, index) => (
          <div
            key={index}
            className="w-full h-48 rounded-md bg-LIGHT dark:bg-DARK"
          />
        ))}
      </section>
    </DashboardLayout>
  );
};

export default DashboardLayoutUsage;
