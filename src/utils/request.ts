import {BASE_URL} from './config';

interface HttpResponse<T> extends Response {
  data?: T;
}
export async function request<T>(
  request: RequestInfo,
): Promise<HttpResponse<T>> {
  const response: HttpResponse<T> = await fetch(request);

  try {
    // may error if there is no body
    response.data = await response.json();
  } catch (e) {
    console.log('🚀 ~ file: request.ts ~ line 15 ~ e', e);
  }

  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response;
}

const base = (url: string): string => {
  if (url.match(/^\//)) return BASE_URL + url;
  return url;
};

export class Weget {
  public static async get<T>(
    path: string,
    params: any,
    args: RequestInit = {method: 'get'},
  ): Promise<HttpResponse<T>> {
    if (params) {
      let paramsArray: string[] = [];
      Object.keys(params).forEach(key =>
        paramsArray.push(key + '=' + params[key]),
      );
      if (path.search(/\?/) === -1) {
        path += '?' + paramsArray.join('&');
      } else {
        path += '&' + paramsArray.join('&');
      }
    }
    return await request<T>(new Request(base(path), args));
  }

  public static async post<T>(
    path: string,
    body: any,
    args: RequestInit = {method: 'post', body: JSON.stringify(body)},
  ): Promise<HttpResponse<T>> {
    return await request<T>(new Request(base(path), args));
  }

  public static async put<T>(
    path: string,
    body: any,
    args: RequestInit = {method: 'put', body: JSON.stringify(body)},
  ): Promise<HttpResponse<T>> {
    return await request<T>(new Request(base(path), args));
  }

  public static async delete<T>(
    path: string,
    body: any,
    args: RequestInit = {method: 'delete', body: JSON.stringify(body)},
  ): Promise<HttpResponse<T>> {
    return await request<T>(new Request(base(path), args));
  }
}
