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
  
  projects:any = [{}];
  id = "60dca4c1eea6c30004f64bc3";


  getProfile(){
    this.posted.getProfile(this.auth);
  }
  getProject(id:any){
    this.posted.getProject().subscribe(objetos =>{ this.projects.push(objetos)
    this.projects = this.projects[1].message.find(function(x:any){return x._id === id});    

    console.log(this.projects);

    });    
  }

  ngOnInit(): void {
    this.getProfile();
    this.getProject(this.id);

  }

}
