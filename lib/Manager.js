const Employee = require('./Employee');

class Manager extends Employee {
   constructor(name, id, email, officeNumber) {
      super(name, id, email);
      this.officeNumber = officeNumber;
   };

   getOfficeNumber() { return this.officeNumber };
   getRole() { return 'Manager' };
   getCard() { return managerCard() };
};

managerCard = () => {

   const { name, id, email, officeNumber, role } = Manager;

   return `<div class="card" style="width: 18rem">
   <div class="card-body">
      <h2 class="card-title">${name}</h2>
      <h3 class="card-subtitle mb-2 text-muted">
         <i class="fas fa-graduation-cap"></i> ${role}
      </h3>
      <p class="card-text">
         Employee ID: ${id}<br />
         Email: <a href="mailto:${email}">${email}</a> <br />
         Office #: ${officeNumber}
      </p>
   </div>
</div>`
};

module.exports = Manager;