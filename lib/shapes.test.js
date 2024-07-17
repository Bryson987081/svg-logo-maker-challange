const {Circle, Square, Triangle} = require('./shapes')

describe('Shapes', () => {

    describe('Circle', () => {
        it('should redner a circle', () => {
            const color = ('red')
            const shape = new Circle();
            shape.setColor(color);
            expect(shape.render()).toEqual(`<circle cx="150" cy="100" r="80" fill="${color}"></circle>`)
        })
    })

    describe('Square', () => {
        it('should redner a square', () => {
            const color = ('red')
            const shape = new Square();
            shape.setColor(color);
            expect(shape.render()).toEqual(`<rect x="50" y="20" height="200" width="200" fill="${color}"></rect>`)
        })
    })

    describe('Triangle', () => {
        it('should redner a triangle', () => {
            const color = ('')
            const shape = new Triangle();
            shape.setColor(color);
            expect(shape.render()).toEqual(`<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${color}"></polygon>`)
        })
    })
})