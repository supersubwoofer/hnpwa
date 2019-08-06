import * as rm from 'typed-rest-client/RestClient';

let userAgent = '';
if ('userAgent' in navigator) {
  userAgent = navigator.userAgent;
}

export const getResource = async<T>(baseUrl:string, version:string, resourceUrl:string)
: Promise<rm.IRestResponse<T>> => {
  const rest: rm.RestClient = new rm.RestClient(userAgent, baseUrl);
  return await rest.get<T>(version + resourceUrl);
};
