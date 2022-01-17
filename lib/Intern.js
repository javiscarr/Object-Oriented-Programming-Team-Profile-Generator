//Employee constructor imported


const Employee = require('./Employee');

//intern constructor is extended from the employee constructor

class Intern extends Employee {
    constructor (name, id, email, school) {

        //employee constructor is referenced
        super (name, id, email);

        this.school = school;
    }

     //school is returned from what is typed
    
     getSchool() {
        return this.school;

    }

    //employee role is overwritten 

    getRole() {

         return "Intern";
    }
}

//Will be exported

module.exports = Intern;