import { Component } from '@angular/core';

import { Employee } from './models/employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  employeeArray: Employee [] = [
    {id: 1, name: "Jacob, Gales", country: "GREAT BRITAIN"},
    {id: 2, name: "Valerie, Smith", country: "UNITED STATES"},
    {id: 3, name: "Marlene, Rouvier", country: "FRANCE"},
    {id: 3, name: "Susana, Palacios", country: "ARGENTINA"},
  ];

selectedEmployee: Employee = new Employee();

openForEdit(employee: Employee) {
  this.selectedEmployee = employee;
}

addOrEdit (){
  if(this.selectedEmployee.id === 0){
    this.selectedEmployee.id = this.employeeArray.length + 1;
    this.employeeArray.push(this.selectedEmployee);
  }

  this.selectedEmployee = new Employee();
}

delete() {
  if(confirm("Are you sure you want to delete it?")){
    this.employeeArray = this.employeeArray.filter(x => x != this.selectedEmployee);
    this.selectedEmployee = new Employee();
  }
}

}
