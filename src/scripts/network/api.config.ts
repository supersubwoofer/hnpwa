export const BASE_URL:string = 'https://api.hnpwa.com/';
export const VERSION:string = 'v0';

export const newUrl =
  (page:number) => { return `/news/${page}.json`; };
