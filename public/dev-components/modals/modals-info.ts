import DevModalV1Usage from "./(dev-modal-v1)/page";

const ModalsInfo = [
  {
    title: "Dev Modal V1",
    component: DevModalV1Usage,
    variants: {
      tsx: true,
      jsx: true,
    },
    details: {
      description:
        "A modal component that can be used to display content or prompts.",
      features: [
        "Centrally positioned modal window",
        "Customizable trigger button",
        "Optional close icon",
        "Supports dark mode",
        "Responsive design",
      ],
      props: [
        {
          propName: "children",
          propExample: "<div>Modal Content</div>",
          propDetail: "The content to be displayed inside the modal.",
        },
        {
          propName: "modalBtn",
          propExample: "<button>Open Modal</button>",
          propDetail:
            "A React element representing the button or component that opens the modal.",
        },
        {
          propName: "defaultOpen",
          propExample: "true",
          propDetail:
            "A boolean value indicating whether the modal should be open by default.",
        },
        {
          propName: "contentProps",
          propExample: "{ }",
          propDetail:
            "Props passed to the Modal Content component section",
        },
        {
          propName: "modalTitle",
          propExample: '"Modal Title"',
          propDetail: "The title to be displayed in the modal header.",
        },
        {
          propName: "closeIcon",
          propExample: "true",
          propDetail: "Whether to display the close icon in the modal header.",
        },
        {
          propName: "customCloseIcon",
          propExample: "<button>Close</button>",
          propDetail:
            "Whether to use a custom close icon or any react node instead of the default close icon.",
        },
      ],
      doc_links: ["https://www.radix-ui.com/primitives/docs/components/dialog"],
      packages: [
        {
          pckg_name: "@radix-ui/react-dialog",
          pckg_link:
            "https://www.radix-ui.com/primitives/docs/components/dialog",
        },
      ],
    },
  },
];

export default ModalsInfo;
