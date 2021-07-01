import { Component, OnInit } from '@angular/core';
import { UserService } from "../user.service";

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {

  constructor(private posted: UserService) { }

  user:any = [];

  gettingUser(){
    let localTkn = localStorage.token
    this.posted.getProfile(localStorage.token).subscribe(data=>{
      this.user = data
    });
        // this.projects = this.projects[0].message.find(function(x:any){return x._id === id});    

    console.warn(this.user);
    
  }


  ngOnInit(): void {
    this.gettingUser();
  }

}
