import DevToggleV1Usage from "./(dev-toggle-v1)/page";
import DevToggleV2Usage from "./(dev-toggle-v2)/page";

const TogglesInfo = [
  {
    title: "Dev Toggle V1",
    component: DevToggleV1Usage,
    variants: {
      jsx: true,
      tsx: true,
    },
    details: {
      description:
        "A customizable toggle switch component for binary state selection.",
      features: [
        "Supports checked and unchecked states",
        "Customizable label for better accessibility",
        "Smooth transition animations",
        "Responsive design with adjustable size",
      ],
      props: [
        {
          propName: "labelName",
          propExample: "'Dev Switch'",
          propDetail: "An optional label for the toggle switch.",
        },
        {
          propName: "checked",
          propExample: "true",
          propDetail: "Controls the checked state of the toggle switch.",
        },
        {
          propName: "onChange",
          propExample: "(e) => console.log(e.target.checked)",
          propDetail:
            "Callback function triggered when the toggle state changes.",
        },
      ],
      packages: [],
    },
  },
  {
    title: "Dev Toggle V2",
    component: DevToggleV2Usage,
    variants: {
      jsx: true,
      tsx: true,
    },
    details: {
      description:
        "A customizable toggle switch component for toggling between two states.",
      features: [
        "Visual toggle between two distinct states",
        "Customizable size and styling",
        "Optional label support",
        "Callback function for state changes",
      ],
      props: [
        {
          propName: "labelName",
          propExample: "'Dev Switch'",
          propDetail: "An optional label for the toggle switch.",
        },
        {
          propName: "checked",
          propExample: "true",
          propDetail: "Controls the checked state of the toggle switch.",
        },
        {
          propName: "onChange",
          propExample: "(e) => console.log(e.target.checked)",
          propDetail:
            "Callback function triggered when the toggle state changes.",
        },
      ],
      packages: [],
    },
  },
];

export default TogglesInfo;
