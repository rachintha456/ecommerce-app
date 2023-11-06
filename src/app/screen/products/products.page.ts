import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../services/product.service";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {
  products:any[]=[];
  constructor(private productService: ProductService)  { }

  ngOnInit() {
    this.loadAllData();
  }
  loadAllData(){
    this.productService.loadAll().subscribe(responseData=>{

      this.products=responseData.map(product=>(
        {
          id:product.payload.doc.id,
          ...product.payload.doc.data()
        }
      ))
    },error=>{
      console.log(error);
    })
  }
}
