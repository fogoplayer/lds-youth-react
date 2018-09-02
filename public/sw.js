/*global workbox*/
importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.0.0/workbox-sw.js');

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);

  // workbox.routing.registerRoute(
  //   /(.*)materialize\.min\.(?:js|css)/,
  //   workbox.strategies.cacheFirst({
  //     cacheName: 'materialize-cache'
  //   })
  // );
  workbox.precaching.precacheAndRoute([
    "/materialize.min.js",
    "/materialize.min.css"
  ]);
  workbox.precaching.precacheAndRoute([]);
}
else {
  console.log(`Boo! Workbox didn't load 😬`);
}
