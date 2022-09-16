
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Customer } from 'src/app/Models/Account/Usser';

import { Account } from '../../Services/AccountServices';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[Account]
})
export class LoginComponent implements OnInit {

  customers!:Customer
  constructor(private accountservice:Account ,private toastr: ToastrService,private route:Router) {  
    sessionStorage.setItem('signup',"false" )  
    localStorage.removeItem('userogdata')
   
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
        console.log(result)

       
        sessionStorage.setItem('loginstatur',"true" )
        this.route.navigate([''])
        localStorage.setItem('userogdata', result)
        window. location. reload();
        // this.toastr.success("Welcome", "ok")
        
       }
      }
    
    
    })
 
  }
  signup(){
    sessionStorage.setItem('signup',"true" )
    window. location. reload();

  }

}
