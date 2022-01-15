//constructor for employee

class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email
    }

    //input name returned
    
    getName(){
        return this.name;

    }

    //input id returned

    getId(){
        return this.id;
    }

    //input email returned

    getEmail(){
        return this.email;
    }

    //type of employee returned

    getRole(){
        return 'Employee';
    }
};

//will be exported

module.exports = Employee;