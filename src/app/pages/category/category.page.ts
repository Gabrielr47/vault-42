import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '@app/services/category.service';
import { Observable, map } from 'rxjs';
import { CategoriesPage } from '../categories/categories.page';

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
