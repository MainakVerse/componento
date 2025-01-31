import DashboardLayoutUsage from "./(dashboard-layout)/page";

const LayoutsInfo = [
  {
    title: "Dashboard Layout",
    component: DashboardLayoutUsage,
    variants: {
      jsx: true,
      tsx: true,
    },
    details: {
      description:
        "A responsive dashboard layout component that includes a sidebar and a top header, allowing for flexible content display and navigation.",
      features: [
        "Collapsible sidebar for better space management",
        "Configurable top header with customizable content",
        "Mobile-friendly design with a drawer for the sidebar",
        "Dynamic content area for displaying various components",
      ],
      helpers: [
       {
        cmp_name: "DevDrawerV2",
        cmp_link: "/drawers#dev-drawer-v2",
       }
      ],
      props: [
        {
          propName: "sidebarConfig",
          propExample:
            "{ header: { title: <h2>LOGO</h2>, icon: <RxDashboard /> }, content: { onOpen: <div>...</div>, onClose: <div>...</div> }, footer: { onOpen: <button>Logout</button>, onClose: <button>Close</button> } }",
          propDetail:
            "Configuration object for the sidebar, including header, content, and footer sections.",
        },
        {
          propName: "topHeaderConfig",
          propExample:
            "{ left: <h2>Dashboard</h2>, right: <button>Profile</button> }",
          propDetail:
            "(Optional) Configuration object for the top header, allowing customization of left and right sections.",
        },
        {
          propName: "children",
          propExample: "<section>Content goes here</section>",
          propDetail:
            "(Required) The main content to be displayed within the layout.",
        },
        {
          propName: "isCollapsed",
          propExample: true,
          propDetail:
            "(Optional) A boolean indicating whether the sidebar is collapsed or expanded. Defaults to true.",
        },
      ],
      packages: [],
    },
  },
];

export default LayoutsInfo;
