import { HOSTING, NAV_HREFS } from './config/config';
import { startDefaultRouter } from './routing';
import { HnNavLink } from './components/hn-nav-link';
// import { TEST } from './idbHelpers';

// step 1 - register service worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register(`${HOSTING.SUB_PATH}worker.js`)
      .then((registration) => {
        console.log('Service Worker registered! Scope: ${registration.scope}');
      })
      .catch((err) => {
        console.log('Service Worker registration failed: ${err}');
      });
  });
}

const navLink = document.getElementById('navLink');
const nav = new HnNavLink(navLink, NAV_HREFS, HOSTING.SUB_PATH);

const outlet = document.getElementById('outlet');
startDefaultRouter(outlet, HOSTING.SUB_PATH);
