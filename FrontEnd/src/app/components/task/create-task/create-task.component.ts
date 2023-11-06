import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/service/task.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {
  task={
    id:'',
    title:'',
    description:''
  }

  constructor(private taskdata:TaskService) { }

  ngOnInit(): void {
    const storedId = localStorage.getItem('userId');
    if(storedId)
    this.task.id=storedId
  }
  onSubmit(){
this.taskdata.create(this.task).subscribe(
  (Response)=>
  {
    console.log("Created Sucessfully");
    
  },
  (error)=>
  {
    console.error("task creation failed")
  }
)
  }

}
