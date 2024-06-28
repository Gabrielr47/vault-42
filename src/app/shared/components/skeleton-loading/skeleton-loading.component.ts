import {
  ChangeDetectionStrategy,
  Component,
  input,
  OnInit,
} from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-skeleton-loading',
  templateUrl: './skeleton-loading.component.html',
  styleUrls: ['./skeleton-loading.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IonicModule],
  standalone: true,
})
export class SkeletonLoadingComponent implements OnInit {
  items = input<number>(10);
  itemsArray = Array().fill(0);

  constructor() {}

  ngOnInit() {
    this.itemsArray = Array(this.items()).fill(0);
  }
}
