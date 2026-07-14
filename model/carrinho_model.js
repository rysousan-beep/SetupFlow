const conexao = require("../conexao/conexao.js");

// =========================
// Cadastrar Produto
// =========================

function cadastrar(carrinho, callback) {

    const sql = `INSERT INTO carrinho
        ( quantiadade, preco_total, Cliente_idCliente )
        VALUES (?, ?, ?, )`;

    conexao.query(
        sql,
        [
            carrinho.quantidade,
            carrinho.preco_total,
            carrinho.Cliente_idCliente
        ],
        callback
    );

        
}

// =========================
// Listar Clientes
// =========================

function listar(callback) {

    const sql = `
        SELECT * FROM carrinho
    `;

    conexao.query(sql, callback);

}

// =========================
// Buscar por ID
// =========================

function buscarPorId(id, callback) {

    const sql = `
        SELECT *
        FROM carrinho
        WHERE idcarrinho = ?
    `;

    conexao.query(sql, [id], callback);

}

// =========================
// Buscar por cliente
// =========================

function buscarPorCliente(cliente, callback) {

    const sql = `
        SELECT * FROM carrinho
        WHERE Cliente_idCliente = ?
    `;

    conexao.query(sql, [cliente], callback);

}

// =========================
// Atualizar carrinho
// =========================

function atualizar(id, carrinho, callback) {

    const sql = `
        UPDATE carrinho
        SET

            quantidade = ?,
            preco_total = ?,
            Cliente_idCliente = ?

        WHERE idcarrinho = ?
    `;

    conexao.query(
        sql,
        [
            carrinho.quantidade,
            carrinho.preco_total,
            carrinho.Cliente_idCliente,
            id
        ],
        callback
    );

}




// =========================
// Excluir carrinho
// =========================

function excluir(id, callback) {

    const sql = `
        DELETE FROM carrinho
        WHERE idcarrinho = ?
    `;

    conexao.query(sql, [id], callback);

}

module.exports = {

    cadastrar,
    listar,
    buscarPorId,
    buscarPorCliente,
    atualizar,
    excluir

};