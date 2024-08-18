import fs from 'fs';
import path from 'path';

export function getImages(): string[] {
  const imageDir = path.join(process.cwd(), 'public', 'logos');
  
  if (!fs.existsSync(imageDir)) {
    console.error(`Directory not found: ${imageDir}`);
    return [];
  }
  
  const imageFiles = fs.readdirSync(imageDir);
  
  return imageFiles
    .filter(file => /\.(webp|jpg|jpeg|png|svg)$/i.test(file))
    .map(file => `/logos/${file}`);
}
