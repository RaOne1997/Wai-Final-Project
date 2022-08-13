import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookingFlightService } from '../Services/booking-flight.service';

@Component({
  selector: 'app-booking-ticket',
  templateUrl: './booking-ticket.component.html',
  styleUrls: ['./booking-ticket.component.css'],
  providers: [BookingFlightService]
})
export class BookingTicketComponent implements OnInit {

  constructor(private bookservic: BookingFlightService, private route: ActivatedRoute) { }

  ngOnInit(): void {
debugger
    this.route.params.subscribe(
      (parameters) => {
        console.log(parameters['ID'])
        this.bookservic.Getbyflight(parameters['ID']).subscribe({
          next: (result) => {
            console.log(result)
          }
        })
      });



  }

}
