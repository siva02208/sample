import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formData = {
    email: '',
    password: ''
  };
  constructor(private userData:UserService,
    private router:Router) { }

  ngOnInit(): void {
  }


  onSubmit() {
    this.userData.verify(this.formData).subscribe(
      (response: any) => {

        if (response) {
          const userRole = response.userRole;
          const userId = response.userId;
          // const userRole =response;
          console.log('User ID:', userId);
          localStorage.setItem('userId', userId);

          console.log('User Role:', userRole);
          localStorage.setItem('userRole', userRole);
          if(userRole == "admin")
          this.router.navigate(['admin-dashboard']);
        else
        this.router.navigate(['user-dashboard'])
        } else {
          console.error('Authentication failed');
        }
      },
      (error) => {
        console.error('HTTP request error:', error);
      }
    );
  }
  
}
