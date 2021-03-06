import { Href } from './types';

export const HOSTING = {
  SUB_PATH: (process.env.NODE_ENV === 'production') ? '/myblog/hnpwa/' : '/',
};

export const API_SPARE = {
  BASE_URL: 'https://api.hnpwa.com/',
  VERSION: 'v0',
  topUrl: (page:number) => { return `/news/${page}.json`; },
  newUrl: (page:number) => { return `/newest/${page}.json`; },
  showUrl: (page:number) => { return `/show/${page}.json`; },
  askUrl: (page:number) => { return `/ask/${page}.json`; },
  jobUrl: (page:number) => { return `/jobs/${page}.json`; },
  userUrl: (uid:string) => { return `/user/${uid}.json`; },
  itemUrl: (id:string) => { return `/item/${id}.json`; },
};
export const API = {
  BASE_URL: 'https://node-hnapi.herokuapp.com/',
  VERSION: '',
  topUrl: (page:number) => { return `/news?page=${page}`; },
  newUrl: (page:number) => { return `/newest?page=${page}`; },
  showUrl: (page:number) => { return `/show?page=${page}`; },
  askUrl: (page:number) => { return `/ask?page=${page}`; },
  jobUrl: (page:number) => { return `/jobs?page=${page}`; },
  userUrl: (uid:string) => { return `/user/${uid}`; },
  itemUrl: (id:string) => { return `/item/${id}`; },
};

export const NAV_HREFS:Href[] = [
  { href: '', text: 'TOP' },
  { href: 'new', text: 'NEW' },
  { href: 'show', text: 'SHOW' },
  { href: 'ask', text: 'ASK' },
  { href: 'job', text: 'JOB' },
  { href: 'about', text: 'ABOUT' },
];
