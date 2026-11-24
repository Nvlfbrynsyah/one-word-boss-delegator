// "Delegator" — the boss outsources everything to his agent.
// One word, maximal truth: he doesn't decide, he delegates.
import * as fs from 'node:fs';
import * as path from 'node:path';

const word = 'Delegator';
const outputDir = '/output';
const outputPath = path.join(outputDir, 'entry.txt');

if (typeof word !== 'string' || !/^\S{1,30}$/.test(word)) {
  throw new Error(`entry must be a single token of 1-30 characters with no whitespace, got: ${JSON.stringify(word)}`);
}

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

fs.writeFileSync(outputPath, word, 'utf8');
console.log('Successfully wrote entry to /output/entry.txt');
