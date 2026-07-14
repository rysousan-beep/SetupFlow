const conexao = require("../conexao/conexao.js");

// =========================
// Cadastrar Produto
// =========================

function cadastrar(banner, callback) {

    const sql = `INSERT INTO banner
        ( imagem, data_inicio, data_fim, 
         status_visibilidade, loja_idloja)
        VALUES (?, ?, ?, ?, ?)`;

    conexao.query(
        sql,
        [
            banner.imagem,
            banner.data_inicio,
            banner.data_fim,
            banner.status_visibilidade,
            banner.loja_idloja
        ],
        callback
    )

}

// =========================
// Listar Banner
// =========================

function listar(callback) {

    const sql = `
        SELECT * FROM banner
    `;

    conexao.query(sql, callback);

}

// =========================
// Buscar por ID
// =========================

function buscarPorId(id, callback) {

    const sql = `
        SELECT *
        FROM banner
        WHERE idbanner = ?
    `;

    conexao.query(sql, [id], callback);

}

// =========================
// Buscar por Loja
// =========================

function buscarPorLoja(lojaId, callback) {

    const sql = `
        SELECT * FROM banner
        WHERE loja_idloja = ?
    `;

    conexao.query(sql, [lojaId], callback);

}

// =========================
// Atualizar Banner
// =========================

function atualizar(id, banner, callback) {

    const sql = `
        UPDATE banner
        SET

            imagem = ?,
            data_inicio = ?,
            data_fim = ?,
            status_visibilidade = ?,
            loja_idloja = ?
        WHERE idbanner = ?
    `;

    conexao.query(
        sql,
        [
            banner.imagem,
            banner.data_inicio,
            banner.data_fim,
            banner.status_visibilidade,
            banner.loja_idloja,
            id
        ],
        callback
    );

}

// =========================
// Excluir Banner
// =========================

function excluir(id, callback) {

    const sql = `
        DELETE FROM banner
        WHERE idCliente = ?
    `;

    conexao.query(sql, [id], callback);

}

module.exports = {

    cadastrar,
    listar,
    buscarPorId,
    buscarPorLoja,
    atualizar,
    excluir

};