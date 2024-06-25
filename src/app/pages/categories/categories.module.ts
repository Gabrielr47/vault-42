import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoriesPageRoutingModule } from './categories-routing.module';

import { CategoriesPage } from './categories.page';
import { CategoryListComponent } from '@app/components/category/category-list/category-list.component';
import { AssetImageUrlPipe } from '@app/pipes/asset-image-url.pipe';

@NgModule({
  declarations: [CategoriesPage, CategoryListComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoriesPageRoutingModule,
    AssetImageUrlPipe,
  ],
})
export class CategoriesPageModule {}
