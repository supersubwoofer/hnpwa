import { Router } from '@vaadin/router';
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
    navigator.serviceWorker.register('/worker.js')
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
const router = new Router(outlet);
router.setRoutes([
  { path: '/', component: 'view-top' },
  { path: '/new', component: 'view-new' },
  { path: '/show', component: 'view-show' },
  { path: '/job', component: 'view-job' },
  { path: '/ask', component: 'view-ask' },
  { path: '/about', component: 'view-about' },
]);


