import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
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
  categoryList$: Observable<any> | undefined;

  constructor(private readonly categoryService: CategoryService) {}

  ngOnInit(): void {
    this.categoryList$ = this.categoryService
      .getCategoryList()
      .valueChanges.pipe(
        map((result: any) => {
          return result.data.getCategoryList.items || [];
        })
      );
  }
}
