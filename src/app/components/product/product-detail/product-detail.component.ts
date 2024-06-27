import { Component, OnInit, input } from '@angular/core';
import { GetProductListBySlugQuery } from '@app/core/graphql/product.graphql.generated';
import { ProductService } from '@app/core/product.service';
import { ToastController } from '@ionic/angular';
import { Observable, interval, map, startWith } from 'rxjs';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  slug = input('');
  product$: Observable<GetProductListBySlugQuery['getProductList']> | undefined;
  countdown$ = interval(1000).pipe(
    startWith(0),
    map(() => {
      const timeLeft = this.getTimeUntilMidnight();
      const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
      const seconds = Math.floor((timeLeft / 1000) % 60);
      return { hours, minutes, seconds };
    }),
  );

  constructor(
    private productService: ProductService,
    private toastController: ToastController,
  ) {}

  ngOnInit() {
    this.product$ = this.productService
      .getProductListBySlug(this.slug())
      .valueChanges.pipe(map((result) => result.data.getProductList));
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
        message: `Added ${productName} to cart`,
        duration: 2000,
      })
      .then((toast) => toast.present());
  }
}
