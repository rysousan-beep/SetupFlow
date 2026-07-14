const conexao = require("../conexao/conexao.js");

// =========================
// Cadastrar Produto
// =========================

function cadastrar(pedidos_has_produto, callback) {

    const sql = `INSERT INTO pedidos_has_produto
        ( Pedidos_idPedidos, Produto_idProduto )
        VALUES (?, ?)`;

    conexao.query(
        sql,
        [
            pedidos_has_produto.Pedidos_idPedidos,
            pedidos_has_produto.Produto_idProduto
        ],
        callback
    );

}

// =========================
// Listar pedidos_has_produto
// =========================

function listar(callback) {

    const sql = `
        SELECT * FROM pedidos_has_produto
    `;

    conexao.query(sql, callback);

}

// =========================
// Buscar por ID
// =========================

function buscarPorId(id, callback) {

    const sql = `
        SELECT *
        FROM pedidos_has_produto
        WHERE idpedidos_has_produto = ?
    `;

    conexao.query(sql, [id], callback);

}

// =========================
// Buscar por pedidosid
// =========================

function buscarPorPedidosId(pedidosId, callback) {

    const sql = `
        SELECT * FROM pedidos_has_produto
        WHERE Pedidos_idPedidos = ?
    `;

    conexao.query(sql, [pedidosId], callback);

}

// =========================
// Atualizar pedidos_has_produto
// =========================

function atualizar(id, pedidos_has_produto, callback) {

    const sql = `
        UPDATE pedidos_has_produto
        SET

            Pedidos_idPedidos = ?,
            Produto_idProduto = ?

        WHERE idpedidos_has_produto = ?
    `;

    conexao.query(
        sql,
        [
            pedidos_has_produto.Pedidos_idPedidos,
            pedidos_has_produto.Produto_idProduto,
            id
        ],
        callback
    );

}

// =========================
// Excluir pedidos_has_produto
// =========================

function excluir(id, callback) {

    const sql = `
        DELETE FROM pedidos_has_produto
        WHERE idpedidos_has_produto = ?
    `;

    conexao.query(sql, [id], callback);

}

module.exports = {

    cadastrar,
    listar,
    buscarPorId,
    buscarPorPedidosId,
    atualizar,
    excluir

};