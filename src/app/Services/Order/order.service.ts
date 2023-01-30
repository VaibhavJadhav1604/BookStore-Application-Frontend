import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../Http/http.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  token:any;
  constructor(private httpService:HttpService) { 
    this.token = localStorage.getItem('token');
  }

  addOrder(reqData:any)
  {
    let header={
      headers: new HttpHeaders({
        'Content-Type' : 'application/json',
        'Authorization': 'Bearer '+this.token
      })
    }
    return this.httpService.postService("/Order/AddOrder",reqData, true, header)
  }
}
