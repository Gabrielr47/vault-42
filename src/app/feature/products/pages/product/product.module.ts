import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductPageRoutingModule } from './product-routing.module';

import { ProductPage } from './product.page';
import { ProductDetailComponent } from '@app/feature/products/components/product-detail/product-detail.component';
import { AssetImageUrlPipe } from '@app/shared/pipes/pipes/asset-image-url.pipe';
import { SearchComponent } from '@app/shared/components/search/search.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductPageRoutingModule,
    AssetImageUrlPipe,
    SearchComponent,
    ProductDetailComponent,
  ],
  declarations: [ProductPage],
})
export class ProductPageModule {}
