
import { Component, OnInit } from '@angular/core';
import { Account } from '../Services/AccountServices';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css'],
  providers:[Account]
})
export class AboutUsComponent implements OnInit {


     
  constructor(private accountservice:Account) {  
   
  }  

  ngOnInit(): void {
 
    this.accountservice.login("aaaa").subscribe({

      next:(result)=>{

        console.log(result)
      }
    
    
    })
  }
 
  
     

}
