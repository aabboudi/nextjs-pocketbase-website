import fs from 'fs';
import path from 'path';

export function getImages() {
  const imageDir = path.join(process.cwd(), 'public/logos');
  const imageFiles = fs.readdirSync(imageDir);

  return imageFiles.map(file => `/logos/${file}`);
}
