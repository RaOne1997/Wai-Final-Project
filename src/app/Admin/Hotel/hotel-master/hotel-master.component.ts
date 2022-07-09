import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router, Routes } from '@angular/router';
import { CityMaster } from 'src/app/Models/City/CityModels';
import { HotelModel } from 'src/app/Models/Hotel/HotelModel';
import { Citymasterservices } from 'src/app/Services/CityMasterservices';
import { HotelServices } from 'src/app/Services/HotelServices';

@Component({
  selector: 'app-hotel-master',
  templateUrl: './hotel-master.component.html',
  styleUrls: ['./hotel-master.component.css']
})
export class HotelMasterComponent implements OnInit {
  hotelModel: HotelModel[] = []

  constructor(private hotelServices: HotelServices, private route: ActivatedRoute ,private router :Router) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    debugger
    this.hotelServices.getAllHotel()
      .subscribe({
        next: (Hotel) => {
          console.log(Hotel)
          this.hotelModel = Hotel;
        },
        error: (response) => {
          console.log(response)
        }
      })
  }

  viewroom(){
    this.router.navigateByUrl('Roombyhotel')

  }

}
