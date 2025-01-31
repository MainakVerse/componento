"use client";
import React from "react";
import Calendar from "react-calendar";
import { PiCaretDoubleRightBold, PiCaretRightBold } from "react-icons/pi"; //for arrow icons

//Adding Calendar styles
/*
.react-calendar {
  @apply w-64 max-w-xs *:select-none overflow-hidden !text-sm rounded-lg border border-ACCENT/20 bg-LIGHT dark:bg-DARK;
}

.react-calendar__navigation {
  @apply p-3 bg-ACCENT flex items-center justify-between !text-white font-semibold gap-1;
}

.react-calendar__navigation button {
  @apply text-base;
}
.react-calendar__navigation__arrow {
  @apply !text-xl w-5 aspect-square;
}
.react-calendar__month-view__days {
  @apply !grid grid-cols-7 gap-0.5 p-1;
}
.react-calendar__year-view__months,
.react-calendar__decade-view__years,
.react-calendar__century-view__decades {
  @apply !grid grid-cols-3 gap-1 text-nowrap p-1;
}
.react-calendar__century-view__decades {
  @apply text-xs;
}
.react-calendar__month-view__weekdays {
  @apply grid grid-cols-7 text-center text-xs font-semibold bg-ACCENT !text-white p-2;
}
.react-calendar abbr[title] {
  @apply !no-underline;
}

.react-calendar__year-view .react-calendar__tile,
.react-calendar__decade-view .react-calendar__tile,
.react-calendar__century-view .react-calendar__tile {
  @apply rounded-md p-2 hover:bg-ACCENT hover:!text-white aspect-auto;
}

.react-calendar__tile {
  @apply rounded-full aspect-square hover:bg-ACCENT/30;
}

.react-calendar__tile--now {
  @apply text-ACCENT hover:!text-white !border border-ACCENT hover:!bg-ACCENT;
}

.react-calendar__tile--hasActive,
.react-calendar__tile:enabled:focus,
.react-calendar__tile--active {
  @apply bg-ACCENT text-white;
}

.react-calendar__month-view__days__day--neighboringMonth {
  @apply opacity-40;
}
*/

type CalendarProps = React.ComponentProps<typeof Calendar>;

const DevCalendar = ({ ...props }: CalendarProps) => {
  return (
    <Calendar
      nextLabel={<PiCaretRightBold />}
      next2Label={<PiCaretDoubleRightBold className="scale-75" />}
      prevLabel={<PiCaretRightBold className="rotate-180" />}
      prev2Label={<PiCaretDoubleRightBold className="rotate-180 scale-75" />}
      {...props}
    />
  );
};

export default DevCalendar;
