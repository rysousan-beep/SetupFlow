const conexao = require("../conexao/conexao.js");

// =========================
// Cadastrar Produto
// =========================

function cadastrar(avaliacao_produto, callback) {

    const sql = `INSERT INTO avaliacao_produto
       
    (data_, nota, descricao, produto_idproduto)
        VALUES (?, ?, ?, ?)`;

    conexao.query(
        sql,
        [
            avaliacao_produto.data_,
            avaliacao_produto.nota,
            avaliacao_produto.descricao,
            avaliacao_produto.produto_idproduto
        ],
        callback
    );

}

// =========================
// Listar Avaliações de Produto
// =========================

function listar(callback) {

    const sql = `
        SELECT * FROM avaliacao_produto
    `;

    conexao.query(sql, callback);

}

// =========================
// Buscar por ID
// =========================

function buscarPorId(id, callback) {

    const sql = `
        SELECT *
        FROM avaliacao_produto
        WHERE idavaliacao_produto = ?
    `;

    conexao.query(sql, [id], callback);

}

// =========================
// Buscar por data_
// =========================

function buscarPordata_(data_, callback) {

    const sql = `
        SELECT * FROM avaliacao_produto
        WHERE data_ = ?
    `;

    conexao.query(sql, [data_], callback);

}

// =========================
// Atualizar avaliação de Produto
// =========================

function atualizar(id, avaliacao_produto, callback) {

    const sql = `
        UPDATE avaliacao_produto
        SET

            data_ = ?,
            nota = ?,
            descricao = ?,
            produto_idproduto = ?
        WHERE idavaliacao_produto = ?
    `;

    conexao.query(
        sql,
        [
            avaliacao_produto.data_,
            avaliacao_produto.nota,
            avaliacao_produto.descricao,
            avaliacao_produto.produto_idproduto,
            id
        ],
        callback
    );

}


// =========================
// Excluir avaliação de produto
// =========================

function excluir(id, callback) {

    const sql = `
        DELETE FROM avaliacao_produto
        WHERE idavaliacao_produto = ?
    `;

    conexao.query(sql, [id], callback);

}

module.exports = {

    cadastrar,
    listar,
    buscarPorId,
    buscarPordata_,
    atualizar,
    excluir

}