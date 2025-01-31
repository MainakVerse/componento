import DevClipboardV1Usage from "./(dev-clipboard-v1)/page";

const ClipboardsInfo = [
  {
    title: "Dev Clipboard V1",
    component: DevClipboardV1Usage,
    variants: {
      tsx: true,
      jsx: true,
    },
    details: {
      description:
        "A user-friendly clipboard utility component that allows users to copy text to their clipboard with visual feedback.",
      features: [
        "Interactive button to copy text to clipboard",
        "Visual indication when text is successfully copied",
        "Uses browser's Clipboard API for copying text",
        "Reset timer for copied state after a short duration",
      ],
      props: [
        {
          propName: "textClip",
          propExample: '"https://dev-components.vercel.app/"',
          propDetail: "The text to be copied to the clipboard.",
        },
        {
          propName: "setCopied",
          propExample: "Function",
          propDetail:
            "An optional callback function to update the copied status internally. Resets after 1 second.",
        },
        {
          propName: "className",
          propExample:
            '"flex items-center justify-center gap-1 bg-ACCENT p-2 px-3 rounded-lg text-white active:scale-95 active:bg-ACCENT/50"',
          propDetail: "Custom CSS classes to style the button.",
        },
        {
          propName: "children",
          propExample: "ReactNode",
          propDetail: "Children components to customize the button's content.",
        },
      ],
      packages: [
        {
          pckg_name: "react-icons",
          pckg_link: "https://react-icons.github.io/react-icons/",
        },
      ],
    },
  },
];

export default ClipboardsInfo;
