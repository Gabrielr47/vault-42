import { Injectable } from '@angular/core';
import {
  GetAllProductsFromCategoryGQL,
  GetCategoryBySlugGQL,
  GetCategoryListGQL,
} from 'src/types';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(
    private getCategoryListGQL: GetCategoryListGQL,
    private getCategoryBySlugGQL: GetCategoryBySlugGQL,
    private getAllProductsFromCategoryGQL: GetAllProductsFromCategoryGQL
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

  getAllProductsFromCategory(slug: string) {
    return this.getAllProductsFromCategoryGQL.watch({
      where: {
        category: {
          slug: {
            eq: slug,
          },
        },
      },
    });
  }
}
