import { useState } from 'react';

const useDateSelection = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    const selectDate = (date) => setSelectedDate(date);
    return { selectedDate, selectDate };
};

export default useDateSelection;
