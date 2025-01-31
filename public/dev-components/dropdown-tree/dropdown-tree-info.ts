import DevDropdownTreeV1Usage from "./(dev-dropdown-tree-v1)/page";

const DropdownTreeInfo = [
  {
    title: "Dev Dropdown Tree V1",
    component: DevDropdownTreeV1Usage,
    variants: {
      jsx: true,
      tsx: true,
    },
    details: {
      description:
        "A dropdown tree component that displays a hierarchical structure of items, allowing users to expand and collapse folders and select files.",
      features: [
        "Hierarchical display of items with expandable/collapsible folders",
        "Custom icons for opened and closed folders, as well as files",
        "Custom icon for each nodes",
        "Callback function for handling selection changes",
      ],
      helpers: [],
      props: [
        {
          propName: "data",
          propExample:
            "[{ id: 'src', label: 'source-folder', icon: <FaReact />, children: [...] }]",
          propDetail:
            "(Required) An array representing the tree structure with nodes containing id, label, and optional children.",
        },
        {
          propName: "initialExpandedNodes",
          propExample: "[ 'src' ]",
          propDetail:
            "(Optional) An array of node IDs that should be initially expanded.",
        },
        {
          propName: "onChange",
          propExample: "(selectedId) => console.log(selectedId)",
          propDetail:
            "(Optional) Callback function triggered when a node is selected.",
        },
        {
          propName: "iconOnOpen",
          propExample: "<LuFolderOpen />",
          propDetail: "(Optional) Icon displayed when a folder is expanded.",
        },
        {
          propName: "iconOnClose",
          propExample: "<LuFolder />",
          propDetail: "(Optional) Icon displayed when a folder is collapsed.",
        },
        {
          propName: "childrenIcon",
          propExample: "<LuFile />",
          propDetail:
            "(Optional) Icon displayed for child nodes that are not folders.",
        },
      ],
      packages: [],
    },
  },
];

export default DropdownTreeInfo;
