import { IncomingMessage, ServerResponse } from 'http';

export class LoginHandler {
  constructor(private req: IncomingMessage, private res: ServerResponse) {}

  public handleRequest(): void {}
}
