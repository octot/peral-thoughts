import React from "react";
import { useDatePickerContext } from "../context/DatePickerContext";
import { formatDate } from "../utils/formatters";
import TextField from "@mui/material/TextField";
import "./DateInput.css";
const DateInput = () => {
  const { selectedDate, inputRef, setShowCalendar,currentYear,currentMonth } = useDatePickerContext();
  console.log("selectedDate ", selectedDate);
  const toggleCalendar = () => setShowCalendar((prev) => !prev);
  return (
    <div className="date-input-main">
      <div className="select-date">
        <label htmlFor="date-input">Date</label>
      </div>
      <div className="select-date-input">
        <TextField
          ref={inputRef}
          className="date-input"
          type="text"
          value={selectedDate ? formatDate(selectedDate,currentYear,currentMonth) : ""}
          placeholder="Select a date"
          readOnly
          onClick={toggleCalendar} 
        />
      </div>
    </div>
  );
};

export default DateInput;
