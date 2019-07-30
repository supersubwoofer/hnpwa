import { Router } from '@vaadin/router';
import { HOSTING } from './config/config';
import './components/view-list.ts';
import './components/view-about.ts';
import './components/view-user.ts';

// import { TEST } from './idbHelpers';

// step 1 - register service worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register(`${HOSTING.SUB_PATH}worker.js`)
      .then((registration) => {
        // TEST();
        console.log('Service Worker registered! Scope: ${registration.scope}');
      })
      .catch((err) => {
        console.log('Service Worker registration failed: ${err}');
      });
  });
}

const outlet = document.getElementById('outlet');
const router = new Router(outlet, { baseUrl: HOSTING.SUB_PATH });
router.setRoutes([
  { path: '/', component: 'view-list' },
  { path: '/top', component: 'view-list' },
  { path: '/top/:page', component: 'view-list' },
  { path: '/new', component: 'view-new' },
  { path: '/new/:page', component: 'view-new' },
  { path: '/show', component: 'view-show' },
  { path: '/show/:page', component: 'view-show' },
  { path: '/job', component: 'view-job' },
  { path: '/job/:page', component: 'view-job' },
  { path: '/ask', component: 'view-ask' },
  { path: '/ask/:page', component: 'view-ask' },
  { path: '/about', component: 'view-about' },
  { path: '/user/:id', component: 'view-user' },
]);


