import { HOSTING } from './config/config';
import { getTop, getNew, getShow, getAsk, getJob, getUser } from './network/api.resource';
import { FeedItem } from './types';
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

let appState = {
  resourcePath: 'top/',
  listCallback: getTop,
};

const update = (state, action) => {
  if (action === 'LOAD_TOP') {
    state.resourcePath = 'top/';
    state.listCallback = getTop;
  } else if (action === 'LOAD_NEW') {
    state.resourcePath = 'new/';
    state.listCallback = getNew;
  } else if (action === 'LOAD_SHOW') {
    state.resourcePath = 'show/';
    state.listCallback = getShow;
  } else if (action === 'LOAD_ASK') {
    state.resourcePath = 'ask/';
    state.listCallback = getAsk;
  } else if (action === 'LOAD_JOB') {
    state.resourcePath = 'job/';
    state.listCallback = getJob;
  }
  return state;
};

const actions = {
  loadTop: () => { appState = update(appState, 'LOAD_TOP'); },
  loadNew: () => { appState = update(appState, 'LOAD_NEW'); },
  loadShow: () => { appState = update(appState, 'LOAD_SHOW'); },
  loadAsk: () => { appState = update(appState, 'LOAD_ASK'); },
  loadJob: () => { appState = update(appState, 'LOAD_JOB'); },
};

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

export { appState };
