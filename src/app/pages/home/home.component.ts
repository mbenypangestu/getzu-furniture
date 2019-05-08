import { Component, OnInit } from '@angular/core';
// import { Category } from './shared/model/category.model';
// import { CategoryService } from './shared/service/category/category.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isCollapsed = true;
  // categoryList: Category [] = [];

  // constructor(private categorySrv : CategoryService) {
  // }

  // ngOnInit() {
  //   this.categorySrv.loadCategories()
  //     .subscribe((result)=> {
  //       console.log("finish loading");
  //       this.categoryList = result;
  //     });
  // }

}
