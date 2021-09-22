const Employee = require('../lib/Employee');

test(`Instantiates a new Employee object with arguments`, () => {
   const employee = new Employee('Brent', '23', 'brentgaines@gmail.com');

   expect(employee.name).toBe('Brent');
   expect(employee.id).toBe('23');
   expect(employee.email).toBe('brentgaines@gmail.com');
});

test(`getName() should return the name value`, () => {
   const employee = new Employee('Brent', '23', 'brentgaines@gmail.com');

   expect(employee.getName()).toBe(employee.name);
});

test(`getId() should return the id value`, () => {
   const employee = new Employee('Brent', '23', 'brentgaines@gmail.com');

   expect(employee.getId()).toBe(employee.id);
});

test(`getEmail() should return the email value`, () => {
   const employee = new Employee('Brent', '23', 'brentgaines@gmail.com');

   expect(employee.getEmail()).toBe(employee.email);
});

test(`getRole() should return 'Employee'`, () => {
   const employee = new Employee('Brent', '23', 'brentgaines@gmail.com');

   expect(employee.getRole()).toBe('Employee');
});


