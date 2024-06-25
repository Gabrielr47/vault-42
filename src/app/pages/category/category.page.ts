import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const slug = this.route.snapshot.paramMap.get('slug');
    console.log(slug);
  }
}
