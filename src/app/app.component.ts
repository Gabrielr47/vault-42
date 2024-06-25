import { ChangeDetectionStrategy, Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Categories', url: '/categories', icon: 'albums' },
    { title: 'Seeds and Plants', url: '/products', icon: 'leaf' },
    { title: 'About', url: '/about', icon: 'balloon' },
  ];
  constructor() {}
}
