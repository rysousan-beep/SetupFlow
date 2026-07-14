const conexao = require("../conexao/conexao.js");

// =========================
// Cadastrar Produto
// =========================

function cadastrar(promocao, callback) {

    const sql = `INSERT INTO Promocao
        ( data_inicio, data_final, valor_promocional, nome, 
         banner_idbanner)
        VALUES (?, ?, ?, ?, ?)`;

    conexao.query(
        sql,
        [
            promocao.data_inicio,
            promocao.data_final,
            promocao.valor_promocional,
            promocao.nome,
            promocao.banner_idbanner
        ],
        callback
    );

}

// =========================
// Listar promocao
// =========================

function listar(callback) {

    const sql = `
        SELECT * FROM Promocao
    `;

    conexao.query(sql, callback);

}

// =========================
// Buscar por ID
// =========================

function buscarPorId(id, callback) {

    const sql = `
        SELECT *
        FROM Promocao
        WHERE idPromocao = ?
    `;

    conexao.query(sql, [id], callback);

}

// =========================
// Buscar por nome
// =========================

function buscarPornome(nome, callback) {

    const sql = `
        SELECT * FROM Promocao
        WHERE nome = ?
    `;

    conexao.query(sql, [nome], callback);

}

// =========================
// Atualizar Promocao
// =========================

function atualizar(id, promocao, callback) {

    const sql = `
        UPDATE Promocao
        SET

            nome = ?,
            descricao = ?,
            data_inicio = ?,
            data_final = ?

        WHERE idPromocao = ?
    `;

    conexao.query(
        sql,
        [
            promocao.nome,
            promocao.descricao,
            promocao.data_inicio,
            promocao.data_final,
            id
        ],
        callback
    );

}

// =========================
// Excluir Promocao
// =========================

function excluir(id, callback) {

    const sql = `
        DELETE FROM Promocao
        WHERE idPromocao = ?
    `;

    conexao.query(sql, [id], callback);

}

module.exports = {

    cadastrar,
    listar,
    buscarPorId,
    buscarPornome,
    atualizar,
    excluir

};