const CACHE_NAME = 'total-kpop-v2'; // Cambiamos a v2 para forzar actualización
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/icon-512.png',
  '/privacy.html'
];

self.addEventListener('install', event => {
  self.skipWaiting(); // Esto obliga al nuevo Service Worker a activarse ya mismo
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});









