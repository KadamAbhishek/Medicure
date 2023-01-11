import { Component, OnInit } from '@angular/core';
import { Category } from '../Service/obj classes/category';
import { CategoryService } from '../Service/category.service';
import { MedicineService } from '../Service/medicine.service';
import { Allopathy } from '../Service/obj classes/medicinecat1';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public categories!: Category[];
  public allopathies!: Allopathy[];

  constructor(private cateService: CategoryService, private medService: MedicineService) { }
  
  ngOnInit(): void {
    this.cateService.getCategory().subscribe(data=> this.categories=data);

    this.medService.getAllopathy().subscribe(data=> this.allopathies=data);
  }

}
