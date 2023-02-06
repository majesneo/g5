import { injectable } from 'inversify';
import VueCookies, { VueCookies as VueCookiesI } from 'vue-cookies';

@injectable()
export class AbstractVueCookiesService implements VueCookiesI {
  set(keyName: string, value: any, expires?: string | number | Date,
    path?: string, domain?: string, secure?: boolean, sameSite?: string) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    VueCookies.set(keyName, JSON.stringify(value), expires);
    return this;
  }

  get(key: string) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return JSON.parse(VueCookies.get(key));
  }

  config(expires: string | number | Date, path?: string, domain?: string, secure?: boolean, sameSite?: string): void {
  }

  isKey(keyName: string): boolean {
    return false;
  }

  keys(): string[] {
    return [];
  }

  remove(keyName: string, path?: string, domain?: string): boolean {
    return false;
  }
}
