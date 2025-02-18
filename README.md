# Purse Library

A lightweight JavaScript library for creating responsive image galleries with error handling.

![Purse Library Screenshot](.github/assets/screenshot.png)

## Features

- Easy-to-use library for creating image galleries
- Responsive grid layout with hover effects
- Built-in error handling with visual feedback
- TypeScript support
- Zero dependencies

## Installation

### Current Development Setup

Currently, the library can be tested locally:

1. Clone the repository

```bash
git clone [repository-url]
cd purse-library
```

2. Install dependencies

```bash
npm install
```

3. Build the library

```bash
npm run build
```

4. Using Live Server or similar to serve example/index.html

### Future NPM Package

Once published, the library will be installable via npm:

```bash
npm install purse-library
```

Then you can import it in your project:

```typescript
import { createGallery } from 'purse-library';
```

## Usage

```html
<div id="app"></div>
<script type="module">
  import { createGallery } from '../dist/purse-library.es.js';
  const gallery = createGallery({
    container: '#app',
  });
  gallery.displayPhotos([
    { url: 'https://picsum.photos/200/300' },
    { url: 'https://picsum.photos/200/300?random=1' },
    { url: 'https://picsum.photos/200/300?random=2' },
  ]);
</script>
```
