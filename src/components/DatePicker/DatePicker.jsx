import React from "react";
import DateInput from "./components/DateInput";
import MonthNavigation from "./components/MonthNavigation";
import WeekDayHeader from "./components/WeekDayHeader";
import CalendarGrid from "./components/CalendarGrid";
import {
  DatePickerProvider,
  useDatePickerContext,
} from "./context/DatePickerContext";
import "./styles/DatePicker.css";
const DatePickerContainer = () => {
  const { showCalendar, calendarRef } = useDatePickerContext();
  return (
    <div className="date-picker-container">
      <div className="date-picker">
        <DateInput />
      </div>
      <div ref={calendarRef}>
        {showCalendar && (
          <div className="calendar-main">
            <MonthNavigation />
            <WeekDayHeader />
            <CalendarGrid />
          </div>
        )}
      </div>
    </div>
  );
};

const DatePicker = () => (
  <DatePickerProvider>
    <DatePickerContainer />
  </DatePickerProvider>
);

export default DatePicker;
