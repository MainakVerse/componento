import DevFormUsage from "./(dev-form)/page";

const FormsInfo = [
  {
    title: "Dev Form",
    component: DevFormUsage,
    variants: {
      jsx: true,
      tsx: true,
    },
    details: {
      description:
        "A customizable form component that supports validation rules and handles submission of various input types including text, email, password, file uploads, and checkboxes.",
      features: [
        "Supports validation rules for required fields, patterns, and custom validation logic",
        "Handles various input types including text, email, password, file uploads, and checkboxes",
        "Displays error messages for invalid inputs",
        "Customizable styling through className prop",
      ],
      helpers: [],
      props: [
        {
          propName: "onSubmit",
          propExample: "(result, e) => console.log(result)",
          propDetail:
            "(Required) Callback function triggered on form submission with values and errors.",
        },
        {
          propName: "validationRules",
          propExample:
            "{ username: { required: 'Username is required', ... } }",
          propDetail:
            "(Optional) Object defining validation rules for each form field.",
        },
        {
          propName: "className",
          propExample: "'bg-LIGHT dark:bg-DARK'",
          propDetail: "(Optional) Additional CSS classes to apply to the form.",
        },
        {
          propName: "children",
          propExample: "<FormInput name='username' /> or <FormInput value='value for username' name='username'>{children}</FormInput>",
          propDetail:
            "(Required) The input components to be rendered within the form.",
        },
      ],
      packages: [],
    },
  },
];

export default FormsInfo;
