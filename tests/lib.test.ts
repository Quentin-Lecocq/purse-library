import { describe, expect, it, vi } from 'vitest';
import { createGallery } from '../src/lib';
import * as scriptModule from '../src/script';

vi.mock('../src/script', () => ({
  getPhotos: vi.fn().mockResolvedValue([
    { status: 'success', imageUrl: 'test1.jpg' },
    { status: 'success', imageUrl: 'test2.jpg' },
  ]),
}));

describe('Gallery Library', () => {
  it('should create a gallery with container', () => {
    document.body.innerHTML = '<div id="test"></div>';
    const gallery = createGallery({
      container: '#test',
    });
    expect(document.querySelector('.purse-gallery')).toBeTruthy();
  });

  it('should add images to gallery', async () => {
    document.body.innerHTML = '<div id="test"></div>';
    const gallery = createGallery({
      container: '#test',
    });

    await gallery.displayPhotos([{ url: 'test1.jpg' }, { url: 'test2.jpg' }]);

    const images = document.querySelectorAll('.img-container img');
    expect(images.length).toBe(2);
    expect(scriptModule.getPhotos).toHaveBeenCalled();
  });

  it('should handle image loading errors', async () => {
    document.body.innerHTML = '<div id="test"></div>';
    const gallery = createGallery({ container: '#test' });

    vi.mocked(scriptModule.getPhotos).mockResolvedValueOnce([
      { status: 'error', error: 'Failed to load image' },
    ]);

    await gallery.displayPhotos([{ url: 'error.jpg' }]);

    const errorImage = document.querySelector('.error-image');
    expect(errorImage).toBeTruthy();
    expect(errorImage?.classList.contains('error-image')).toBe(true);
    expect(errorImage?.getAttribute('title')).toBe(
      'Error: Failed to load image'
    );
  });
});
