import checkLabel from "./checkLabel"

export default function checkEntries(labels: string[], entries: DatasetEntryProps) {
    labels.forEach(label => checkLabel(entries.labels, label, entries.data))
}
