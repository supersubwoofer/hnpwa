self.importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

const matchCb = ({ url, event }) => {
  return (
    url.pathname === '/news' ||
    url.pathname === '/newest' ||
    url.pathname === '/show' ||
    url.pathname === '/ask' ||
    url.pathname === '/jobs'
  );
};

const handlerCb = ({ url, event, params }) => {
  return fetch(event.request)
  .then((response) => {
    // console.log('service worker fetch to text');
    return response.text();
  })
  .then((responseBody) => {
    // console.log('service worker text to Response');
    return new Response(`${responseBody}`);
  });
};

if (workbox) {
  console.log('Yay! Workbox is loaded 🎉');

  // Precache
  workbox.precaching.precacheAndRoute(self.__precacheManifest || []);

  // Request-Response Routing
  workbox.routing.registerRoute(matchCb, handlerCb);

} else {
  console.log('Boo! Workbox didn\'t load 😬');
}
