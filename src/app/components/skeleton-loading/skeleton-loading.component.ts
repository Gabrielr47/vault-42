import {
  ChangeDetectionStrategy,
  Component,
  input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-skeleton-loading',
  templateUrl: './skeleton-loading.component.html',
  styleUrls: ['./skeleton-loading.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkeletonLoadingComponent implements OnInit {
  items = input<number>(10);
  itemsArray = Array().fill(0);

  constructor() {}

  ngOnInit() {
    this.itemsArray = Array(this.items()).fill(0);
  }
}
