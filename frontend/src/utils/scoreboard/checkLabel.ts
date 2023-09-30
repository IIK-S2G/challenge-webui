import findBestIndex from "./findBestIndex"

// data = scorearray, label = current label
export default function checkLabel(labels: string[], label: string, data: any[]) {
    let bestIndex = findBestIndex(label, labels)

    // add at start
    if (bestIndex == 0) {
        labels.unshift(label)
        data.unshift(undefined)
    }

    // add at end
    if (bestIndex == -1) {
        labels.push(label)
        data.push(data[data.length-1])
    }

    // add at bestIndex
    if (bestIndex > 0) {
        labels.splice(bestIndex, 0, label)
        data.splice(bestIndex, 0, data[bestIndex-1])
    }
}
