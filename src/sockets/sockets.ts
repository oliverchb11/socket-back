import { Socket } from "socket.io";

export const desconectar = (cliente: Socket) => {
    cliente.on('disconnect', () => {
        console.log('cliente desconectado');
    })
}


export const message = ( cliente: Socket ) => {
    cliente.on('message', ( payload ) => {
        console.log(`mensaje ok ${payload}`);
    })
}