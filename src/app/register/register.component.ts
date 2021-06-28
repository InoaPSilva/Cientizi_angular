import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

form = this.fb.group({
    name: ['', Validators.required],
    password: ['', Validators.required],
    email: ['', Validators.required],
  });
  
  

  constructor(private fb: FormBuilder,
              private posted: UserService) {}

  ngOnInit(): void {
  }

  register(){
    this.posted.postUser(this.form.value);
    console.warn(this.form.value);
  }

}
