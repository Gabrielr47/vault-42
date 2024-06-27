import { Pipe, PipeTransform } from '@angular/core';

const ASSETS_URL = 'https://assets.takeshape.io';

@Pipe({
  name: 'assetImageUrl',
  standalone: true,
})
export class AssetImageUrlPipe implements PipeTransform {
  transform(value: string): string {
    return value ? `${ASSETS_URL}/${value}` : '';
  }
}
