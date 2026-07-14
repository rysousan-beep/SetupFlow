const conexao = require("../conexao/conexao.js");

// =========================
// Cadastrar Produto
// =========================

function cadastrar(banner_has_produto, callback) {

    const sql = `INSERT INTO banner_has_produto
        ( Banner_idBanner, Produto_idProduto )
        VALUES (?, ?)`;

    conexao.query(
        sql,
        [
            banner_has_produto.Banner_idBanner,
            banner_has_produto.Produto_idProduto
        ],
        callback
    );

}

// =========================
// Listar banner_has_produto
// =========================

function listar(callback) {

    const sql = `
        SELECT * FROM banner_has_produto
    `;

    conexao.query(sql, callback);

}

// =========================
// Buscar por ID
// =========================

function buscarPorId(id, callback) {

    const sql = `
        SELECT *
        FROM banner_has_produto
        WHERE idbanner_has_produto = ?
    `;

    conexao.query(sql, [id], callback);

}

// =========================
// Buscar por bannerid
// =========================

function buscarPorBannerId(bannerId, callback) {

    const sql = `
        SELECT * FROM banner_has_produto
        WHERE Banner_idBanner = ?
    `;

    conexao.query(sql, [bannerId], callback);

}

// =========================
// Atualizar banner_has_produto
// =========================

function atualizar(id, banner_has_produto, callback) {

    const sql = `
        UPDATE banner_has_produto
        SET

            Banner_idBanner = ?,
            Produto_idProduto = ?

        WHERE idbanner_has_produto = ?
    `;

    conexao.query(
        sql,
        [
            banner_has_produto.Banner_idBanner,
            banner_has_produto.Produto_idProduto,
            id
        ],
        callback
    );

}

// =========================
// Excluir banner_has_produto
// =========================

function excluir(id, callback) {

    const sql = `
        DELETE FROM banner_has_produto
        WHERE idbanner_has_produto = ?
    `;

    conexao.query(sql, [id], callback);

}

module.exports = {

    cadastrar,
    listar,
    buscarPorId,
    buscarPorBannerId,
    atualizar,
    excluir

};