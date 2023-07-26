export function convertISODate (isoDate: string)  {
    const date = new Date(isoDate);
    const parsedDate = date.getDate() > 9 ?  date.getDate() : `0${date.getDate()}`
    const parsedMonth = date.getMonth() > 9 ?  date.getMonth()+ 1 : `0${date.getMonth()+1}`
    return `${parsedDate}.${parsedMonth}.${date.getFullYear()}`
}
