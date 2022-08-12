import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HomepageComponent } from '../homepage/homepage.component';
import { Searchflightresult } from '../Models/serchflight';

import { Citymasterservices } from '../Services/CityMasterservices';

@Component({
  selector: 'app-Flight',
  templateUrl: './Flight.component.html',
  styleUrls: ['./Fight.component.css']
})
export class FlightComponent implements OnInit {

  // @Input()
  flights!: Searchflightresult[]



  constructor(private bookService: Citymasterservices, private activatedRoute: ActivatedRoute,private route: Router) {}


  ngOnInit(): void {

    let a = sessionStorage.getItem('recor');
    if (a !== null)
      this.flights = JSON.parse(a)
      window.onunload = function () {
        sessionStorage.removeItem('recor');
      }

  }
  displayid(id:number){
    this.route.navigate(['FlightBooking/'+id]);
    console.log(id);


  }

}
