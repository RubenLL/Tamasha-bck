import './utils/moduleAlias';
import { Server } from '@overnightjs/core';
import bodyParser from 'body-parser';
import { StatusController } from './controllers/status';
import { Application } from 'express';
import * as database from '@src/database'
import { ShopController } from './controllers/shop';

export default class SetupServer extends Server {
  constructor(private port = 3000) {
    super();
  }
  private setupExpress(): void {
    this.app.use(bodyParser.json());
  }
  private setupControllers(): void {
    const statusController = new StatusController();
    const shopController = new ShopController();
    this.addControllers([statusController,shopController]);
  }
  private async setupDatabase(): Promise<void>{
    await database.connect();
  }
  public async  init(): Promise<void> {
    this.setupExpress();
    this.setupControllers();
    await this.setupDatabase();
  }
  public getApp(): Application {
    return this.app;
  }
  public async close() :Promise<void>{
    await database.close();
  }
}
