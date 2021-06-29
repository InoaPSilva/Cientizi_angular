import { UserService } from '../user.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.css']
})
export class ProjectPageComponent implements OnInit {


  constructor(private posted: UserService) {}

  auth = localStorage.getItem("token");

  getProfile(){
    this.posted.getProfile(this.auth);
  }
  getProject(){
    this.posted.getProject();
  }

  ngOnInit(): void {
    this.getProfile();
    this.getProject();

  }

}
