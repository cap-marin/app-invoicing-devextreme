import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { Observable } from "rxjs";
import { Employee } from '../Interfaces/employees';
import { Customers } from '../Interfaces/customers';


@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  private endpoint:string = environment.endPoint;
  private apirUrl:string =  this.endpoint+'product/'

  constructor(private http:HttpClient) { }

  getList():Observable<Employee[]>{
    return this.http.get<Employee[]>(`${this.apirUrl}list`);
  }
}
