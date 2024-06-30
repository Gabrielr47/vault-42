import { ChangeDetectionStrategy, Component } from '@angular/core';
@Component({
  selector: 'app-root',
  template: `
    <ion-app>
      <app-sidenav />
    </ion-app>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
