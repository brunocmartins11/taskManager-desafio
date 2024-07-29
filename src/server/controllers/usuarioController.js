import Usuario from '../models/usuario.js';

// Adicionar novo usuário
export const adicionarUsuario = async (req, res) => {
  try {
    const {email, user, senha} = req.body;

    // Verifica se a clínica existe
    const tarefa = await Tarefa.findById(TarefaId);
    if (!tarefa) {
      return res.status(404).json({ message: 'Clínica não encontrada' });
    }

    const novoUsuario = new Usuario({email, user, senha});
    await novoUsuario.save();
    res.status(201).json(novoUsuario);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


export const buscarUsuarios = async (req, res) => {
  try {
    if(!req.params.id){
      const usuarios = await Usuario.find();  // Populando os dados da clínica
      res.status(200).json(usuarios);
    } else {
      const usuarios = await Usuario.findById(req.params.id);  // Populando os dados da clínica
      res.status(200).json(usuarios);
    }
    
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const excluirUsuarios = async (req, res) => {
  try {
    const usuario = await Usuario.findByIdAndDelete(req.params.id);
    if (!usuario) {
      return res.status(404).json({ message: "Usuário não encontrado" });
    }
    res.status(202).json(usuario);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const editarUsuarios = async (req, res) => {
  try {
    const usuario = await Usuario.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!usuario) {
      return res.status(404).json({ message: "Usuário não encontrado" });
    }
    res.status(200).json(usuario);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};