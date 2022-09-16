import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() hide :boolean = false
a :number= 0

  constructor(private route: Router) { }

  
  ngOnInit(): void {
     this.a = Number(localStorage.getItem('userogdata'))
    if(this.a!=null){
      console.log(this.a)
    }
    
    console.log(this.hide)
  }
    logout(){
      console.log("logout")
      sessionStorage.setItem('loginstatur',"false")
      window. location. reload();
     
    }


    userprofile(){
      this.route.navigate(['Creating/'+this.a])
  
    }
  
}
