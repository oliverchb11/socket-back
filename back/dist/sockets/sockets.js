"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.message = exports.desconectar = void 0;
const desconectar = (cliente) => {
    cliente.on('disconnect', () => {
        console.log('cliente desconectado');
    });
};
exports.desconectar = desconectar;
const message = (cliente) => {
    cliente.on('message', (payload) => {
        console.log(`mensaje ok ${payload}`);
    });
};
exports.message = message;
