import { Request, Response } from 'express';


export const getMensaje = (req: Request, res: Response) => {
    res.json({
        ok: true,
        message: 'Todo ok'
    })
}
export const postMensaje = (req: Request, res: Response) => {

    const data = req.body
    res.json({
        ok: true,
        message: 'Todo ok POST',
        data
    })
}
export const  getMensajeById = (req: Request, res: Response) => {

    const id = req.params.id
    res.json({
        ok: true,
        message: 'Todo ok POST',
        id
    })
}