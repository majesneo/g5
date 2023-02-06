import { injectable } from 'inversify';
import VueCookies from 'vue-cookies';

export interface CookiesAdapter {
  set(keyName: string, value: any, expires?: string | number | Date, path?: string, domain?: string, secure?: boolean, sameSite?: string): any;
  get(key: string): any;
  remove(keyName: string, path?: string, domain?: string): boolean;
}

@injectable()
export class VueCookiesAdapter implements CookiesAdapter {
  set(keyName: string, value: any, expires?: string | number | Date) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    VueCookies.set(keyName, JSON.stringify(value), expires);
  }

  get(key: string) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return JSON.parse(VueCookies.get(key));
  }

  remove(keyName: string, path?: string, domain?: string): boolean {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return VueCookies.remove(keyName, path, domain);
  }
}
