import ReactMovableUsage from "./(react-movable)/page";
import ReactResizablePanelsUsage from "./(react-resizable-panels)/page";
import ResponsiveGridLayoutUsage from "./(responsive-grid-layout)/page";
import DevChipInputUsage from "./(dev-chip-input)/page";
import ReactShareUsage from "./(react-share)/page";

const MiscellaneousInfo = [
  {
    title: "React Resizable Panels",
    component: ReactResizablePanelsUsage,
    variants: {
      tsx: true,
      jsx: true,
    },
    details: {
      description:
        "A React component that implements movable panels, allowing users to adjust the position of individual panels within a group. Ideal for creating customizable interfaces or dashboards.",
      features: [
        "Resizable panels with adjustable minimum and maximum sizes",
        "Supports both horizontal and vertical panel arrangements",
        "Interactive resize handles for intuitive resizing",
        "Styling and layout control via CSS classes and inline styles",
      ],
      props: [],
      packages: [
        {
          pckg_name: "react-resizable-panels",
          pckg_link: "https://www.npmjs.com/package/react-resizable-panels",
        },
      ],

      doc_links: ["https://react-resizable-panels.vercel.app/"],
    },
  },
  {
    title: "React Movable",
    component: ReactMovableUsage,
    variants: {
      jsx: true,
      tsx: true,
    },
    details: {
      description:
        "A React component that provides drag-and-drop functionality for lists, enabling users to reorder items within a list. Useful for creating interactive and dynamic interfaces.",
      features: [
        "Drag-and-drop reordering of list items",
        "Locking of list orientation for vertical arrangement only",
        "Customizable rendering of list items",
        "Integration with external state management for real-time updates",
      ],
      props: [
        {
          propName: "onChange",
          propDetail:
            "Callback function that is triggered when the list is reordered",
          propExample: `(e) => console.log(e)`,
        },
        {
          propName: "items",
          propDetail: "An array of items to be rendered in the list",
          propExample: `["Item 1", "Item 2", "Item 3", "Item4"]`,
        },
      ],
      packages: [
        {
          pckg_name: "react-movable",
          pckg_link: "https://github.com/tajo/react-movable",
        },
      ],
      doc_links: ["https://github.com/tajo/react-movable"],
    },
  },
  {
    title: "Responsive Grid Layout",
    component: ResponsiveGridLayoutUsage,
    variants: {
      jsx: true,
      tsx: true,
    },
    details: {
      description:
        "A React component that creates a responsive grid layout, allowing for dynamic adjustment of grid items based on screen size. Ideal for creating responsive designs with draggable and resizable elements.",
      features: [
        "Responsive design that adjusts to different screen sizes",
        "Draggable and resizable grid items",
        "Customizable breakpoints and column configurations",
        "Support for multiple layouts at different screen widths",
      ],
      props: [
        {
          propName: "layouts",
          propExample:
            '{"lg": [{"w": 1, "h": 1, "x": 0, "y": 0, "i": "1"},...]}',
          propDetail:
            "An object defining the grid layouts for different screen widths. Each key represents a breakpoint, and the value is an array of grid items.",
        },
        {
          propName: "rowHeight",
          propExample: "60",
          propDetail: "The height of each row in pixels.",
        },
        {
          propName: "compactType",
          propExample: '"horizontal"',
          propDetail:
            'Defines the compact mode type. Can be either "horizontal" or "vertical".',
        },
        {
          propName: "breakpoints",
          propExample: '{"lg": 1200, "md": 3, "sm": 2}',
          propDetail:
            "An object specifying the breakpoints for different screen widths.",
        },
        {
          propName: "cols",
          propExample: '{"lg": 12, "md": 3, "sm": 2}',
          propDetail:
            "An object defining the number of columns for different screen widths.",
        },
        {
          propName: "maxRows",
          propExample: "5",
          propDetail: "The maximum number of rows allowed in the grid.",
        },
        {
          propName: "onLayoutChange",
          propExample: "Function",
          propDetail:
            "A callback function called when the layout changes, receiving the updated layout as its argument.",
        },
      ],
      packages: [
        {
          pckg_name: "react-grid-layout",
          pckg_link: "https://github.com/react-grid-layout/react-grid-layout",
        },
        {
          pckg_name: "@types/react-grid-layout",
          pckg_link: "https://www.npmjs.com/package/@types/react-grid-layout",
        },
      ],
      doc_links: [
        "https://react-grid-layout.github.io/react-grid-layout/examples/0-showcase.html",
      ],
    },
  },
  {
    title: "Dev Chip Input",
    component: DevChipInputUsage,
    variants: {
      jsx: true,
      tsx: true,
    },
    details: {
      description:
        "A React component for managing tags with an input field to add new tags and a display of existing tags with delete functionality.",
      features: [
        "Add tags with Enter key or by typing",
        "Delete tags individually",
        "Input validation for duplicate tags and tag length",
      ],
      props: [
        {
          propName: "defaultValues",
          propExample: `[
            { key: 1, name: "Dev components" },
            { key: 2, name: "Next js" },
            { key: 3, name: "React js" },
            { key: 4, name: "Tailwind css" },
            { key: 5, name: "Node js" },
            { key: 6, name: "Express js" },
            { key: 7, name: "MongoDB" },
          ]`,
          propDetail: "An array of default tags.",
        },
        {
          propName: "onChange",
          propExample: "(tags) => console.log(tags)",
          propDetail: "Callback function called when the tags change.",
        },
        {
          propName: "tagLength",
          propExample: "20",
          propDetail: "The maximum length of each tag.",
        },
        {
          propName: "textLength",
          propExample: "20",
          propDetail: "The maximum length of the input field.",
        },
        {
          propName: "trigger",
          propExample: '"Enter"',
          propDetail: "The key that triggers the input field.",
        },
      ],
      packages: [],
      doc_links: [],
    },
  },
  {
    title: "React Share",
    component: ReactShareUsage,
    variants: {
      jsx: true,
      tsx: true,
    },
    details: {
      description:
        "A React component that provides social media sharing buttons, allowing users to easily share a URL across various platforms. Includes a clipboard feature for copying the URL.",
      features: [
        "Social media sharing buttons for major platforms",
        "URL input field with clipboard functionality",
        "Customizable button size and rounding",
        "Support for multiple sharing services",
      ],
      props: [
        {
          propName: "size",
          propExample: "37",
          propDetail: "The size of the share icons. Default is 25.",
        },
        {
          propName: "isRounded",
          propExample: "true",
          propDetail:
            "Determines whether the share icons should be rounded. Default is true.",
        },
        {
          propName: "defaultUrl",
          propExample: `${process.env.NEXT_PUBLIC_BASE_URL}`,
          propDetail: "The URL to be shared.",
        },
        {
          propName: "onChange",
          propExample: "(url) => console.log(url)",
          propDetail: "Callback function called when the URL changes.",
        },
      ],
      packages: [
        {
          pckg_name: "react-share",
          pckg_link: "https://github.com/nygardk/react-share",
          pckg_detail:
            "A React component library for adding social media share buttons to your website.",
        },
      ],
      helpers: [
        {
          cmp_name: "DevClipboardV1",
          cmp_link: "/clipboards#dev-clipboard-v1",
        },
      ],

      doc_links: ["https://github.com/nygardk/react-share"],
    },
  },
];

export default MiscellaneousInfo;
