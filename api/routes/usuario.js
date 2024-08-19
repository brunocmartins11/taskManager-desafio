import { Router } from 'express';
import { adicionarUsuario } from '../controllers/usuarioController.js';

const router = Router();

router.post('/', adicionarUsuario);

export default router;
