import { TokenGenerator, Account, SessionToken } from '../Server/Model';

// Since Authorizer implements TokenGenerator, it is essentially a type of Token Generator
export class Authorizer implements TokenGenerator {
  async generateToken(account: Account): Promise<SessionToken | undefined> {
    if (account.username === 'abcd' && account.password === '1234') {
      return {
        tokenId: 'someTokenId',
      };
    } else {
      return undefined;
    }
  }
}
