const C='topo-d9c1fe3a';
const FILES=["./", "index.html", "app.js", "lib/react.js", "lib/react-dom.js", "lib/leaflet.js", "manifest.webmanifest", "icon-180.png", "icon-192.png", "icon-512.png", "fonts/nunito-400.woff2", "fonts/nunito-600.woff2", "fonts/nunito-700.woff2", "fonts/nunito-800.woff2", "fonts/nunito-900.woff2"];
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(FILES)));self.skipWaiting()});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==C).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;e.respondWith(fetch(e.request,{cache:'no-cache'}).then(r=>{if(r.ok&&new URL(e.request.url).origin===location.origin){const c=r.clone();caches.open(C).then(x=>x.put(e.request,c))}return r}).catch(()=>caches.match(e.request,{ignoreSearch:true})))});
