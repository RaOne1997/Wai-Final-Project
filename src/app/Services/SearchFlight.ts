import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Searchflightresult } from "../Models/serchflight";

@Injectable({providedIn:'root'})
export class FlightSearch{

  baseApiUrl:string = environment.baseApiUrl;
  constructor(private http:HttpClient){}


  getsearchFlight(from:string ,to:string,dept:any):Observable<Searchflightresult[]>{
    return this.http.get<Searchflightresult[]>(`${this.baseApiUrl}/api/FlightScheduleDTOes/${from}/${to}/${dept}`)
  }

}