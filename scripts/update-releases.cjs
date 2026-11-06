const fs=require('fs'),path=require('path');
const root=path.join(__dirname,'..');
const {RELEASES_URL}=JSON.parse(fs.readFileSync(path.join(root,'releases.config.json'),'utf8'));
if(!/^https:\/\//.test(RELEASES_URL)||/["<>]/.test(RELEASES_URL))throw Error('Set a valid HTTPS RELEASES_URL');
for(const file of ['downloads/index.html','ru/downloads/index.html']){const p=path.join(root,file);fs.writeFileSync(p,fs.readFileSync(p,'utf8').replace(/(data-releases-link href=")[^"]*/g,'$1'+RELEASES_URL));}
console.log('Updated both release links');
