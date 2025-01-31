import * as Accordion from "@radix-ui/react-accordion";
import { FiChevronDown } from "react-icons/fi";

type AccordionProps = {
  AccordData: { title: string; content: string }[];
} & React.ComponentProps<typeof Accordion.Root>;

// accordions css 
/*.accordContent {
  &[data-state="open"] {
    animation: slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1);
  }
  &[data-state="closed"] {
    animation: slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1);
  }
}
@keyframes slideDown {
  from {
    height: 0;
  }
  to {
    height: var(--radix-accordion-content-height);
  }
}

@keyframes slideUp {
  from {
    height: var(--radix-accordion-content-height);
  }
  to {
    height: 0;
  }
}
*/
const DevAccordion = ({ AccordData, ...props }: AccordionProps) => {
  return (
    <Accordion.Root
      {...props}
      className="bg-LIGHT w-full dark:bg-DARK rounded-xl border border-ACCENT/30 divide-y divide-ACCENT/50 overflow-hidden"
    >
      {AccordData.map((item, index) => (
        <Accordion.Item
          key={index}
          value={item.title}
          className="data-[state=open]:border-l-4 !border-x-ACCENT"
        >
          <Accordion.Trigger className="group focus:bg-ACCENT p-2 py-3 focus:!text-white !outline-0 text-sm flex w-full justify-between cursor-pointer data-[state=open]:!bg-transparent items-center font-semibold">
            {item.title}
            <FiChevronDown className="text-xl group-data-[state=open]:rotate-180 transition-all" />
          </Accordion.Trigger>
          <Accordion.Content className="text-sm accordContent overflow-hidden">
            <p className="px-2 py-3">{item.content}</p>
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
};
export default DevAccordion;
