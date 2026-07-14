const conexao = require("../conexao/conexao.js");

// =========================
// Cadastrar Produto
// =========================

function cadastrar(categoria_has_cupom, callback) {

    const sql = `INSERT INTO categoria_has_cupom
        ( Categoria_idCategoria, Cupom_idCupom )
        VALUES (?, ?)`;

    conexao.query(
        sql,
        [
            categoria_has_cupom.Categoria_idCategoria,
            categoria_has_cupom.Cupom_idCupom
        ],
        callback
    );

}

// =========================
// Listar categoria_has_cupom
// =========================

function listar(callback) {

    const sql = `
        SELECT * FROM categoria_has_cupom
    `;

    conexao.query(sql, callback);

}

// =========================
// Buscar por ID
// =========================

function buscarPorId(id, callback) {

    const sql = `
        SELECT *
        FROM categoria_has_cupom
        WHERE idcategoria_has_cupom = ?
    `;

    conexao.query(sql, [id], callback);

}

// =========================
// Buscar por idcupom
// =========================

function buscarPorCupomId(cupomId, callback) {

    const sql = `
        SELECT * FROM categoria_has_cupom
        WHERE Cupom_idCupom = ?
    `;

    conexao.query(sql, [cupomId], callback);

}

// =========================
// Atualizar categoria_has_cupom
// =========================

function atualizar(id, categoria_has_cupom, callback) {

    const sql = `
        UPDATE categoria_has_cupom
        SET

            Categoria_idCategoria = ?,
            Cupom_idCupom = ?

        WHERE idcategoria_has_cupom = ?
    `;

    conexao.query(
        sql,
        [
            categoria_has_cupom.Categoria_idCategoria,
            categoria_has_cupom.Cupom_idCupom,
            id
        ],
        callback
    );

}

// =========================
// Excluir categoria_has_cupom
// =========================

function excluir(id, callback) {

    const sql = `
        DELETE FROM categoria_has_cupom
        WHERE idcategoria_has_cupom = ?
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