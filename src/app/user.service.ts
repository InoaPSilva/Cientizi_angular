import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  url = 'https://projeteai.herokuapp.com/';

  getData(){
    return this.http.get(this.url + "teacher");
  }

  postUser(user:any){
    return this.http.post(this.url + "register ", user).subscribe(data=>{
    });

  }

    postCredentials(user:any){
    return this.http.post(this.url + "login ", user).subscribe(data=>{
    });


    }
    
}