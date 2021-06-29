import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

import { UserService } from '../user.service';

@Component({
  selector: 'app-project-register',
  templateUrl: './project-register.component.html',
  styleUrls: ['./project-register.component.css']
})
export class ProjectRegisterComponent implements OnInit {
  
  form = this.fb.group({
    name: ['', Validators.required],
    objective: ['', Validators.required],    
    description: ['', Validators.required]
  });

  constructor(private fb: FormBuilder,
              private posted: UserService) { }

  ngOnInit(): void {
  }

  registerProjc(){
    let token = localStorage.getItem("token") 
    this.posted.postProject(this.form.value, token);
    console.warn(this.form.value);
  }
}
