import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-products',
  template: `
    <app-search />
    <ion-content [fullscreen]="true">
      <app-product-list />
    </ion-content>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsPage {}
