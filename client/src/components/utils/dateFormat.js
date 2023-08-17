export function formatDate(date) {
  // Convert MongoDB Date object to JavaScript Date object
  const jsDate = new Date(date);

  // Get the month (0-indexed) from the JavaScript Date object
  const month = jsDate.getMonth() + 1; // Adding 1 because months are 0-indexed

  // Get the day of the month from the JavaScript Date object
  const dayOfMonth = jsDate.getDate();

  // Get the year from the JavaScript Date object
  const year = jsDate.getFullYear();

  // Pad single-digit values with leading zeros
  const formattedMonth = month < 10 ? `0${month}` : month;
  const formattedDay = dayOfMonth < 10 ? `0${dayOfMonth}` : dayOfMonth;

  // Create the formatted timestamp in "MM-DD-YYYY" format
  const formattedTimeStamp = `${formattedMonth}-${formattedDay}-${year}`;

  return formattedTimeStamp;
}




