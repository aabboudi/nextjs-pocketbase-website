function formatDate(dateString: string): [string, string] {
  // Create date and options objects
  const date = new Date(dateString);
  const optionsDate: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  };

  // Format date and time
  const formattedDate = date.toLocaleDateString('fr-FR', optionsDate);
  const hours = date.getUTCHours();
  const minutes = date.getUTCMinutes();
  const formattedTime = minutes > 0 ? `${hours}h${minutes}` : `${hours}h`;
  return [formattedDate, formattedTime];
}

interface EventTime {
  time: string;
}

function formatDateRange(events: EventTime[]): string {
  try {
    if (!Array.isArray(events) || events.length === 0) {
      return "Date à déterminer";
    }

    events.sort((a, b) => {
      const aTime = new Date(a.time);
      const bTime = new Date(b.time);
      if (isNaN(aTime.getTime()) || isNaN(bTime.getTime())) {
        throw new Error("Invalid date in event");
      }
      return aTime.getTime() - bTime.getTime();
    });

    // Get first and last valid event timestamps
    const firstEventTime = new Date(events[0].time);
    const lastEventTime = new Date(events[events.length - 1].time);
    if (isNaN(firstEventTime.getTime()) || isNaN(lastEventTime.getTime())) {
      throw new Error("Invalid event time");
    }

    // Format the dates
    const options: Intl.DateTimeFormatOptions = { day: '2-digit', month: 'short', year: 'numeric' };
    const firstDate = firstEventTime.toLocaleDateString('fr-FR', options);
    const lastDate = lastEventTime.toLocaleDateString('fr-FR', options);

    const [firstDay, firstMonth, firstYear] = firstDate.split(' ');
    const [lastDay, lastMonth, lastYear] = lastDate.split(' ');

    // Format string conditionally
    if (firstMonth === lastMonth && firstYear === lastYear) {
      return `${firstDay} - ${lastDay} ${firstMonth} ${firstYear}`;
    }

    return `${firstDate} - ${lastDate}`;
  } catch (error: any) {
    return "Date à détérminer";
  }
}

export { formatDate, formatDateRange };
