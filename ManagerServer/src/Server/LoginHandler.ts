import { throws } from 'assert';
import { IncomingMessage, ServerResponse } from 'http';
import { Account, Handler } from './Model';

export class LoginHandler implements Handler {
  constructor(private req: IncomingMessage, private res: ServerResponse) {}

  public async handleRequest(): Promise<void> {
    console.log('before getting Body');
    const body = await this.getRequestBody();
    console.log('request username: ' + body.username);
    console.log('request password: ' + body.password);
  }

  private async getRequestBody(): Promise<Account> {
    return new Promise((resolve, reject) => {
      let body = '';
      //possible responses to request
      this.req.on('data', (data: string) => {
        body += data;
      });
      this.req.on('end', () => {
        try {
          resolve(JSON.parse(body));
        } catch (error) {
          reject(error);
        }
      });
      this.req.on('error', (error: any) => {
        reject(error);
      });
    });
  }
}
