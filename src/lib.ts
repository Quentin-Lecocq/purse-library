import { getPhotos } from './script';

interface LibraryOptions {
  container: string | HTMLElement;
}

const LUCIDE_ICONS_SVG_DATA_URL =
  'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWltYWdlLW9mZiI+PGxpbmUgeDE9IjIiIHgyPSIyMiIgeTE9IjIiIHkyPSIyMiIvPjxwYXRoIGQ9Ik0xMC40MSAxMC40MWEyIDIgMCAxIDEtMi44My0yLjgzIi8+PGxpbmUgeDE9IjEzLjUiIHgyPSI2IiB5MT0iMTMuNSIgeTI9IjIxIi8+PGxpbmUgeDE9IjE4IiB4Mj0iMjEiIHkxPSIxMiIgeTI9IjE1Ii8+PHBhdGggZD0iTTMuNTkgMy41OUExLjk5IDEuOTkgMCAwIDAgMyA1djE0YTIgMiAwIDAgMCAyIDJoMTRjLjU1IDAgMS4wNTItLjIyIDEuNDEtLjU5Ii8+PHBhdGggZD0iTTIxIDE1VjVhMiAyIDAgMCAwLTItMkg5Ii8+PC9zdmc+';

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
      const imgContainer = document.createElement('div');
      imgContainer.classList.add('img-container');

      if (result.status === 'success') {
        const img = document.createElement('img');
        img.src = result.imageUrl;
        img.alt = `Pictures ${index + 1}`;
        imgContainer.appendChild(img);
      } else {
        const errorContainer = document.createElement('div');
        errorContainer.classList.add('error-container');

        const errorIcon = document.createElement('img');
        errorIcon.src = LUCIDE_ICONS_SVG_DATA_URL;
        errorIcon.classList.add('error-icon');
        errorIcon.title = `Error: ${result.error}`;

        errorContainer.appendChild(errorIcon);
        imgContainer.appendChild(errorContainer);
      }

      container.appendChild(imgContainer);
    });
  };

  return {
    displayPhotos,
  };
}
