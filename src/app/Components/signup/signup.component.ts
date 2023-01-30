import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/User/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit{
  Registrationform!:FormGroup;
  submitted=false;

  constructor(private formBuilder:FormBuilder,private user:UserService,private route:Router){}

  ngOnInit(): void {
  this.Registrationform=this.formBuilder.group({
    FullName:['',Validators.required],
    EmailId:['',[Validators.required,Validators.email]],
    Password:['',[Validators.required,Validators.minLength(1)]],
    PhoneNumber:['',Validators.required]
  });    
  }

  OnSubmit()
  {
    this.submitted=true;
    if(this.Registrationform.valid)
    {
      let reqData={
        FullName:this.Registrationform.value.FullName,
        EmailId:this.Registrationform.value.EmailId,
        Password:this.Registrationform.value.Password,
        PhoneNumber:Number(this.Registrationform.value.PhoneNumber)
      }
      this.user.signup(reqData).subscribe((Response:any)=>
      {
        console.log("Registration SuccessFull");
        localStorage.setItem("token",Response.data);
      })
    }
  }
}
