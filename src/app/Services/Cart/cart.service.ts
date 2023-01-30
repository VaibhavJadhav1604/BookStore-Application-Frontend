import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../Http/http.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  token:any;
  constructor(private httpService:HttpService) { 
    this.token = localStorage.getItem('token');
  }

  addToCart(reqData: any) {
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer '+this.token
      })
    }
    return this.httpService.postServiceReset("/Cart/AddCart?BookId="+reqData.BookId+"&Quantity="+reqData.Quantity,{},true,header);
  }

  getCart()
  {
    let header={
      headers:new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer '+this.token
      })
    }
    return this.httpService.getService("/Cart/GetCartDetails",true,header);
  }

  removeFromcart(cartId:any)
  {
    let header={
      headers:new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer '+this.token
      })
    }
    return this.httpService.deleteService("/Cart/DeleteCart?CartId="+cartId,{},true,header);
  }
  updateCart(cartId:any,quantity:any)
  {
    let header={
      headers:new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer '+this.token
      })
    }
    return this.httpService.putService("/Cart/UpdateCart?CartId="+cartId+"&Quantity="+quantity,{},true,header);
  }
}
