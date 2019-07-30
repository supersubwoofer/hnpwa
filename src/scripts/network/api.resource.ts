import { getResource } from './requests';
import { API } from '../config/config';
import { FeedItem, User } from '../types';

export const getTop =
  (page:number) => {
    return getResource<FeedItem[]>(API.BASE_URL, API.VERSION, API.topUrl(page));
  };

export const getUser =
  (uid:string) => {
    console.log('getUser() called');
    return getResource<User>(API.BASE_URL, API.VERSION, API.userUrl(uid));
  };
