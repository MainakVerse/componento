import DevTooltipV1Usage from "./(dev-tooltip-v1)/page";
import DevTooltipV2Usage from "./(dev-tooltip-v2)/page";

const TooltipsInfo = [
  {
    title: "Dev Tooltip V1",
    component: DevTooltipV1Usage,
    variants: {
      jsx: true,
      tsx: true,
    },
    details: {
      description:
        "A customizable tooltip component that provides contextual information on hover, built using Radix UI.",
      features: [
        "Flexible positioning options (top, bottom, left, right)",
        "Smooth transitions and animations",
        "Integration with Radix UI for accessibility",
        "Customizable content and styles",
      ],
      helpers: [],
      props: [
        {
          propName: "children",
          propExample: "<h3>Hover on me</h3>",
          propDetail: "The content that triggers the tooltip on hover.",
        },
        {
          propName: "place",
          propExample: "'top'",
          propDetail:
            "Position of the tooltip relative to the trigger element.",
        },
        {
          propName: "tipData",
          propExample: "'I am tooltip'",
          propDetail: "The text displayed inside the tooltip.",
        },
        {
          propName: "rootProps",
          propExample: "{}",
          propDetail: "Additional properties for the Tooltip.Root component.",
        },
        {
          propName: "contentProps",
          propExample: "{}",
          propDetail:
            "Additional properties for the Tooltip.Content component.",
        },
      ],
      doc_links: [
        "https://www.radix-ui.com/primitives/docs/components/tooltip",
      ],
      packages: [
        {
          pckg_name: "@radix-ui/react-tooltip",
          pckg_link:
            "https://www.radix-ui.com/docs/primitives/components/tooltip",
        },
      ],
    },
  },
  {
    title: "Dev Tooltip V2",
    component: DevTooltipV2Usage,
    variants: {
      jsx: true,
      tsx: true,
    },
    details: {
      description:
        "A tooltip component that displays additional information when hovering over an element.",
      features: [
        "Customizable tooltip placement (top, bottom, left, right)",
        "Dynamic content through the 'tipData' prop",
        "Integration with react-tooltip library for enhanced functionality",
      ],
      helpers: [],
      props: [
        {
          propName: "children",
          propExample: "<h3 className='text-ACCENT'>Hover on me</h3>",
          propDetail: "The content to which the tooltip is attached.",
        },
        {
          propName: "place",
          propExample: "'top'",
          propDetail:
            "Defines the position of the tooltip relative to the child element. Defaults to 'top'.",
        },
        {
          propName: "tipData",
          propExample: "'I am tooltip'",
          propDetail: "The text displayed inside the tooltip.",
        },
      ],
      doc_links: ["https://react-tooltip.com/docs/getting-started"],
      packages: [
        {
          pckg_name: "react-tooltip",
          pckg_link: "https://react-tooltip.com/docs/getting-started",
        },
      ],
    },
  },
];

export default TooltipsInfo;
