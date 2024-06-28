import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryPage implements OnInit {
  slug: string | undefined;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.slug = this.route.snapshot.paramMap.get('slug') as string;
  }
}
