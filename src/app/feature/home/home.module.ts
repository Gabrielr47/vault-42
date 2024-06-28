import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { SearchComponent } from '@app/shared/components/search/search.component';
import { CategoryListComponent } from '@app/feature/categories/components/category-list/category-list.component';
import { HeroSectionComponent } from '@app/shared/components/hero-section/hero-section.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    SearchComponent,
    CategoryListComponent,
    HeroSectionComponent,
  ],
  declarations: [HomePage],
})
export class HomePageModule {}
