import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 hide :boolean = false
a :number= 0

  constructor(private route: Router) { }

  
  ngOnInit(): void {


     let a = Boolean(localStorage.getItem('userogdata'))
    if(a!=null){
      this.hide=a
      console.log(this.hide)
    }
    
    console.log(this.hide)
  }
    logout(){
      console.log("logout")
      localStorage.removeItem('token')
      window. location. reload();
     
    }


    userprofile(){
      this.route.navigate(['Creating/'+this.a])
  
    }
  
}
