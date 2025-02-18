import { getPhotos } from './script.js';

const urls = [
    { url: 'https://picsum.photos/200/300' },
    { url: 'https://picsum.photos/200/300' },
    { url: 'https://picsum.photos/200/300' }
];

const displayPhotos = async () => {
    const results = await getPhotos(urls);
    const appDiv = document.querySelector('#app');
    
    if (appDiv) {
        results.forEach((result, index) => {
            if (result.status === 'success') {
                const img = document.createElement('img');
                img.src = result.imageUrl;
                img.alt = `Photo ${index + 1}`;
                img.style.margin = '10px';
                appDiv.appendChild(img);
            } else {
                const errorDiv = document.createElement('div');
                errorDiv.textContent = `Error for img ${index + 1}: ${result.error}`;
                errorDiv.style.color = 'red';
                appDiv.appendChild(errorDiv);
            }
        });
    }
};

displayPhotos().catch(console.error); 
