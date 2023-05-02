import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QueServiceService {

  constructor(private http:HttpClient) { }

  get(){
    return this.http.get("assets/db.json");
  }
}
