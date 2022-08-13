import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookingFlightService {
  baseApiUrl:string = environment.baseApiUrl;

  constructor(private http:HttpClient){}

  Getallrecord():Observable<any>{
    return this.http.get<any>(this.baseApiUrl+'/api/FlightBookingDTOes')
  }

  Getbyflight(id:number):Observable<any>{
    console.log("Servoices  :"+id)
    return this.http.get<any>(this.baseApiUrl+'/api/FlightBookingDTOes/'+id)
  }

}
