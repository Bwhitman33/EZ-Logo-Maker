function createSVG(data = {}) {
    const { shape = '', shapecolor = '', text = '', textcolor = '' } = data;
    let svg = '';

    if (shape.toLowerCase() === 'square') {
        svg = `<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
               <rect fill="${shapecolor}" width="100%" height="100%" />
               <text x="50%" y="55%" text-anchor="middle" fill="${textcolor}" font-size="100%">${text}</text>
               </svg>`;
    } else if (shape.toLowerCase() === 'circle') {
        svg = `<svg width="300" height="300" xmlns="http://www.w3.org/2000/svg">
               <circle cx="150" cy="150" r="150" fill="${shapecolor}" />
               <text x="50%" y="55%" text-anchor="middle" fill="${textcolor}" font-size="150%">${text}</text>
               </svg>`;
    } else if (shape.toLowerCase() === 'triangle') {
        svg = `<svg width="225" height="225" xmlns="http://www.w3.org/2000/svg">
               <polygon points="50 15, 100 100, 0 100" fill="${shapecolor}" />
               <text x="50%" y="55%" text-anchor="middle" fill="${textcolor}" font-size="125%">${text}</text>
               </svg>`;
    }
    return svg;
}
module.exports = createSVG;