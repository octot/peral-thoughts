import React from 'react';

const DateCell = ({ date, isSelected, onClick }) => (
    <div
        className={`date-cell ${isSelected ? 'selected' : ''}`}
        onClick={onClick}
    >
        {date}
    </div>
);

export default DateCell;
