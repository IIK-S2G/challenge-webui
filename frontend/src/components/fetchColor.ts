import { dark, light } from '../styles/themes'

type Theme = 0 | 1;
type Identifier = 'background' | 'brighter' | 'contrast' | 'textcolor' | 'textcontrast';

type FetchColorProps = {
    theme: Theme,
    identifier: Identifier
}

export default function FetchColor({theme, identifier}: FetchColorProps): string {
    switch (theme) {
        case 1: 
            switch (identifier) {
                case 'background':      return light.background
                case 'brighter':        return light.brighter
                case 'contrast':        return light.contrast
                case 'textcolor':       return light.textcolor
                case 'textcontrast':    return light.textcontrast
                default:                return 'red'                 
            }

        default:
            switch (identifier) {
                case 'background':      return dark.background
                case 'brighter':        return dark.brighter
                case 'contrast':        return dark.contrast
                case 'textcolor':       return dark.textcolor
                case 'textcontrast':    return dark.textcontrast
                default:                return 'red'                 
            }
    }
}
