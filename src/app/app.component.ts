import { Component, OnInit } from "@angular/core";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'TEst';
  statusdd:string='false'
  signup:string ='false'
  hide  :boolean = false
 

    constructor(){
      let a=  sessionStorage.getItem('loginstatur' )
      let b=sessionStorage.getItem('signup')
   
     
      if(b!==null){

        this.signup=b
        console.log(this.signup)  
      }
      if(a !== null){
        this.statusdd=a
        console.log(this.statusdd)
      }
    }
  ngOnInit(): void {
    this.hide = Boolean(localStorage.getItem('hide'))
    if(this.hide!=null){
      console.log(this.hide)
    }
  }

}