import { UserService } from '../user.service';

import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.css']
})
export class ProjectPageComponent implements OnInit {


  constructor(private posted: UserService,
              private route: ActivatedRoute) {}

  auth = localStorage.getItem("token");
  
  projects:any = [];
  name:any = "";
  id = this.route.snapshot.paramMap.get('id');;

  getProject(id:any){
    console.warn(id);
    
    this.posted.getProject().subscribe(objetos =>{ this.projects.push(objetos)
    this.projects = this.projects[0].message.find(function(x:any){return x._id === id});    
    this.name = this.projects.users[0].name;
    
    console.warn(id);    
    console.warn(this.projects);
          
      });
    

  }

  ngOnInit(): void {
    this.getProject(this.id);

  }

}
