const Employee = require('./Employee');

class Intern extends Employee {
   constructor(name, id, email, school) {
      super(name, id, email);
      this.school = school;
   };

   getSchool() { return this.school };
   getRole() { return 'Intern' };
   getCard() {
      return `<div class="card" style="width: 18rem">
   <div class="card-body">
      <h2 class="card-title">${this.name}</h2>
      <h3 class="card-subtitle mb-2 text-muted">
         <i class="fas fa-graduation-cap"></i> ${this.getRole()}
      </h3>
      <p class="card-text">
         Employee ID: ${this.id}<br />
         Email: <a href="mailto:${this.email}">${this.email}</a> <br />
         School: ${this.school}
      </p>
   </div>
</div>` };
};

module.exports = Intern;