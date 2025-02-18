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

### Potential Improvements

1. **Configuration Options**

   - Add customization options for:
     - Gallery grid layout (columns, gaps)
     - Image dimensions
     - Loading/error states appearance
     - Custom error messages

   ```typescript
   createGallery({
     container: '#app',
     columns: 4,
     gap: '1rem',
     imageHeight: '300px',
     errorMessage: 'Custom error message',
   });
   ```

2. **Advanced Features**

   - Image lazy loading
   - Lightbox for image preview
   - Image zoom capability
   - Drag and drop reordering

   ```typescript
   createGallery({
     container: '#app',
     lazyLoad: true,
     lightbox: true,
     zoomable: true,
     draggable: true,
   });
   ```

3. **Enhanced Error Handling**

   - Retry mechanism for failed images
   - Custom fallback images
   - Detailed error reporting

   ```typescript
   createGallery({
     container: '#app',
     retryAttempts: 3,
     fallbackImage: 'path/to/fallback.jpg',
     onError: (error) => console.log('Image failed:', error),
   });
   ```

4. **Performance Optimizations**

   - Image preloading
   - Responsive image loading (different sizes for different screens)
   - Virtual scrolling for large galleries

   ```typescript
   createGallery({
     container: '#app',
     preload: true,
     responsive: {
       mobile: { width: 200, height: 300 },
       desktop: { width: 400, height: 600 },
     },
     virtualScroll: true,
   });
   ```

5. **File Input Integration**

   - Allow users to upload local images directly into the gallery through file input or drag & drop
   - Built-in file validation (size limits, file types) and error handling
   - Support for multiple file uploads with customizable callbacks for upload events

   ```typescript
   createGallery({
     container: '#app',
     allowLocalImages: true,
     maxFileSize: 5000000,
     acceptedTypes: ['image/jpeg', 'image/png', 'image/webp'],
     onUpload: (file) => {
       // Handle file upload
       console.log('New file added:', file.name);
     },
   });
   ```
