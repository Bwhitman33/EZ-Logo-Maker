const inquirer = require('inquirer');
const fs = require('fs');
const createLogo = require("./utils/createSVG");

const prompts = [
    {
        type: 'input',
        message: 'Please enter characters for your logo. Must be 3 characters or less',
        name: 'logoText',
    },
    {
        type: 'input',
        message: 'Please enter a color name/hex code for the color you would like the text in your logo to be',
        name: 'textColor',
    },
    {
        type: 'list',
        message: 'What type of shape would you like for your logo?',
        choices: ['Circle', 'Square', 'Triangle'],
        name: 'logoShape',
    },
    {
        type: 'input',
        message: 'Please enter a color name/hex code for the color you would like the shape in your logo to be',
        name: 'shapeColor',
    },
];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log(`Created ${fileName}`)
    );
} 

function startLogo() {
    inquirer
        .prompt(prompts)
        .then((response) => {
            console.log(response);

            const data = {
                shape: response.logoShape,
                shapecolor: response.shapeColor,
                text: response.logoText,
                textcolor: response.textColor,
            };
            writeToFile('logo-reqs.json', JSON.stringify(data, null, 1));
            const createSVG = createLogo(data);
            console.log(createSVG);
            writeToFile(`./examples/logo.svg`, createSVG);
        })

        .catch((err) => {
            console.error(err);
        });
}

startLogo();