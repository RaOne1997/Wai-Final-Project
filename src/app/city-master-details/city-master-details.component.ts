import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { CityMaster } from '../Models/CityModels';
import { state } from '../Models/State';
import { Citymasterservices } from '../Services/CityMasterservices';

@Component({
  selector: 'app-city-master-details',
  templateUrl: './city-master-details.component.html',
  styleUrls: ['./city-master-details.component.css']
})
export class CityMasterDetailsComponent implements OnInit {
  state !: state
  citys !: CityMaster;

  add: boolean = true;
  constructor(private bookService: Citymasterservices, private route: ActivatedRoute) { }

  ngOnInit(): void {
      console.log("ngoninited")
    this.route.params.subscribe(
      (parameters) => {
        console.log('/api/CityMasters/' + parameters['id'])
        this.bookService.findproduct(parameters['id']).subscribe({
          next: (city) => {
            this.citys = city;
            console.log(this.citys)
           
          }
        })
      })
  }


  update() {
    if(this.add){
       
      this.add = false
      
    }else{
      this.add = true

    }

  }

  updatedata(){



    
  }
}
