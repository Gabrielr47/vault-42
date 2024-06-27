import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoriesPageRoutingModule } from './categories-routing.module';

import { CategoriesPage } from './categories.page';
import { AssetImageUrlPipe } from '@app/pipes/asset-image-url.pipe';
import { SearchComponent } from '@app/components/search/search.component';
import { CategoryListComponent } from '@app/components/category/category-list/category-list.component';

@NgModule({
  declarations: [CategoriesPage],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoriesPageRoutingModule,
    AssetImageUrlPipe,
    SearchComponent,
    CategoryListComponent,
  ],
})
export class CategoriesPageModule {}
