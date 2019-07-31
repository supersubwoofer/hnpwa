import { HOSTING } from './config/config';
import { FeedItem } from './types';
import { appState, actions } from './stateAction';
import { Router } from '@vaadin/router';
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
  { path: '/', action: actions.loadTop, component: 'view-list' },
  { path: '/top', action: actions.loadTop, component: 'view-list' },
  { path: '/top/:page', action: actions.loadTop, component: 'view-list' },
  { path: '/new', action: actions.loadNew, component: 'view-list' },
  { path: '/new/:page', action: actions.loadNew, component: 'view-list' },
  { path: '/show', action: actions.loadShow, component: 'view-list' },
  { path: '/show/:page', action: actions.loadShow, component: 'view-list' },
  { path: '/job', action: actions.loadJob, component: 'view-list' },
  { path: '/job/:page', action: actions.loadJob, component: 'view-list' },
  { path: '/ask', action: actions.loadAsk, component: 'view-list' },
  { path: '/ask/:page', action: actions.loadAsk, component: 'view-list' },
  { path: '/about', component: 'view-about' },
  { path: '/user/:id', component: 'view-user' },
]);

