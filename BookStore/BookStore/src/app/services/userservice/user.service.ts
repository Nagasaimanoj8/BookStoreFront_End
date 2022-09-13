import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpservice/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  token: any;

  constructor(private http:HttpService) { }
  register(data:any){
    let header={
      headers:new HttpHeaders({
        'Content-Type': 'multipart/form-data'
      })
    }
    return this.http.postservice('http://127.0.0.1:8000/api/register',data,false,header)
  }
  signin(data:any){
    let header={
      headers:new HttpHeaders({
        'Content-Type': 'multipart/form-data' 
        
      })
    }
    return this.http.postservice('http://127.0.0.1:8000/api/login',data,false,header)

  }
  AddressService(data: any) {
    console.log(data);
    this.token = localStorage.getItem("token")
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.token,
      }),
    };
    return this.http.postservice('http://127.0.0.1:8000/api/addAddress', data, true, header);
  }
}
