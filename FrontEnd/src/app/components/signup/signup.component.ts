import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user = {
    name: '',
    email: '',
    password: '',
    role:'',
    token:''
  }

  constructor(private userdata: UserService,
    private router : Router) { }

  ngOnInit(): void {
  }
  onSubmit() {
    this.userdata.create(this.user).subscribe(
      (Response) => {
        console.log('Form Data:', this.user)
        console.log("user added")
        this.router.navigate(['login'])
      },
      (error) => {
        console.error("failed to add");
      }
    )
  }

}

