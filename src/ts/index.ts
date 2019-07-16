// step 1 - register service worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.ts')
      .then((registration) => {
        console.log(`Service Worker registered! Scope: ${registration.scope}`);
      })
      .catch((err) => {
        console.log(`Service Worker registration failed: ${err}`);
      });
  });
}
