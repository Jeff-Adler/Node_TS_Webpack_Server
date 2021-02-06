import { throws } from 'assert';
import { IncomingMessage, ServerResponse } from 'http';
import { Account, Handler, TokenGenerator } from './Model';

export class LoginHandler implements Handler {
  // Server initializes LoginHandler with Authorizer, which implements TokenGenerator
  constructor(
    private req: IncomingMessage,
    private res: ServerResponse,
    private tokenGenerator: TokenGenerator
  ) {}

  public async handleRequest(): Promise<void> {
    try {
      const body = await this.getRequestBody();
      const sessionToken = await this.tokenGenerator.generateToken(body);
      if (sessionToken) {
        this.res.write('valid credentials');
      } else {
        this.res.write('wrong credentials');
      }
    } catch (error) {
      this.res.write('error: ' + error.message);
    }
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
