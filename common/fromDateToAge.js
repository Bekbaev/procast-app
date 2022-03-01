export const fromDateToAge = (date) => {
    if (!date){
        return 'Не указан'
    }
    const dateStr = JSON.parse(date);
    let age = ((new Date().getTime() - new Date(dateStr)) / (24 * 3600 * 365.25 * 1000)) | 0;

    return age;
}
