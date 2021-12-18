import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/Services/CategoryService/category.service';
import { ICategory } from 'src/app/ViewModels/Category/i-category';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
 category:ICategory[]=[];
  constructor(private categoryservice:CategoryService){}
  ngOnInit(): void {
    this.categoryservice.getcateory().subscribe(response=>
     this.category=response.data
     )
   }



}
