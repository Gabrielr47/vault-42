import { TestBed } from '@angular/core/testing';
import {
  ApolloTestingController,
  ApolloTestingModule,
} from 'apollo-angular/testing';
import { CategoryService } from './category.service';
import {
  GetCategoryListGQL,
  GetCategoryBySlugGQL,
  GetAllProductsFromCategoryGQL,
} from 'src/types';

describe('CategoryService', () => {
  let service: CategoryService;
  let controller: ApolloTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ApolloTestingModule],
      providers: [CategoryService],
    });
    service = TestBed.inject(CategoryService);
    controller = TestBed.inject(ApolloTestingController);
  });

  afterEach(() => {
    controller.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call getCategoryListGQL.watch() method', () => {
    const getCategoryListGQL = TestBed.inject(GetCategoryListGQL);
    spyOn(getCategoryListGQL, 'watch').and.callThrough();

    service.getCategoryList();

    expect(getCategoryListGQL.watch).toHaveBeenCalled();
  });

  it('should call getCategoryBySlugGQL.watch() method with correct arguments', () => {
    const getCategoryBySlugGQL = TestBed.inject(GetCategoryBySlugGQL);
    spyOn(getCategoryBySlugGQL, 'watch').and.callThrough();

    const slug = 'example-slug';
    service.getCategoryBySlug(slug);

    expect(getCategoryBySlugGQL.watch).toHaveBeenCalledWith({
      where: {
        slug: {
          eq: slug,
        },
      },
    });
  });

  it('should call getAllProductsFromCategoryGQL.watch() method with correct arguments', () => {
    const getAllProductsFromCategoryGQL = TestBed.inject(
      GetAllProductsFromCategoryGQL,
    );
    spyOn(getAllProductsFromCategoryGQL, 'watch').and.callThrough();

    const slug = 'example-slug';
    service.getAllProductsFromCategory(slug);

    expect(getAllProductsFromCategoryGQL.watch).toHaveBeenCalledWith({
      where: {
        category: {
          slug: {
            eq: slug,
          },
        },
      },
    });
  });
});
