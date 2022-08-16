import { Component } from "@angular/core";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TEst';
  statusdd:string='false'

  constructor(){
    let a=  sessionStorage.getItem('loginstatur' )
    if(a !== null){
      this.statusdd=a
      console.log(  this.statusdd)
    }
  }

}