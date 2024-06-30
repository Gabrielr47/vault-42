import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  input,
} from '@angular/core';
import { AssetImageUrlPipe } from '@app/shared/pipes/asset-image-url.pipe';
import { CategoryService } from '@app/core/category.service';
import { Observable, map } from 'rxjs';
import { GetCategoryListQuery } from '@app/core/graphql/category.graphql.generated';
import { IonicModule } from '@ionic/angular';
import { AsyncPipe, CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SkeletonLoadingComponent } from '@app/shared/components/skeleton-loading/skeleton-loading.component';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    IonicModule,
    AssetImageUrlPipe,
    CommonModule,
    RouterModule,
    SkeletonLoadingComponent,
  ],
})
export class CategoryListComponent implements OnInit {
  categoryList$:
    | Observable<GetCategoryListQuery['getCategoryList']>
    | undefined;

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.categoryList$ = this.categoryService
      .getCategoryList()
      .valueChanges.pipe(map((result) => result.data.getCategoryList));
  }
}
