import React, { FC, useState } from 'react';
import axios from 'axios';

const ToDo: FC = () => {
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    if (titulo && descricao) {
      try {
        const novaTarefa = {
          titulo: titulo,
          descricao: descricao,
        };

        await axios.post('http://localhost:4000/api/tarefas', novaTarefa);
        alert('Tarefa adicionada com sucesso!');
        setTitulo('');
        setDescricao('');
        window.location.reload(); // Recarregar a página
      } catch (error) {
        console.error('Erro ao adicionar tarefa:', error);
        alert('Erro ao adicionar tarefa. Verifique o console para mais detalhes.');
      }
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  };

  return (
    <div className="container">
      <div className="col-12 text-end"></div>
      <div className="container border rounded d-flex justify-content-center shadow p-3 mb-5 bg-white rounded">
        <div className="row">
          <div className="text-center">
            <h2></h2>
          </div>
          <form className="col-12 p-2" onSubmit={handleAdd}>
            <label htmlFor="titulo" className="my-2">
              Título da Tarefa
            </label>
            <input
              type="text"
              name="titulo"
              id="titulo"
              placeholder="Entre com o título"
              className="w-100 my-1 p-2"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
            />
            <label className="my-2" htmlFor="descricao">
              Descrição
            </label>
            <input
              type="text"
              name="descricao"
              id="descricao"
              placeholder="Insira a descrição"
              className="w-100 my-1 p-2"
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
            />
            <button className="btn btn-primary my-2" type="submit">Salvar Tarefa</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ToDo;
