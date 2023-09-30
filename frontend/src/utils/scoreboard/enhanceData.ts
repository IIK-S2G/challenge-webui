import checkEntries from "./checkEntries"

export default function EnhanceData(labels: string[], entries: DatasetEntryProps[]) {
    entries.forEach(entry => checkEntries(labels, entry))
    return {labels, datasets: entries}
}
