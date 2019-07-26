import { getResource } from './requests';
import { API } from '../config/config';
import { FeedItem } from '../types';

export const getTop =
  (page:number) => {
    return getResource<FeedItem[]>(API.BASE_URL, API.VERSION, API.topUrl(page));
  };
