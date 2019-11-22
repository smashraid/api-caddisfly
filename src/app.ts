import express, {Application} from "express";
//import bodyParser from "body-parser";

class App {

    public app: Application;

    constructor() {
        this.app = express();
        this.config();        
    }

    private config(): void{
        // support application/json type post data
        //this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        //this.app.use(bodyParser.urlencoded({ extended: false }));
    }

}

export default new App().app;