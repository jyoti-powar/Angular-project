import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }


  url="http://localhost:3218/mens_products"

  geturl(){
    return this.http.get(this.url)
  }


  saveMonProd(data:any){
    return this.http.post('http://localhost:3218/saveproducts',data)
  }


  updateProd(data:any,id:any){
    return this.http.put(`http://localhost:3218/updateproduct/${id}`,data)
  }


  delProd(id:any){
    return this.http.delete(`http://localhost:3218/deletepro/${id}`)
  }


  getCurrentData(id:any){
    return this.http.get(`(this.url)/${id}`)
  }
}
