import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../Http/http.service';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  token:any;
  constructor(private httpService:HttpService) { 
    this.token = localStorage.getItem('token');
  }

    addFeedback(reqData : any)
    {
      let header = {
        headers: new HttpHeaders({
          'Content-type': 'application/json',
          'Authorization': 'Bearer '+this.token
        })
      }
      return this.httpService.postService("/Feedback/AddFeedback?BookId="+reqData.BookId,reqData,true,header);
    }

    getFeedback(BookId : any)
    {
      let header = {
        headers: new HttpHeaders({
          'Content-type': 'application/json'
        })
      }
      return this.httpService.getService("/Feedback/GetAllFeedback?BookId="+BookId, false, header);
    }
}
