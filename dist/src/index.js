"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./class/server"));
const router_1 = require("./routers/router");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const server = server_1.default.intance;
server.app.use(express_1.default.urlencoded({ extended: true }));
server.app.use(express_1.default.json());
server.app.use((0, cors_1.default)({ origin: true, credentials: true }));
server.app.use('/', router_1.router);
server.run(() => {
    console.log(`Servidor en el puerto  ${server.port}`);
});
