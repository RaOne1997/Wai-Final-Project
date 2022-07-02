import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment";

import { Observable } from "rxjs";
import { CityMaster } from "../Models/CityModels";
import { cityDto } from "../Models/cityDto";


@Injectable({providedIn:'root'})
export class Citymasterservices{

  baseApiUrl:string = environment.baseApiUrl;
  constructor(private http:HttpClient){}
  getBooks():Observable<CityMaster[]>{
    return this.http.get<CityMaster[]>(this.baseApiUrl+'/api/CityMasters')
  }


  findproduct(id:number):Observable<CityMaster>{
    console.log("services" +id)
    return this.http.get<CityMaster>(this.baseApiUrl+'/api/CityMasters/'+id)
  }

  
  addcity( city:cityDto):Observable<CityMaster>{

    return this.http.post<CityMaster>(this.baseApiUrl+'/api/CityMasters/',city)
  }
  

}