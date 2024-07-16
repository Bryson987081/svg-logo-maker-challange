const inquirer = require('inquirer');
const { Circle, Square, Triangle } = require('./lib/shapes')
const fs = require('fs');



const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Please enter up to 3 characters.',
        default: 'SVG',
        validate: vlaue => vlaue.length <= 3 ? true : 'Please enter up to 3 characters'
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Please enter a color or hexadecimal number for the text color',
        default: 'red'
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Please select a shape',
        choices: [
            'circle',
            'triangle',
            'square',
        ],
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Please enter a color or hexadecimal number for the shape color',
        default: 'blue'
    },
];

class Svg {
    constructor() {
        this.text = ''
        this.textColor = ''
        this.shape = ''
        this.shapeColor = ''
    }
    render() {
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200"`
    }
    setText(text, textColor) {
        this.text = `<text x="150" y="125" font-size="70" text-anchor="middle" fill="${textColor}">${text}`
    }
    setShape(shape, shapeColor) {
        this.shape = shape.render()
        shape.setColor(shapeColor)

    }
}

function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data, function (err) {
        if (err) {
            return console.log(err);
        } else {
            console.log("Success!")
        }
    })
}


async function init() {

    let data = "";
    let fileName = "logo.svg"

    const answers = await inquirer.prompt(questions);

    userText = answers.text;
    userTextColor = answers.textColor;
    userShape = answers.shape;
    userShapeColor = answers.shapeColor;

    if (userShape === "circle") {
        userShape = new Circle();
    } else if (userShape === "square") {
        userShape = new Square();
    } else if (userShape === "triangle") {
        userShape = new Triangle();
    };

    const svg = new Svg();
    svg.setText(userText, userTextColor);
    svg.setShape(userShape, userShapeColor);
    data = svg.render();

    writeToFile(fileName, data);
}

init()