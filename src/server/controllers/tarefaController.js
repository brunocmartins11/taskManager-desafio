import Tarefa from '../models/tarefa.js';

export const criarTarefa = async (req, res) => {
  try {
    const { titulo, descricao } = req.body;
    const novaTarefa = new Tarefa({ titulo, descricao });
    await novaTarefa.save();
    res.status(201).json(novaTarefa);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const buscarTarefa = async (req, res) => {
  try {
    const tarefas = await Tarefa.find();
    res.status(200).json(tarefas);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const excluirTarefa = async (req, res) => {
  try {
    const tarefa = await Tarefa.findByIdAndDelete(req.params.id);
    if (!tarefa) {
      return res.status(404).json({ message: 'Tarefa não encontrada' });
    }
    res.status(202).json(tarefa);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const editarTarefa = async (req, res) => {
  try {
    const tarefa = await Tarefa.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!tarefa) {
      return res.status(404).json({ message: 'Tarefa não encontrada' });
    }
    res.status(200).json(tarefa);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
