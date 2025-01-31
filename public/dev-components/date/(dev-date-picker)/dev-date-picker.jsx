"use client";
import { useState, useRef, ChangeEvent, useEffect } from "react";
import DevPopoverV1 from "../../popovers/(dev-popover-v1)/dev-popover-v1";
import DevCalendar from "../(dev-calendar)/dev-calendar";
import { IoCalendarOutline } from "react-icons/io5";


function DevDatePicker({
  defaultValue = new Date(),
  onChange,
  showIcon = true,
  disabled = false,
}) {
  const [date, setDate] = useState(defaultValue);
  const [inputDate, setInputDate] = useState({
    year: defaultValue.getFullYear().toString(),
    month: (defaultValue.getMonth() + 1).toString().padStart(2, "0"),
    day: defaultValue.getDate().toString().padStart(2, "0"),
  });

  const monthInputRef = useRef(null);
  const dayInputRef = useRef(null);

  const handleYearChange = (e) => {
    const value = e.target.value;
    if (value.length > 4) return;
    setInputDate((prev) => ({ ...prev, year: value }));
    updateDateFromInput({ ...inputDate, year: value });
    if (value.length === 4) {
      monthInputRef.current?.focus();
    }
  };

  const handleMonthChange = (e) => {
    const value = e.target.value;
    if (value.length > 2) return;
    setInputDate((prev) => ({ ...prev, month: value }));
    updateDateFromInput({ ...inputDate, month: value });
    if (value.length === 2) {
      dayInputRef.current?.focus();
    }
  };

  const handleDayChange = (e) => {
    const value = e.target.value;
    if (value.length > 2) return;
    setInputDate((prev) => ({ ...prev, day: value }));
    updateDateFromInput({ ...inputDate, day: value });
  };

  const updateDateFromInput = (newInputDate) => {
    const year = parseInt(newInputDate.year);
    const month = parseInt(newInputDate.month) - 1;
    const day = parseInt(newInputDate.day);

    if (!isNaN(year) && !isNaN(month) && !isNaN(day)) {
      const newDate = new Date(year, month, day);
      if (newDate.getTime() === newDate.getTime()) {
        setDate(newDate);
        onChange?.(newDate);
      }
    }
  };

  const handleCalendarChange = (newDate) => {
    setDate(newDate);
    setInputDate({
      year: newDate.getFullYear().toString(),
      month: (newDate.getMonth() + 1).toString().padStart(2, "0"),
      day: newDate.getDate().toString().padStart(2, "0"),
    });
    onChange?.(newDate);
  };

  useEffect(() => {
    setDate(defaultValue);
  }, [defaultValue]);
  return (
    <div className="flex items-center justify-center gap-2 space-y-2 bg-LIGHT dark:bg-DARK border border-ACCENT/20 p-2 rounded-lg max-w-[250px]">
      <div className="flex gap-2 *:rounded-md *:px-1 *:border *:border-ACCENT">
        <input
          type="number"
          value={inputDate.year}
          onChange={handleYearChange}
          placeholder="YYYY"
          className="w-[40%]"
          disabled={disabled}
        />
        <input
          type="number"
          ref={monthInputRef}
          value={inputDate.month}
          onChange={handleMonthChange}
          placeholder="MM"
          min="1"
          max="12"
          className="w-[30%]"
          disabled={disabled}
        />
        <input
          type="number"
          ref={dayInputRef}
          value={inputDate.day}
          onChange={handleDayChange}
          placeholder="DD"
          min="1"
          max="31"
          className="w-[30%]"
          disabled={disabled}
        />
      </div>

      {showIcon && (
        <DevPopoverV1
          button={
            <button
              className="p-1 -translate-y-1 active:scale-95 transition-all text-white bg-ACCENT rounded-lg text-2xl"
              disabled={disabled}
            >
              <IoCalendarOutline />
            </button>
          }
        >
          <div>
            <DevCalendar
              onChange={(e) => handleCalendarChange(e)}
              defaultValue={date}
            />
          </div>
        </DevPopoverV1>
      )}
    </div>
  );
}

export default DevDatePicker;
