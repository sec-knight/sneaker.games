const assert=require('node:assert/strict');
const fs=require('node:fs');

const game=fs.readFileSync('plushy/index.html','utf8');
const audio=fs.readFileSync('plushy/music.js','utf8');

function body(name){return game.split('\n').find(line=>line.startsWith(`function ${name}()`))}

const attack=body('fire'),dash=body('dodge');
assert.match(attack,/if\(!run\|\|P\.cast>0\)return/);
assert.ok(attack.indexOf('P.cast=.29')<attack.indexOf('PlushyMusic?.sfx.attack()'));
assert.match(dash,/if\(!run\|\|P\.dodge>0\)return/);
assert.ok(dash.indexOf('P.dodge=.7')<dash.indexOf('PlushyMusic?.sfx.dodge()'));
assert.doesNotMatch(audio,/e\.code==='Space'.*attack\(\)/);
assert.doesNotMatch(audio,/e\.code\.includes\('Shift'\).*dodge\(\)/);
assert.doesNotMatch(audio,/cast\?\.addEventListener\('pointerdown',attack\)/);
assert.doesNotMatch(audio,/dod\?\.addEventListener\('pointerdown',dodge\)/);
assert.match(game,/e\.code==='Space'\)\{e\.preventDefault\(\);fire\(\)\}/);
assert.match(game,/e\.code\.includes\('Shift'\)\)dodge\(\)/);
assert.match(game,/querySelector\('#cast'\)\.onpointerdown=e=>\{e\.preventDefault\(\);fire\(\)\}/);
assert.match(game,/querySelector\('#dodge'\)\.onpointerdown=e=>\{e\.preventDefault\(\);dodge\(\)\}/);

console.log('Action feedback is emitted only by successful gameplay actions.');
