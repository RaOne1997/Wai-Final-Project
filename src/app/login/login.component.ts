
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { Account } from '../Services/AccountServices';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private accountservice:Account ,private toastr: ToastrService) {  
   
  }  

  ngOnInit(): void {

  }
  login(userid:string,password:string){

    this.accountservice.login(userid,password).subscribe({

      next:(result)=>{

       if(result==null)
       {
        sessionStorage.setItem('loginstatur',"false" )
        this.toastr.error("fail to login", "error")
        
       }
       else{
        sessionStorage.setItem('loginstatur',"true" )
        this.toastr.success("Welcome", "ok")
        
        window. location. reload();

       }
      }
    
    
    })
 
  }

}
