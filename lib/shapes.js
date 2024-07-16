class Shape {
    constructor() {
        this.color = '';
    }
    setColor(shapeColor) {
        this.color = (shapeColor);
    }
}

class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}"></circle>`
    }
}

class Square extends Shape {
    render() {
        return `<rect x="50" y="20" height="200" width="200" fill="${this.color}"></rect>`
    }
}

class Triangle extends Shape {
    render() {
        return `<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${this.color}"></polygon>`
    }
}

module.exports= {Circle, Square, Triangle}
