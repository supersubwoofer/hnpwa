import { getResource } from './requests';
import { API } from '../config/config';
import { FeedItem, User, Item } from '../types';

export const getTop =
  (page:number) => {
    return getResource<FeedItem[]>(API.BASE_URL, API.VERSION, API.topUrl(page));
  };

export const getNew =
  (page:number) => {
    return getResource<FeedItem[]>(API.BASE_URL, API.VERSION, API.newUrl(page));
  };

export const getShow =
  (page:number) => {
    return getResource<FeedItem[]>(API.BASE_URL, API.VERSION, API.showUrl(page));
  };

export const getAsk =
  (page:number) => {
    return getResource<FeedItem[]>(API.BASE_URL, API.VERSION, API.askUrl(page));
  };

export const getJob =
  (page:number) => {
    return getResource<FeedItem[]>(API.BASE_URL, API.VERSION, API.jobUrl(page));
  };

export const getUser =
  (uid:string) => {
    return getResource<User>(API.BASE_URL, API.VERSION, API.userUrl(uid));
  };

export const getItem =
  (id:string) => {
    return getResource<Item>(API.BASE_URL, API.VERSION, API.itemUrl(id));
  };
