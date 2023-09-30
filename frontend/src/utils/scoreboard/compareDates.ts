export default function compareDates(time1: string, time2: string) {
    const date1 = new Date(`1970-01-01T${time1}Z`);
    const date2 = new Date(`1970-01-01T${time2}Z`);

    if (date1 < date2) {
        // date 1 is first
        return 1;
    } else if (date1 > date2) {
        // date 2 is first
        return -1;
    } else {
        // dates are equal
        return 0;
    }
}
