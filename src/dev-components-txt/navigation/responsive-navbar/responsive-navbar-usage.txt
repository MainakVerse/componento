import React from "react";
import ResponsiveNavbar from "./responsive-navbar";

const ResponsiveNavbarUsage = () => {
  const menuItems = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Products",
      path: "#",
      subLinks: [
        {
          name: "Software",
          path: "#",
          subLinks: [
            {
              name: "Productivity Tools",
              path: "/products/software/productivity-tools",
            },
            {
              name: "Security Software",
              path: "/products/software/security-software",
            },
          ],
        },
        {
          name: "Hardware",
          path: "/products/hardware",
        },
      ],
    },
    {
      name: "Services",
      path: "/#",
      subLinks: [
        {
          name: "Consulting",
          path: "/services/consulting",
        },
        {
          name: "Support",
          path: "/services/support",
        },
        {
          name: "Training",
          path: "/services/training",
        },
      ],
    },
    {
      name: "About Us",
      path: "/about-us",
    },
  ];
  return (
    <div className="self-start w-full">
      <ResponsiveNavbar
        logo={<h2 className="text-2xl font-semibold text-ACCENT">LOGO</h2>}
        menuItems={menuItems}
      />
    </div>
  );
};

export default ResponsiveNavbarUsage;
