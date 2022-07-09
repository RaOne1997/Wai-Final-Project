import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { cityDto } from 'src/app/Models/City/cityDto';


import { Citymasterservices } from 'src/app/Services/CityMasterservices';
import Swal from 'sweetalert2';
import { CityMaster } from 'src/app/Models/City/CityModels';
import { Country } from 'src/app/Models/City/Country';
import { Dropdown } from 'src/app/Models/City/Dropdown';


@Component({
  selector: 'app-city-master',
  templateUrl: './city-master.component.html',
  styleUrls: ['./city-master.component.css']
})
export class CityMasterComponent implements OnInit {
   citys: CityMaster[]=[];
  country!: Country[];
  dropdown :Dropdown[]=[]
  hdie: boolean = false
  hide2: boolean = false
  city: cityDto = {
    cityname: '',
    stateRefID: 0,
    id: 0,
    statename: ''
  };


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
          console.log(city)
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
          next: (dropdown) => {
            this.dropdown = dropdown;
            console.log(dropdown);
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
