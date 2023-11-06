import { Injectable } from '@angular/core';
import {AngularFireStorage} from "@angular/fire/compat/storage";
import * as url from "url";
import {error} from "@angular/compiler-cli/src/transformers/util";
import {finalize, Observable} from "rxjs";
import {AngularFirestore, DocumentChangeAction} from "@angular/fire/compat/firestore";
import {observableToBeFn} from "rxjs/internal/testing/TestScheduler";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private firestore:AngularFirestore, private storage: AngularFireStorage) {
  }

  uploadFile(data: any): Promise<string> {
    console.log(data.name);
    console.log(data);

    const filePath = `products/${Math.floor(Math.random()+101)}_${data.name}`;
    const fileRef = this.storage.ref(filePath);

    const uploadTask = this.storage.upload(filePath, data);
    return new Promise<string>((resolve, reject) => {
      uploadTask.snapshotChanges().pipe(
        finalize(()=>{
          fileRef.getDownloadURL().subscribe(url=>{
              resolve(url);
          },error=>{
            reject(error)
          })
        })
      ).subscribe();
    });
  }

  createProduct(obj:any):Promise<any>{
    return this.firestore.collection('products').add(obj);
  }

  loadAll():Observable<DocumentChangeAction<any>[]>{
    console.log('triggered');

    return this.firestore.collection('products').snapshotChanges();
  }

}
