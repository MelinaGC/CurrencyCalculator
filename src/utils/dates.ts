const formatDate = (date: string) => {
    const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZoneName: 'short',
        timeZone: 'UTC',
        hour12: false,
    };

    return new Date(date).toLocaleString('en-US', options);
};

export default formatDate;