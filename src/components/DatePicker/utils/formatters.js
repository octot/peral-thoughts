export const formatDate = (date, currentYear, currentMonth) => {
  if (!date) return "";
  const options = { day: "2-digit", month: "2-digit", year: "numeric" };
  return new Date(currentYear, currentMonth, date).toLocaleDateString(
    "en-GB",
    options
  );
};
