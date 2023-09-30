export default function randomColor(a?: number) {
    const r = Math.round(Math.random()*255)
    const g = Math.round(Math.random()*255)
    const b = Math.round(Math.random()*255)
    
    return {
        rgb: `rgb(${r}, ${g}, ${b})`, 
        rgba: `rgba(${r}, ${g}, ${b}, ${a ? a:0.5})`
    }
}
