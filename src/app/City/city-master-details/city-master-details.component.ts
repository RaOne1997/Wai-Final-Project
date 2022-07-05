import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import Swal from 'sweetalert2';
import { cityDto } from '../../Models/cityDto';

import { state } from '../../Models/City/State';
import { Citymasterservices } from '../../Services/CityMasterservices';
import { CityMaster } from 'src/app/Models/City/CityModels';

@Component({
  selector: 'app-city-master-details',
  templateUrl: './city-master-details.component.html',
  styleUrls: ['./city-master-details.component.css']
})
export class CityMasterDetailsComponent implements OnInit {
  state !: state
  citys !: CityMaster;
  citydd: cityDto = {
    cityname: '',
    stateRefID: 0,
    id: 0,
    statename: ''
  };
  add: boolean = true;
  constructor(private bookService: Citymasterservices, private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log("ngoninited")
    this.route.params.subscribe(
      (parameters) => {
        this.Getdatabyid(parameters['id'])

      })
  }

  Getdatabyid(id: number) {
    this.bookService.CityByID(id).subscribe({
      next: (city) => {
        this.citydd.cityname = city.cityName
        this.citydd.stateRefID = city.stateRefID
        this.citydd.id = city.id
        this.citydd.statename = city.state.stateName
        console.log(city)
      }
    })
  }

  deleteCity()
   {
    Swal.fire({
      title: 'Are you sure want to Delete ?',
      text: 'You will not be able to recover this file!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, deleted!',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.value) {
        this.bookService.deleteCity(this.citydd.id).subscribe({
          next: (returncity) =>
            console.log(this.citydd)
        });
        Swal.fire(
          'delete!',
          'Your imaginary file has been deleted.',
          'success'
        )
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })



  }


  update() {
    if (this.add) {

      this.add = false

    } else {
      this.add = true

    }

  }

  updatedata() {
    Swal.fire({
      title: 'Are you sure want to update ?',
      text: 'You will not be able to recover this file!',
      icon: 'success',
      showCancelButton: true,
      confirmButtonText: 'Yes, Saved!',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.value) {
        this.bookService.UpdateCity(this.citydd).subscribe({
          next: (returncity) =>
            console.log(this.citydd)
        });
        Swal.fire(
          'update!',
          'Your imaginary file has been deleted.',
          'success'
        )
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })


  }
}
