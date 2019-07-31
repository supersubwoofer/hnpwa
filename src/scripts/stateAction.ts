import { getTop, getNew, getShow, getAsk, getJob, getUser } from './network/api.resource';

let appState = {
  resourcePath: 'top/',
  listCallback: getTop,
};

const actions = {
  loadTop: () => {
    appState = {
      resourcePath: 'top/',
      listCallback: getTop,
    };
  },
  loadNew: () => {
    appState = {
      resourcePath: 'new/',
      listCallback: getNew,
    };
  },
  loadShow: () => {
    appState = {
      resourcePath: 'show/',
      listCallback: getShow,
    };
  },
  loadAsk: () => {
    appState = {
      resourcePath: 'ask/',
      listCallback: getAsk,
    };
  },
  loadJob: () => {
    appState = {
      resourcePath: 'job/',
      listCallback: getJob,
    };
  },
};

export { appState, actions };
