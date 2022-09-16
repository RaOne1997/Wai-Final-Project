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
  flights!: Searchflightresult[]
  currentMsgToParent: any

  constructor(private bookService: Citymasterservices, private activatedRoute: ActivatedRoute, private route: Router) {
    let a = this.route.getCurrentNavigation();
    if (a != null) {

      this.currentMsgToParent = a.extras.state;

      // this.currentMsgToParent.FlightSearch.queryParams
      this.flights=  this.currentMsgToParent.FlightSearch.queryParams
    }
  }


  ngOnInit(): void {

    // let a = sessionStorage.getItem('recor');
    // if (a !== null)
    //   this.flights = JSON.parse(a)
    // window.onunload = function () {
    //   sessionStorage.removeItem('recor');
    // }

  }
  displayid(id: number) {
    this.route.navigate(['FlightBooking/' + id]);
    console.log(id);
  }

}
