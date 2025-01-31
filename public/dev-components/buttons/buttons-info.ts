import DevButtonV1Usage from "./(dev-button-v1)/page";

const ButtonsInfo = [
  {
    title: "Dev Button V1",
    variants: {
      jsx: true,
      tsx: true,
    },
    component: DevButtonV1Usage,
    details: {
      description:
        "A versatile button component designed for development purposes, supporting various styles, sizes, and functionalities.",
      features: [
        "Supports different types of buttons (solid, outline, light, flat, ghost)",
        "Can display ripples effect on interaction",
        "Adjustable size (small, medium, large)",
        "Customizable roundness (none, small, medium, large, full)",
        "Can act as a link with external or internal navigation",
        "Can include icons within the button",
      ],
      props: [
        {
          propName: "variant",
          propExample: "solid",
          propDetail:
            "Determines the button's appearance. Options include 'solid', 'outline', 'light', 'flat', 'ghost'.",
        },
        {
          propName: "size",
          propExample: "md",
          propDetail:
            "Specifies the button's size. Options include 'sm' for small, 'md' for medium, and 'lg' for large.",
        },
        {
          propName: "href",
          propExample: "/",
          propDetail:
            "Defines the URL for the button if it should act as a link.",
        },
        {
          propName: "rounded",
          propExample: "none",
          propDetail:
            "Controls the button's roundness. Options include 'none', 'sm', 'md', 'lg', 'full'.",
        },
        {
          propName: "asIcon",
          propExample: true,
          propDetail:
            "Indicates whether the button should display as an icon. Set to true to enable.",
        },
      ],
    },
  },
];

export default ButtonsInfo;
