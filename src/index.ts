import Server from "./class/server";
import {router} from './routers/router';
import express from 'express';
import cors from 'cors'
const server = Server.intance;

server.app.use(express.urlencoded({extended: true  }))
server.app.use(express.json());
server.app.use(cors({origin: true, credentials: true}))
server.app.use('/', router);
server.run(() => {
    console.log(`Servidor en el puerto  ${server.port}`);
})