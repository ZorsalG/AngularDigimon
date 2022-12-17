import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DigimonService {
  private API_URL = "https://digimon-api.vercel.app/api/digimon";

  constructor(public http:HttpClient) { 
  
  }
  public getDigimones():Observable<any>{
    return this.http.get(this.API_URL);
  }
}
