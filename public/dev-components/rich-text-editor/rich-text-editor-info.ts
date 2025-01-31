import DevRichTextEditorV1Usage from "./(dev-rich-text-editor-v1)/page";

const RichTextEditorInfo = [
  {
    title: "Dev Rich Text Editor V1",
    component: DevRichTextEditorV1Usage,
    variants: {
      jsx: true,
      tsx: true,
    },
    details: {
      description:
        "A customizable rich text editor component built on top of Quill Editor.",
      features: [
        "Supports various text formatting options",
        "Lazy loading for improved performance",
        "Customizable toolbar with multiple functionalities",
        "Real-time content updates with state management",
      ],
      helpers: [],
      props: [
        {
          propName: "defaultValue",
          propExample: "`<div><h1>Hello World</h1></div>`",
          propDetail: "Initial content to be displayed in the editor.",
        },
        {
          propName: "onChange",
          propExample: "(value) => console.log(value)",
          propDetail: "Callback function triggered when the content changes.",
        },
      ],
      packages: [
        {
          pckg_name: "react-quill",
          pckg_link: "https://github.com/zenoamaro/react-quill",
        },
      ],
    },
  },
];

export default RichTextEditorInfo;
