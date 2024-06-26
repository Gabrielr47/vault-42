import { Injectable } from '@angular/core';
import { GET_PRODUCT_LIST } from './product.graphql.query';
import { Apollo } from 'apollo-angular';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private readonly apollo: Apollo) {}

  getProductList(size: number, from: number) {
    return this.apollo.watchQuery({
      query: GET_PRODUCT_LIST,
      variables: {
        size,
        from,
      },
    });
  }
}
