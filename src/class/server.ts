import express from 'express';
import { SERVER_PORT } from '../global/enviroment';
import socketIO from 'socket.io';
import http from 'http';
import * as socket from '../sockets/sockets';
export default class Server{
    private static _intance: Server;
    public io =  new socketIO.Server
    public app: express.Application;
    public port: number;
    private httpServer: http.Server

    private constructor(){
        this.app = express();
        this.port = SERVER_PORT;
        this.httpServer = new http.Server(this.app);
        this.io = new socketIO.Server( this.httpServer, { cors: { origin: true, credentials: true } } );
        this.listenSockets();
    }

    public static get intance(){
        return this._intance || (this._intance = new this())
    }

    private listenSockets(){
        console.log('escuchar sockets');
        this.io.on('connection', cliente => {
            console.log('nuevo cliente conectado');
            socket.message(cliente);
            socket.desconectar(cliente);
        }) //escuhcar eventos

        
    }

    public run(cn: (() => void)){
        this.httpServer.listen(this.port, cn);
    }
}