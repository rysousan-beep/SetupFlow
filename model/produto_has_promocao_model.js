const conexao = require("../conexao/conexao.js");

// =========================
// Cadastrar Produto
// =========================

function cadastrar(produto_has_promocao, callback) {

    const sql = `INSERT INTO produto_has_promocao
        ( Produto_idProduto, Promocao_idPromocao )
        VALUES (?, ?)`;

    conexao.query(
        sql,
        [
            produto_has_promocao.Produto_idProduto,
            produto_has_promocao.Promocao_idPromocao
        ],
        callback
    );

}

// =========================
// Listar produto_has_promocao
// =========================

function listar(callback) {

    const sql = `
        SELECT * FROM produto_has_promocao
    `;

    conexao.query(sql, callback);

}

// =========================
// Buscar por ID
// =========================

function buscarPorId(id, callback) {

    const sql = `
        SELECT *
        FROM produto_has_promocao
        WHERE idproduto_has_promocao = ?
    `;

    conexao.query(sql, [id], callback);

}

// =========================
// Buscar por idproduto
// =========================

function buscarPorProdutoId(produtoId, callback) {

    const sql = `
        SELECT * FROM produto_has_promocao
        WHERE Produto_idProduto = ?
    `;

    conexao.query(sql, [produtoId], callback);

}

// =========================
// Atualizar produto_has_promocao
// =========================

function atualizar(id, produto_has_promocao, callback) {

    const sql = `
        UPDATE produto_has_promocao
        SET

            Produto_idProduto = ?,
            Promocao_idPromocao = ?

        WHERE idproduto_has_promocao = ?
    `;

    conexao.query(
        sql,
        [
            produto_has_promocao.Produto_idProduto,
            produto_has_promocao.Promocao_idPromocao,
            id
        ],
        callback
    );

}

// =========================
// Excluir produto_has_promocao
// =========================

function excluir(id, callback) {

    const sql = `
        DELETE FROM produto_has_promocao
        WHERE idCores = ?
    `;

    conexao.query(sql, [id], callback);

}

module.exports = {

    cadastrar,
    listar,
    buscarPorId,
    buscarPorProdutoId,
    atualizar,
    excluir

};