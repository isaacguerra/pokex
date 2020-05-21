'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "c56ca42629f2c04bd97055030687ac45",
"assets/assets/fonts/ProductSans-Bold.ttf": "a19a7b108b2e3961fc855c6ea5a6546f",
"assets/assets/fonts/ProductSans-Regular.ttf": "b61c0ab33a818a0162f3e868babcef4b",
"assets/assets/images/pokeball.png": "465c50a0584e76d1f2f979308409d96a",
"assets/assets/images/pokeball_dark.png": "51b8b7a4abb1e7fc41b65b173ab6f408",
"assets/FontManifest.json": "136767c7454c5dde5fefeff6592a7405",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/LICENSE": "4aba8bbd329a9064a9a63ccfdf9193b2",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "c270e5a8785d0550989ca8755d29f4c0",
"/": "c270e5a8785d0550989ca8755d29f4c0",
"main.dart.js": "d7a58ca2ee0b5272c7bdaf37ca21d324",
"manifest.json": "d08bbfe29840967f5cfcdf2574901785"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
