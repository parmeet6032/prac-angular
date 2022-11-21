import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup;
  user$!: Observable<any>;

  constructor(private httpClient: HttpClient) {
    console.log("* * * Login Component");
    this.formLogin = this.createFormGroup();
  }

  ngOnInit(): void { }

  onSubmit(): void {
    let currentUser = this.formLogin.value.username;
    let currentPassword = this.formLogin.value.password;

    this.user$ = this.httpClient.get(
      "http://localhost:3000/employees",
      {
        params: {
          username: currentUser
        }
      }
    );

    this.user$.subscribe(data => console.log(data));

  }

  createFormGroup() {
    return new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }
}