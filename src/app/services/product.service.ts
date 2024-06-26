import { Injectable } from '@angular/core';
import {
  GetProductListBySlugGQL,
  GetProductListGQL,
} from '@app/graphql.generated';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(
    private getProductListGQL: GetProductListGQL,
    private getProductListBySlugGQL: GetProductListBySlugGQL
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
}
