import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/Services/Book/book.service';
import { CartService } from 'src/app/Services/Cart/cart.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { WishlistService } from 'src/app/Services/Wishlist/wishlist.service';
import { FeedbackService } from 'src/app/Services/Feedback/feedback.service';

@Component({
  selector: 'app-quickview',
  templateUrl: './quickview.component.html',
  styleUrls: ['./quickview.component.scss']
})
export class QuickviewComponent implements OnInit {
  ratingPoint: any = 0;
  comment:any;
  feedBacks:any;
  book: any;
  bookId: any;
  addtoCart: boolean = false;
  constructor(private bookService: BookService, private cart: CartService, private snackbar: MatSnackBar, private wishService: WishlistService,private feedback:FeedbackService) { }

  ngOnInit(): void {
    this.bookId = localStorage.getItem('bookId');
    this.getbookbyid(this.bookId);
    console.log("BookId=", this.bookId);
    this.getFeedback(this.bookId);
  }

  getbookbyid(bookId: any) {
    this.bookService.getBookByBookId(bookId).subscribe((Response: any) => {
      console.log(Response);
      this.book = Response.data;
      console.log(Response.data);
    })
  }
  addtocart() {
    this.addtoCart = true;
    let reqData = {
      BookId: this.book.bookId,
      Quantity: 1
    }
    this.cart.addToCart(reqData).subscribe((Response: any) => {
      console.log("Added To cart", Response);
      this.snackbar.open("Added To Cart", '', { duration: 2000 });
    })
  }

  addToWishList() {
    let reqData = {
      BookId: this.book.bookId
    }
    this.wishService.addToWishlist(reqData).subscribe((Response: any) => {
      console.log("Added to wishlist", Response);
      this.snackbar.open("Added To Wishlist", '', { duration: 2000 });
    });

  }

  addFeedback()
  {
    let reqData = {
      Rating : parseInt(this.ratingPoint),
      Comment : this.comment,
      BookId : this.book.bookId
    }
    console.log(reqData);
    this.feedback.addFeedback(reqData).subscribe((Response : any) => {
      console.log("Feedback added ",Response);
      this.getFeedback(this.book.bookId)
    })
  }

  getFeedback(bookId : any)
  {
    this.feedback.getFeedback(bookId).subscribe((Response : any) => {
      console.log(Response);
      this.feedBacks = Response.response;
    })
  }
}
