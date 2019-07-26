import { Router } from '@vaadin/router';
import { HOSTING } from './config/config';
import './components/view-top.ts';
import './components/view-new.ts';
import './components/view-job.ts';
import './components/view-show.ts';
import './components/view-ask.ts';
import './components/view-about.ts';

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
  { path: '/', component: 'view-top' },
  { path: '/top', component: 'view-top' },
  { path: '/top/:page', component: 'view-top' },
  { path: '/new', component: 'view-new' },
  { path: '/show', component: 'view-show' },
  { path: '/job', component: 'view-job' },
  { path: '/ask', component: 'view-ask' },
  { path: '/about', component: 'view-about' },
]);


