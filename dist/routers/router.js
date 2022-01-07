"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const controller_1 = require("../controllers/controller");
exports.router = (0, express_1.Router)();
exports.router.get('/mensajes', controller_1.getMensaje);
exports.router.get('/mensajes/:id', controller_1.getMensajeById);
exports.router.post('/mensajes', controller_1.postMensaje);
