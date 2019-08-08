import { getTop, getNew, getShow, getAsk, getJob, getUser, getItem } from './network/api.resource';

let appState = {
  pageTitle: 'Top news',
  resourcePath: 'top/',
  listCallback: getTop,
  itemCallback: getItem,
  maxPage: 12,
};

const actions = {
  loadTop: () => {
    appState = {
      pageTitle: 'Top news',
      resourcePath: 'top/',
      listCallback: getTop,
      itemCallback: getItem,
      maxPage: 12,
    };
  },
  loadNew: () => {
    appState = {
      pageTitle: 'Latest news',
      resourcePath: 'new/',
      listCallback: getNew,
      itemCallback: getItem,
      maxPage: 12,
    };
  },
  loadShow: () => {
    appState = {
      pageTitle: 'Shows',
      resourcePath: 'show/',
      listCallback: getShow,
      itemCallback: getItem,
      maxPage: 2,
    };
  },
  loadAsk: () => {
    appState = {
      pageTitle: 'Questions',
      resourcePath: 'ask/',
      listCallback: getAsk,
      itemCallback: getItem,
      maxPage: 2,
    };
  },
  loadJob: () => {
    appState = {
      pageTitle: 'Job Posts',
      resourcePath: 'job/',
      listCallback: getJob,
      itemCallback: getItem,
      maxPage: 1,
    };
  },
  loadItem: () => {
    appState = {
      pageTitle: 'Comments',
      resourcePath: 'item/',
      listCallback: getTop,
      itemCallback: getItem,
      maxPage: 1,
    };
  },
};

export { appState, actions };
