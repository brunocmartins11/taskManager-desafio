import React, { FC, useEffect, useState } from 'react';
import axios from 'axios';

interface Tarefa {
  _id: string;
  titulo: string;
  descricao: string;
}

const ListaToDo: React.FC = () => {
  const [tarefas, setTarefas] = useState<Tarefa[]>([]);
  const [showDelete] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:4000/api/tarefas/')
      .then(response => {
        console.log('Dados recebidos da API:', response.data);
        setTarefas(response.data);
      })
      .catch(error => {
        console.error('Teve um erro ao procurar tarefas!', error);
      });
  }, []);

  const handleEditar = (id: string) => {
    const novoTitulo = prompt('Digite o novo título da tarefa:');
    const novaDescricao = prompt('Digite a nova descrição da tarefa:');

    if (novoTitulo && novaDescricao) {
      axios.put(`http://localhost:4000/api/tarefas/${id}`, {
        titulo: novoTitulo,
        descricao: novaDescricao
      })
        .then(response => {
          console.log('Tarefa editada com sucesso:', response.data);
          setTarefas(tarefas.map(tarefa =>
            tarefa._id === id ? { ...tarefa, titulo: novoTitulo, descricao: novaDescricao } : tarefa
          ));
        })
        .catch(error => {
          console.error('Erro ao editar a tarefa:', error);
        });
    }
  };

  const handleDeletar = (id: string) => {
    if (window.confirm('Você tem certeza que deseja deletar esta tarefa?')) {
      axios.delete(`http://localhost:4000/api/tarefas/${id}`)
      .then(response => {
        console.log('Tarefa deletada com sucesso:', response.data);
        setTarefas(tarefas.filter(tarefa => tarefa._id !== id));
      })
      .catch(error => {
        console.error('Erro ao deletar a tarefa:', error);
      });
    }
  };

  return (
    <div className="container py-2">
      {tarefas.length > 0 ? (
        tarefas.map((tarefa) => (
          <div className="row border rounded shadow p-3 mb-5 bg-white rounded my-3 p-2" key={tarefa._id}>
            <div className="col-12 d-flex justify-content-between">
              <div>
                <h4>{tarefa.titulo}</h4>
                <p>{tarefa.descricao}</p>
              </div>
              <div className="d-flex align-items-center">
                <button
                  className="btn btn-primary mx-2"
                  onClick={() => handleEditar(tarefa._id)}>
                  Editar Tarefa
                </button>

                {showDelete && (
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => handleDeletar(tarefa._id)}>
                    Deletar Tarefa
                  </button>
                )}
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>Nenhuma tarefa encontrada</p>
      )}
    </div>
  );
};

export default ListaToDo;
