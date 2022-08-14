import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FlightBooking } from '../Models/FlightBooking';
import { bookinginput } from '../Models/room/inputforn';

@Injectable({
  providedIn: 'root'
})
export class BookingFlightService {
  baseApiUrl:string = environment.baseApiUrl;

  constructor(private http:HttpClient){}

  Getallrecord():Observable<FlightBooking[]>{
    return this.http.get<FlightBooking[]>(this.baseApiUrl+'/api/FlightBookingDTOes')
  }

  Getbyflight(id:number):Observable<bookinginput>{
    console.log("Servoices  : "+id)
    return this.http.get<bookinginput>(this.baseApiUrl+'/api/FlightBookingDTOes/GetFlighO/'+id)
  }

}
