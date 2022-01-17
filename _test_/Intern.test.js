//Intern as a constructor


const Intern = require('../lib/Intern');

//Intern as an object

test('creating an intern object', () => {
    const intern = new Intern('Javis', 118911, 'javis.carr@gmail.com', 'AAMU');

    expect(intern.school).toEqual(expect.any(String));

});

//will retrieve school from getSchool()

test('where is the intern  school', () => {
    const intern = new Intern('Javis', 118911, 'javis.carr@gmail.com', 'AAMU');

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});


//will retrieve the role from getRole()

test('what is the employee role', () => {
    const intern = new Intern ('Javis', 118911, 'javis.carr@gmail.com', 'AAMU');

    expect(intern.getRole()).toEqual("Intern");
});

    