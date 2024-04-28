
export function formatTimestamp(timestamp) {
    const date = new Date(timestamp);
    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
  
    const monthNames = [
      "January", "February", "March",
      "April", "May", "June", "July",
      "August", "September", "October",
      "November", "December"
    ];
  
    const suffix = getDaySuffix(day);
  
    const formattedDate = `${day}${suffix} ${monthNames[monthIndex]} ${year}, ${formatTime(hours, minutes, seconds)}`;
  
    return formattedDate;
  }

  function getDaySuffix(day) {
    if (day >= 11 && day <= 13) {
      return "th";
    }
    switch (day % 10) {
      case 1: return "st";
      case 2: return "nd";
      case 3: return "rd";
      default: return "th";
    }
  }
 
  function formatTime(hours, minutes, seconds) {
    const meridiem = hours >= 12 ? 'PM' : 'AM';
    const hour12 = hours % 12 || 12; 
    return `${hour12}:${padZero(minutes)}:${padZero(seconds)} ${meridiem}`;
  }
 
  function padZero(number) {
    return number < 10 ? '0' + number : number;
  }
  