"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importStar(require("express"));
//import bodyParser from "body-parser";
const test_1 = __importDefault(require("./routes/test"));
class App {
    constructor() {
        this.app = express_1.default();
        this.router = express_1.Router();
        this.config();
        this.setRoutes();
    }
    setRoutes() {
        this.app.use('/test', test_1.default);
    }
    config() {
        // support application/json type post data
        //this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        //this.app.use(bodyParser.urlencoded({ extended: false }));
    }
}
exports.default = new App().app;
//# sourceMappingURL=app.js.map