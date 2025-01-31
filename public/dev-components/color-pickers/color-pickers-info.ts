import DevColorPickerV2Usage from "./(dev-color-picker-v2)/page";
import DevColorPickerV1Usage from "./(dev-color-picker-v1)/page";
import DevColorPickerV3Usage from "./(dev-color-picker-v3)/page";

const ColorPickersInfo = [
  {
    title: "Dev Color Picker V1",
    component: DevColorPickerV1Usage,
    variants: {
      jsx: true,
      tsx: true,
    },
    details: {
      description:
        "A customizable color picker component for selecting colors visually.",
      features: [
        "Interactive color selection via hex-alpha color picker",
        "Support for hex color format",
        "Integration with react-colorful library",
        "Customizable appearance through css",
      ],
      helpers: [
        {
          cmp_name: "DevPopoverV1",
          cmp_link: "/popovers#dev-popover-v1",
        },
      ],
      props: [
        {
          propName: "color",
          propExample: "'#E26F1D'",
          propDetail:
            "The current selected color. Defaults to '#E26F1D' if not specified.",
        },
        {
          propName: "setColor",
          propExample: "(newColor) => console.log(newColor)",
          propDetail: "A callback function to update the selected color.",
        },
      ],
      packages: [
        {
          pckg_name: "react-colorful",
          pckg_link: "https://www.npmjs.com/package/react-colorful",
        },
      ],
    },
  },
  {
    "title": "Dev Color Picker V2",
    "component":DevColorPickerV2Usage,
    "variants": {
      "jsx": true,
      "tsx": true
    },
    "details": {
      "description": "An enhanced color picker component that allows users to select colors using a sketch interface.",
      "features": [
        "Interactive color selection via Sketch color picker",
        "Support for both RGB and HEX color formats",
        "Integration with @uiw/react-color library",
        "Customizable appearance through styled-components"
      ],
      "helpers": [
        {
          "cmp_name": "DevPopoverV1",
          "cmp_link": "/popovers#dev-popover-v1"
        }
      ],
      "props": [
        {
          "propName": "color",
          "propExample": `{"hexa": "#E26F1D"}`,
          "propDetail": "The current selected color, which can be in RGB or HEX format. Defaults to {'hexa': '#E26F1D'} if not specified."
        },
        {
          "propName": "setColor",
          "propExample": `(color) => console.log(color)`,
          "propDetail": "A callback function to update the selected color."
        }
      ],
      "packages": [
        {
          "pckg_name": "@uiw/react-color",
          "pckg_link": "https://www.npmjs.com/package/@uiw/react-color"
        },
      ]
    }
  }
 
];

export default ColorPickersInfo;
