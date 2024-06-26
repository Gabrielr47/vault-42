import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  input,
} from '@angular/core';
import { GetCategoryListQuery } from '@app/graphql.generated';
import { AssetImageUrlPipe } from '@app/pipes/asset-image-url.pipe';
import { CategoryService } from '@app/services/category.service';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [AssetImageUrlPipe],
})
export class CategoryListComponent implements OnInit {
  categoryList$:
    | Observable<GetCategoryListQuery['getCategoryList']>
    | undefined;
  isResultsTextVisible = input(false);

  constructor(private readonly categoryService: CategoryService) {}

  ngOnInit(): void {
    this.categoryList$ = this.categoryService
      .getCategoryList()
      .valueChanges.pipe(map((result) => result.data.getCategoryList));
  }
}
