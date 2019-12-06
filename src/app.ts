import express, { Application, Router } from "express";
import bodyParser from "body-parser";
import morgan from 'morgan';

import logger from './utils/logger';
import testRouter from './routes/test';

class App {

    public app: Application;
    public router: Router;

    constructor() {
        this.app = express();
        this.router = Router();
        this.config();
        this.setRoutes();
    }

    setRoutes() : void {
        this.app.use('/test', testRouter)
    }

    private config(): void {
        // support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(morgan(':remote-addr - :remote-user ":method :url HTTP/:http-version" :status :res[content-length]" :referrer :user-agent :req[header] :res[header]', {stream: { write: (message) => {
            logger.info(message);
          }}}));
    }

}

export default new App().app;
