import DevRadioV1Usage from "./(dev-radio-v1)/page";

const RadioInfo = [
  {
    title: "Dev Radio V1",
    component: DevRadioV1Usage,
    variants: {
      jsx: true,
      tsx: true,
    },
    details: {
      description:
        "A customizable radio button component for selecting one option from a list.",
      features: [
        "Displays a set of radio buttons with labels",
        "Allows users to select only one option from the group",
        "Provides visual feedback for the selected option",
        "Customizable appearance and behavior",
      ],
      props: [
        {
          propName: "options",
          propExample: `[{"value":"reactjs","label":"React Js"},{"value":"angular","label":"Angular"}]`,
          propDetail: "An array of options to display in the radio group. Each option should have a 'value' and 'label'.",
        },
        {
          propName: "onValueChange",
          propExample: `(e) => console.log(e)`,
          propDetail: "A callback function triggered when the selection changes. Receives the new selection as an argument.",
        },
        {
          propName: "defaultValue",
          propExample: `{value: "angular"}`,
          propDetail: "An optional object specifying the initially selected value. This can be either an option object or undefined.",
        },
      ],
      packages: [
        {
          pckg_name: "@radix-ui/react-radio-group",
          pckg_link: "https://www.radix-ui.com/docs/primitives/react/radio-group",
        },
      ],
    },
  },
];

export default RadioInfo;