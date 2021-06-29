import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  url = 'https://cientizi.herokuapp.com/';

  getProfile(user:any){

    const head= new HttpHeaders({'Authorization': user})

    return this.http.get(this.url + "user/profile", {headers: head}).subscribe(data=>{
    console.log(data);
    })
  }

  getProject(){
    return this.http.get(this.url + "project/list").subscribe(data=>{
      console.warn(data);
      
    })
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

  postProject(user:any, otama:any){
    const head= new HttpHeaders({'Authorization': otama})
    return this.http.post(this.url + "project/register", user, {headers:head}).subscribe(data=>{
      });
  }

}