const Employee = require('./Employee');

class Intern extends Employee {
   constructor(name, id, email, school) {
      super(name, id, email);
      this.school = school;
   };

   getSchool() { return this.school };
   getRole() { return 'Intern' };
   getCard() { return internCard() };
};

engineerCard = () => {

   const { name, id, email, school, role } = Intern;

   return `<div class="card" style="width: 18rem">
   <div class="card-body">
      <h2 class="card-title">${name}</h2>
      <h3 class="card-subtitle mb-2 text-muted">
         <i class="fas fa-graduation-cap"></i> ${role}
      </h3>
      <p class="card-text">
         Employee ID: ${id}<br />
         Email: <a href="mailto:${email}">${email}</a> <br />
         School: ${school}
      </p>
   </div>
</div>`
};

module.exports = Intern;