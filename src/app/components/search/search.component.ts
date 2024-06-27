import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  input,
} from '@angular/core';
import { ProductService } from '@app/core/product.service';
import {
  BehaviorSubject,
  Observable,
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
  switchMap,
} from 'rxjs';
import { GetProductListQuery } from '@app/core/graphql/product.graphql.generated';
import { AsyncPipe } from '@angular/common';
import { AssetImageUrlPipe } from '@app/pipes/asset-image-url.pipe';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    AsyncPipe,
    AssetImageUrlPipe,
    RouterModule,
    IonicModule,
    FormsModule,
  ],
})
export class SearchComponent implements OnInit {
  placeholder = input('Search for seeds and plants');
  searchQuery$ = new BehaviorSubject<string>('');
  searchTerm = '';
  minSearchLength = 2;
  products$: Observable<GetProductListQuery['getProductList']> | undefined;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.products$ = this.initSearch();
  }

  onSearchInput(event: CustomEvent) {
    this.searchQuery$.next(event.detail.value);
    if (event.detail.value.length < this.minSearchLength) {
      this.products$ = this.initSearch();
    }
  }

  onSearchClear() {
    this.searchQuery$.next('');
    this.searchTerm = '';
    this.products$ = this.initSearch();
  }

  initSearch() {
    return this.searchQuery$.pipe(
      filter((searchTerm) => searchTerm.length > this.minSearchLength),
      debounceTime(500),
      distinctUntilChanged(),
      switchMap((query) =>
        this.productService
          .getProductsQuery(query)
          .valueChanges.pipe(map((result) => result.data.getProductList)),
      ),
    );
  }
}
