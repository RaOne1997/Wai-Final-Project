import { Component } from "@angular/core";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TEst';
  statusdd:string='false'
  signup:string ='false'
  hide  :boolean = false
 

    constructor(){
      let a=  sessionStorage.getItem('loginstatur' )
      let b=sessionStorage.getItem('signup')
   
      this.hide = Boolean(localStorage.getItem('hide'))
      if(this.hide!=null){
        console.log(this.hide)
      }
      if(b!==null){

        this.signup=b
        console.log(this.signup)  
      }
      if(a !== null){
        this.statusdd=a
        console.log(this.statusdd)
      }
    }

}