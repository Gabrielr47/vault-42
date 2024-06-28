import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  input,
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { CategoryDetailComponent } from '@app/feature/categories/components/category-detail/category-detail.component';
import { HeroSectionComponent } from '@app/shared/components/hero-section/hero-section.component';
import { GetProductListBySlugQuery } from '@app/core/graphql/product.graphql.generated';
import { ProductService } from '@app/core/product.service';
import { AssetImageUrlPipe } from '@app/shared/pipes/asset-image-url.pipe';
import { IonicModule, ToastController } from '@ionic/angular';
import { Observable, interval, map, startWith } from 'rxjs';

export interface CountDown {
  hours: number;
  minutes: number;
  seconds: number;
}

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    IonicModule,
    AssetImageUrlPipe,
    CommonModule,
    RouterModule,
    HeroSectionComponent,
    CategoryDetailComponent,
  ],
})
export class ProductDetailComponent implements OnInit {
  slug = input('');

  product$: Observable<GetProductListBySlugQuery['getProductList']> | undefined;
  countdown$: Observable<CountDown> | undefined;

  constructor(
    private productService: ProductService,
    private toastController: ToastController,
  ) {}

  ngOnInit() {
    this.product$ = this.productService
      .getProductListBySlug(this.slug())
      .valueChanges.pipe(map((result) => result.data.getProductList));

    this.countdown$ = interval(1000).pipe(
      startWith(0),
      map(() => {
        const timeLeft = this.getTimeUntilMidnight();
        const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
        const seconds = Math.floor((timeLeft / 1000) % 60);
        return { hours, minutes, seconds };
      }),
    );
  }

  getTimeUntilMidnight() {
    const now = new Date() as Date;
    const midnight = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() + 1,
      0,
      0,
      0,
      0,
    ) as Date;
    return midnight.getTime() - now.getTime();
  }

  onAddToCard(productName: string) {
    this.toastController
      .create({
        message: `TODO: Add ${productName} to cart`,
        duration: 2000,
      })
      .then((toast) => toast.present());
  }
}
