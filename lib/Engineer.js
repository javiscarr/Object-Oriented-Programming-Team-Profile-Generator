//employee constructor is imported
const Employee = require("./Employee");


class Engineer extends Employee {
    constructor (name, id, email, github) {

        //employee constructor is applied
       super (name, id, email);

        this.github = github;
    }

    //github is returned from what is typed
    
    getGithub(){
        return this.github;

    }
   

    //employee role is overwritten 

    getRole(){
        return 'Engineer';
    }
};

//will be exported

module.exports = Engineer;