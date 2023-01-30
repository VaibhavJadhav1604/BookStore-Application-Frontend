import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { SignInComponent } from './Components/sign-in/sign-in.component';
import { SignupComponent } from './Components/signup/signup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from "@angular/forms";
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { ForgotpasswordComponent } from './Components/forgotpassword/forgotpassword.component';
import { HomeComponent } from './Components/home/home.component';
import { ResetpasswordComponent } from './Components/resetpassword/resetpassword.component';
import { GetallbooksComponent } from './Components/getallbooks/getallbooks.component';
import {MatSelectModule} from '@angular/material/select';
import { QuickviewComponent } from './Components/quickview/quickview.component';
import { CartComponent } from './Components/cart/cart.component';
import {MatRadioModule} from '@angular/material/radio';
import { WishlistComponent } from './Components/wishlist/wishlist.component';
import { OrderplacedComponent } from './Components/orderplaced/orderplaced.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignInComponent,
    SignupComponent,
    ForgotpasswordComponent,
    HomeComponent,
    ResetpasswordComponent,
    GetallbooksComponent,
    QuickviewComponent,
    CartComponent,
    WishlistComponent,
    OrderplacedComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    MatExpansionModule,
    MatDialogModule,
    MatSnackBarModule,
    MatSelectModule,
    MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
