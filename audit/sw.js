/* 🔒 PROTECTED BY VAULT-GUARD v1.0 | LEAD ARCHITECT: MD IBRAHIM HOSSAIN */
const CACHE_NAME = 'audit-hub-v1.2';
const assets = ['/audit/', '/audit/index.html', '/audit/manifest.json', 'https://cdn.tailwindcss.com', 'https://unpkg.com/lucide@latest'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE_NAME).then(cache => { return cache.addAll(assets); }));
});

self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(res => { return res || fetch(e.request); }));
});
