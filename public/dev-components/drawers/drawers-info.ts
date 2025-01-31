import DevDrawerV1Usage from "./(dev-drawer-v1)/page";
import DevDrawerV2Usage from "./(dev-drawer-v2)/page";

const DrawersInfo = [
  {
    title: "Dev Drawer V1",
    component: DevDrawerV1Usage,
    variants: {
      tsx: true,
      jsx: true,
    },
    details: {
      description:
        "A React component that implements a modern drawer (sidebar) with customizable positioning, offering a sleek and responsive interface for accessing secondary navigation or content.",
      features: [
        "Customizable drawer position (left, right, top, bottom)",
        "Smooth opening and closing animations",
        "Programmatic control over drawer visibility",
        "Support for custom open button and content",
      ],
      props: [
        {
          propName: "openBtn",
          propExample: "<button>Open Drawer</button>",
          propDetail:
            "A React node representing the button or element that triggers the drawer to open.",
        },
        {
          propName: "children",
          propExample: "ReactNode",
          propDetail: "The content to be displayed inside the drawer.",
        },
        {
          propName: "position",
          propExample: "'right'",
          propDetail:
            "Specifies the position of the drawer relative to the viewport. Can be 'left', 'right', 'top', or 'bottom'. Defaults to 'right'.",
        },
        {
          propName: "closeIcon",
          propExample: "true",
          propDetail:
            "Whether to display a close icon in the top right corner of the drawer. Defaults to false.",
        },
        {
          propName: "title",
          propExample: "string",
          propDetail: "The title of the drawer. Defaults to 'Drawer'.",
        },
      ],
      packages: [
        {
          pckg_name: "react-modern-drawer",
          pckg_link: "https://www.npmjs.com/package/react-modern-drawer",
          pckg_detail:
            "A simple and flexible drawer component for React applications.",
        },
      ],
      doc_links: ["https://vaul.emilkowal.ski/api#root"],
    },
  },
  {
    title: "Dev Drawer V2",
    component: DevDrawerV2Usage,
    variants: {
      jsx: true,
      tsx: true,
    },
    details: {
      description:
        "A customizable drawer component that slides in from any direction to display content.",
      features: [
        "Flexible positioning (left, right, top, bottom)",
        "Supports overlay for better focus on drawer content",
        "Customizable trigger button for opening the drawer",
        "Responsive design with adjustable dimensions",
      ],
      helpers: [],
      props: [
        {
          propName: "children",
          propExample: "<div>Drawer Content</div>",
          propDetail: "The content to be displayed inside the drawer.",
        },
        {
          propName: "title",
          propExample: "'Drawer Title'",
          propDetail: "An optional title for the drawer.",
        },
        {
          propName: "openBtn",
          propExample: "<button>Open</button>",
          propDetail: "The button that triggers the drawer when clicked.",
        },
        {
          propName: "position",
          propExample: "'bottom'",
          propDetail:
            "The position from which the drawer will slide in. Options: 'left', 'right', 'top', 'bottom'.",
        },
        {
          propName: "accommodate",
          propExample: "true",
          propDetail:
            "If true, adjusts the minimum height of the drawer for top and bottom positions.",
        },
        {
          propName: "isOverlay",
          propExample: "true",
          propDetail:
            "If true, an overlay will be displayed behind the drawer.",
        },
      ],
      doc_links: ["https://vaul.emilkowal.ski/api"],
      packages: [
        {
          pckg_name: "vaul",
          pckg_link: "https://vaul.dev/",
        },
      ],
    },
  },
];
export default DrawersInfo;
