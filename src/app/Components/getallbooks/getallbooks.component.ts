import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from 'src/app/Services/Book/book.service';

@Component({
  selector: 'app-getallbooks',
  templateUrl: './getallbooks.component.html',
  styleUrls: ['./getallbooks.component.scss']
})
export class GetallbooksComponent implements OnInit{
  bookslist:any;
  bookscount: any;
  constructor(private book:BookService,private route:Router){}
  ngOnInit(): void {
    this.getallbooks();
  }

  getallbooks()
  {
    this.book.getallbooks().subscribe((Response:any)=>
    {
      console.log(Response);
      this.bookslist=Response.response;
      this.bookscount=Response.response.length;
      console.log("List:",this.bookslist);
      console.log("bookscount",this.bookscount);
    })
  }
  quickview(data:any)
  {
    this.route.navigateByUrl("/Home/Quickview");
    localStorage.setItem('bookId',data.bookId);
    console.log(data);
    console.log("Book Id : ", data.bookId);
  }

}
