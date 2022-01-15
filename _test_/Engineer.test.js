//constructor for Engineer

const { expect } = require('@jest/globals');
const Engineer = require('../lib/Engineer');

//Engineer as an object

test('creating an engineer object', () => {
    const engineer = new Engineer('Javis', 118911, 'javis.carr@gmail.com', 'javiscarr');
    

    expect(engineer.github).toEqual(expect.any(String));
});

//will retrieve github from getGithub()

test('what is the engineer github', () => {
    const engineer = new Engineer('Javis', 118911, 'javis.carr@gmail.com', 'javiscarr');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

//will retrieve the role from getRole()

test('what is the engineer role', () => {
    const engineer = new Engineer ('Javis', 118911, 'javis.carr@gmail.com', 'javiscarr');

    expect(engineer.getRole()).toEqual("Engineer");
});