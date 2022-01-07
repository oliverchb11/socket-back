import { Router } from 'express';
import { getMensaje, getMensajeById, postMensaje } from '../controllers/controller';

export const router = Router();


router.get('/mensajes', getMensaje);
router.get('/mensajes/:id', getMensajeById);
router.post('/mensajes', postMensaje);

