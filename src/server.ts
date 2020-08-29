import './utils/moduleAlias';
import { Server } from '@overnightjs/core';
import bodyParser from 'body-parser';
import { StatusController } from './controllers/status';
import { Application } from 'express';
export default class SetupServer extends  Server{
    constructor(private port = 3000){
        super();
    }
    private setupExpress():void{
        this.app.use(bodyParser.json());
    }
    private setupControllers():void{
        const statusController = new StatusController();
        this.addControllers([statusController]);
    }
    public init (): void{
        this.setupExpress();
        this.setupControllers();
    }
    public getApp() : Application {
        return this.app;
    }
}