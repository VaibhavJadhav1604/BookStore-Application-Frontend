import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../Http/http.service';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  token:any;
  constructor(private httpService:HttpService) { this.token = localStorage.getItem('token');}

  getallbooks() {
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.httpService.getService("/Book/GetAllBooks",false,header);
  }

  getBookByBookId(bookId : any)
  {
    let header = {
      headers : new HttpHeaders({
        'Content-Type': 'application/json', 
        'Authorization' : 'Bearer '+this.token  
      })
     } 
     return this.httpService.getService("/Book/GetBooksById?BookId="+bookId,true,header);
  }
}
