const Intern = require('../lib/Intern');

test(`Instantiates a new Intern with arguments`, () => {
   const intern = new Intern('Brent', '23', 'brentgaines@gmail.com', 'School of Brent');

   expect(intern.name).toBe('Brent');
   expect(intern.id).toBe('23');
   expect(intern.email).toBe('brentgaines@gmail.com');
   expect(intern.school).toBe('School of Brent');
});

test(`Getters for inherited methods return the proper values`, () => {
   const intern = new Intern('Brent', '23', 'brentgaines@gmail.com', 'School of Brent');

   expect(intern.getName()).toBe('Brent');
   expect(intern.getId()).toBe('23');
   expect(intern.getEmail()).toBe('brentgaines@gmail.com');
});

test(`getSchool() returns a string`, () => {
   const intern = new Intern('Brent', '23', 'brentgaines@gmail.com', 'School of Brent');

   expect(intern.getCard()).toEqual(expect.any(String));
});


test(`getRole() returns 'Intern'`, () => {
   const intern = new Intern('Brent', '23', 'brentgaines@gmail.com', 'School of Brent');

   expect(intern.getRole()).toBe('Intern');
});

test(`getCard() returns a string`, () => {
   const intern = new Intern('Brent', '23', 'brentgaines@gmail.com', 'School of Brent');

   expect(intern.getCard()).toEqual(expect.any(String));
});


