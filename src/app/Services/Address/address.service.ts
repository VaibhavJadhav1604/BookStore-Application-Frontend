import { HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../Http/http.service';

@Injectable({
  providedIn: 'root'
})
export class AddressService {
token:any;
  constructor(private httpService:HttpService) {
    this.token=localStorage.getItem('token');
   }

   addAddress(reqData:any)
   {
    let header={
      headers:new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer '+this.token
      })
    }
    return this.httpService.postServiceReset("/Address/AddAddress",reqData,true,header);
   }

   getAllAddress()
   {
    let header={
      headers:new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer '+this.token
      })
    }
    return this.httpService.getService("/Address/GetAllAddress",true,header);
   }
}
