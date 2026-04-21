/* 🔒 PROPRIETARY OFFLINE ENGINE | LEAD ARCHITECT: MD IBRAHIM HOSSAIN */
const CACHE_NAME = 'bhumitech-vault-v13';
const ASSETS = [
  '/bhumitech/',
  '/bhumitech/index.html',
  '/bhumitech/manifest.json',
  'https://raw.githubusercontent.com/pixelperfectits/assets/main/Flat%20Minimal%20Neon%20Icon.png',
  'https://cdn.tailwindcss.com',
  'https://unpkg.com/lucide@latest'
];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(ASSETS)));
});
self.addEventListener('fetch', event => {
  event.respondWith(caches.match(event.request).then(r => r || fetch(event.request)));
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(k => Promise.all(k.filter(i => i !== CACHE_NAME).map(i => caches.delete(i)))));
});
