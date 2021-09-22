const Manager = require('../lib/Manager');

test(`Instantiates a new Manager with arguments`, () => {
   const manager = new Manager('Brent', '23', 'brentgaines@gmail.com', '212');

   expect(manager.name).toBe('Brent');
   expect(manager.id).toBe('23');
   expect(manager.email).toBe('brentgaines@gmail.com');
   expect(manager.officeNumber).toBe('212');
});

test(`Getters for inherited methods return the proper values`, () => {
   const manager = new Manager('Brent', '23', 'brentgaines@gmail.com', '212');

   expect(manager.getName()).toBe('Brent');
   expect(manager.getId()).toBe('23');
   expect(manager.getEmail()).toBe('brentgaines@gmail.com');
});

test(`getOfficeNumber() returns the officeNumber value`, () => {
   const manager = new Manager('Brent', '23', 'brentgaines@gmail.com', '212');

   expect(manager.getOfficeNumber()).toBe(manager.officeNumber);
});


test(`getRole() returns 'Manager'`, () => {
   const manager = new Manager('Brent', '23', 'brentgaines@gmail.com', '212');

   expect(manager.getRole()).toBe('Manager'); ''

});