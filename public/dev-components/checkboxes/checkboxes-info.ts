import DevCheckboxV1Usage from "./(dev-checkbox-v1)/page";
import DevCheckboxV2Usage from "./(dev-checkbox-v2)/page";

const CheckboxInfo = [
  {
    title: "Dev Checkbox V1",
    component: DevCheckboxV1Usage,
    variants: {
      jsx: true,
      tsx: true,
    },
    details: {
      description:
        "A customizable checkbox component built using Radix UI, designed for accessibility and visual appeal.",
      features: [
        "Interactive checkbox with customizable styles",
        "Supports checked and unchecked states",
        "Integration with Radix UI for accessibility",
        "Smooth animations for state changes",
      ],
      props: [
        {
          propName: "id",
          propExample: "'dev-checkbox'",
          propDetail: "Unique identifier for the checkbox element.",
        },
        {
          propName: "defaultChecked",
          propExample: "true",
          propDetail: "Indicates whether the checkbox is checked by default.",
        },
        {
          propName: "required",
          propExample: "",
          propDetail:
            "Indicates that the checkbox is required in a form submission.",
        },
        {
          propName: "onCheckedChange",
          propExample: "(e) => console.log(e)",
          propDetail:
            "Callback function triggered when the checkbox state changes.",
        },
      ],
      doc_links: [
        "https://www.radix-ui.com/primitives/docs/components/checkbox#checkbox",
      ],
      packages: [
        {
          pckg_name: "@radix-ui/react-checkbox",
          pckg_link:
            "https://www.radix-ui.com/docs/primitives/components/checkbox",
        },
      ],
    },
  },
  {
    title: "Dev Checkbox V2",
    component: DevCheckboxV2Usage,
    variants: {
      jsx: true,
      tsx: true,
    },
    details: {
      description:
        "An enhanced checkbox component that utilizes React Icons for visual feedback and improved styling.",
      features: [
        "Customizable checkbox with icon feedback",
        "Supports checked and unchecked states",
        "Accessible input with hidden native checkbox",
        "Smooth transitions and animations",
      ],
      props: [
        {
          propName: "id",
          propExample: "'dev-checkbox-v-two'",
          propDetail: "Unique identifier for the checkbox element.",
        },
        {
          propName: "defaultChecked",
          propExample: "true",
          propDetail: "Indicates whether the checkbox is checked by default.",
        },
        {
          propName: "required",
          propExample: "",
          propDetail:
            "Indicates that the checkbox is required in a form submission.",
        },
        {
          propName: "onChange",
          propExample: "(e) => console.log(e.target.checked)",
          propDetail:
            "Callback function triggered when the checkbox state changes.",
        },
      ],
      packages: [],
    },
  },
];

export default CheckboxInfo;
