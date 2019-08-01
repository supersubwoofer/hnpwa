import { getTop, getNew, getShow, getAsk, getJob, getUser, getItem } from './network/api.resource';

let appState = {
  resourcePath: 'top/',
  listCallback: getTop,
  itemCallback: getItem,
};

const actions = {
  loadTop: () => {
    appState = {
      resourcePath: 'top/',
      listCallback: getTop,
      itemCallback: getItem,
    };
  },
  loadNew: () => {
    appState = {
      resourcePath: 'new/',
      listCallback: getNew,
      itemCallback: getItem,
    };
  },
  loadShow: () => {
    appState = {
      resourcePath: 'show/',
      listCallback: getShow,
      itemCallback: getItem,
    };
  },
  loadAsk: () => {
    appState = {
      resourcePath: 'ask/',
      listCallback: getAsk,
      itemCallback: getItem,
    };
  },
  loadJob: () => {
    appState = {
      resourcePath: 'job/',
      listCallback: getJob,
      itemCallback: getItem,
    };
  },
  loadItem: () => {
    appState = {
      resourcePath: 'item/',
      listCallback: getTop,
      itemCallback: getItem,
    };
  },
};

export { appState, actions };
