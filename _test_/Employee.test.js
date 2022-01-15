//Employee as a constructor

const { expect } = require('@jest/globals');
const Employee = require('../lib/Employee');

//employee as an object

test('I am creating an employee object', () => {
    const employee = new Employee('Javis', 118911, 'javis.carr@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));

});

//will retrieve the name from getName()

test('what is the employee name', () => {
    const employee = new Employee ('Javis', 118911, 'javis.carr@gmail.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

//will retrieve the id from getId()

test('what is the employee Id', () => {
    const employee = new Employee ('Javis', 118911, 'javis.carr@gmail.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});

//will retrieve the email from getEmail()

test('what is the employee email', () => {
    const employee = new Employee ('Javis', 118911, 'javis.carr@gmail.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

//will retrieve the role from getRole()

test('what is the employee role', () => {
    const employee = new Employee ('Javis', 118911, 'javis.carr@gmail.com');

    expect(employee.getRole()).toEqual("Employee");
});