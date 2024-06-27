import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoryPageRoutingModule } from './category-routing.module';

import { CategoryPage } from './category.page';
import { AssetImageUrlPipe } from '@app/pipes/asset-image-url.pipe';
import { SearchComponent } from '@app/components/search/search.component';
import { CategoryDetailComponent } from '@app/components/category/category-detail/category-detail.component';
import { SkeletonLoadingComponent } from '@app/components/skeleton-loading/skeleton-loading.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoryPageRoutingModule,
    AssetImageUrlPipe,
    SearchComponent,
    SkeletonLoadingComponent,
    CategoryDetailComponent,
  ],
  declarations: [CategoryPage],
})
export class CategoryPageModule {}
