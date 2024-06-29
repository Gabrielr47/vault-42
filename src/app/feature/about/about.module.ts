import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AboutPageRoutingModule } from './about-routing.module';

import { AboutPage } from './about.page';
import { SearchComponent } from '@app/shared/components/search/search.component';
import { HeroSectionComponent } from '@app/shared/components/hero-section/hero-section.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AboutPageRoutingModule,
    SearchComponent,
    HeroSectionComponent,
  ],
  declarations: [AboutPage],
})
export class AboutPageModule {}
