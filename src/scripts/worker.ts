if (workbox) {
  console.log('Yay! Workbox is loaded 🎉');
  workbox.precaching.precacheAndRoute(self.__precacheManifest || []);
} else {
  console.log('Boo! Workbox didn\'t load 😬');
}
