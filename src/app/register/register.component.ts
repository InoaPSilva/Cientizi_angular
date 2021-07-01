import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

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
errM = [];
  

  constructor(private fb: FormBuilder,
              private posted: UserService,
              private httpClient: HttpClient) {}

  ngOnInit(): void {
  }

  register(){
    this.posted.postUser(this.form.value)
    .pipe(catchError(err => of ("dasdasd")))
    .subscribe(data=>{
      this.errM = data
         console.log(data);
          

    });

    console.warn(this.form.value);
  }

}
