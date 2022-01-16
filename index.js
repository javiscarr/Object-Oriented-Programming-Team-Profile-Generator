

//Profiles

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

//node module

const fs = require('fs');
const inquirer = require('inquirer');

//array of team

const teamArray = [];

//prompts begin

const addManager = () => {
    
    return inquirer.prompt ([

        {
            type: 'input',
            name: 'name',
            message: 'What is the team manager name?',
            validate: nameInput => {
                if (nameInput)  {
                    return true;
                } else {
                    console.log ("Please enter the manager's name!");
                    return false;
                }
            }
        },

        {
            type: 'input',
            name: 'id',
            message: "What  is the manager's Id?",
            validate: nameInput => {
                if (isNaN(nameInput)) {
                    console.log ("Please enter the manager's Id!")
                    return false;
                } else {
                    return true;
                }
            }
        },

        {
            type: 'input',
            name: 'email',
            message: "What is the manager's email?",
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log ("Please enter an email address!")
                    return false;
                }
            }
        },

        {
            type: 'input',
            name: 'officeNumber',
            message: "What is the manager's office number?",
            validate: nameInput => {
                if (isNaN(nameInput)) {
                    console.log ("Please enter the office number!")
                    return false;
                } else {
                    return true;
                }
            }
        }
    ])

    .then(managerInput => {
        const { name, id, email, officeNumber } = managerInput;

        teamArray.push(manager);
        console.log(manager);
    })
};