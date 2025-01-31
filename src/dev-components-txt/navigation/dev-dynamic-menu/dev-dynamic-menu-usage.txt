import React from "react";
import DevDynamicMenu from "./dev-dynamic-menu";

const DevDynamicMenuUsage = () => {
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
              path: "#",
              subLinks: [
                {
                  name: "Task Management",
                  path: "/products/software/productivity-tools/task-management",
                },
                {
                  name: "Time Tracking",
                  path: "/products/software/productivity-tools/time-tracking",
                },
              ],
            },
            {
              name: "Security Software",
              path: "/products/software/security-software",
            },
          ],
        },
        {
          name: "Hardware",
          path: "#",
          subLinks: [
            {
              name: "Laptops",
              path: "/products/hardware/laptops",
            },
            {
              name: "Desktops",
              path: "/products/hardware/desktops",
            },
            {
              name: "Accessories",
              path: "#",
              subLinks: [
                {
                  name: "Keyboards",
                  path: "/products/hardware/accessories/keyboards",
                },
                {
                  name: "Mice",
                  path: "/products/hardware/accessories/mice",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "Services",
      path: "#",
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
    {
      name: "Contact Us",
      path: "/contact-us",
    },
  ];
  return (
    <div className="self-start w-full md:w-auto">
      <DevDynamicMenu className="border-ACCENT/30 border rounded-lg" menuItems={menuItems} />
    </div>
  );
};

export default DevDynamicMenuUsage;
