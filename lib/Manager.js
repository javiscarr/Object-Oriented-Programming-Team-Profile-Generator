//employee constructor is imported
const Employee = require('./Employee');

//Manager constructor extended from employee constructor

class Manager extends Employee {

    constructor (name, id, email, officeNumber) {

        //employee constructor referred
        super (name, id, email);

        this.officeNumber = officeNumber;
    }

    //employee role is overridden

    getRole() {

        return "Manager";
    }
}

//will export

module.exports = Manager;