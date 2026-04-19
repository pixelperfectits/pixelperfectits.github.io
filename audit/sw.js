/* 🔒 PROTECTED BY VAULT-GUARD v1.0 | LEAD ARCHITECT: MD IBRAHIM HOSSAIN | PIXEL PERFECT IT SOLUTIONS */
const CACHE_NAME="ppit-hq-v1.1",assets=["/","/index.html"];self.addEventListener("install",(e=>{e.waitUntil(caches.open(CACHE_NAME).then((e=>e.addAll(assets))))})),self.addEventListener("fetch",(e=>{e.respondWith(caches.match(e.request).then((s=>s||fetch(e.request))))}));
