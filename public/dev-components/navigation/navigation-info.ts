import DevDynamicMenuUsage from "./(dev-dynamic-menu)/page";
import ResponsiveNavbarUsage from "./(responsive-navbar)/page";

const NavigationInfo = [
  {
    title: "Dev Dynamic Menu",
    component: DevDynamicMenuUsage,
    variants: {
      jsx: true,
      tsx: true,
    },
    details: {
      description:
        "A dynamic menu component that supports multi-level navigation with collapsible submenus.",
      features: [
        "Multi-level menu structure",
        "Collapsible submenus",
        "Customizable styling",
        "Responsive design",
        "Accessibility-focused",
        "Integration with Next.js routing",
      ],
      props: [
        {
          propName: "menuItems",
          propExample: `[
            {
              name: "Home",
              path: "/",
              subLinks: [
                {
                  name: "Software",
                  path: "/products/software",
            },
            
            // ... more menu items
          ]`,
          propDetail:
            "Array of objects defining menu items, including their names, paths, and optional sublinks.",
        },
        {
          propName: "className",
          propExample: `"border-ACCENT/30 border rounded-lg"`,
          propDetail: "Optional class name for custom styling.",
        },
      ],
      packages: [],
    },
  },
  {
    title: "Responsive Navbar",
    component: ResponsiveNavbarUsage,
    variants: {
      jsx: true,
      tsx: true,
    },
    details: {
      description:
        "A responsive navbar component that adapts to screen sizes, featuring a logo and dynamic menu.",
      features: [
        "Adaptive design for mobile and desktop layouts",
        "Supports multi-level navigation with collapsible submenus",
        "Customizable logo",
        "Integration with Next.js routing",
        "Accessibility-focused",
      ],
      props: [
        {
          propName: "menuItems",
          propExample: `[
            {
              name: "Home",
              path: "/",
            },
            // ... more menu items
          ]`,
          propDetail:
            "Array of objects defining menu items, including their names, paths, and optional sublinks.",
        },
        {
          propName: "logo",
          propExample: `<h2 className="text-2xl font-semibold text-ACCENT">LOGO</h2>`,
          propDetail:
            "React node representing the logo element to be displayed in the navbar.",
        },
      ],
      helpers: [
        {
          cmp_name: "DevDynamicMenu",
          cmp_link: "/navigation#dev-dynamic-menu",
        },
        {
          cmp_name: "DevDrawerV1",
          cmp_link: "/drawers#dev-drawer-v1",
        },
      ],
      packages: [],
    },
  },
];

export default NavigationInfo;
