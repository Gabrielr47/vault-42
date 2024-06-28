import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProductListComponent } from './product-list.component';
import { ApolloTestingModule } from 'apollo-angular/testing';
import { CommonModule } from '@angular/common';
import { SkeletonLoadingComponent } from '@app/shared/components/skeleton-loading/skeleton-loading.component';
import { RouterModule } from '@angular/router';

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [
        IonicModule.forRoot(),
        CommonModule,
        RouterModule,
        SkeletonLoadingComponent,
        ApolloTestingModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
