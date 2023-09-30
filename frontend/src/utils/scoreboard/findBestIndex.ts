import compareDates from "./compareDates"

/**
 * Finds best index for a time in an array of time strings of format HH:MM:SS
 * 
 * @param {*} label Label to check
 * @param {*} labels Labels to check against
 * 
 * @returns 0 = at the start | -1 = at the end | -2 = already exists | any other number = best index
 */
export default function findBestIndex(label: string, labels: string[]) {
    for (let i = 0; i < labels.length; i++) {
        let result = compareDates(label, labels[i])
        if (!result) return -2      // entry already exists
        if (result == -1) continue  // entry could be later in the array
        if (result) return i        // entry fits best at the current index
    }
    return -1
}
