import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TokenloginService {
  basicurl:string =environment.baseApiUrl
  constructor(private http :HttpClient) { }


  login(login:any):Observable<any>{

    return  this.http.post<any>(this.basicurl+'/api/AccountDTO/Login',login)
  }

}
