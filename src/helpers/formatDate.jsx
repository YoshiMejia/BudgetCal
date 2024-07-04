const formatDate = (date) => {
  console.log('line 2: ', date);
  let dateStr = date;

  // Parse the date string into a Date object
  let originalDate = new Date(dateStr);
  // Subtract one day
  //   originalDate.setDate(originalDate.getDate() - 1);

  // Get month, day, and year
  let month = originalDate.toLocaleString('default', { month: 'long' }); // Get full month name
  let day = originalDate.getDate(); // Get day of the month
  let year = originalDate.getFullYear(); // Get full year

  // Function to get ordinal suffix for day (e.g., 1st, 2nd, 3rd)
  function getOrdinalSuffix(day) {
    if (day === 1 || day === 21 || day === 31) {
      return day + 'st';
    } else if (day === 2 || day === 22) {
      return day + 'nd';
    } else if (day === 3 || day === 23) {
      return day + 'rd';
    } else {
      return day + 'th';
    }
  }

  // Format the adjusted date string
  let adjustedDateStr = `${month} ${getOrdinalSuffix(day)}, ${year}`;

  return adjustedDateStr;
};

export default formatDate;
