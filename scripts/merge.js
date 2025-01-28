const fs = require('fs');
const path = require('path');

// Read all JSON files
const jsonDir = path.join(process.cwd(), 'json');
const files = fs.readdirSync(jsonDir).filter(f => f.endsWith('.json'));

// Create merged object
const merged = {};
files.forEach(file => {
    const content = JSON.parse(fs.readFileSync(path.join(jsonDir, file), 'utf8'));
    Object.assign(merged, content);
});

// Write merged content
fs.writeFileSync('owo.json', JSON.stringify(merged, null, 2));