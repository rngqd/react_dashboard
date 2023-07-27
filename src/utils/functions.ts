export function convertISODate (isoDate: string)  {
    const date = new Date(isoDate);
    const parsedDate = date.getDate() > 9 ?  date.getDate() : `0${date.getDate()}`
    const parsedMonth = date.getMonth() > 9 ?  date.getMonth()+ 1 : `0${date.getMonth()+1}`
    return `${parsedDate}.${parsedMonth}.${date.getFullYear()}`
}

export function compareDates(firstDate:{publishedAt: string}, secondDate:{publishedAt: string}) {
    const a = firstDate.publishedAt
    const b = secondDate.publishedAt
    if (a > b) {
        return -1;
    } else if (a < b) {
        return 1;
    } else {
        return 0;
    }
}
