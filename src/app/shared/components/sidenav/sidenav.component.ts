import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [IonicModule, RouterModule],
})
export class SidenavComponent {
  appTitle = 'Vault 42';
  appSubtitle = 'Would largest Seeds and Plants shop';
  appPages = [
    { title: 'Home', url: '/', icon: 'home' },
    { title: 'Categories', url: '/categories', icon: 'albums' },
    { title: 'Seeds and Plants', url: '/products', icon: 'leaf' },
    { title: 'About', url: '/about', icon: 'balloon' },
  ];
}
