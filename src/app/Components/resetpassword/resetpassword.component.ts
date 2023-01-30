import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/Services/User/user.service';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class ResetpasswordComponent implements OnInit{
token:any;
Resetpassword!:FormGroup;
submitted=false;
constructor(private formBuilder:FormBuilder,private user:UserService,private route:ActivatedRoute){}

ngOnInit(): void {
  this.Resetpassword = this.formBuilder.group({
    Password: ['', [Validators.required, Validators.minLength(1)]],
    ConfirmPassword: ['', [Validators.required, Validators.minLength(1)]]
  })
  this.token = this.route.snapshot.paramMap.get('token');
  console.log(this.token);
}
  OnSubmit() {
    this.submitted = true;
    if (this.Resetpassword.valid) {
      let reqData = {
        Password: this.Resetpassword.value.Password,
        ConfirmPassword: this.Resetpassword.value.ConfirmPassword
      }
      console.log(reqData);
      this.user.resetpassword(reqData, this.token).subscribe((response: any) => {
        console.log("Password Changed Successfully");
        console.log(response);
      });
    }
  }
}
