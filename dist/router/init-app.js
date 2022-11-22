"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const routes_1 = __importDefault(require("./routes"));
const user_route_1 = __importDefault(require("./userRoute/user.route"));
const initAppRoutes = (app) => {
    app.use("/api/v1/health", routes_1.default);
    app.use("/api/v1/registerUser", user_route_1.default);
};
exports.default = initAppRoutes;
