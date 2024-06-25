import { Injectable } from '@angular/core';

const ASSETS_URL = 'https://assets.takeshape.io';

@Injectable({
  providedIn: 'root',
})
export class AssetsService {
  constructor() {}

  getImageUrl(path: string) {
    return `${ASSETS_URL}/${path}`;
  }
}
