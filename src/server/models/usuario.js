import mongoose from 'mongoose';

const usuarioSchema = new mongoose.Schema({
  email: {type: String, unique: true},
  user: String,
  senha: String
});
  
const Usuario = mongoose.model('Usuario', usuarioSchema);

export default Usuario;
