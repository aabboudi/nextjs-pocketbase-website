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

export { formatDate };