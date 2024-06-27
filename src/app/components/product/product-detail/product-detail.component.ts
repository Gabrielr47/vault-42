import { Component, OnInit, input } from '@angular/core';
import { GetProductListBySlugQuery } from '@app/core/graphql/product.graphql.generated';
import { ProductService } from '@app/core/product.service';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  slug = input('');
  product$: Observable<GetProductListBySlugQuery['getProductList']> | undefined;
  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.product$ = this.productService
      .getProductListBySlug(this.slug())
      .valueChanges.pipe(map((result) => result.data.getProductList));
  }
}
