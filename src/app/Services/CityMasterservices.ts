import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment";

import { Observable } from "rxjs";

import { cityDto } from "../Models/City/cityDto";

import { state } from "../Models/City/State";
import { CityMaster } from "../Models/City/CityModels";
import { Country } from "../Models/City/Country";
import { Dropdown } from "../Models/City/Dropdown";


@Injectable({providedIn:'root'})
export class Citymasterservices{

  baseApiUrl:string = environment.baseApiUrl;
  constructor(private http:HttpClient){}
  GetallCity():Observable<CityMaster[]>{
    return this.http.get<CityMaster[]>(this.baseApiUrl+'/api/CityMasterdtoes/GetCityMasterdto')
  }
  CityByID(id:number):Observable<CityMaster>{
    console.log("services" +id)
    return this.http.get<CityMaster>(this.baseApiUrl+'/api/CityMasterdtoes/GetCityMasterdto/'+id)
  }
  UpdateCity(city:cityDto):Observable<CityMaster>
  {
    return this.http.put<CityMaster>(this.baseApiUrl+'/api/CityMasterdtoes/'+city.id,city)
  }  
  addcity( city:cityDto):Observable<CityMaster>
  {

    return this.http.post<CityMaster>(this.baseApiUrl+'/api/CityMasterdtoes/',city)
  }  
  getallconter():Observable<Country[]>
  {
    return this.http.get<Country[]>(this.baseApiUrl+'/api/Countries')
  }

  getBycont(id:number):Observable<Dropdown[]>
  {
    console.log("getBycont"+id)
   
    return this.http.get<Dropdown[]>(this.baseApiUrl+'/api/CityMasterdtoes/Get02/'+id)
  }

  deleteCity(id:number):Observable<state[]>
  { 
    
      return this.http.delete<state[]>(this.baseApiUrl+'/api/CityMasterdtoes/'+id)
  }

}