import chroma from 'chroma-js';

export function getContrastYIQ(hexcolor){
    const color = chroma(hexColor);
    // Determina si el color es claro o oscuro
    return color.luminance() > 0.5 ? 'black' : 'white';
}
