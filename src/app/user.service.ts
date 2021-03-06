import { Injectable } from '@angular/core';
import {  HttpClient,
          HttpHeaders,
          HttpInterceptor,
          HttpEvent,
          HttpResponse, 
          HttpRequest, 
          HttpHandler, 
          HttpErrorResponse } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  url = 'https://cientizi.herokuapp.com/';


  getProfile(user:any){
    const head= new HttpHeaders({'Authorization': user})

    return this.http.get(this.url + "user/profile", {headers: head});
  }

  getProject(){
    return this.http.get(this.url + "project/list");
    
  }

  postUser(user:any){
    return this.http.post(this.url + "user/register", user);

  }

  postCredentials(user:any){
    return this.http.post(this.url + "user/login", user).subscribe(data=>{
      let dataToken = JSON.parse(JSON.stringify(data));
      
      localStorage.setItem("token", dataToken.token);
      console.warn(localStorage.token);

    });
  }

  isLoggedIn(){
      
      return localStorage.getItem("token");
  }

  postProject(user:any, otama:any){
    const head= new HttpHeaders({'Authorization': otama})
    return this.http.post(this.url + "project/register", user, {headers:head}).subscribe(data=>{
      });
  }

}