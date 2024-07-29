import express from 'express';
import mongoose from 'mongoose';
import usuarioRoutes from './routes/usuario.js';
import tarefaRoutes from './routes/tarefa.js';
import cors from 'cors';

import dotenv from 'dotenv';

dotenv.config();

const app = express();

const corsOptions = {
  origin: 'http://localhost:5173',
};
app.use(cors(corsOptions));

app.use(express.json());

app.use('/api', usuarioRoutes);
app.use('/api', tarefaRoutes);


mongoose.connect('mongodb+srv://users:unUrzi7uzdgkcORI@taskmanager.8gadzyr.mongodb.net/?retryWrites=true&w=majority&appName=taskManager').then(() => {
  console.log('Conectado ao MongoDB');
  app.listen(4000, () => {
    console.log('Servidor rodando na porta 4000');
  });
}).catch((error) => {
  console.error('Erro ao conectar ao MongoDB', error);
});

