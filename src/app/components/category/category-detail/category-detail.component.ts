import { Component, OnInit, input } from '@angular/core';
import { Category } from '@app/models/category.model';
import { CategoryService } from '@app/services/category.service';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.scss'],
})
export class CategoryDetailComponent implements OnInit {
  slug = input('');
  category$: Observable<Category> | undefined;

  constructor(private readonly categoryService: CategoryService) {}

  ngOnInit() {
    this.category$ = this.categoryService
      .getCategoryBySlug(this.slug())
      .valueChanges.pipe(
        // TODO: Add error handling and fix the type of the result
        map((result: any) => result?.data?.getCategoryList.items[0] as Category)
      );
  }
}
