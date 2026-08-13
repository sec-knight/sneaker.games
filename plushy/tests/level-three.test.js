const assert=require('node:assert/strict');
const fs=require('node:fs');

const game=fs.readFileSync('plushy/index.html','utf8');

assert.match(game,/3:\{name:'The Crimson Capwood',dominant:'Mushrooms',boss:'Sporeheart Tree'/);
assert.match(game,/weights:\[\[\.12,\.12\],\[\.10,\.15\],\[\.08,\.12\]\]/);
assert.match(game,/variant='skitter'/);
assert.match(game,/variant='bruiser'/);
assert.match(game,/Enter Level 3/);
assert.match(game,/Level 3 Clear!/);
assert.match(game,/showLevel\(currentLevel\+1\)/);

console.log('Level 3 is a red, mushroom-dominant forest with procedural cap variants.');
