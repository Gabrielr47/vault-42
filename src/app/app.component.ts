import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/folder/home', icon: 'home' },
    { title: 'Categories', url: '/folder/categories', icon: 'albums' },
    { title: 'Seeds and Plants', url: '/folder/products', icon: 'leaf' },
    { title: 'About', url: '/folder/about', icon: 'balloon' },
  ];
  constructor() {}
}
