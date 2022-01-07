"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMensajeById = exports.postMensaje = exports.getMensaje = void 0;
const getMensaje = (req, res) => {
    res.json({
        ok: true,
        message: 'Todo ok'
    });
};
exports.getMensaje = getMensaje;
const postMensaje = (req, res) => {
    const data = req.body;
    res.json({
        ok: true,
        message: 'Todo ok POST',
        data
    });
};
exports.postMensaje = postMensaje;
const getMensajeById = (req, res) => {
    const id = req.params.id;
    res.json({
        ok: true,
        message: 'Todo ok POST',
        id
    });
};
exports.getMensajeById = getMensajeById;
