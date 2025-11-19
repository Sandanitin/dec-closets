import fs from 'fs';
import https from 'https';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create images directory if it doesn't exist
const imagesDir = path.join(__dirname, 'public', 'images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// Image URLs (free stock photos from Unsplash)
const images = {
  'about_hero_bg.jpg': 'https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
  'cafe_interior.jpg': 'https://images.unsplash.com/photo-1600210492767-7a2a9c4e7f6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80',
  // Closet images
  'walk-in-closet.jpg': 'https://images.unsplash.com/photo-1600210492493-0946911123ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
  'custom-closet.jpg': 'https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
  'reach-in-closet.jpg': 'https://images.unsplash.com/photo-1600121848594-d8644e57abab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
  'luxury-closet.jpg': 'https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
  'organized-closet.jpg': 'https://images.unsplash.com/photo-1600210492493-094691a317a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80'
};

// Function to download a file
function downloadImage(url, filename) {
  const filePath = path.join(imagesDir, filename);
  const file = fs.createWriteStream(filePath);
  
  https.get(url, response => {
    response.pipe(file);
    file.on('finish', () => {
      file.close();
      console.log(`Downloaded ${filename}`);
    });  
  }).on('error', err => {
    fs.unlink(filePath, () => {}); // Delete the file if there's an error
    console.error(`Error downloading ${filename}:`, err.message);
  });
}

// Download all images
console.log('Starting image downloads...');
Object.entries(images).forEach(([filename, url]) => {
  downloadImage(url, filename);
});

console.log('All downloads started. Check the public/images directory once complete.');