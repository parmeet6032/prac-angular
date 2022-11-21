import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  formRegister: FormGroup;

  constructor(private httpClient: HttpClient) {
    console.log("* * * Register Component");
    this.formRegister = this.createFormGroup();
  }

  ngOnInit(): void { }

  onSubmit(): void {
    this.httpClient.post(
      "http://localhost:3000/employees",
      this.formRegister.value
    )
      .subscribe(
        // data => console.log(data)  // prints the object, added to DB
        {
          next: data => console.log(data),  // prints the object, added to DB (success feedback)
          error: err => console.log(err)  // prints the error object (negative feedback)
        }
      );
  }

  createFormGroup() {
    return new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }
}
