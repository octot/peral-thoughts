import React, { useState } from "react";
import { useDatePickerContext } from "../context/DatePickerContext";
import "./MonthNavigation.css";
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const MonthNavigation = () => {
  const { currentMonth, currentYear, setCurrentMonth, setCurrentYear } =
    useDatePickerContext();
  const [showMonthDropdown, setShowMonthDropdown] = useState(false);
  const [showYearDropdown, setShowYearDropdown] = useState(false);
  const years = Array.from({ length: 201 }, (_, i) => 1900 + i); 
  const handleYearClick = (year) => {
    setCurrentYear(year);
    setShowYearDropdown(false); 
  };
  const handleMonthClick = (monthIndex) => {
    
    setCurrentMonth(monthIndex);
    setShowMonthDropdown(false); 
  };
  const getMonthList = () => {
    const before = monthNames.slice(0, currentMonth);
    const after = monthNames.slice(currentMonth + 1);
    return [...before, monthNames[currentMonth], ...after];
  };
  const getYearList = () => {
    const index = years.indexOf(currentYear);
    const before = years.slice(Math.max(0, index - 5), index);
    const after = years.slice(index + 1, index + 6);
    return [...before, currentYear, ...after];
  };
  return (
    <div className="month-navigation">
      <div className="dropdown">
        <div
          className="dropdown-header"
          onClick={() => setShowMonthDropdown(!showMonthDropdown)}
        >
          {monthNames[currentMonth]}
        </div>
        {showMonthDropdown && (
          <div className="dropdown-list">
            {getMonthList().map((month, index) => (
              <div
                key={month}
                className={`dropdown-item ${
                  index === currentMonth ? "selected" : ""
                }`}
                onClick={() => handleMonthClick(index)}
              >
                {month}
              </div>
            ))}
          </div>
        )}
      </div>
      {/* Year Dropdown */}
      <div className="dropdown">
        <div
          className="dropdown-header"
          onClick={() => setShowYearDropdown(!showYearDropdown)}
        >
          {currentYear}
        </div>
        {showYearDropdown && (
          <div className="dropdown-list">
            {getYearList().map((year) => (
              <div
                key={year}
                className={`dropdown-item ${
                  year === currentYear ? "selected" : ""
                }`}
                onClick={() => handleYearClick(year)}
              >
                {year}
              </div>
            ))}
            <div className="dropdown-item" style={{ textAlign: "center" }}>
              ...
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MonthNavigation;
