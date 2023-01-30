import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/User/user.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss']
})
export class ForgotpasswordComponent implements OnInit{
Forgotpassword!:FormGroup;
submitted=false;
constructor(private formBuilder:FormBuilder,private user:UserService,private route:Router){}
  ngOnInit(): void {
    this.Forgotpassword=this.formBuilder.group({
      EmailId:['',[Validators.required,Validators.email]]
    })
  }
  OnSubmit()
  {
    this.submitted=true;
    if(this.Forgotpassword.valid)
    {
      let reqData={
        EmailId:this.Forgotpassword.value.EmailId
      }
      this.user.forgotpassword(reqData).subscribe((Response:any)=>
      {
        console.log(Response);
        localStorage.setItem("token",Response.data);
      })
    }
  }
}
