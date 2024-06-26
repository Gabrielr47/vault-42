import { Injectable } from '@angular/core';
import {
  GetCategoryBySlugGQL,
  GetCategoryListGQL,
} from '@app/graphql.generated';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(
    private getCategoryListGQL: GetCategoryListGQL,
    private getCategoryBySlugGQL: GetCategoryBySlugGQL
  ) {}

  getCategoryList() {
    return this.getCategoryListGQL.watch();
  }

  getCategoryBySlug(slug: string) {
    return this.getCategoryBySlugGQL.watch({
      where: {
        slug: {
          eq: slug,
        },
      },
    });
  }
}
