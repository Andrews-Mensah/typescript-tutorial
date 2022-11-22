"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_1 = __importDefault(require("config"));
const connect_1 = __importDefault(require("./utils/connect"));
const logger_1 = __importDefault(require("./utils/logger"));
const init_app_1 = __importDefault(require("./router/init-app"));
const http_1 = __importDefault(require("http"));
const port = config_1.default.get('port');
const app = (0, express_1.default)();
const names = ["Oli-Andrea", "Andrea", "Oli"];
app.get('/', (req, res, next) => {
    res.send(names);
});
const server = http_1.default.createServer(app);
server.listen(port, () => __awaiter(void 0, void 0, void 0, function* () {
    logger_1.default.info(`Server is up and running on port ${port}`);
    yield (0, connect_1.default)();
}));
server.on('listening', () => console.log("up and running"));
(0, init_app_1.default)(app);
