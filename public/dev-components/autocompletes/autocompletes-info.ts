import DevAutocompleteV1Usage from "./(dev-autocomplete-v1)/page";

const AutocompletesInfo = [
  {
    title: "Dev Autocomplete V1",
    component: DevAutocompleteV1Usage,
    variants: {
      jsx: true,
      tsx: true,
    },
    details: {
      description:
        "An autocomplete component that allows users to select from a list of items as they type.",
      features: [
        "Dynamic filtering of suggestions based on user input",
        "Integration with Downshift for managing state and accessibility",
        "Customizable appearance using popovers for displaying suggestions",
        "Supports keyboard navigation and selection",
      ],
      helpers: [
        {
          cmp_name: "DevPopoverV1",
          cmp_link: "/popovers#dev-popover-v1",
        },
      ],
      props: [
        {
          propName: "items",
          propExample: `[{ value: 'Apple' }, { value: 'Banana' }]`,
          propDetail:
            "An array of items to be used as suggestions in the autocomplete.",
        },
        {
          propName: "defaultItem",
          propExample: `{ value: 'Apple' }`,
          propDetail:
            "The item that should be pre-selected when the component is rendered.",
        },
        {
          propName: "onChange",
          propExample: `(e) => alert(e?.value)`,
          propDetail: "Callback function triggered when an item is selected.",
        },
        {
          propName: "labelName",
          propExample: `"Select a fruit"`,
          propDetail: "Label displayed above the input field.",
        },
      ],
      doc_links:["https://www.downshift-js.com/downshift#props-used-in-examples"],
      packages: [
        {
          pckg_name: "downshift",
          pckg_link: "https://www.downshift-js.com/",
        },
      ],
    },
  },
];

export default AutocompletesInfo;
