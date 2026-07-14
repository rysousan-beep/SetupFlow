const conexao = require("../conexao/conexao.js");

// =========================
// Cadastrar Produto
// =========================

function cadastrar(produto_has_carrinho, callback) {

    const sql = `INSERT INTO produto_has_carrinho
        ( Produto_idProduto, Carrinho_idCarrinho )
        VALUES (?, ?)`;

    conexao.query(
        sql,
        [
            produto_has_carrinho.Produto_idProduto,
            produto_has_carrinho.Carrinho_idCarrinho
        ],
        callback
    );

}

// =========================
// Listar produto_has_carrinho
// =========================

function listar(callback) {

    const sql = `
        SELECT * FROM   produto_has_carrinho
    `;

    conexao.query(sql, callback);

}

// =========================
// Buscar por ID
// =========================

function buscarPorId(id, callback) {

    const sql = `
        SELECT *
        FROM   produto_has_carrinho
        WHERE idproduto_has_carrinho = ?
    `;

    conexao.query(sql, [id], callback);

}

// =========================
// Buscar por idproduto
// =========================

function buscarPorProdutoId(produtoId, callback) {

    const sql = `
        SELECT * FROM   produto_has_carrinho
        WHERE Produto_idProduto = ?
    `;

    conexao.query(sql, [produtoId], callback);

}

// =========================
// Atualizar produto_has_carrinho
// =========================

function atualizar(id, produto_has_carrinho, callback) {

    const sql = `
        UPDATE produto_has_carrinho
        SET

            Produto_idProduto = ?,
            Carrinho_idCarrinho = ?

        WHERE idproduto_has_carrinho = ?
    `;

    conexao.query(
        sql,
        [
            produto_has_carrinho.Produto_idProduto,
            produto_has_carrinho.Carrinho_idCarrinho,
            id
        ],
        callback
    );

}

// =========================
// Excluir produto_has_carrinho
// =========================

function excluir(id, callback) {

    const sql = `
        DELETE FROM produto_has_carrinho
        WHERE idproduto_has_carrinho = ?
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