import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Allopathy } from './obj classes/medicinecat1';

@Injectable({
  providedIn: 'root'
})
export class MedicineService {

  url1 : string="http://localhost:3000/Allopathy";

  constructor(private http :HttpClient) { }

  getAllopathy() : Observable<Allopathy[]>{
    return this.http.get<Allopathy[]>(this.url1);
  }
}
