const assert=require('node:assert/strict');
const fs=require('node:fs');

const game=fs.readFileSync('plushy/index.html','utf8');
const audio=fs.readFileSync('plushy/music.js','utf8');

assert.match(game,/<div id="welcome" class="panel show">/);
assert.match(game,/<button id="enter">Enter the Forest<\/button>/);
assert.match(game,/<div id="start" class="panel">/);
assert.match(game,/document\.querySelector\('#enter'\)\.onclick=async\(\)=>\{if\(await window\.PlushyMusic\?\.beginFromGesture\(\)\)\{welcome\.classList\.remove\('show'\);start\.classList\.add\('show'\)\}\}/);
assert.match(audio,/async function startMusic\(\)/);
assert.match(audio,/if\(ctx\.state!=='running'\)return false/);
assert.match(audio,/if\(started\)return true/);
assert.match(audio,/window\.PlushyMusic=\{beginFromGesture:startMusic/);
assert.doesNotMatch(audio,/\['go','again'\]/);
assert.doesNotMatch(game,/querySelector\('#go'\)\.onclick=.*beginFromGesture/);

console.log('Welcome flow gates visual progression on successful gesture-owned audio startup.');
