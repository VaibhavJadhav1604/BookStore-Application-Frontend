import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/User/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit{
  Loginform!:FormGroup;
  submitted=false;
  constructor(private formBuilder:FormBuilder,private user:UserService,private route:Router){}

  ngOnInit(): void {
    this.Loginform=this.formBuilder.group({
     EmailId:['',[Validators.required,Validators.email]],
     Password:['',[Validators.required,Validators.minLength(1)]]
    });
   }

   OnSubmit()
   {
    this.submitted=true;
    if(this.Loginform.valid)
    {
      let reqData={
        EmailId:this.Loginform.value.EmailId,
        Password:this.Loginform.value.Password
      }
      this.user.login(reqData).subscribe((Response:any)=>
      {
        console.log("Login SuccessFull");
        console.log(Response.response);
        localStorage.setItem("token",Response.response);
        this.route.navigateByUrl("/Home/Getallbooks");
      })
    }
   }
}
