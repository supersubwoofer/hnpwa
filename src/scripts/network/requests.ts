import * as rm from 'typed-rest-client/RestClient';

export const getResource = async<T>(baseUrl:string, version:string, resourceUrl:string)
: Promise<rm.IRestResponse<T>> => {
  const rest: rm.RestClient = new rm.RestClient('get-resource', baseUrl);
  return await rest.get<T>(version + resourceUrl);
};
