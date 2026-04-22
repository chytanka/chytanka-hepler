import fs from 'fs';
import path from 'path';
import archiver from 'archiver';

const SOURCE_DIR = path.resolve('./src');
const MANIFEST_PATH = path.join(SOURCE_DIR, 'manifest.json');

const manifest = JSON.parse(fs.readFileSync(MANIFEST_PATH, 'utf-8'));

if (!manifest.version) {
  throw new Error('manifest.json has no version field');
}

const OUTPUT = path.resolve(`./dist/chytanka-helper-${manifest.version}.zip`);

const output = fs.createWriteStream(OUTPUT);
const archive = archiver('zip', { zlib: { level: 9 } });

output.on('close', () => {
  console.log(`✅ ZIP created: ${OUTPUT}`);
  console.log(`📦 Size: ${archive.pointer()} bytes`);
});

archive.on('error', (err) => {
  throw err;
});

archive.pipe(output);

archive.directory(SOURCE_DIR, false);

await archive.finalize();