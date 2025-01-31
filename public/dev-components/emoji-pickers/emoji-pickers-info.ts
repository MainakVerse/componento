import DevEmojiPickerV1Usage from "./(dev-emoji-picker-v1)/page";
import DevEmojiPickerV2Usage from "./(dev-emoji-picker-v2)/page";

const EmojiPickersInfo = [
  {
    title: "Dev Emoji Picker V1",
    component: DevEmojiPickerV1Usage,
    variants: {
      jsx: true,
      tsx: true,
    },
    details: {
      description:
        "A customizable emoji picker component for selecting emojis visually.",
      features: [
        "Interactive emoji selection from a searchable list",
        "Customizable appearance through DevPopoverV1",
        "Support for various themes",
      ],
      props: [
        {
          propName: "onSelect",
          propExample: `(emoji) => console.log(emoji)`,
          propDetail:
            "A callback function triggered when an emoji is selected. It receives the selected emoji as an argument.",
        },
      ],
      packages: [
        {
          pckg_name: "--save emoji-mart @emoji-mart/data @emoji-mart/react",
          pckg_link: "https://www.npmjs.com/package/emoji-mart",
        }
      ],

      helpers: [
        {
          cmp_name: "DevPopoverV1",
          cmp_link: "/popovers#dev-popover-v1",
        },
      ],
      doc_links: ["https://github.com/missive/emoji-mart"],
    },
  },
  {
    title: "Dev Emoji Picker V2",
    component: DevEmojiPickerV2Usage,
    variants: {
      jsx: true,
      tsx: true,
    },
    details: {
      description:
        "An interactive emoji picker component that enables users to search and select emojis from a categorized list, enhancing communication in applications with a wide range of emojis.",
      features: [
        "Categorized emoji list for easy navigation",
        "Search functionality to quickly find specific emojis",
        "Interactive selection of emojis with visual feedback",
        "Customizable categories for organizing emojis",
      ],
      props: [
        {
          propName: "onSelect",
          propExample: `(emoji) => console.log(emoji)`,
          propDetail:
            "A callback function triggered when an emoji is selected. It receives the selected emoji as an argument.",
        },
      ],
      packages: [],
      doc_links: ["https://github.com/github/gemoji/blob/master/db/emoji.json"],
      helpers: [
        {
          cmp_name: "DevPopoverV1",
          cmp_link: "/popovers#dev-popover-v1",
        },
      ],
    },
  },
 
];

export default EmojiPickersInfo;
