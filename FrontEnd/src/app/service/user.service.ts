import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  apiUrl="http://localhost:6438/api/Users";

  create(userData:any){
    return this.http.post(this.apiUrl,userData);
  }
  delete(userId:number){
    return this.http.delete(this.apiUrl+userId);
  }
  getall():any{
    return this.http.get(this.apiUrl);
  }
  update(userData:any,userId:number){
    return this.http.put(this.apiUrl+userId,userData);
  }
  verify(userData:any){
    return this.http.post(this.apiUrl+"/authenticate",userData)
  }
}
