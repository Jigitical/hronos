const oneDayInMilliseconds =  1000 * 60 * 60 * 24
const oneHourInMilliseconds = 1000 * 60 * 60
const oneMinuteInMilliseconds = 1000 * 60
const oneSecondInMilliseconds = 1000

export function nextDay(dateStr) {
    const date = new Date(dateStr)
    const nextDate = new Date(date.valueOf() + oneDayInMilliseconds)
    return nextDate.toString()
}

export function previousDay(dateStr) {
    const date = new Date(dateStr)
    const nextDate = new Date(date.valueOf() - oneDayInMilliseconds)
    return nextDate.toString()
}

export function getDifference(dateStr1, dateStr2) {
    const date1 = new Date(dateStr1)
    const date2 = new Date(dateStr2)
    let diffInMilliseconds = Math.abs(date1.valueOf() - date2.valueOf())

    const days = Math.floor(diffInMilliseconds/oneDayInMilliseconds)
    diffInMilliseconds = diffInMilliseconds - days * oneDayInMilliseconds
    const hours = Math.floor(diffInMilliseconds/oneHourInMilliseconds)
    diffInMilliseconds = diffInMilliseconds - hours * oneHourInMilliseconds
    const minutes = Math.floor(diffInMilliseconds/oneMinuteInMilliseconds)
    diffInMilliseconds = diffInMilliseconds - minutes * oneMinuteInMilliseconds
    const seconds = Math.floor(diffInMilliseconds/oneSecondInMilliseconds)

    return `${days}d ${hours}h ${minutes}m ${seconds}s`
}


