import { Component } from '@angular/core';
import { EmployeesService } from './Services/employees.service';
import {Employee} from './Interfaces/employees';
import { Customers } from './Interfaces/customers';
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
  
  constructor(_service: EmployeesService) {
    console.log("entra");
    _service.getList().subscribe(res => {
      
      console.log("entra res", res)
      this.employees = res;
    });
  }

}



