import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email!:string;
  password!:string;


  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit() {
  }

  login() {
    if (this.email && this.password) {
      this.userService.login(this.email, this.password).then(registerData => {
        this.router.navigateByUrl('/dashboard');
      }).catch(error => {
        console.log(error);
      });

    } else {
      alert('try again!');
    }
  }
}
