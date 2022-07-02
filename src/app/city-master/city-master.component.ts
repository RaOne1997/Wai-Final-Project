import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CityMaster } from '../Models/CityModels';
import { cityDto } from '../Models/cityDto';


import { Citymasterservices } from '../Services/CityMasterservices';

@Component({
  selector: 'app-city-master',
  templateUrl: './city-master.component.html',
  styleUrls: ['./city-master.component.css']
})
export class CityMasterComponent implements OnInit {
  citys! : CityMaster[];
  hdie:boolean =false
  hide2:boolean= false
  city : cityDto = {
    cityname:'',
    stateRefID:0
  };
    constructor(private bookService: Citymasterservices,private route:ActivatedRoute) { 
     }
  
  ngOnInit(): void {
    this.bookService.getBooks()
    .subscribe({
      next:(city)=>{
        this.citys = city;
  
        console.log(city);
    },
    error:(response)=>{
      console.log(response)
    }
  
    })
  }

  hideadd(flag:number){
 
    if(flag==1){
    this.hide2=true
    this.hdie=false
    
    }
    else if(flag==2){
      this.hide2=false
      this.hdie=true

    }

  }


  addCity(){
    this.bookService.addcity(this.city).subscribe({next:(returncity)=>
      console.log(  this.city)
    });
  }

}
