import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from './obj classes/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  
  url : string="http://localhost:3000/category";

  constructor(private http : HttpClient) { }

  getCategory(): Observable<Category[]>{
    return this.http.get<Category[]>(this.url);
  }
}
