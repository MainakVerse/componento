import DevPaginationV1Usage from "./(dev-pagination-v1)/page";
import DevPaginationV2Usage from "./(dev-pagination-v2)/page";

const PaginationInfo = [
  {
    title: "Dev Pagination V1",
    component: DevPaginationV1Usage,
    variants: {
      jsx: true,
      tsx: true,
    },
    details: {
      description:
        "A customizable pagination component with support for infinite scrolling and responsive design.",
      features: [
        "Supports infinite paging",
        "Customizable number of visible pages",
        "Responsive design",
        "Accessibility-focused",
        "Integration with React hooks",
      ],
      props: [
        {
          propName: "totalPages",
          propExample: `20`,
          propDetail: "Total number of pages in the pagination.",
        },
        {
          propName: "initialPage",
          propExample: `1`,
          propDetail: "Initial page number when the component mounts.",
        },
        {
          propName: "onPageChange",
          propExample: "(page) => console.log(`Page changed to ${page}`)",
          propDetail: "Callback function triggered when a page is selected.",
        },
        {
          propName: "maxVisiblePages",
          propExample: `7`,
          propDetail: "Maximum number of pages to display at once.",
        },
      ],
      packages: [],
    },
  },
  {
    title: "Dev Pagination V2",
    component: DevPaginationV2Usage,
    variants: {
      jsx: true,
      tsx: true,
    },
    details: {
      description:
        "A simplified pagination component focused on current and total page numbers.",
      features: [
        "Displays current and total page numbers",
        "Basic navigation buttons",
        "Responsive design",
        "Accessibility-focused",
        "Integration with React hooks",
      ],
      props: [
        {
          propName: "totalItems",
          propExample: `20`,
          propDetail: "Total number of pages in the pagination.",
        },
        {
          propName: "currentPage",
          propExample: `1`,
          propDetail: "Initial page number when the component mounts.",
        },
        {
          propName: "itemsPerPage",
          propExample: `3`,
          propDetail: "Number of items to display per page.",
        },
        {
          propName: "onPageChange",
          propExample: "(page) => console.log(`Page changed to ${page}`)",
          propDetail: "Callback function triggered when a page is selected.",
        },
      ],
      packages: [],
    },
  },
];

export default PaginationInfo;
