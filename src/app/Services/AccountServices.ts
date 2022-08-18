import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Regristration } from '../Models/Account/regrstration';

@Injectable({
  providedIn: 'root'
})
export class Account {
  baseApiUrl:string = environment.baseApiUrl;
  constructor(private http:HttpClient){}
  login(userid:string="Abhijeet",password:string="Abhi@123"):Observable<any>{
    return this.http.get<any>(`${this.baseApiUrl}/api/AccountDTO/${userid}/${password}`)
  }
  signUp(user:Regristration):Observable<Regristration>{
    console.log(user)
    return this.http.post<Regristration>(this.baseApiUrl+'/api/AccountDTO',user)
  }

  getalluser(user:Regristration):Observable<Regristration>{
    console.log(user)
    return this.http.post<Regristration>(this.baseApiUrl+'/api/AccountDTO',user)
  }
  Customer(cusrinfo:any){

    console.log( "api call" ) 
    console.log(cusrinfo)
    return this.http.post(this.baseApiUrl+'/api/Customers', cusrinfo,
    {
      headers : new HttpHeaders()})
    .subscribe(() => {});
  
  }
}