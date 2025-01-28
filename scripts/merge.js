import { readdirSync, readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

// Read all JSON files
const jsonDir = join(process.cwd(), 'json');
const files = readdirSync(jsonDir).filter(f => f.endsWith('.json'));

// Create merged object
const merged = {};
files.forEach(file => {
    const content = JSON.parse(readFileSync(join(jsonDir, file), 'utf8'));
    Object.assign(merged, content);
});

// Write merged content
writeFileSync('owo.json', JSON.stringify(merged, null, 2));