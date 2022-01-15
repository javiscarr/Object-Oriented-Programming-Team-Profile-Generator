//constructor for Manager

const Manager = require ('../lib/Manager');

//Manager object

test('creating a manager object', () => {
    const manager = new Manager('Javis', 118911, 'javis.carr@gmail.com', '7');
    

    expect(manager.officeNumber).toEqual(expect.any(Number));
});

//will retrieve the role from getRole()

test('what is the employee role', () => {
    const manager = new Manager ('Javis', 118911, 'javis.carr@gmail.com');

    expect(manager.getRole()).toEqual("Manager");
});
