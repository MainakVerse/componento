import DevAccordionV1Usage from "./(dev-accordion-v1)/page";
import DevAccordionV2Usage from "./(dev-accordion-v2)/page";

const AccordionsInfo = [
  {
    title: "Dev Accordion V1",
    component: DevAccordionV1Usage,
    variants: {
      jsx: true,
      tsx: true,
    },
    details: {
      description:
        "An accordion component that allows users to expand and collapse sections of content.",
      features: [
        "Supports single or multiple open sections based on configuration",
        "Smooth animations for opening and closing sections",
        "Integration with Radix UI for accessibility and usability",
        "Customizable appearance with icons and styles",
      ],
      helpers: [],
      props: [
        {
          propName: "AccordData",
          propExample: `[{ title: 'Accordion #1', content: 'Content for accordion #1' }]`,
          propDetail:
            "An array of objects, each containing a title and content for the accordion items.",
        },
      ],
      doc_links: [
        "https://www.radix-ui.com/primitives/docs/components/accordion",
      ],
      packages: [
        {
          pckg_name: "@radix-ui/react-accordion",
          pckg_link:
            "https://www.radix-ui.com/primitives/docs/components/accordion",
        },
      ],
    },
  },
  {
    title: "Dev Accordion V2",
    component: DevAccordionV2Usage,
    variants: {
      jsx: true,
      tsx: true,
    },
    details: {
      description:
        "A customizable accordion component for expanding and collapsing content sections.",
      features: [
        "Multiple expandable/collapsible sections",
        "Animated expansion and collapse",
        "Customizable styling and layout",
        "Support for dynamic content",
      ],
      props: [
        {
          propName: "AccordData",
          propExample: `[{
            title: "Accordion #1",
            content: "Lorem ipsum dolor sit amet..."
          }]`,
          propDetail:
            "An array of objects containing title and content for each accordion section.",
        },
      ],
      packages: [],
    },
  },
];

export default AccordionsInfo;
