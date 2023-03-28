import { Component } from '@angular/core';
import { Employee, EmployeesService } from './employees.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  employees: Employee[] = [];
  expanded: Boolean = true;
  helloWorld() {
    alert('Hello world!');
  }

  constructor(service: EmployeesService) {
    this.employees = service.getEmployees();
  }
}



