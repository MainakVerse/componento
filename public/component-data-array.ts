import AccordionsInfo from "./dev-components/accordions/accordions-info";
import AutocompletesInfo from "./dev-components/autocompletes/autocompletes-info";
import ButtonsInfo from "./dev-components/buttons/buttons-info";
import CarouselsInfo from "./dev-components/carousels/carousels-info";
import CheckBoxesInfo from "./dev-components/checkboxes/checkboxes-info";
import ClipboardsInfo from "./dev-components/clipboards/clipboards-info";
import ColorPickersInfo from "./dev-components/color-pickers/color-pickers-info";
import DateInfo from "./dev-components/date/date-info";
import DrawersInfo from "./dev-components/drawers/drawers-info";
import DropdownTreeInfo from "./dev-components/dropdown-tree/dropdown-tree-info";
import DropdownsInfo from "./dev-components/dropdowns/dropdowns-info";
import EmojiPickersInfo from "./dev-components/emoji-pickers/emoji-pickers-info";
import FormsInfo from "./dev-components/forms/forms-info";
import InputsInfo from "./dev-components/inputs/inputs-info";
import LayoutsInfo from "./dev-components/layouts/layouts-info";
import MiscellaneousInfo from "./dev-components/miscellaneous/miscellaneous-info";
import ModalsInfo from "./dev-components/modals/modals-info";
import MultiselectInfo from "./dev-components/multiselect/multiselect-info";
import NavigationInfo from "./dev-components/navigation/navigation-info";
import PaginationInfo from "./dev-components/pagination/pagination-info";
import PopoversInfo from "./dev-components/popovers/popovers-info";
import RadiosInfo from "./dev-components/radios/radios-info";
import RangeSlidersInfo from "./dev-components/range-sliders/range-slider-info";
import RichTextEditorInfo from "./dev-components/rich-text-editor/rich-text-editor-info";
import SelectsInfo from "./dev-components/selects/selects-info";
import TablesInfo from "./dev-components/tables/tables-info";
import TabsInfo from "./dev-components/tabs/tabs-info";
import ToastInfo from "./dev-components/toast/toast-info";
import TogglesInfo from "./dev-components/toggles/toggles-info";
import TooltipsInfo from "./dev-components/tooltips/tooltips-info";
import UploaderInfo from "./dev-components/uploader/uploader-info";
import VisualCodesInfo from "./dev-components/visual-codes/visual-codes-info";

const ComponentDataArray = [
  {
    name: "Buttons",
    image: "button.png",
    componentData: ButtonsInfo,
    description:
      "Buttons enable users to execute actions and make selections with a simple tap",
  },
  {
    name: "Modals",
    image: "modal.png",
    componentData: ModalsInfo,
    description:
      "A modal component that can be used to display content or prompts.",
  },
  {
    name: "Tooltips",
    image: "tooltip.png",
    componentData: TooltipsInfo,
    description:
      "A tooltip component that displays additional information or a helpful message when hovering over an element.",
  },
  {
    name: "Multiselect",
    image: "multiselect.png",
    componentData: MultiselectInfo,
    description:
      "A modal component that can be used to display content or prompts.",
  },
  {
    name: "Radios",
    image: "radio.png",
    componentData: RadiosInfo,
    description:
      "A radio button allows users to select a single option from a set of mutually exclusive choices.",
  },
  {
    name: "Range Sliders",
    image: "range-slider.png",
    componentData: RangeSlidersInfo,
    description:
      "A range slider component that allows users to select a value within a specific range.",
  },
  {
    name: "Popovers",
    image: "popover.png",
    componentData: PopoversInfo,
    description: "A Popover component that use to display content on trigger",
  },
  {
    name: "Selects",
    image: "select.png",
    componentData: SelectsInfo,
    description: "A select that allows to select an option from a list.",
  },
  {
    name: "Dropdowns",
    image: "dropdown.png",
    componentData: DropdownsInfo,
    description:
      "A dropdown component that can be used to display content on demand.",
  },
  {
    name: "Clipboards",
    image: "clipboard.png",
    componentData: ClipboardsInfo,
    description:
      "A Clipboard component that allows users to copy text to their clipboard on click",
  },
  {
    name: "Tabs",
    image: "tab.png",
    componentData: TabsInfo,
    description:
      " A tab component that allows users to navigate between different sections of content.",
  },
  {
    name: "Accordions",
    image: "accordion.png",
    componentData: AccordionsInfo,
    description:
      "An accordion is a UI component that allows users to show/hide content by clicking on headers.",
  },
  {
    name: "Inputs",
    image: "input.png",
    componentData: InputsInfo,
    description:
      "A Input component that allows to input values in different formats",
  },
  {
    name: "Toggles",
    image: "toggle.png",
    componentData: TogglesInfo,
    description:
      "A toggle component that allows users to turn an option on or off.",
  },
  {
    name: "Checkboxes",
    image: "checkbox.png",
    componentData: CheckBoxesInfo,
    description:
      "A checkbox is used for boolean selection, allowing users to indicate choices by toggling a checked state.",
  },
  {
    name: "Color Pickers",
    image: "color-picker.png",
    componentData: ColorPickersInfo,
    description: "A color picker that allows to select and choose colors",
  },
  {
    name: "Emoji Pickers",
    image: "emoji-picker.png",
    componentData: EmojiPickersInfo,
    description:
      "A Emoji Picker component that allows users to add emojis to their text",
  },
  {
    name: "Drawers",
    image: "drawer.png",
    componentData: DrawersInfo,
    description:
      "A Drawer is a panel that slides out from the edge of a screen and can be used to display information without leaving the current page",
  },
  {
    name: "Autocompletes",
    image: "autocomplete.png",
    componentData: AutocompletesInfo,
    description:
      "Autocomplete component is a text input field that displays a list of suggestions as the user types filtered in real-time.",
  },
  {
    name: "Rich Text Editor",
    image: "rich-txt-editor.png",
    componentData: RichTextEditorInfo,
    description:
      "A rich text editor component that allows users to write and edit text in different formats",
  },
  {
    name: "Carousels",
    image: "carousel.png",
    componentData: CarouselsInfo,
    description:
      "A Carousel component that allows users to scroll through a series of images or content.",
  },
  {
    name: "Visual Codes",
    image: "visual-code.png",
    componentData: VisualCodesInfo,
    description:
      "Visual codes, are essential tools for encoding information in a machine-readable format.",
  },
  {
    name: "Navigation",
    image: "navbar.png",
    componentData: NavigationInfo,
    description:
      "Navigation components are used to navigate between different pages or sections of a web application.",
  },
  {
    name: "Toast",
    image: "toast.png",
    componentData: ToastInfo,
    description:
      "Toast is a popup messages that are used to provide feedback to the users for their different actions",
  },
  {
    name: "Pagination",
    image: "pagination.png",
    componentData: PaginationInfo,
    description:
      "Pagination components allows users to navigate between multiple pages.",
  },
  {
    name: "Date",
    image: "date.png",
    componentData: DateInfo,
    description:
      "Date components are used to display and select dates in a calendar format.",
  },
  {
    name: "Tables",
    image: "table.png",
    componentData: TablesInfo,
    description:
      "Tables are used to display and organize data in a tabular format.",
  },
  {
    name: "Uploader",
    image: "uploader.png",
    componentData: UploaderInfo,
    description:
      "Uploader components are used to upload files and images to a web application.",
  },
  {
    name: "Layouts",
    image: "layout.png",
    componentData: LayoutsInfo,
    description:
      "Layout components are the higher-order component reusable sections of a website or app that are shared across multiple pages",
  },
  {
    name: "Forms",
    image: "form.png",
    componentData: FormsInfo,
    description:
      "Forms are used to collect information from users in a web application.",
  },
  {
    name: "Dropdown Tree",
    image: "tree-dropdown.png",
    componentData: DropdownTreeInfo,
    description:
      "A dropdown tree component that displays a hierarchical structure of items, allowing users to expand and collapse folders and select files.",
  },
  {
    name: "Miscellaneous",
    image: "miscellaneous.png",
    componentData: MiscellaneousInfo,
    description:
      "Miscellaneous components are assorted with useful components that can be used in any web application.",
  },
];

ComponentDataArray.sort((a, b) => a.name.localeCompare(b.name));

export default ComponentDataArray;
