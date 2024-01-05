import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../services/product.service";
import {OrderService} from "../../services/order.service";

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.page.html',
  styleUrls: ['./place-order.page.scss'],
})
export class PlaceOrderPage implements OnInit {
  constructor()  { }

  ngOnInit() {
  }

}
