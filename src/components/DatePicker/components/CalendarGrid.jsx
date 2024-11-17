import React from 'react';
import DateCell from './DateCell';
import { useDatePickerContext } from '../context/DatePickerContext';
import useCalendarGrid from '../hooks/useCalendarGrid';
import '../styles/DatePicker.css'
const CalendarGrid = () => {
    const { selectedDate, selectDate, currentMonth, currentYear } = useDatePickerContext();
    const dates = useCalendarGrid(currentMonth, currentYear);
    return (
        <div className="calendar-grid">
            {dates.map((date) => (
                <DateCell
                    key={date}
                    date={date}
                    isSelected={date === selectedDate}
                    onClick={() => selectDate(date)}
                />
            ))}
        </div>
    );
};

export default CalendarGrid;
