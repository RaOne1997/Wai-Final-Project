import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FlightBooking } from 'src/app/Models/FlightBooking';
import { bookinginput } from 'src/app/Models/room/inputforn';
import { BookingFlightService } from 'src/app/Services/booking-flight.service';

@Component({
  selector: 'app-passenger-info',
  templateUrl: './passenger-info.component.html',
  styleUrls: ['./passenger-info.component.css']
})
export class PassengerInfoComponent implements OnInit {
  flightBooking!: FlightBooking
  flightB!: bookinginput
  productForm!: FormGroup;


  constructor(private bookservic: BookingFlightService,
    private route: ActivatedRoute, private fb: FormBuilder) {
      this.route.params.subscribe(
        (parameters) => {
          console.log(parameters['ID'])
       
       
  
    this.bookservic.Getbyflight(Number(parameters['ID'])).subscribe({
      next: (result) => {
        this.flightB = result
        console.log(this.flightB)


        this.productForm = this.fb.group({
          PassengerNameRecord: this.flightB.passengerNameRecord,
          FlightScheduleRefId: this.flightB.flightScheduleRefId,
          CustomerContactMobile:this.flightB.customerContactMobile,
          CustomerContactEmail: this.flightB.customerContactEmail,
          arrivalDate:this.flightB.arrivalDate ,
          flightCode:this.flightB.flightCode ,
          departureDate:this.flightB.departureDate ,
          fromairport:this.flightB.fromairport ,
          fromAirportCode:this.flightB.fromAirportCode,
          toAirportCode:this.flightB.toAirportCode ,
          toairport:this.flightB.toairport ,
          FlightCustomerDetails: this.fb.array([]),
        });
      }
    })
  });
  }

  ngOnInit(): void {

  }

  FlightCustomerDetails(): FormArray {
    return this.productForm.get("FlightCustomerDetails") as FormArray
  }

  newQuantity(): FormGroup {
    return this.fb.group({
      Name: '',
      Age: 0,
      Gender: '',
    })
  }

  addQuantity() {
    this.FlightCustomerDetails().push(this.newQuantity());
  }

  removeQuantity(i: number) {
    this.FlightCustomerDetails().removeAt(i);
  }

  onSubmit() {

    this.flightB=this.productForm.value
    console.log(this.flightB)
    const formData: FormData = new FormData();
    // formData.append('RoomImagesUplode', this.RoomImagesUplode);
    // formData.append('RoomNumber',String(this.fileForm.value.RoomNumber));
    // formData.append('description', String(this.fileForm.value.description));
    // formData.append('RoomTypeRefID', String(this.fileForm.value.RoomTypeRefID));
    // formData.append('RoomLevel', String(this.fileForm.value.RoomLevel));
    // formData.append('RoomPrice', String(this.fileForm.value.RoomPrice));
    // console.log(this.productForm.value);  
  }

}
