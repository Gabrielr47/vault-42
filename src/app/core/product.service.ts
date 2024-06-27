import { Injectable } from '@angular/core';
import {
  GetProductListBySlugGQL,
  GetProductListGQL,
  GetProductsQueryGQL,
} from 'src/types';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(
    private getProductListGQL: GetProductListGQL,
    private getProductListBySlugGQL: GetProductListBySlugGQL,
    private getProductsQueryGQL: GetProductsQueryGQL,
  ) {}

  getProductList(size: number, from: number) {
    return this.getProductListGQL.watch({
      size,
      from,
    });
  }

  getProductListBySlug(slug: string) {
    return this.getProductListBySlugGQL.watch({
      where: {
        slug: {
          eq: slug,
        },
      },
    });
  }

  getProductsQuery(query: string) {
    return this.getProductsQueryGQL.watch({
      query,
    });
  }
}
