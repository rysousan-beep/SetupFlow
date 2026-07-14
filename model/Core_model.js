const conexao = require("../conexao/conexao.js");

// =========================
// Cadastrar Produto
// =========================

function cadastrar(Cores, callback) {

    const sql = `INSERT INTO Cores
        ( nome, codigo )
        VALUES (?, ?)`;

    conexao.query(
        sql,
        [
            Cores.nome,
            Cores.codigo
        ],
        callback
    );

}

// =========================
// Listar Cores
// =========================

function listar(callback) {

    const sql = `
        SELECT * FROM Cores
    `;

    conexao.query(sql, callback);

}

// =========================
// Buscar por ID
// =========================

function buscarPorId(id, callback) {

    const sql = `
        SELECT *
        FROM Cores
        WHERE idCores = ?
    `;

    conexao.query(sql, [id], callback);

}

// =========================
// Buscar por codigo
// =========================

function buscarPorcodigo(codigo, callback) {

    const sql = `
        SELECT * FROM Cores
        WHERE codigo = ?
    `;

    conexao.query(sql, [codigo], callback);

}

// =========================
// Atualizar Cliente
// =========================

function atualizar(id, Cores, callback) {

    const sql = `
        UPDATE Cores
        SET

            nome = ?,
            codigo = ?

        WHERE idCores = ?
    `;

    conexao.query(
        sql,
        [
            Cores.nome,
            Cores.codigo,
            id
        ],
        callback
    );

}

// =========================
// Excluir Cores
// =========================

function excluir(id, callback) {

    const sql = `
        DELETE FROM Cores
        WHERE idCores = ?
    `;

    conexao.query(sql, [id], callback);

}

module.exports = {

    cadastrar,
    listar,
    buscarPorId,
    buscarPorcodigo,
    atualizar,
    excluir

};