import { Injectable } from '@angular/core';
import { GetProductListGQL } from '@app/graphql.generated';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private getProductListGQL: GetProductListGQL) {}

  getProductList(size: number, from: number) {
    return this.getProductListGQL.watch({
      size,
      from,
    });
  }
}
