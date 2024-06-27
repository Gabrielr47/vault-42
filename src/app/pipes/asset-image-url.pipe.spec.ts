import { AssetImageUrlPipe } from './asset-image-url.pipe';

describe('AssetImageUrlPipe', () => {
  describe('AssetImageUrlPipe', () => {
    let pipe: AssetImageUrlPipe;

    beforeEach(() => {
      pipe = new AssetImageUrlPipe();
    });

    it('should create an instance', () => {
      expect(pipe).toBeTruthy();
    });

    it('should return the correct asset image URL', () => {
      const value = 'abc123';
      const expectedUrl = 'https://assets.takeshape.io/abc123';
      const transformedUrl = pipe.transform(value);
      expect(transformedUrl).toEqual(expectedUrl);
    });

    it('should return an empty string if the asset value is empty', () => {
      const value = '';
      const transformedUrl = pipe.transform(value);
      expect(transformedUrl).toEqual('');
    });
  });
});
