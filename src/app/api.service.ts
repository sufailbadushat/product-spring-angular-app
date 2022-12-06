import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  constructor(private http:HttpClient) { }

  fetchCourse=()=>{
    return this.http.get("http://localhost:8080/viewAll");

  addProduct = (dataToSend: any) => {
    return this.http.post("http://localhost:8080/add", dataToSend);

  }
}
