import { URL } from 'url';

export class Utils {
  public static getUrlBasePath(url: string | undefined): string {
    if (url) {
      const parsedUrl = new URL('http://localhost:8080' + url);
      return parsedUrl.pathname.split('/')[1];
    } else {
      return '';
    }
  }
}
