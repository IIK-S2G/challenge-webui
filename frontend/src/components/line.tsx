type LineProps = {
    color?: string,
    className?: string,
    height?: number,
    width?: number
}

export default function Line({color, className, height, width}: LineProps): JSX.Element {
    return <div className={`${className}`} style={{backgroundColor: color ? color: "#555", height: height, width: width}}/>
}
