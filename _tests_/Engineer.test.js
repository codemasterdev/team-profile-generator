const Engineer = require('../lib/Engineer');

test(`Instantiates a new Engineer with arguments`, () => {
   const engineer = new Engineer('Brent', 23, 'brentgaines@gmail.com', 'brentocracy');

   expect(engineer.name).toBe('Brent');
   expect(engineer.id).toBe(23);
   expect(engineer.email).toBe('brentgaines@gmail.com');
   expect(engineer.github).toBe('brentocracy');
});

test(`Getters for inherited methods return the proper values`, () => {
   const engineer = new Engineer('Brent', 23, 'brentgaines@gmail.com', 'brentocracy');

   expect(engineer.getName()).toBe('Brent');
   expect(engineer.getId()).toBe(23);
   expect(engineer.getEmail()).toBe('brentgaines@gmail.com');
});

test(`getGithub() returns a string`, () => {
   const engineer = new Engineer('Brent', 23, 'brentgaines@gmail.com', 'brentocracy');

   expect(engineer.getGithub()).toEqual(expect.any(String));
});


test(`getRole() returns 'Engineer'`, () => {
   const engineer = new Engineer('Brent', 23, 'brentgaines@gmail.com', 'brentocracy');

   expect(engineer.getRole()).toBe('Engineer');
});

test(`getCard() returns a string`, () => {
   const engineer = new Engineer('Brent', 23, 'brentgaines@gmail.com', 'brentocracy');

   expect(engineer.getCard()).toEqual(expect.any(String));
});


