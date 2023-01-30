import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/Services/Cart/cart.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AddressService } from 'src/app/Services/Address/address.service';
import { UserService } from 'src/app/Services/User/user.service';
import { OrderService } from 'src/app/Services/Order/order.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  show = false;
  hideAndShow() {
    this.show = !this.show;
  }
  show1 = false;
  hideAndShow1() {
    this.show1 = !this.show1;
  }

  addr1 = false;
  addrshow() {
    this.addr1 = !this.addr1;
  }
  constructor(private cart: CartService, private snackbar: MatSnackBar, private route: Router, private address: AddressService, private user: UserService,private order:OrderService) { }
  fullName: any;
  phoneNumber: any;
  cartlist: any;
  book_qty: any;
  addressList: any;
  addressId:any;
  fullAddress: any;
  city: any;
  state: any;
  typeId:any;
  bookId:any;

  ngOnInit(): void {
    this.bookId = localStorage.getItem('bookId');
    this.getCart();
    this.getAllAddress();
    this.getUser();
  }

  getCart() {
    this.cart.getCart().subscribe((Response: any) => {
      console.log(Response.response);
      this.cartlist = Response.response;
      console.log("List : ", this.cartlist);
    })
  }

  RemoveFromCart(cartId: any) {
    this.cart.removeFromcart(cartId).subscribe((Response: any) => {
      console.log("Removed From Cart");
      this.snackbar.open("Removed From Cart", '', { duration: 2000 });
      this.getCart();
    })
  }

  decrease(cartId: any, quantity: any) {
    this.book_qty = quantity - 1;
    this.cart.updateCart(cartId, this.book_qty).subscribe((Response: any) => {
      console.log(Response);
      this.getCart();
    })
  }
  increase(cartId: any, quantity: any) {
    this.book_qty = quantity + 1;
    this.cart.updateCart(cartId, this.book_qty).subscribe((Response: any) => {
      console.log(Response);
      this.getCart();
    })
  }

  getUser() {
    this.user.getUserService().subscribe((Response: any) => {
      console.log("User Data : ", Response.response);
      this.fullName = Response.response.fullName;
      this.phoneNumber = Response.response.phoneNumber;

    })
  }

  getAllAddress() {
    this.address.getAllAddress().subscribe((Response: any) => {
      console.log(Response.response);
      this.addressList = Response.response;
      console.log("Address List", this.addressList);
      console.log(this.addressList.addressId);
    })
  }

  addAddress()
  {
    if(this.fullAddress && this.city && this.state && this.typeId != '')
    {
      let reqData={
        fullAddress:this.fullAddress,
        city:this.city,
        state:this.state,
        typeId:Number(this.typeId)
      }
      this.address.addAddress(reqData).subscribe((Response:any)=>
      {
        console.log("New Address Added successfully", Response);
        this.getAllAddress();
      })
    }
  }

  addOrder(bookId:any,addressId:any)
  {
      let reqData={
        BookId:parseInt(bookId),
        AddressId:addressId,
      }
      this.order.addOrder(reqData).subscribe((Response:any)=>
      {
        console.log("Order Placed",Response);
        this.getCart();
        this.route.navigateByUrl('Home/Orderplaced');
      })
  }
}
