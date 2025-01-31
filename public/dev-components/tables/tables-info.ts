import DataTableUsage from "./(data-table)/page";
import DevTableUsage from "./(dev-table)/page";

const TablesInfo = [
  {
    title: "Dev Table",
    component: DevTableUsage,
    variants: {
      jsx: true,
      tsx: true,
    },
    details: {
      description:
        "A customizable table component for displaying tabular data with pagination and sticky columns.",
      features: [
        "Supports pagination to manage large datasets",
        "Sticky columns for better visibility of important data",
        "Handles dynamic data validation against predefined columns",
        "Items per page control for efficient rendering",
      ],
      helpers: [],
      props: [
        {
          propName: "data",
          propExample: "[{ id: 1, name: 'John', age: 30, ... }]",
          propDetail: "An array of objects representing the rows of the table.",
        },
        {
          propName: "columns",
          propExample:
            "[ 'id', 'name', 'age', ... ] //also accepts objects { head:'selectAll', value:'<Checkbox/>' } or { head:'id', width:'100px' }",
          propDetail:
            "An array of strings or objects defining the columns of the table.",
        },
        {
          propName: "stickyColumns",
          propExample: "[ 'id', 'name', 'occupation' ]",
          propDetail:
            "An array of column names that should remain visible while scrolling.",
        },
        {
          propName: "styleRows",
          propExample: "[ { position: 3, style: 'bg-gray-100' } ]",
          propDetail:
            "An array of styles to apply to specific rows based on their position.",
        },
      ],
      packages: [],
    },
  },
  {
    title: "Data Table",
    component: DataTableUsage,
    variants: {
      jsx: true,
      tsx: true,
    },
    details: {
      description:
        "A flexible data table component that supports pagination, searching, and column visibility management especially for database pagination.",
      features: [
        "Pagination to navigate through large datasets",
        "Dynamic searching by various fields",
        "Selectable rows with a 'select all' feature",
        "Customizable column visibility",
      ],
      helpers: [
        {
          cmp_name: "DevTable",
          cmp_link: "/tables#dev-table",
        },
        {
          cmp_name: "DevInputV1",
          cmp_link: "/inputs#dev-input-v1",
        },
        {
          cmp_name: "DevPopoverV1",
          cmp_link: "/popovers#dev-popover-v1",
        },
        {
          cmp_name: "DevPaginationV2",
          cmp_link: "/pagination#dev-pagination-v2",
        },
        {
          cmp_name: "DevCheckboxV2",
          cmp_link: "/checkboxes#dev-checkbox-v2",
        },
      ],
      props: [
        {
          propName: "allColumns",
          propExample: "[ 'select', 'id', 'name', ... ]",
          propDetail: "An array of all available column names.",
        },
        {
          propName: "data",
          propExample: "[{ id: 1, name: 'John', age: 30, ... }]",
          propDetail: "An array of objects representing the rows of the table.",
        },
        {
          propName: "itemsPerPage",
          propExample: "4",
          propDetail: "The number of items to display per page.",
        },
        {
          propName: "currentPage",
          propExample: "1",
          propDetail: "The current active page number.",
        },
        {
          propName: "onPageChange",
          propExample: "(page) => setPaginate(page)",
          propDetail: "Callback function triggered when the page changes.",
        },
        {
          propName: "totalData",
          propExample: "10",
          propDetail: "The total number of data items available.",
        },
        {
          propName: "selectedRows",
          propExample: "[ 1, 2, 3 ]",
          propDetail: "(Optional) An array of selected row IDs.",
        },
        {
          propName: "onRowSelect",
          propExample: "(row) => console.log(row)",
          propDetail:
            "(Optional) A callback function triggered when a row is clicked.",
        },
      ],
      packages: [],
    },
  },
];

export default TablesInfo;
