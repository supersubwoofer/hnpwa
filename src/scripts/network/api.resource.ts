import { getResource } from './requests';
import { BASE_URL, VERSION, topUrl } from './api.config';
import { FeedItem } from '../types';

export const getTop =
  (page:number) => {
    return getResource<FeedItem[]>(BASE_URL, VERSION, topUrl(page));
  };
