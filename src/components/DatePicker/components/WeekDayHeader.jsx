import React from 'react';
import '../styles/DatePicker.css'
const WeekDayHeader = () => (
    <div className="week-day-header">
        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
            <span key={day}>{day}</span>
        ))}
    </div>
);

export default WeekDayHeader;
