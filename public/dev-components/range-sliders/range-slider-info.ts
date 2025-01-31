import DevRangeSliderv1Usage from "./(dev-range-slider-v1)/page";
import DevRangeSliderV2Usage from "./(dev-range-slider-v2)/page";

const RangeSliderInfo = [
  {
    title: "Dev Range Slider V1",
    component: DevRangeSliderv1Usage,
    variants: {
      jsx: true,
      tsx: true,
    },
    details: {
      description:
        "A customizable range slider component for selecting a range of values between two endpoints.",
      features: [
        "Displays a horizontal slider with draggable handles",
        "Allows users to select a continuous range of values",
        "Provides visual feedback for the selected range",
        "Customizable appearance and behavior",
      ],
      props: [
        {
          propName: "min",
          propExample: `10`,
          propDetail: "The minimum value of the slider range.",
        },
        {
          propName: "max",
          propExample: `100`,
          propDetail: "The maximum value of the slider range.",
        },
        {
          propName: "step",
          propExample: `5`,
          propDetail: "The increment/decrement value when sliding. Defaults to 1.",
        },
        {
          propName: "defaultValue",
          propExample: `[50]`,
          propDetail: "The initial selected value(s). Can be a single number or an array of numbers.",
        },
        {
          propName: "onValueChange",
          propExample: `(e) => console.log(e)`,
          propDetail: "A callback function triggered when the selection changes. Receives the new selection as an argument.",
        },
      ],
      packages: [
        {
          pckg_name: "@radix-ui/react-slider",
          pckg_link: "https://github.com/radix-ui/react-slider",
        },
      ],
    },
  },
  {
    title: "Dev Range Slider V2",
    component: DevRangeSliderV2Usage,
    variants: {
      jsx: true,
      tsx: true,
    },
    details: {
      description:
        "A customizable modern range slider component for selecting a range of values between two endpoints.",
      features: [
        "Displays a horizontal slider with draggable handles",
        "Allows users to select a continuous range of values",
        "Provides visual feedback for the selected range",
        "Customizable appearance and behavior",
      ],
      props: [
        {
          propName: "min",
          propExample: `10`,
          propDetail: "The minimum value of the slider range.",
        },
        {
          propName: "max",
          propExample: `100`,
          propDetail: "The maximum value of the slider range.",
        },
        {
          propName: "step",
          propExample: `5`,
          propDetail: "The increment/decrement value when sliding. Defaults to 1.",
        },
        {
          propName: "defaultValue",
          propExample: `[50]`,
          propDetail: "The initial selected value(s). Can be a single number or an array of numbers.",
        },
        {
          propName: "onValueChange",
          propExample: `(e) => console.log(e)`,
          propDetail: "A callback function triggered when the selection changes. Receives the new selection as an argument.",
        },
      ],
      packages: [
        {
          pckg_name: "@radix-ui/react-slider",
          pckg_link: "https://github.com/radix-ui/react-slider",
        },
      ],
    },
  },
];

export default RangeSliderInfo;
