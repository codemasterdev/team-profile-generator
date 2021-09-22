const Engineer = require('../lib/Engineer');

test(`Instantiates a new Engineer with arguments`, () => {
   const engineer = new Engineer('Brent', '23', 'brentgaines@gmail.com', 'brentocracy');

   expect(engineer.name).toBe('Brent');
   expect(engineer.id).toBe('23');
   expect(engineer.email).toBe('brentgaines@gmail.com');
   expect(engineer.github).toBe('brentocracy');
});

test(`getGithub() should return the GitHub username value`, () => {
   const engineer = new Engineer('Brent', '23', 'brentgaines@gmail.com');

   expect(engineer.getGithub()).toBe(engineer.github);
});


test(`getRole() should return 'Engineer'`, () => {
   const engineer = new Engineer('Brent', '23', 'brentgaines@gmail.com');

   expect(engineer.getRole()).toBe('Engineer');
});


