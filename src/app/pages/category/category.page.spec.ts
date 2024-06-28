import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { CategoryPage } from './category.page';

import { IonicModule } from '@ionic/angular';
import { SearchComponent } from '@app/components/search/search.component';
import { CategoryDetailComponent } from '@app/components/category/category-detail/category-detail.component';
import { ApolloTestingModule } from 'apollo-angular/testing';

describe('CategoryPage', () => {
  let component: CategoryPage;
  let fixture: ComponentFixture<CategoryPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CategoryPage],
      imports: [
        IonicModule,
        SearchComponent,
        CategoryDetailComponent,
        ApolloTestingModule,
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get: () => 'category-slug',
              },
            },
          },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize slug with the correct value', () => {
    expect(component.slug).toBe('category-slug');
  });
});
