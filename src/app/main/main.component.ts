import { UserService } from '../user.service';
import { MatGridListModule } from '@angular/material/grid-list'; 

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  projects:any = [{}];

  constructor(private posted: UserService) { }



  logged(){
    if (!this.posted.isLoggedIn()) { 
        return false;
      } else {
        return true
      }
  }

  getProject(){
    this.posted.getProject().subscribe(objetos =>{ this.projects.push(objetos)
    this.projects = this.projects[1].message;    


    console.log(this.projects[0].users[0].name);

    });    
  }

  ngOnInit(): void {
  this.getProject();
  
  }

}
