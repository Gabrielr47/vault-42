import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import {
  GET_CATEGORY_BY_SLUG,
  GET_CATEGORY_LIST,
} from './category.graphql.query';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private readonly apollo: Apollo) {}

  getCategoryList() {
    return this.apollo.watchQuery({
      query: GET_CATEGORY_LIST,
    });
  }

  getCategoryBySlug(slug: string) {
    return this.apollo.watchQuery({
      query: GET_CATEGORY_BY_SLUG,
      variables: {
        where: {
          slug: {
            eq: slug,
          },
        },
      },
    });
  }
}
