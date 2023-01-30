import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WishlistService } from 'src/app/Services/Wishlist/wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit{
  bookId = localStorage.getItem('bookId');
  wishlist:any;
  empty:any;

  constructor(private wishService:WishlistService,private route:Router){}
  
  ngOnInit(): void {
    this.getWishlist();
  }

  getWishlist()
  {
    this.wishService.getWishlist().subscribe((Response:any)=>
    {
      console.log(Response)
      this.wishlist=Response.response;
      console.log("Wishlist:",this.wishlist);
    })
  }

  deletefromWishlist(wishlistId:any)
  {
    this.wishService.deleteFromWishlist(wishlistId).subscribe((Response:any)=>
    {
      console.log(Response);
      this.getWishlist();
      this.route.navigateByUrl('/Home/Wishlist');
    })
  }
}
