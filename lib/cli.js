const inquirer = require('inquirer');


class CLI {
  run() {
    return inquirer
        .prompt([
           {
            type: 'input',
            name: 'text',
            message: 'Please enter up to 3 characters.',
            default: 'SVG',
            validate: function(input) {
                if (input > 3) console.log('Error, enter only up to 3 characters')
                return input.length > 0 && input.length <= 3;
            }
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
        ])
  }
}

module.exports = CLI;