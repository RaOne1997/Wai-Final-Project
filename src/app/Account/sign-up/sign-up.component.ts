import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Regristration } from 'src/app/Models/Account/regrstration';
import { Account } from 'src/app/Services/AccountServices';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],

})
export class SignUpComponent implements OnInit {

  isvalidet: boolean = true
  message!: string
  productForm: Regristration = {
    userName: "",
    email: "",
    phone: "",
    password: "",
    id: 0,

  };
  phone:number=0
  serchfind: boolean = true;
  constructor(private toastr: ToastrService,private accountservice:Account) {


  }

  ngOnInit(): void {
  }

  emailvalidation(search: string) {
    var regexp = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}.[a-z]');
    this.serchfind = regexp.test(search);
    console.log(this.serchfind)
  }
  passwordValidation(value: string, value2: string) {

    if (value != "" && value2 != "") {

      if (value == value2) {

        this.isvalidet = true


      }
      else {
        this.toastr.error("password notmatch")
        this.isvalidet = false
        this.message = "Password Not Match"


      }
    }

    else if (value == "") {
      this.isvalidet = false
      this.message = "Must Enter Password"


    }

  }
  regristration() {
 
    if (this.isvalidet == true && this.serchfind == true) {
      this.productForm.phone= String(this.phone)
      this.accountservice.signUp(this.productForm).subscribe({
        next:(result)=>{
          sessionStorage.setItem('loginstatur',"true" )
          this.toastr.success(this.productForm.userName, "ok")
          window. location. reload();
          console.log(result)
        }
        
      })
 
      console.log(this.productForm)
      return true
    }
    else {
      return false
    }


  }

  gotologin(){
    sessionStorage.setItem('loginstatur',"false" )  
    sessionStorage.setItem('signup',"false" )
    window. location. reload();
  }
}
