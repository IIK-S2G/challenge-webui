import Link from 'next/link';

/**
 * Attachments for events
 * @param {string[]} files  Array of file links
 * @returns                 Attachment download buttons
 */
export default function Attachments({files}: {files: string[]}) {
    
    if (!files.length) return <div/>

    // downloads will work if you remove the last slash (todo), but there is some error causing it to be downloaded repeatedly
    const api = "https://s2gctf.ncr.ntnu.no/"

    function fileName(file: string) {
        const start = file.lastIndexOf("/")+1
        const end = file.indexOf("?")
        return file.slice(start, end)
    }

    function adjustWidthByFileNameLength(file: string) {
        const name = fileName(file)
        if (name.length > 8) {
            return 10*name.length
        }
    }

    return (
        <div className="grid grid-cols-3 bottom-12 w-full">
            {files.map((file) => {
                return(
                    <div key={file} style={{width: adjustWidthByFileNameLength(file)}} className={`grid items-center bg-[#482D81] h-[35px] rounded-lg px-2 mr-3 mb-2`}>
                        <Link key={file} className="text-center" href={`${api+file}`}>{fileName(file)}</Link>
                    </div>
                )
            })}
        </div>
    )
}
