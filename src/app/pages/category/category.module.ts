import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoryPageRoutingModule } from './category-routing.module';

import { CategoryPage } from './category.page';
import { AssetImageUrlPipe } from '@app/pipes/asset-image-url.pipe';
import { SearchComponent } from '@app/components/search/search.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoryPageRoutingModule,
    AssetImageUrlPipe,
    SearchComponent,
  ],
  declarations: [CategoryPage],
})
export class CategoryPageModule {}
