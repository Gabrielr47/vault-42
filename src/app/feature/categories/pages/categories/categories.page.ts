import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  template: `
    <app-search />
    <ion-content [fullscreen]="true">
      <app-category-list />
    </ion-content>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoriesPage {}
