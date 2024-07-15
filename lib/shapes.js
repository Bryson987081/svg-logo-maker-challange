const CLI = require('./lib/cli.js');



const getShape = function(shape) {
    
    if(shape === 'circle')
        return `<circle cx="150" cy="100" r="50" fill="${color}" />`;
    console.log('square')
    if(shape === 'triangle')
        return `<polygon points="150,50 100,150 200,150" fill="${color}" />`;
    console.log('triangle')
    if(shape === 'square')
        return `<rect x="100" y="50" width="100" height="100" fill="${color}" />`;
    console.log('square')
}
getShape();

class Shape {
    constructor(color) {
        this.color = color;
    }
}
return Shape;