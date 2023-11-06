import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../services/product.service";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.page.html',
  styleUrls: ['./new-product.page.scss'],
})
export class NewProductPage implements OnInit {
  selectedFile:File | null =null;
  productName!:string;
  productCost!:string;
  productDescription!:string;


  constructor(private productService: ProductService) { }

  ngOnInit() {
  }
  selectFile(event:any){
    this.selectedFile=event.target.files[0];
  }
  upload(){
    if (!this.selectedFile){
      console.log('please insert an image');
      return
    }
    if(!this.productCost && this.productName && this.productDescription){
      console.log('Something went wrong , try again!');
      return
    }

    this.productService.uploadFile(this.selectedFile).then(result=>{
      console.log(result);

      const data={
        'url':result,
        'name':this.productName,
        'price':parseInt(this.productCost),
        'description':this.productDescription,
      }

      this.productService.createProduct(data).then(savedResponse=>{
        console.log(savedResponse)
      });

    }).catch(error=>{
      console.log(error);
    })
  }
}
