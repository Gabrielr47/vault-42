import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotFoundPageRoutingModule } from './not-found-routing.module';

import { NotFoundPage } from './not-found.page';
import { SearchComponent } from '@app/components/search/search.component';
import { HeroSectionComponent } from '@app/components/hero-section/hero-section.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotFoundPageRoutingModule,
    SearchComponent,
    HeroSectionComponent,
  ],
  declarations: [NotFoundPage],
})
export class NotFoundPageModule {}
