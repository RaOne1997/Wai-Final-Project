import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class Account {
  baseApiUrl:string = environment.baseApiUrl;
  constructor(private http:HttpClient){}
  login(userid:string="Abhijeet",password:string="Abhi@123"):Observable<any[]>{
    return this.http.get<any[]>(`${this.baseApiUrl}/api/AccountDTO/${userid}/${password}`)
  }
}