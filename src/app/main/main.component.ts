import { UserService } from '../user.service';


import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  projects:any = [{}];

  constructor(private posted: UserService) { }

  getProject(){
    this.posted.getProject().subscribe(objetos =>{ this.projects.push(objetos)
    this.projects = this.projects[1].message;    

    console.log(this.projects);

    });    
  }

  ngOnInit(): void {
  this.getProject();
  
  }

}
