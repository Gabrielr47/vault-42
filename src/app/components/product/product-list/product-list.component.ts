import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ProductService } from '@app/services/product.service';
import { InfiniteScrollCustomEvent } from '@ionic/angular';
import {
  BehaviorSubject,
  Observable,
  debounceTime,
  map,
  scan,
  switchMap,
  tap,
} from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListComponent implements OnInit {
  private readonly productSize = 20;
  private productFrom$ = new BehaviorSubject<number>(this.productSize);

  productList$: Observable<any> | undefined;
  #currentInfiniteEvent!: InfiniteScrollCustomEvent | null;

  constructor(private readonly productService: ProductService) {}

  ngOnInit() {
    this.productList$ = this.productFrom$.pipe(
      switchMap(
        (from) =>
          this.productService.getProductList(this.productSize, from)
            .valueChanges
      ),
      debounceTime(500),
      tap(() => {
        if (this.#currentInfiniteEvent) {
          this.#currentInfiniteEvent.target.complete();
          this.#currentInfiniteEvent = null;
        }
      }),
      map((result: any) => result?.data?.getProductList),
      scan((acc, value) => ({
        items: [...acc.items, ...value.items],
        total: value.total,
      }))
    );
  }

  onIonInfinite(event: InfiniteScrollCustomEvent) {
    this.#currentInfiniteEvent = event as InfiniteScrollCustomEvent;
    this.productFrom$.next(this.productFrom$.value + this.productSize);
  }
}
