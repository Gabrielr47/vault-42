import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  input,
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [IonicModule, RouterModule, CommonModule],
})
export class HeroSectionComponent {
  @Input({ required: true }) imageName: string = '';
  @Input({ required: true }) imageAlt: string = '';
  @Input({ required: true }) title: string = '';
  @Input({ required: true }) subtitle: string = '';
  @Input({ required: true }) buttonText: string = '';
  @Input({ required: true }) buttonLink: string = '';
  constructor() {}
}
