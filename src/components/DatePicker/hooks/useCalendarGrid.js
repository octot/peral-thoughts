import { useState, useEffect } from 'react';

const useCalendarGrid = (month, year) => {
    const [dates, setDates] = useState([]);

    useEffect(() => {
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        setDates([...Array(daysInMonth).keys()].map(i => i + 1));
    }, [month, year]);

    return dates;
};

export default useCalendarGrid;
