import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {UserService} from "../../services/user.service";
import {error} from "@angular/compiler-cli/src/transformers/util";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  email='';
  fullname='';
  password='';

  constructor(private userService:UserService, private router:Router) { }

  ngOnInit() {
  }

  create(){
    if(this.email && this.fullname && this.password){
      this.userService.register(this.email, this.password).then(registerData=>{
        this.userService.createUser(this.email,this.fullname).then(userData=>{
          this.router.navigateByUrl('/dashboard');
          console.log(userData);
        }).catch(error=>{
          console.log(error);
        });
      }).catch(error=>{
        console.log(error);
      });

    }else{
      alert('try again!');
    }
  }

}
