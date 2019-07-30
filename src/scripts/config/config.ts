// to do - use different configs for dev and prod; and/or use env variable
export const HOSTING = {
  SUB_PATH: '/',
  // SUB_PATH: '/myblog/hnpwa/',
};

export const API = {
  BASE_URL: 'https://api.hnpwa.com/',
  VERSION: 'v0',
  topUrl: (page:number) => { return `/news/${page}.json`; },
  userUrl: (uid:string) => { return `/user/${uid}.json`; },
};
