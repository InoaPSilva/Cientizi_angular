import { Component, OnInit } from '@angular/core';
import { UserService } from "../user.service";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private posted: UserService,) {  }

  logged(){
    if (!this.posted.isLoggedIn()) { 
        return false;
      } else {
        return true
      }
  }
  ngOnInit(): void {
  }

}
