import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/User/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
Fullname:any;
constructor(private user:UserService){}

ngOnInit(): void {
this.getUser();
}
getUser()
{
  this.user.getUserService().subscribe((Response : any) => {
    console.log("User Data : ",Response.response);
    this.Fullname = Response.response.fullName;
  })
}
}
