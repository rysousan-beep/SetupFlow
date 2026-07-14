const conexao = require("../conexao/conexao.js");

// =========================
// Cadastrar Produto
// =========================

function cadastrar(cupom_has_categorias, callback) {

    const sql = `INSERT INTO cupom_has_categorias
        ( Cupom_idCupom, Categoria_idCategoria )
        VALUES (?, ?)`;

    conexao.query(
        sql,
        [
            cupom_has_categorias.Cupom_idCupom,
            cupom_has_categorias.Categoria_idCategoria
        ],
        callback
    );

}

// =========================
// Listar cupom_has_categorias
// =========================

function listar(callback) {

    const sql = `
        SELECT * FROM cupom_has_categorias
    `;

    conexao.query(sql, callback);

}

// =========================
// Buscar por ID
// =========================

function buscarPorId(id, callback) {

    const sql = `
        SELECT *
        FROM cupom_has_categorias
        WHERE idcupom_has_categorias = ?
    `;

    conexao.query(sql, [id], callback);

}

// =========================
// Buscar por idcupom
// =========================

function buscarPorCupomId(cupomId, callback) {

    const sql = `
        SELECT * FROM cupom_has_categorias
        WHERE Cupom_idCupom = ?
    `;

    conexao.query(sql, [cupomId], callback);

}

// =========================
// Atualizar cupom_has_categorias
// =========================

function atualizar(id, cupom_has_categorias, callback) {

    const sql = `
        UPDATE cupom_has_categorias
        SET

            Cupom_idCupom = ?,
            Categoria_idCategoria = ?

        WHERE idcupom_has_categorias = ?
    `;

    conexao.query(
        sql,
        [
            cupom_has_categorias.Cupom_idCupom,
            cupom_has_categorias.Categoria_idCategoria,
            id
        ],
        callback
    );

}

// =========================
// Excluir cupom_has_categorias
// =========================

function excluir(id, callback) {

    const sql = `
        DELETE FROM cupom_has_categorias
        WHERE idcupom_has_categorias = ?
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