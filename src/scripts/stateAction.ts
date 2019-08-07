import { getTop, getNew, getShow, getAsk, getJob, getUser, getItem } from './network/api.resource';

let appState = {
  resourcePath: 'top/',
  listCallback: getTop,
  itemCallback: getItem,
  maxPage: 12,
};

const actions = {
  loadTop: () => {
    appState = {
      resourcePath: 'top/',
      listCallback: getTop,
      itemCallback: getItem,
      maxPage: 12,
    };
  },
  loadNew: () => {
    appState = {
      resourcePath: 'new/',
      listCallback: getNew,
      itemCallback: getItem,
      maxPage: 12,
    };
  },
  loadShow: () => {
    appState = {
      resourcePath: 'show/',
      listCallback: getShow,
      itemCallback: getItem,
      maxPage: 2,
    };
  },
  loadAsk: () => {
    appState = {
      resourcePath: 'ask/',
      listCallback: getAsk,
      itemCallback: getItem,
      maxPage: 2,
    };
  },
  loadJob: () => {
    appState = {
      resourcePath: 'job/',
      listCallback: getJob,
      itemCallback: getItem,
      maxPage: 1,
    };
  },
  loadItem: () => {
    appState = {
      resourcePath: 'item/',
      listCallback: getTop,
      itemCallback: getItem,
      maxPage: 1,
    };
  },
};

export { appState, actions };
