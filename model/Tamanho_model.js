const conexao = require("../conexao/conexao.js");

// =========================
// Cadastrar Produto
// =========================

function cadastrar(Tamanho, callback) {

    const sql = `INSERT INTO Tamanho
        (Tamanho)
        VALUES (?)`;

    conexao.query(
        sql,
        [
            Tamanho.Tamanho
        ],
        callback
    );

}

// =========================
// Listar Tamanhos
// =========================

function listar(callback) {

    const sql = `
        SELECT * FROM Tamanho
    `;

    conexao.query(sql, callback);

}

// =========================
// Buscar por ID
// =========================

function buscarPorId(id, callback) {

    const sql = `
        SELECT *
        FROM Tamanho
        WHERE idTamanho = ?
    `;

    conexao.query(sql, [id], callback);

}

// =========================
// Buscar por Tamanho
// =========================

function buscarPorTamanho(Tamanho, callback) {

    const sql = `
        SELECT * FROM Tamanho
        WHERE tamanho = ?
    `;

    conexao.query(sql, [Tamanho], callback);

}

// =========================
// Atualizar Tamanho
// =========================

function atualizar(id, Tamanho, callback) {

    const sql = `
        UPDATE Tamanho
        SET

            tamanho = ?
        WHERE idTamanho = ?
    `;

    conexao.query(
        sql,
        [
            Tamanho.Tamanho,
            id
        ],
        callback
    );

}
           
// =========================
// Excluir Tamanho
// =========================

function excluir(id, callback) {

    const sql = `
        DELETE FROM Tamanho
        WHERE idTamanho = ?
    `;

    conexao.query(sql, [id], callback);

}

module.exports = {

    cadastrar,
    listar,
    buscarPorId,
    buscarPorTamanho,
    atualizar,
    excluir

};