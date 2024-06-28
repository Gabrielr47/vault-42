import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {
  slug: string | undefined;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.slug = this.route.snapshot.paramMap.get('slug') as string;
  }
}
