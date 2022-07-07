import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RoomModel } from '../Models/room/Roomdto';


@Injectable({
  providedIn: 'root'
})
export class RoomServicesService {

  baseApiUrl:string = environment.baseApiUrl;
  constructor(private http:HttpClient){}


  GetallRoom():Observable<any[]>{
    return this.http.get<any[]>(this.baseApiUrl+'/api/RoomDTOes')
  }

  GetRoomByID(id:number):Observable<RoomModel>{
    return this.http.get<RoomModel>(this.baseApiUrl+'/api/RoomDTOes/'+id)
  }



  Addroom(roommm:any){

    console.log( "api call" ) 
    console.log(roommm)
    return this.http.post(this.baseApiUrl+'/api/RoomDTOes', roommm,
    {
      headers : new HttpHeaders()})
    .subscribe(() => alert("File uploaded"));
  
  }
}
