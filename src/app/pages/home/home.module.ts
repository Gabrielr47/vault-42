import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { SearchComponent } from '@app/components/search/search.component';
import { CategoryListComponent } from '@app/components/category/category-list/category-list.component';
import { HeroSectionComponent } from '@app/components/hero-section/hero-section.component';

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
