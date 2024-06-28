import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductsPage } from './products.page';
import { ProductListComponent } from '@app/feature/products/components/product-list/product-list.component';
import { ApolloTestingModule } from 'apollo-angular/testing';
import { SearchComponent } from '@app/shared/components/search/search.component';
import { IonicModule } from '@ionic/angular';

describe('ProductsPage', () => {
  let component: ProductsPage;
  let fixture: ComponentFixture<ProductsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        IonicModule,
        SearchComponent,
        ProductListComponent,
        ApolloTestingModule,
      ],
      declarations: [ProductsPage],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the ProductsPage', () => {
    expect(component).toBeTruthy();
  });
});
