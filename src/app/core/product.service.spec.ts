import { TestBed } from '@angular/core/testing';
import {
  ApolloTestingController,
  ApolloTestingModule,
} from 'apollo-angular/testing';
import { ProductService } from './product.service';
import {
  GetProductListBySlugGQL,
  GetProductListGQL,
  GetProductsQueryGQL,
} from 'src/types';

describe('ProductService', () => {
  let productService: ProductService;
  let controller: ApolloTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ApolloTestingModule],
      providers: [ProductService],
    });

    productService = TestBed.inject(ProductService);
    controller = TestBed.inject(ApolloTestingController);
  });

  afterEach(() => {
    controller.verify();
  });

  it('should be created', () => {
    expect(productService).toBeTruthy();
  });

  it('should call getProductListGQL with the correct arguments', () => {
    const getProductListGQL = TestBed.inject(GetProductListGQL);
    spyOn(getProductListGQL, 'watch').and.callThrough();
    const size = 10;
    const from = 0;

    productService.getProductList(size, from);

    expect(getProductListGQL.watch).toHaveBeenCalledWith({
      size,
      from,
    });
  });

  it('should call getProductListBySlugGQL with the correct argument', () => {
    const getProductListBySlugGQL = TestBed.inject(GetProductListBySlugGQL);
    spyOn(getProductListBySlugGQL, 'watch').and.callThrough();
    const slug = 'example-slug';

    productService.getProductListBySlug(slug);

    expect(getProductListBySlugGQL.watch).toHaveBeenCalledWith({
      where: {
        slug: {
          eq: slug,
        },
      },
    });
  });

  it('should call getProductsQueryGQL with the correct argument', () => {
    const getProductsQueryGQL = TestBed.inject(GetProductsQueryGQL);
    spyOn(getProductsQueryGQL, 'watch').and.callThrough();
    const query = 'example-query';

    productService.getProductsQuery(query);

    expect(getProductsQueryGQL.watch).toHaveBeenCalledWith({
      query,
    });
  });
});
