import { FeedItem } from './types';
import { appState, actions } from './stateAction';
import { Router } from '@vaadin/router';
import './components/view-list.ts';
import './components/view-about.ts';
import './components/view-user.ts';

export const defaultRoutes = [
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
];

export const startRouter = (outlet:HTMLElement, url:string, routes) => {
  const router = new Router(outlet, { baseUrl: url });
  router.setRoutes(routes);
};

export const startDefaultRouter = (outlet:HTMLElement, defaultBaseUrl:string) => {
  startRouter(outlet, defaultBaseUrl, defaultRoutes);
};
