import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';


import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

form = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.required],    
    password: ['', Validators.required]
  });
  

  constructor(private fb: FormBuilder,
              private posted: UserService,
              private httpClient: HttpClient,
              private router: Router) {}

  ngOnInit(): void {
  }

  register(){
    this.posted.postUser(this.form.value).subscribe(data=>{
      let user = {
        "email" : this.form.value.email,
        "password" : this.form.value.password 
      }
      this.posted.postCredentials(user);
      if (this.posted.isLoggedIn()) {
        this.router.navigate(['/home']); 
      }
    });

    console.warn(this.form.value);
  }

}
