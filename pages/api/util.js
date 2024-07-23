function formatDate(dateString) {
  const date = new Date(dateString);

  const optionsDate = {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  };

  const formattedDate = date.toLocaleDateString('fr-FR', optionsDate);

  const hours = date.getUTCHours();
  const minutes = date.getUTCMinutes();
  const formattedTime = minutes > 0 ? `${hours}h${minutes}` : `${hours}h`;

  return [formattedDate, formattedTime];
}

function formatDateRange(events) {
  try {
    // Ensure the events array is not empty
    if (!Array.isArray(events) || events.length === 0) {
      throw new Error("Events array is empty or not an array");
    }

    // Sort the events by time in ascending order
    events.sort((a, b) => {
      const aTime = new Date(a.time);
      const bTime = new Date(b.time);
      if (isNaN(aTime) || isNaN(bTime)) {
        throw new Error("Invalid date in event");
      }
      return aTime - bTime;
    });

    // Extract the first and last event times
    const firstEventTime = new Date(events[0].time);
    const lastEventTime = new Date(events[events.length - 1].time);

    // Ensure the dates are valid
    if (isNaN(firstEventTime) || isNaN(lastEventTime)) {
      throw new Error("Invalid event time");
    }

    // Format the dates
    const options = { day: '2-digit', month: 'short', year: 'numeric' };
    const firstDate = firstEventTime.toLocaleDateString('fr-FR', options);
    const lastDate = lastEventTime.toLocaleDateString('fr-FR', options);

    // Extract day and month from formatted dates
    const [firstDay, firstMonth, firstYear] = firstDate.split(' ');
    const [lastDay, lastMonth, lastYear] = lastDate.split(' ');

    // Check if the events span over the same month and year
    if (firstMonth === lastMonth && firstYear === lastYear) {
      return `${firstDay} - ${lastDay} ${firstMonth} ${firstYear}`;
    }

    // If not, format the string accordingly
    return `${firstDate} - ${lastDate}`;
  } catch (error) {
    return "Date à détérminer";
  }
}

export { formatDate, formatDateRange };
