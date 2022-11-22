"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const healthCheck_1 = require("../controllers/healthCheck");
const healthRouter = express_1.default.Router();
healthRouter.get("/health-check", healthCheck_1.check);
exports.default = healthRouter;
