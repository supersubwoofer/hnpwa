importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');
declare var workbox: import('workbox-sw');

if (workbox) {
  console.log('Yay! Workbox is loaded 🎉');
  workbox.precaching.precacheAndRoute([self.__precacheManifest || []]);
} else {
  console.log('Boo! Workbox didn\'t load 😬');
}
