import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { IonSearchbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IonSearchbar],
})
export class SearchComponent {
  placeholder = input('Search for seeds or plants');

  constructor() {}
}
