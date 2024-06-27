import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  input,
} from '@angular/core';
import { GetAllProductsFromCategoryQuery } from '@app/core/graphql/category.graphql.generated';
import { CategoryService } from '@app/core/category.service';
import { Observable, map } from 'rxjs';
import { AssetImageUrlPipe } from '@app/pipes/asset-image-url.pipe';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { SkeletonLoadingComponent } from '@app/components/skeleton-loading/skeleton-loading.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    IonicModule,
    AssetImageUrlPipe,
    CommonModule,
    SkeletonLoadingComponent,
    RouterModule,
  ],
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
