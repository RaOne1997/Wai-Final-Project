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
 

    constructor(){
      let a=  sessionStorage.getItem('loginstatur' )
      let b=sessionStorage.getItem('signup')
   
   
      if(b!==null){

        this.signup=b
      }
      if(a !== null){
        this.statusdd=a
        console.log(  this.statusdd)
      }
    }

}