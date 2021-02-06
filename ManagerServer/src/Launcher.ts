import { Server } from './Server/Server';

class Launcher {
  // private name: string;
  private server: Server = new Server();

  constructor() {}

  public launchApp() {
    console.log('Started app');
    this.server.createServer();
  }
}

new Launcher().launchApp();
