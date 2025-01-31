import DevDropdownV1Usage from "./(dev-dropdown-v1)/page";
import DevDropdownV2Usage from "./(dev-dropdown-v2)/page";

const DropdownsInfo = [
  {
    title: "Dev Dropdown V1",
    component: DevDropdownV1Usage,
    variants: {
      jsx: true,
      tsx: true,
    },
    details: {
      description:
        "A customizable dropdown component for displaying content on demand.",
      features: [
        "Supports dynamic content display based on user interaction",
        "Customizable button to trigger the dropdown",
        "Integration with Radix UI for accessibility and usability",
        "CSS animations for smooth dropdown transitions",
      ],
      props: [
        {
          propName: "children",
          propExample: `<p>Dropdown Content</p>`,
          propDetail: "The content to be displayed inside the dropdown.",
        },
        {
          propName: "button",
          propExample: `<button>Open</button>`,
          propDetail:
            "A React element that serves as the trigger for opening the dropdown.",
        },
        {
          propName: "position",
          propExample: `"bottom"`,
          propDetail:
            "Defines the position of the dropdown relative to the button. Options include 'top', 'bottom', 'left', and 'right'.",
        },
        {
          propName: "contentProps",
          propExample: `{ sideOffset: 5 }`,
          propDetail:
            "Additional properties passed to the dropdown content component.",
        },
      ],
      doc_links: [
        "https://www.radix-ui.com/docs/primitives/components/dropdown-menu",
      ],
      packages: [
        {
          pckg_name: "@radix-ui/react-dropdown-menu",
          pckg_link:
            "https://www.radix-ui.com/docs/primitives/components/dropdown-menu",
        },
      ],
    },
  },
  {
    title: "Dev Dropdown V2",
    component: DevDropdownV2Usage,
    variants: {
      jsx: true,
      tsx: true,
    },
    details: {
      description:
        "A responsive dropdown component that adapts to screen size by using a drawer on mobile devices.",
      features: [
        "Responsive design that switches between dropdown and drawer based on screen width",
        "Customizable button to trigger the dropdown or drawer",
        "Integration with existing dropdown and drawer components for consistent UI",
        "Supports various positioning options for flexibility",
      ],
      helpers: [
        {
          cmp_name: "DevDrawerV2",
          cmp_link: "/dev-components/drawers/(dev-drawer-v2)/dev-drawer-v2",
        },
        {
          cmp_name: "DevDropdownV1",
          cmp_link: "/dev-components/dropdowns/(dev-dropdown-v1)/dev-dropdown-v1",
        }
      ],
      props: [
        {
          propName: "children",
          propExample: `<p>Dropdown Content</p>`,
          propDetail:
            "The content to be displayed inside the dropdown or drawer.",
        },
        {
          propName: "button",
          propExample: `<button>Open</button>`,
          propDetail:
            "A React element that serves as the trigger for opening the dropdown or drawer.",
        },
        {
          propName: "position",
          propExample: `"bottom"`,
          propDetail:
            "Defines the position of the dropdown relative to the button. Options include 'top', 'bottom', 'left', and 'right'.",
        },
      ],
      packages: [],
    },
  },
];

export default DropdownsInfo;
