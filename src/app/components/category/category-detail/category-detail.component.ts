import { Component, OnInit, input } from '@angular/core';
import { GetAllProductsFromCategoryQuery } from '@app/core/graphql/category.graphql.generated';
import { CategoryService } from '@app/core/category.service';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.scss'],
})
export class CategoryDetailComponent implements OnInit {
  slug = input('');
  allProductsFromCategory$:
    | Observable<GetAllProductsFromCategoryQuery['getProductList']>
    | undefined;

  constructor(private readonly categoryService: CategoryService) {}

  ngOnInit() {
    this.allProductsFromCategory$ = this.categoryService
      .getAllProductsFromCategory(this.slug())
      .valueChanges.pipe(map((result) => result.data.getProductList));
  }
}
