import { useEffect, useRef, createContext, useContext, useState } from "react";

const DatePickerContext = createContext();
export const useDatePickerContext = () => {
  return useContext(DatePickerContext);
};

export const DatePickerProvider = ({ children }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [showCalendar, setShowCalendar] = useState(false);
  const inputRef = useRef(null);
  const calendarRef = useRef(null);
  const selectDate = (date) => {
    setSelectedDate(date);
    setShowCalendar(false); 
  };
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        calendarRef.current &&
        !calendarRef.current.contains(event.target) &&
        inputRef.current &&
        !inputRef.current.contains(event.target)
      )
      {
        setShowCalendar(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);
  return (
    <DatePickerContext.Provider
      value={{
        selectedDate,
        selectDate,
        currentMonth,
        currentYear,
        showCalendar,
        setCurrentMonth,
        setCurrentYear,
        setShowCalendar,
        inputRef,
        calendarRef,
      }}
    >
      {children}
    </DatePickerContext.Provider>
  );
};
