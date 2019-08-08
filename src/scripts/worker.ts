self.importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

if (workbox) {
  console.log('Yay! Workbox is loaded 🎉');

  // Precache
  workbox.precaching.precacheAndRoute(self.__precacheManifest || []);

  // workbox.routing.registerRoute(network.matchCb, network.getResource);

} else {
  console.log('Boo! Workbox didn\'t load 😬');
}
