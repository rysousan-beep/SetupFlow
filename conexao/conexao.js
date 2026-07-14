// conectar com o servidor do banco de dados MySQL
const mysql = require('mysql');

//variavel que vai armazenar a conexão com o banco de dados
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'SetupFlow'
});

conexao.connect((err) => {

  if (err) {
    console.error('Erro ao conectar :', err);
    return;
  }

    console.log('Banco  conectado com sucesso!');

});

module.exports = conexao;

