import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  input,
} from '@angular/core';
import { GetAllProductsFromCategoryQuery } from '@app/core/graphql/category.graphql.generated';
import { CategoryService } from '@app/core/category.service';
import { Observable, map } from 'rxjs';
import { AssetImageUrlPipe } from '@app/shared/pipes/asset-image-url.pipe';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { SkeletonLoadingComponent } from '@app/shared/components/skeleton-loading/skeleton-loading.component';
import { RouterModule } from '@angular/router';
import { HeroSectionComponent } from '@app/shared/components/hero-section/hero-section.component';

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
    HeroSectionComponent,
  ],
})
export class CategoryDetailComponent implements OnInit {
  slug = input('');
  // Exclude a product from the list, e.g., when showing related products on the product detail page
  excludeProductId = input('');

  allProductsFromCategory$:
    | Observable<GetAllProductsFromCategoryQuery['getProductList']>
    | undefined;

  constructor(private categoryService: CategoryService) {}

  ngOnInit() {
    this.allProductsFromCategory$ = this.categoryService
      .getAllProductsFromCategory(this.slug())
      .valueChanges.pipe(
        map((result) => {
          const productList = { ...result.data.getProductList };

          if (this.excludeProductId && productList?.items) {
            productList.items = productList?.items.filter(
              (product) => product._id !== this.excludeProductId(),
            );
            productList.total = productList.items.length;
          }

          return productList as GetAllProductsFromCategoryQuery['getProductList'];
        }),
      );
  }
}
