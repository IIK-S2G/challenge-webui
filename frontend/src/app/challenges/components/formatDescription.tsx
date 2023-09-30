import Link from "next/link";

/**
 * Formats description based on content
 * @param {string} string String to cleanup
 * @returns JSX Element with Images and Links
 */
export default function FormatDescription({string}: {string: string}) {

    // Different regex patterns
    const diffReg = /(- \*\*Difficulty:\*\*)/;
    const flagReg = /(- \*\*Flag format:\*\*)/;
    const exflagReg = /(- \*\*Example flag:\*\*)/;
    const imageReg = /\(https?:\/\/[^\)]+\.(jpg|jpeg|png|gif)\)/g;
    const linkReg = /http?:\/\/[^\s]+/g;

    // Images
    const imageMatches = string.match(imageReg);
    const images = imageMatches ? imageMatches.map(link => link.slice(1, -1)) : [];

    // String
    const splitString = string.split(diffReg)
    const flag = splitString[2].split(flagReg)
    const exflag = flag[2].split(exflagReg)
    let description = splitString[0].trim()

    // Removing image links from string
    images.forEach(image => {
        const imageWithParentheses = `![](${image})`;
        description = description.replace(imageWithParentheses, '');
    });

    // Links
    const links = string.match(linkReg);
    
    // Removing links from string
    if (links) {
        links.forEach((link) => {
            description = description.replace(link, '');
        })
    }

    // Removing double spaces
    description = description.replace('  ', ' ')

    // Setting the fontsize based on the text length
    function fontSize() {
        let fontSizeString = ''
        if (description.length < 300) fontSizeString = 'text-lg'
        if (description.length > 450) fontSizeString = 'text-sm'
        return fontSizeString
    }

    // Returning formatted description
    return (
        <div className='mb-2'>
            <p className={`${fontSize()} break-words`}>{description}</p>
            <div className="mt-2"/>
            {images.map((image) => {
                return <img src={image} alt={image} />
            })}
            <div className="mt-2"/>
            {links && links.map((link) => {
                return <Link className="text-[#0096FF]" href={link}>{link}</Link>
            })}
            <div className='flex mt-2'>
                <p className={`${fontSize()} font-bold mr-2`}>Difficulty:</p>
                <p className={`${fontSize()}`}>{flag[0]}</p>
            </div>
            <div className='flex'>
                <p className={`${fontSize()} font-bold mr-2`}>Flag format:</p>
                <p className={`${fontSize()}`}>{exflag[0]}</p>
            </div>
            <div className='flex'>
                <p className={`${fontSize()} font-bold mr-2`}>Example flag:</p>
                <p className={`${fontSize()}`}>{exflag[2]}</p>
            </div>
        </div>
    )
}

export function FlagFormat(string: string) {
    const diffreg = /(- \*\*Difficulty:\*\*)/;
    const flagreg = /(- \*\*Flag format:\*\*)/;
    const exflagreg = /(- \*\*Example flag:\*\*)/;

    const splitString = string.split(diffreg)
    const flag = splitString[2].split(flagreg)
    const exflag = flag[2].split(exflagreg)
    
    return exflag[0]
}
