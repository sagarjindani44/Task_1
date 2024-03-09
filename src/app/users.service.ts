import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
// url: string="";
  constructor(private http:HttpClient) {

   }

   getData(){
    let url:"https://jsonplaceholder.typicode.com/posts";
    debugger;
    return this.http.get("https://jsonplaceholder.typicode.com/posts");
   }
}
