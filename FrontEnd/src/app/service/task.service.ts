import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http:HttpClient) { }
    apiUrl="http://localhost:6438/api/Activities"

    create(taskData:any){
      return this.http.post(this.apiUrl,taskData);
    }
    delete(taskId:number){
      return this.http.delete(this.apiUrl+taskId);
    }
    getall():any{
      return this.http.get(this.apiUrl);
    }
    update(taskData:any,taskId:number){
      return this.http.put(this.apiUrl+taskId,taskData);
    }
    getByUser(userId:number):any{
      return this.http.get(this.apiUrl+"/userId/"+userId);
    }
}
