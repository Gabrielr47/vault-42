import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductsPageRoutingModule } from './products-routing.module';

import { ProductsPage } from './products.page';
import { SearchComponent } from '@app/components/search/search.component';
import { ProductListComponent } from '@app/components/product/product-list/product-list.component';
import { AssetImageUrlPipe } from '@app/pipes/asset-image-url.pipe';
import { SkeletonLoadingComponent } from '@app/components/skeleton-loading/skeleton-loading.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductsPageRoutingModule,
    SearchComponent,
    AssetImageUrlPipe,
    SkeletonLoadingComponent,
    ProductListComponent,
  ],
  declarations: [ProductsPage],
})
export class ProductsPageModule {}
