import { getResource } from './requests';
import { BASE_URL, VERSION, newUrl } from './api.config';
import { FeedItem } from '../types';

export const getNew =
  (page:number) => {
    return getResource<FeedItem[]>(BASE_URL, VERSION, newUrl(page));
  };
