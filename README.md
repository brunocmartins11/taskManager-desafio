# Desafio: Gerenciador de Tarefas com API CRUD

Repositório para projeto de gerenciador de tarefas, com o objetivo de realizar CRUD (Crate, Read, Update, Delete) e o usuário poder visualizar as operações.

## Tecnologias Utilizadas

Para a realização deste projeto, foi necessário utilizar <b>HTML, CSS e TypeScript</b>, utilizando o framework <b>React</b> para realização do Front-End, juntamente ao <b>Node.js</b> para a realização do Back-End e <b>MongoDB</b> de banco de dados orientado a documentos <b>(JSON)</b>.

## Como Utilizar ?

Para utilizar o projeto, após clonar esse repositório, primeiro instale as dependências utilizando o código abaixo:

```node
npm install
```

Após isso, deverá compilar e rodar o projeto, utilizando o código:

```node
npm run dev
```

O servidor será iniciado a partir desse ponto para funcionamento do código e realização de CRUD de acordo com os <a href="./models/">modelos</a> que estão feitos no projeto.

As portas utilizadas são:
```url
http://localhost:5173
http://localhost:4000/api/tarefas
```
Um exemplo de JSON que será utilizado pela API seria:
```json
{
"titulo": "titulo-da-tarefa",
"descricao": "descricao-da-tarefa"
}
```

## Autor

<table>
  <tr>
  <td align="center">
      <a href="https://github.com/brunocmartins11" title="Bruno Martins">
        <img src="https://avatars.githubusercontent.com/u/101012137?v=4" width="100px;" alt="Foto de Bruno Martins"/><br>
        <sub>
          <b>Bruno Martins</b>
        </sub>
      </a>
    </td>
  </tr>
</table>