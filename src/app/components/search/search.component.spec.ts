import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SearchComponent } from './search.component';
import { ApolloTestingModule } from 'apollo-angular/testing';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [],
      providers: [],
      imports: [IonicModule.forRoot(), ApolloTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize searchQuery$ with an empty string', () => {
    expect(component.searchQuery$.getValue()).toEqual('');
  });

  it('should update searchQuery$ when onSearchInput is called', () => {
    const event = { detail: { value: 'plants' } } as CustomEvent;
    component.onSearchInput(event);
    expect(component.searchQuery$.getValue()).toEqual('plants');
  });

  it('should clear searchQuery$ when onSearchClear is called', () => {
    component.searchQuery$.next('seeds');
    component.onSearchClear();
    expect(component.searchQuery$.getValue()).toEqual('');
  });

  it('should call initSearch when ngOnInit is called', () => {
    spyOn(component, 'initSearch');
    component.ngOnInit();
    expect(component.initSearch).toHaveBeenCalled();
  });
});
