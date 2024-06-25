import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AssetsService } from '@app/services/assets.service';
import { CategoryService } from '@app/services/category.service';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryListComponent implements OnInit {
  categoryList$: Observable<any> | undefined;

  constructor(
    private readonly categoryService: CategoryService,
    private readonly assetsService: AssetsService
  ) {}

  ngOnInit(): void {
    this.categoryList$ = this.categoryService
      .getCategoryList()
      .valueChanges.pipe(
        map((result: any) => {
          return result.data.getCategoryList.items || [];
        })
      );
  }

  getImageUrl(path: string) {
    return this.assetsService.getImageUrl(path);
  }
}
