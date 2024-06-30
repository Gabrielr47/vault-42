import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <app-search />
    <ion-content [fullscreen]="true">
      <app-hero-section
        imageName="hero-section"
        imageAlt="Vault 42"
        title="Welcome to Vault 42"
        subtitle="Preserving the Future, One Seed at a Time"
        buttonText="Shop Now"
        buttonLink="/products"
      />
      <app-category-list />
    </ion-content>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePage {}
