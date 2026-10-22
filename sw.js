const C='hd-20261022101011',A=['./','./index.html','./manifest.webmanifest','./icon-192.png','./icon-512.png','./apple-touch-icon.png'].concat(["./ex/bent-over-row.jpg", "./ex/bent-over-row.webp", "./ex/floor-press.jpg", "./ex/floor-press.webp", "./ex/goblet-squat.jpg", "./ex/goblet-squat.webp", "./ex/lateral-raise.jpg", "./ex/lateral-raise.webp", "./ex/romanian-deadlift.jpg", "./ex/romanian-deadlift.webp", "./ex/shoulder-press.jpg", "./ex/shoulder-press.webp"]);
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(A)));self.skipWaiting()});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{const r=e.request;if(r.method!=='GET'||new URL(r.url).origin!==location.origin||new URL(r.url).pathname.endsWith('wake.html'))return;if(new URL(r.url).pathname.endsWith('version.json')){e.respondWith(fetch(r,{cache:'no-store'}));return}
const nav=r.mode==='navigate'||r.url.endsWith('/')||r.url.endsWith('index.html');
if(nav){e.respondWith(fetch(r,{cache:'no-store'}).then(res=>{const cp=res.clone();caches.open(C).then(c=>c.put('./index.html',cp));return res}).catch(()=>caches.match('./index.html')));return}
e.respondWith(caches.match(r).then(m=>m||fetch(r)))});
