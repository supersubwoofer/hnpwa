import * as rm from 'typed-rest-client/RestClient';
import { FeedItem } from './types';

const BASE_URL = 'https://api.hnpwa.com/';
const VERSION = 'v0';

export const getResource = async<T>(baseUrl:string, version:string, resourceUrl:string)
: Promise<rm.IRestResponse<T>> => {
  const rest: rm.RestClient = new rm.RestClient('get-top', baseUrl);
  return await rest.get<T>(version + resourceUrl);
};

export const getTop =
  (resourceUrl:string) => { return getResource<FeedItem>(BASE_URL, VERSION, resourceUrl); };
