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
  category$: Observable<any> | undefined;
  component = CategoriesPage;
  constructor(
    private route: ActivatedRoute,
    private readonly categoryService: CategoryService
  ) {}

  ngOnInit() {
    const slug = this.route.snapshot.paramMap.get('slug');
    const id = this.route.snapshot.queryParams['id'];
    this.category$ = this.categoryService.getCategory(id).valueChanges.pipe(
      map((result: any) => {
        return result.data.getCategory;
      })
    );
  }
}
