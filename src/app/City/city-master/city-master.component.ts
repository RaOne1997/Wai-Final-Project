import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { cityDto } from 'src/app/Models/cityDto';

import { state } from 'src/app/Models/City/State';
import { Citymasterservices } from 'src/app/Services/CityMasterservices';
import Swal from 'sweetalert2';
import { CityMaster } from 'src/app/Models/City/CityModels';
import { Country } from 'src/app/Models/City/Country';


@Component({
  selector: 'app-city-master',
  templateUrl: './city-master.component.html',
  styleUrls: ['./city-master.component.css']
})
export class CityMasterComponent implements OnInit {
  citys!: CityMaster[];
  country!: Country[];
  states!: state[]
  hdie: boolean = false
  hide2: boolean = false
  city: cityDto = {
    cityname: '',
    stateRefID: 0,
    id: 0,
    statename: ''
  };
  abc: string = 'disabled';
  flag!: number
  hidess: boolean = true;
  constructor(private bookService: Citymasterservices, private route: ActivatedRoute) {
  }
  ngOnInit(): void {

    this.getallstate();
  }
  getallstate(){
    this.bookService.getallconter()
      .subscribe({
        next: (country) => {
          this.country = country;
          console.log(this.country);
        },
        error: (response) => {
          console.log(response)
        }

      })
    this.bookService.GetallCity()
      .subscribe({
        next: (city) => 
        {
          this.citys = city;
        },
        error: (response) => {
          console.log(response)
        }
      })

  }
  getstateByCont(s: string = "0") {
    if (Number(s) == 0)
    {
      this.hidess = true;
    }
    else {
      this.hidess = false;
      console.log(s)
      this.bookService.getBycont(Number(s))
        .subscribe({
          next: (states) => {
            this.states = states;
            console.log(this.states);
          },
          error: (response) => {
            console.log(response)
          }

        })
    }



  }

  hideadd(flag: number) {
    this.flag = flag
  }

  addCity() {

    Swal.fire({
      title: 'Are you sure want to Saved ?',
      text: 'You will not be able to recover this file!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, Saved!',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.value) {
        this.bookService.addcity(this.city).subscribe({
          next: (returncity) =>
            console.log(this.city)
        });
        Swal.fire(
          'saved!',
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
