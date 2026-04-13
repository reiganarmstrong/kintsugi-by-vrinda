const fs = require('fs');
const path = require('path');

const srcDir = '/Users/reaganarmstrong/.gemini/antigravity/brain/3fa5ca46-a13a-4204-98e2-308edd0aa52a/';
const destDir = path.join(__dirname, 'public', 'images');

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

try {
  fs.copyFileSync(path.join(srcDir, 'clean_kintsugi_home_1_1776117924252.png'), path.join(destDir, 'kintsugi-1.png'));
  fs.copyFileSync(path.join(srcDir, 'clean_kintsugi_home_2_1776117938263.png'), path.join(destDir, 'kintsugi-2.png'));
  fs.copyFileSync(path.join(srcDir, 'clean_kintsugi_home_3_1776117954333.png'), path.join(destDir, 'kintsugi-3.png'));
  fs.copyFileSync(path.join(srcDir, 'media__1776119667503.jpg'), path.join(destDir, 'vrinda.jpg'));
  console.log("Images copied successfully.");
} catch (e) {
  console.error("Failed to copy images: ", e.message);
}
