import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  // employeeList: any;
  employeeList$ !: Observable<any>;

  constructor(private httpClient: HttpClient) {
    console.log("* * * Employees Component");
  }

  ngOnInit(): void {
    console.log("* * * Employees Component --> ngOnInit");
    // this.httpClient.get('http://localhost:3000/employees')
    //   .subscribe(data => this.employeeList = data);

    this.employeeList$ = this.httpClient.get('http://localhost:3000/employees');
  }
}
