

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

const addEmployee = () => {
    console.log (' Adding employees to the team ');

    return inquirer.prompt ([

        {
            type: 'list',
            name: 'role',
            message: "Please select your employee's role",
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: "What is your employee's name?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("Please enter the employee's name!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the employee's Id number?",
            validate: nameInput => {
                if (isNaN(nameInput)) {
                    console.log ("Please enter the employee's Id number!")
                    return false;
                } else {
                    return true;
                }
            }
        },
            
        {

            type: 'input',
            name: 'email',
            message: "What is the employee's email address?",
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log ('Please enter an email!')
                    return false; 
                }
            }
        },

        //prompted only for engineer role
        {
            type: 'input',
            name: 'github',
            message: "What is the employee's github username?",
            when: (input) => input.role === "Engineer",
            validate: nameInput => {
                if (nameInput ) {
                    return true;
                } else {
                    console.log ("Please enter the employee's github username!")
                }
            }
        },

        //prompted only for intern role
        {
            type: 'input',
            name: 'school',
            message: "What is the name of the intern's school?",
            when: (input) => input.role === "Intern",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("Please enter the intern's school!")
                }
            }
        },

        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Would you like to add more team members?',
            default: false
        }

    ])

    .then(employeeInformation => {

        let { name, id, email, role, github, school, confirmAddEmployee } = employeeInformation;
        let employee;

        if (role === "Engineer") {
            employee = new Engineer (name, id, email, github);
            
            console.log(employee);
     
        } else if (role === "Intern") {
            employee === new Intern (name, id, email, school);

            console.log(employee);
        
        }
        
        teamArray.push(employee);

        if (confirmAddEmployee) {
            return addEmployee(teamArray);
        } else {
            return teamArray;
        }
    })
};