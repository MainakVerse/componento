"use client";
import React, { useState } from "react";
import DevCalendar from "./dev-calendar";

const DevCalendarUsage = () => {
  const [date, setDate] = useState(new Date());
  return <DevCalendar  onChange={(e) => setDate(e as Date)} defaultValue={date} />;
};

export default DevCalendarUsage;
