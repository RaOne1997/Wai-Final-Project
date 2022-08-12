import { Component,  OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { Searchflightresult } from '../Models/serchflight';
import { FlightSearch } from '../Services/SearchFlight';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  providers: [FlightSearch]

})
export class HomepageComponent implements OnInit {

   searchflig!: Searchflightresult[] //= [new Searchflightresult("2022-07-22", "2022-07-22", "BOM", 1, "https://pbs.twimg.com/profile_images/1021012526740279296/ETjp0akc_400x400.jpg", 1)
  //   , new Searchflightresult("2022-07-22", "2022-07-22", "BOM", 1, "https://beebom.com/wp-content/uploads/2015/02/airline-logos-airasia-e1424575285622.jpg?quality=75&strip=all", 1)
  //   , new Searchflightresult("2022-07-22", "2022-07-22", "BOM", 1, "https://beebom.com/wp-content/uploads/2015/02/airline-logos-india.jpg?quality=75&strip=all", 1)]
  constructor(private search: FlightSearch, private route: Router) { }
  string: string[] = ["hello", "hello", "hello", "hello"]
  ngOnInit(): void {
    console.log(this.string)
  }


  serchfligght(from: string, to: string, dept: any) {

    this.search.getsearchFlight(from, to, dept).subscribe({
      next: (result) => {
        this.searchflig = result
        sessionStorage.setItem('recor', JSON.stringify(this.searchflig))

        this.route.navigate(['Flight']);

      }
    })
  }


}
