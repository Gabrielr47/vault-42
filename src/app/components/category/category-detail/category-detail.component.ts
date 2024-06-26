import { Component, OnInit, input } from '@angular/core';
import { GetCategoryBySlugQuery } from '@app/graphql.generated';
import { CategoryService } from '@app/services/category.service';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.scss'],
})
export class CategoryDetailComponent implements OnInit {
  slug = input('');
  category$: Observable<GetCategoryBySlugQuery['getCategoryList']> | undefined;

  constructor(private readonly categoryService: CategoryService) {}

  ngOnInit() {
    this.category$ = this.categoryService
      .getCategoryBySlug(this.slug())
      .valueChanges.pipe(map((result) => result.data.getCategoryList));
  }
}
