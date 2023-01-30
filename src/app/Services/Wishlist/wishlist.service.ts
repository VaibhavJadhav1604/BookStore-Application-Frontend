import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../Http/http.service';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  token: any;
  constructor(private httpService: HttpService) {
    this.token = localStorage.getItem('token');
  }

  addToWishlist(reqData: any) {
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.httpService.postServiceReset("/Wishlist/AddToWishlist?BookId=" + reqData.BookId, {}, true, header);
  }

  getWishlist() 
  {
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.httpService.getService("/Wishlist/GetWishlistDetails", true, header);
  }

  deleteFromWishlist(wishlistId: any) {
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.httpService.deleteService("/Wishlist/DeleteFromWishlist?WishlistId="+wishlistId, {}, true, header);
  }
}
