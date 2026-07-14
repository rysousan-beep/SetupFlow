const conexao = require("../conexao/conexao.js");

// =========================
// Cadastrar Produto
// =========================

function cadastrar(Marca, callback) {

    const sql = `INSERT INTO Marca
        (nome, logo)
        VALUES (?, ?)`;

    conexao.query(
        sql,
        [
            Marca.nome,
            Marca.logo
        ],
        callback
    );

}

// =========================
// Listar Marcas
// =========================

function listar(callback) {

    const sql = `
        SELECT * FROM Marca
    `;

    conexao.query(sql, callback);

}

// =========================
// Buscar por nome
// =========================

function buscarPorNome(nome, callback) {

    const sql = `
        SELECT *
        FROM Marca
        WHERE nome = ?
    `;

    conexao.query(sql, [nome], callback);

}

// =========================
// Buscar por Email
// =========================

function buscarPorEmail(nome, callback) {

    const sql = `
        SELECT * FROM marca
        WHERE nome = ?
    `;

    conexao.query(sql, [email], callback);

}

// =========================
// Atualizar Marca
// =========================

function atualizar(id, Marca, callback) {

    const sql = `
        UPDATE Marca
        SET

            nome = ?,
            logo = ?
        WHERE idMarca = ?
    `;

     
    conexao.query(
        sql,
        [
            Marca.nome,
            Marca.logo,
            id
        ],
        callback
    );


}

// =========================
// Excluir Marca
// =========================

function excluir(id, callback) {

    const sql = `
        DELETE FROM Marca
        WHERE idMarca = ?
    `;

    conexao.query(sql, [id], callback);

}

module.exports = {

    cadastrar,
    listar,
    buscarPorNome,
    buscarPorEmail,
    atualizar,
    excluir

};