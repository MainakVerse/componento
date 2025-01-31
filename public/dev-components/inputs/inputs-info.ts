import DevInputV1Usage from "./(dev-input-v1)/page";
import DevInputV2Usage from "./(dev-input-v2)/page";
import DevPasswordInputUsage from "./(dev-password-input)/page";

const InputsInfo = [
  {
    title: "Dev Input V1",
    component: DevInputV1Usage,
    variants: {
      tsx: true,
      jsx: true,
    },
    details: {
      description:
        "A versatile input component designed for development purposes, supporting various styles and configurations such as variants, sizes, roundness, and more.",
      features: [
        "Supports different input variants (base, bordered, faded, underline)",
        "Adjustable input sizes (small, medium, large)",
        "Customizable roundness (none, small, medium, large, full)",
        "Ripple effect option",
        "Reverse icon position option",
      ],
      props: [
        {
          propName: "variant",
          propExample: "base",
          propDetail:
            "Determines the input's visual variant. Options include 'base', 'bordered', 'faded', and 'underline'. Default is 'base'.",
        },
        {
          propName: "size",
          propExample: "md",
          propDetail:
            "Specifies the input's size. Options are 'sm', 'md', and 'lg'. Default is 'md'.",
        },
        {
          propName: "icon",
          propExample: "<FiSearch />",
          propDetail:
            "Allows specifying an icon to be displayed inside the input field. The icon should be a React element.",
        },
        {
          propName: "rounded",
          propExample: "full",
          propDetail:
            "Controls the roundness of the input corners. Options are 'none', 'sm', 'md', 'lg', and 'full'. Default is 'full'.",
        },
        {
          propName: "reverseIcon",
          propExample: false,
          propDetail:
            "Reverses the position of the icon within the input field. Default is false.",
        },
        {
          propName: "children",
          propExample: "Text content",
          propDetail:
            "Any child elements or text that should appear inside the input field.",
        },
      ],
      packages: [],
    },
  },
  {
    title: "Dev Input V2",
    component: DevInputV2Usage,
    variants: {
      tsx: true,
      jsx: true,
    },
    details: {
      description:
        "A unique input component featuring a dynamic laser effect when hovered over (Inspired by Aceternity UI).",
      features: [
        "Dynamic laser effect on hover",
        "Fully customizable appearance through props",
        "Supports different sizes and roundness options",
        "Interactive mouse movement to adjust laser position",
      ],
      props: [
        {
          propName: "size",
          propExample: `"sm" | "md" | "lg"`,
          propDetail:
            "Determines the height of the input field. Adjusts the overall size of the component.",
        },
        {
          propName: "rounded",
          propExample: `"none" | "sm" | "md" | "full"`,
          propDetail:
            "Controls the roundness of the input field. Can be fully customized for various designs.",
        },
        {
          propName: "icon",
          propExample: `<LuSearch className="text-accent text-xl" />`,
          propDetail:
            "Allows customization of the icon displayed before the input field. Adjusts the position of the icon.",
        },
        {
          propName: "laserActiveOnClick",
          propExample: "true | false",
          propDetail:
            "Allows customization and appearance of the laser effect when the input field is clicked. Defaults to true.",
        },
        {
          propName: "reverseIcon",
          propExample: "true | false",
          propDetail:
            "Reverses the position of the icon within the input field. Defaults to false.",
        }
      ],
      packages: [],
    },
  },
  {
    title: "Dev Password Input",
    component: DevPasswordInputUsage,
    variants: {
      jsx: true,
      tsx: true,
    },
    details: {
      description:
        "A password input field with built-in password strength checker and toggle eye functionality.",
      features: [
        "Password strength analysis",
        "Toggle eye icon for visibility",
        "Integration with DevInputV1 component",
        "Support all html input props",
      ],
      props: [
        {
          propName: "onChange",
          propExample: `(e) => console.log(e.target.value)`,
          propDetail: "Callback function triggered when the password changes.",
        },
        {
          propName: "placeholder",
          propExample: `"Enter Password"`,
          propDetail: "Text shown inside the input field when it's empty.",
        },
        {
          propName: "defaultValue and other props for input field",
          propExample: `"hello@world"`,
          propDetail: "Pre-fills the input field with a default value.",
        },
        {
          propName: "error",
          propExample: `"Password must be at least 8 characters long"`,
          propDetail: "Error message shown on specified conditions.",
        }
      ],
      helpers: [
        {
          cmp_name: "DevInputV1",
          cmp_link: "/inputs#dev-input-v1",
        },
      ],
      packages: [],
    },
  },
];

export default InputsInfo;
