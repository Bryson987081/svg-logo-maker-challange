const inquirer = require('inquirer');
const {Circle, Square, Triangle} = require("./lib/shapes")



const questions = [
           {
            type: 'input',
            name: 'text',
            message: 'Please enter up to 3 characters.',
            default: 'SVG',
            validate: vlaue => vlaue.length <= 3 ? true: 'Please enter up to 3 characters'
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
}

module.exports = CLI;