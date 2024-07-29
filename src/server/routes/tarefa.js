import express from 'express';
import { buscarTarefa, criarTarefa, editarTarefa, excluirTarefa } from '../controllers/tarefaController.js';

const router = express.Router();

router.post('/tarefas', criarTarefa);
router.get('/tarefas', buscarTarefa);
router.delete('/tarefas/:id', excluirTarefa);
router.put('/tarefas/:id', editarTarefa);

export default router;
