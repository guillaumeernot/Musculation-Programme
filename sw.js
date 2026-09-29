/* Généré par outils/construire_pwa.py — ne pas modifier à la main. */
const CACHE = 'carnet-8ad9cd8949';
const COQUILLE = ["./", "index.html", "manifest.webmanifest", "icone-192.png", "icone-512.png"];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(COQUILLE)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(noms => Promise.all(noms.filter(n => n !== CACHE).map(n => caches.delete(n))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if(req.method !== 'GET') return;

  if(req.mode === 'navigate'){
    e.respondWith(
      fetch(req)
        .then(rep => {
          caches.open(CACHE).then(c => c.put('index.html', rep.clone()));
          return rep;
        })
        .catch(() => caches.match('index.html'))
    );
    return;
  }

  e.respondWith(
    caches.match(req).then(cache => cache || fetch(req).then(rep => {
      if(rep.ok) caches.open(CACHE).then(c => c.put(req, rep.clone()));
      return rep;
    }))
  );
});
