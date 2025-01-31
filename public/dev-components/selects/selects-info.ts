import DevSelectV1Usage from "./(dev-select-v1)/page";
import DevSelectV2Usage from "./(dev-select-v2)/page";
import DevSelectV3Usage from "./(dev-select-v3)/page";

const SelectsInfo = [
  {
    title: "Dev Select V3",
    component: DevSelectV3Usage,
    variants: {
      jsx: true,
      tsx: true,
    },
    details: {
      description:
        "A customizable select component for choosing options from a dropdown list.",
      features: [
        "Supports multiple options with labels and values",
        "Customizable placeholder and label",
        "Integration with Radix UI for accessibility and usability",
        "Responsive design for various screen sizes",
      ],
      props: [
        {
          propName: "options",
          propExample: `[{ value: 'React JS', label: 'React JS' }, { value: 'Angular', label: 'Angular' }]`,
          propDetail:
            "An array of option objects, each containing a value and a label.",
        },
        {
          propName: "defaultValue",
          propExample: `"React JS"`,
          propDetail:
            "The default selected value when the component is rendered.",
        },
        {
          propName: "onValueChange",
          propExample: `(value) => console.log(value)`,
          propDetail:
            "Callback function triggered when the selected value changes.",
        },
        {
          propName: "placeholder",
          propExample: `"Select a Framework.."`,
          propDetail: "Placeholder text displayed when no option is selected.",
        },
        {
          propName: "labelName",
          propExample: `"Frameworks"`,
          propDetail: "Label displayed above the select dropdown.",
        },
        {
          propName: "contentProps",
          propExample: `{}`,
          propDetail: "Props to pass to the control content section.",
        },
      ],
      doc_links: ["https://www.radix-ui.com/primitives/docs/components/select"],
      packages: [
        {
          pckg_name: "@radix-ui/react-select",
          pckg_link:
            "https://www.radix-ui.com/docs/primitives/components/select",
        },
      ],
    },
  },
  {
    title: "Dev Select V1",
    component: DevSelectV1Usage,
    variants: {
      jsx: true,
      tsx: true,
    },
    details: {
      description:
        "A customizable single-select component for choosing options from a dropdown list.",
      features: [
        "Supports single selection from a list of options",
        "Customizable appearance using class names",
        "Integration with react-select for enhanced functionality",
        "Responsive design suitable for various screen sizes",
      ],
      helpers: [],
      props: [
        {
          propName: "options",
          propExample: `[{ value: 'React JS', label: 'React JS' }, { value: 'Angular', label: 'Angular' }]`,
          propDetail:
            "An array of option objects, each containing a value and a label.",
        },
        {
          propName: "defaultValue",
          propExample: `[{ value: 'Vue JS', label: 'Vue JS' }]`,
          propDetail:
            "The default selected option when the component is rendered.",
        },
        {
          propName: "onChange",
          propExample: `(selectedOption) => console.log(selectedOption)`,
          propDetail: "Callback function triggered when an option is selected.",
        },
      ],
      doc_links: ["https://react-select.com/props"],
      packages: [
        {
          pckg_name: "react-select",
          pckg_link: "https://react-select.com/home",
        },
      ],
    },
  },
  {
    title: "Dev Select V2",
    component: DevSelectV2Usage,
    variants: {
      jsx: true,
      tsx: true,
    },
    details: {
      description:
        "A simple and customizable select component for choosing options from a dropdown list.",
      features: [
        "Supports single selection from a list of options",
        "Customizable placeholder and label",
        "Built-in accessibility features with semantic HTML",
        "Responsive design for various screen sizes",
      ],
      helpers: [],
      props: [
        {
          propName: "options",
          propExample: `[{ value: 'React JS', label: 'React JS' }, { value: 'Angular', label: 'Angular' }]`,
          propDetail:
            "An array of option objects, each containing a value and a label.",
        },
        {
          propName: "defaultValue",
          propExample: `"Vue JS"`,
          propDetail:
            "The default selected value when the component is rendered.",
        },
        {
          propName: "onChange",
          propExample: `(e) => console.log(e.target.value)`,
          propDetail: "Callback function triggered when an option is selected.",
        },
        {
          propName: "placeholder",
          propExample: `"Select a Framework.."`,
          propDetail: "Placeholder text displayed when no option is selected.",
        },
        {
          propName: "labelName",
          propExample: `"Frameworks"`,
          propDetail: "Label displayed above the select dropdown.",
        },
      ],
      packages: [],
    },
  },
];

export default SelectsInfo;
