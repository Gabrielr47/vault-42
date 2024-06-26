import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductsPageRoutingModule } from './products-routing.module';

import { ProductsPage } from './products.page';
import { SearchComponent } from '@app/components/search/search.component';
import { ProductListComponent } from '@app/components/product/product-list/product-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductsPageRoutingModule,
    SearchComponent,
  ],
  declarations: [ProductsPage, ProductListComponent],
})
export class ProductsPageModule {}
