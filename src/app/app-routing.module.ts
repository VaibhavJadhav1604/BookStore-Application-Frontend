import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './Components/cart/cart.component';
import { ForgotpasswordComponent } from './Components/forgotpassword/forgotpassword.component';
import { GetallbooksComponent } from './Components/getallbooks/getallbooks.component';
import { HomeComponent } from './Components/home/home.component';
import { OrderplacedComponent } from './Components/orderplaced/orderplaced.component';
import { QuickviewComponent } from './Components/quickview/quickview.component';
import { ResetpasswordComponent } from './Components/resetpassword/resetpassword.component';
import { SignInComponent } from './Components/sign-in/sign-in.component';
import { SignupComponent } from './Components/signup/signup.component';
import { WishlistComponent } from './Components/wishlist/wishlist.component';

const routes: Routes = [
  {path:'',redirectTo:"/Signin",pathMatch:'full'},
  {path:'Signin',component:SignInComponent},
  {path:'Signup',component:SignupComponent},
  {path:'ForgotPassword',component:ForgotpasswordComponent},
  {path:'ResetPassword/:token',component:ResetpasswordComponent},
  {path:'Home',component:HomeComponent,
  children:[
    {path:'Getallbooks',component:GetallbooksComponent},
    {path:'Quickview',component:QuickviewComponent},
    {path:'Cart',component:CartComponent},
    {path:'Wishlist',component:WishlistComponent},
    {path:'Orderplaced',component:OrderplacedComponent}
  ]  
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
