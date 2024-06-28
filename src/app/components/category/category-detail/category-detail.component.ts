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
import { HeroSectionComponent } from '@app/components/hero-section/hero-section.component';

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
  // it might happen that we want to exclude a product from the list
  // one scenario is when we are on the product detail page and we want to show related products
  excludeProductId = input('');

  allProductsFromCategory$:
    | Observable<GetAllProductsFromCategoryQuery['getProductList']>
    | undefined;

  constructor(private readonly categoryService: CategoryService) {}

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
