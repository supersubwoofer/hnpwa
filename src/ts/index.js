// step 1 - register service worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
        navigator.serviceWorker.register('sw.ts')
            .then(function (registration) {
            console.log("Service Worker registered! Scope: " + registration.scope);
        })["catch"](function (err) {
            console.log("Service Worker registration failed: " + err);
        });
    });
}
