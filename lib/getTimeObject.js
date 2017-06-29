
export function getTimeObject(timeString, period) {
    let timeObject = null;
    let cronIndex = timeString.indexOf('T');
    if (period === 'date') {
        let time = timeString.substring(cronIndex + 1, timeString.indexOf('+'));
        let date = timeString.substring(0, cronIndex);
        timeObject = Object.assign({}, getTime(time), getDate(date))
    } else if (period === 'cron') {
        let cronTime = timeString.substring(cronIndex + 1, timeString.indexOf('+'));
        timeObject = getTime(cronTime);
    }
    return timeObject;
}

function getTime(time) {
    let hour = time.substring(0, time.indexOf(':'));
    let minute = time.substring(time.indexOf(':') + 1, time.lastIndexOf(':'));
    let second = time.substring(time.lastIndexOf(':') + 1);
    return {
        hour: hour,
        minute: minute,
        second: second
    };
}

function getDate(date) {
    let year = date.substring(0, date.indexOf('-'));
    let month = date.substring(date.indexOf('-') + 1, date.lastIndexOf('-'));
    let day = date.substring(date.lastIndexOf('-') + 1);
    return {
        year: year,
        month: month,
        day: day
    };
}
