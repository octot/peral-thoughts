export const getDaysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();
export const isLeapYear = (year) => year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
