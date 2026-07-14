const conexao = require("../conexao/conexao.js");

// =========================
// Cadastrar Produto
// =========================

function cadastrar(cupom_has_produto, callback) {

    const sql = `INSERT INTO cupom_has_produto
        ( Cupom_idCupom, Produto_idProduto )
        VALUES (?, ?)`;

    conexao.query(
        sql,
        [
            cupom_has_produto.Cupom_idCupom,
            cupom_has_produto.Produto_idProduto
        ],
        callback
    );

}

// =========================
// Listar cupom_has_produto
// =========================

function listar(callback) {

    const sql = `
        SELECT * FROM cupom_has_produto
    `;

    conexao.query(sql, callback);

}

// =========================
// Buscar por ID
// =========================

function buscarPorId(id, callback) {

    const sql = `
        SELECT *
        FROM cupom_has_produto
        WHERE idcupom_has_produto = ?
    `;

    conexao.query(sql, [id], callback);

}

// =========================
// Buscar por cupomid
// =========================

function buscarPorCupomId(cupomId, callback) {

    const sql = `
        SELECT * FROM cupom_has_produto
        WHERE Cupom_idCupom = ?
    `;

    conexao.query(sql, [cupomId], callback);

}

// =========================
// Atualizar cupom_has_produto
// =========================

function atualizar(id, cupom_has_produto, callback) {

    const sql = `
        UPDATE cupom_has_produto
        SET

            Cupom_idCupom = ?,
            Produto_idProduto = ?

        WHERE idcupom_has_produto = ?
    `;

    conexao.query(
        sql,
        [
            cupom_has_produto.Cupom_idCupom,
            cupom_has_produto.Produto_idProduto,
            id
        ],
        callback
    );

}

// =========================
// Excluir cupom_has_produto
// =========================

function excluir(id, callback) {

    const sql = `
        DELETE FROM cupom_has_produto
        WHERE idcupom_has_produto = ?
    `;

    conexao.query(sql, [id], callback);

}

module.exports = {

    cadastrar,
    listar,
    buscarPorId,
    buscarPorCupomId,
    atualizar,
    excluir

};