import { getPhotos } from './script';

interface LibraryOptions {
  container: string | HTMLElement;
}

export function createGallery(options: LibraryOptions) {
  const container =
    typeof options.container === 'string'
      ? document.querySelector(options.container)!
      : options.container;

  if (container) {
    container.classList.add('purse-gallery');
  }

  const displayPhotos = async (urls: { url: string }[]) => {
    const results = await getPhotos(urls);

    results.forEach((result, index) => {
      if (result.status === 'success') {
        const imgContainer = document.createElement('div');
        imgContainer.classList.add('img-container');

        const img = document.createElement('img');
        img.src = result.imageUrl;
        img.alt = `Pictures ${index + 1}`;

        imgContainer.appendChild(img);
        container.appendChild(imgContainer);
      } else {
        const errorDiv = document.createElement('div');
        errorDiv.textContent = `Error for img ${index + 1}: ${result.error}`;
        errorDiv.style.color = 'red';
        container.appendChild(errorDiv);
      }
    });
  };

  return {
    displayPhotos,
  };
}
