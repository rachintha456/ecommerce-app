import { Component, OnInit } from '@angular/core';
import {NavController} from "@ionic/angular";
import {Router} from "@angular/router";

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {

  constructor(private navController:NavController, private router: Router) { }

  ngOnInit() {
    setTimeout(()=>{
      this.navController.navigateForward('/login');
    },2000);

    //this.router.navigate(['/login'])
  }

}
