import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { ProductPage } from './product.page';
import { ProductDetailComponent } from '@app/feature/products/components/product-detail/product-detail.component';
import { SearchComponent } from '@app/shared/components/search/search.component';
import { ApolloTestingModule } from 'apollo-angular/testing';
import { IonicModule } from '@ionic/angular';

describe('ProductPage', () => {
  let component: ProductPage;
  let fixture: ComponentFixture<ProductPage>;
  let activatedRoute: ActivatedRoute;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductPage],
      imports: [
        IonicModule,
        SearchComponent,
        ProductDetailComponent,
        ApolloTestingModule,
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get: () => 'product-slug',
              },
            },
          },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductPage);
    component = fixture.componentInstance;
    activatedRoute = TestBed.inject(ActivatedRoute);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize slug with the value from the route', () => {
    expect(component.slug).toBe('product-slug');
  });
});
