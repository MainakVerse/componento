import DevCalendarUsage from "./(dev-calendar)/page";
import DevDatePickerUsage from "./(dev-date-picker)/page";

const DateInfo = [
  {
    title: "Dev Calendar",
    component: DevCalendarUsage,
    variants: {
      tsx: true,
      jsx: true,
    },
    details: {
      description:
        "A calendar component wrapper around react-calendar, providing customizable styling and integration with React hooks.",
      features: [
        "Integration with react-calendar library",
        "Customizable styling through CSS classes",
        "Support for default date selection",
        "React hook compatibility",
        "Responsive design",
      ],
      props: [
        {
          propName: "onChange",
          propExample: `(date) => setDate(date)`,
          propDetail: "Callback function triggered when a date is selected.",
        },
        {
          propName: "defaultValue",
          propExample: `new Date() as Date`,
          propDetail: "Initial date displayed in the calendar.",
        },
      ],
      doc_links: ["https://projects.wojtekmaj.pl/react-calendar/"],
      packages: [
        {
          pckg_name: "react-calendar",
          pckg_link: "https://github.com/wojtekmaj/react-calendar#readme",
        },
      ],
    },
  },
  {
    title: "Dev Date Picker",
    component: DevDatePickerUsage,
    variants: {
      tsx: true,
      jsx: true,
    },
    details: {
      description:
        "A customizable date picker component with both manual input and calendar selection options.",
      features: [
        "Manual date entry via input fields",
        "Calendar selection option",
        "Customizable icon display",
        "Disabled state support",
        "Integration with DevCalendar and DevPopover components",
      ],
      props: [
        {
          propName: "defaultValue",
          propExample: `new Date()`,
          propDetail: "Initial date displayed in the date picker.",
        },
        {
          propName: "onChange",
          propExample: `(date) => console.log(date)`,
          propDetail:
            "Callback function triggered when a date is selected or changed.",
        },
        {
          propName: "showIcon",
          propExample: `true`,
          propDetail: "Boolean flag to show/hide the calendar icon.",
        },
        {
          propName: "disabled",
          propExample: `false`,
          propDetail: "Disables the entire date picker component.",
        },
      ],
      helpers: [
        {
          cmp_name: "DevPopoverV1",
          cmp_link: "/popovers#dev-popover-v1",
        },
        {
          cmp_name: "DevCalendar",
          cmp_link: "/date#dev-calendar",
        },
      ],
      packages: [
        {
          pckg_name: "react-calendar",
          pckg_link: "https://github.com/wojtekmaj/react-calendar#readme",
        },
      ],
    },
  },
];
export default DateInfo;
