import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-not-found',
  template: `
    <app-search />
    <ion-content [fullscreen]="true">
      <app-hero-section
        imageName="hero-section-not-found"
        imageAlt="404 Page Not Found"
        title="404"
        subtitle="Page not found"
        buttonText="Go to Home"
        buttonLink="/"
      />
    </ion-content>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotFoundPage {}
