import { HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../Http/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  tokens:any;
  constructor(private httpService: HttpService) { 
  this.tokens=localStorage.getItem('token');
  }
  login(reqData: any) {
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.httpService.postService("/User/Login?EmailId=" + reqData.EmailId + "&Password=" + reqData.Password, {}, false, header);
  }

  signup(reqData: any) {
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.httpService.postService("/User/Registration", reqData, false, header);
  }

  forgotpassword(reqData: any) {
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.httpService.postService("/User/ForgotPassword?EmailId=" + reqData.EmailId, {}, false, header);
  }
  resetpassword(reqData: any, token: any) {
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      })
    }
    return this.httpService.postServiceReset("/User/ResetPassword?Password=" + reqData.Password + "&ConfirmPassword=" + reqData.ConfirmPassword, {}, true, header);
  }
  getUserService()
  {
    let header = {
      headers : new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization' : 'Bearer '+this.tokens 
      })
     } 
     return this.httpService.getService("/User/GetUserById", true, header);
  }
}