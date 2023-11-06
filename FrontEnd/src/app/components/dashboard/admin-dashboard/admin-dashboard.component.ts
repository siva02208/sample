import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from 'src/app/service/task.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  tasks?:any[];
  userId:any;
  filteredTasks?:any[];

  constructor(private router:Router,private taskdata:TaskService) { }

  ngOnInit(): void {
    this.userId = localStorage.getItem('userId');
    console.log(this.userId);
    
    // Initialize an array to store the filtered tasks
    this.filteredTasks = [];
    
    this.taskdata.getByUser(this.userId).subscribe(
      (response: any) => {
        this.tasks = response;
        console.log(this.tasks);
      }
    );
  }
  onUpdate()
  {
    this.router.navigate(['update-task'])
  }

}
