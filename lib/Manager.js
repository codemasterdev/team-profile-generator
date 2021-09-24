const Employee = require('./Employee');

class Manager extends Employee {
   constructor(name, id, email, officeNumber) {
      super(name, id, email);
      this.officeNumber = officeNumber;
   };

   getOfficeNumber() { return this.officeNumber };
   getRole() { return 'Manager' };
   getCard() {
      return `<div class="card card-position" style="width: 18rem">
   <div class="card-body">
      <h2 class="card-title-manager">${this.name}</h2>
      <h3 class="card-subtitle mb-2">
         <i class="fas fa-newspaper"></i> ${this.getRole()}
      </h3>
      <p class="card-text">
         <span>Employee ID:</span> ${this.id}<br />
         <span>Email:</span> <a href="mailto:${this.email}">${this.email}</a> <br />
         <span>Office #:</span> ${this.officeNumber}
      </p>
   </div>
</div>` };
};

module.exports = Manager;