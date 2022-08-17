import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FlightBooking } from '../Models/FlightBooking';
import { BookingFlightService } from '../Services/booking-flight.service';

@Component({
  selector: 'app-booking-ticket',
  templateUrl: './booking-ticket.component.html',
  styleUrls: ['./booking-ticket.component.css'],
  providers: [BookingFlightService]
})
export class BookingTicketComponent implements OnInit {

  constructor(private bookservic: BookingFlightService, private route: ActivatedRoute) { }
  flightBooking!: FlightBooking
  ngOnInit(): void {
 

    this.bookservic.GetBookingrecord().subscribe({
      next: (result) => {
          this.flightBooking=result
        console.log(result)
      }
    })
  }

}
