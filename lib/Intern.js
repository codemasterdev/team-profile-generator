const Employee = require('./Employee');

class Intern extends Employee {
   constructor(name, id, email, school) {
      super(name, id, email);
      this.school = school;
   };

   getSchool() { return this.school };
   getRole() { return 'Intern' };
   getCard() {
      return `<div class="card card-position" style="width: 18rem">
   <div class="card-body">
      <h2 class="card-title-intern">${this.name}</h2>
      <h3 class="card-subtitle mb-2">
         <i class="fas fa-graduation-cap"></i> ${this.getRole()}
      </h3>
      <p class="card-text">
         <span>Employee ID:</span> ${this.id}<br />
         <span>Email:</span> <a href="mailto:${this.email}">${this.email}</a> <br />
         <span>School:</span> ${this.school}
      </p>
   </div>
</div>` };
};

module.exports = Intern;