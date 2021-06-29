import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  url = 'https://cientizi.herokuapp.com/';

  getProfile(){
    return this.http.post(this.url + "user/profile", localStorage.token);
  }

  postUser(user:any){
    return this.http.post(this.url + "user/register", user).subscribe(data=>{
    });

  }

  postCredentials(user:any){
    return this.http.post(this.url + "user/login", user).subscribe(data=>{
      let dataToken = JSON.parse(JSON.stringify(data));
      
      localStorage.setItem("token", dataToken.token);
      console.warn(localStorage.token);

    });
  }



}