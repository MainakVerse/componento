import DevTabV1Usage from "./(dev-tab-v1)/page";
import DevTabV2Usage from "./(dev-tab-v2)/page";
import DevTabV3Usage from "./(dev-tab-v3)/page";

const TabsInfo = [
  {
    title: "Dev Tab V1",
    component: DevTabV1Usage,
    variants: {
      jsx: true,
      tsx: true,
    },
    details: {
      description:
        "A customizable tab component for navigating between multiple content sections.",
      features: [
        "Dynamic tabs creation based on provided data",
        "Smooth tab switching animation",
        "Responsive design with equal column widths",
        "Support for custom content in each tab",
      ],
      props: [
        {
          propName: "tabData",
          propExample: `[{
            title: "Tab 1",
            element: <p>This is Tab 1 content</p>
          }]`,
          propDetail: "An array of objects containing title and content for each tab. Each object should have a 'title' and 'element' property.",
        },
      ],
      packages: [],
    },
  },
  {
    title: "Dev Tab V2",
    component: DevTabV2Usage,
    variants: {
      jsx: true,
      tsx: true,
    },
    details: {
      description:
        "A customizable tab component for navigating between multiple content sections.",
      features: [
        "Dynamic tabs creation based on provided data",
        "Smooth tab switching animation",
        "Responsive design with equal column widths",
        "Support for custom content in each tab",
      ],
      props: [
        {
          propName: "tabData",
          propExample: `[{
            title: "Tab 1",
            element: <p>This is Tab 1 content</p>
          }]`,
          propDetail: "An array of objects containing title and content for each tab. Each object should have a 'title' and 'element' property.",
        },
      ],
      packages: [],
    },
  },
  {
    title: "Dev Tab V3",
    component: DevTabV3Usage,
    variants: {
      jsx: true,
      tsx: true,
    },
    details: {
      description:
        "A customizable tab component for navigating between multiple content sections.",
      features: [
        "Dynamic tabs creation based on provided data",
        "Smooth tab switching animation",
        "Responsive design with equal column widths",
        "Support for custom content in each tab",
      ],
      props: [
        {
          propName: "tabData",
          propExample: `[{
            title: "Tab 1",
            element: <p>This is Tab 1 content</p>
          }]`,
          propDetail: "An array of objects containing title and content for each tab. Each object should have a 'title' and 'element' property.",
        },
      ],
      packages: [],
    },
  },
];

export default TabsInfo;
