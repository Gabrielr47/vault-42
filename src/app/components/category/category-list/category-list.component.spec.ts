import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CategoryListComponent } from './category-list.component';
import { SkeletonLoadingComponent } from '@app/components/skeleton-loading/skeleton-loading.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ApolloTestingModule } from 'apollo-angular/testing';

describe('CategoryListComponent', () => {
  let component: CategoryListComponent;
  let fixture: ComponentFixture<CategoryListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [],
      providers: [],
      imports: [
        IonicModule.forRoot(),
        CommonModule,
        RouterModule,
        SkeletonLoadingComponent,
        ApolloTestingModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CategoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
