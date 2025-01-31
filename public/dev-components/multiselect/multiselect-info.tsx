import DevMultiselectV1Usage from "./(dev-multiselect-v1)/page";

const MultiselectInfo = [
  {
    title: "Dev Multiselect V1",
    component: DevMultiselectV1Usage,
    variants: {
      jsx: true,
      tsx: true,
    },
    details: {
      description:
        "A customizable multi-select component for selecting multiple options from a list.",
      features: [
        "Displays a multi-select with a list of options",
        "Allows users to select multiple options from the list",
        "Provides visual feedback for selected options",
        "Customizable appearance and behavior",
      ],
      props: [
        {
          propName: "options",
          propExample: `[ {value:'React JS', label:'React JS'},{value:'Angular', label:'Angular'},{value:'Vue JS', label:'Vue JS'},]`,
          propDetail:
            "An array of options to display in the dropdown. Each option should have a 'value' and 'label'.",
        },
        {
          propName: "onChange",
          propExample: `(e) => console.log(e)`,
          propDetail:
            "A callback function triggered when the selection changes. Receives the new selection as an argument.",
        },
        {
          propName: "defaultValue",
          propExample: `[{value: "vanilla", label: "Vanilla"}]`,
          propDetail:
            "An optional array of pre-selected values. These will be displayed initially in the selected area.",
        },
      ],
      packages: [
        {
          pckg_name: "react-select",
          pckg_link: "https://github.com/JedWatson/react-select",
        },
      ],
    },
  },
];

export default MultiselectInfo;
