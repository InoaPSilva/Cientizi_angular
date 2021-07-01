import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   form = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });  

  constructor(private fb: FormBuilder,
              private posted: UserService,
              private router: Router) {}

  ngOnInit(): void {
  }
  
  login(){

    this.posted.postCredentials(this.form.value);
    console.warn(this.form.value);
    if (this.posted.isLoggedIn()) {
        this.router.navigate(['/home']); 
      }
  }

}
