const conexao = require("../conexao/conexao.js");

// =========================
// Cadastrar Produto
// =========================

function cadastrar(Categorias_has_promocao, callback) {

    const sql = `INSERT INTO Categorias_has_promocoes
        ( Categorias_idCategorias, Promocao_idPromocao )
        VALUES (?, ?)`;

    conexao.query(
        sql,
        [
            Categorias_has_promocao.Categorias_idCategorias,
            Categorias_has_promocao.Promocao_idPromocao
        ],
        callback
    );

}

// =========================
// Listar categorias_has_promocao
// =========================

function listar(callback) {

    const sql = `
        SELECT * FROM Categorias_has_promocoes
    `;

    conexao.query(sql, callback);

}

// =========================
// Buscar por ID
// =========================

function buscarPorId(id, callback) {

    const sql = `
        SELECT *
        FROM Categorias_has_promocao
        WHERE idCategorias_has_promocao = ?
    `;

    conexao.query(sql, [id], callback);

}

// =========================
// Buscar por idcategoria
// =========================

function buscarPorIdcategoria(idcategoria, callback) {

    const sql = `
        SELECT * FROM Categorias_has_promocao
        WHERE Categorias_idCategorias = ?
    `;

    conexao.query(sql, [idcategoria], callback);

}

// =========================
// Atualizar categorias_has_promocao
// =========================

function atualizar(id, Categorias_has_promocoes, callback) {

    const sql = `
        UPDATE Categorias_has_promocoes
        SET

            Categorias_idCategorias = ?,
            Promocao_idPromocao = ?

        WHERE idCategorias_has_promocao = ?
    `;

    conexao.query(
        sql,
        [
            Categorias_has_promocao.Categorias_idCategorias,
            Categorias_has_promocao.Promocao_idPromocao,
            id
        ],
        callback
    );

}

// =========================
// Excluir categorias_has_promocao
// =========================

function excluir(id, callback) {

    const sql = `
        DELETE FROM Categorias_has_promocao
        WHERE idCategorias_has_promocao = ?
    `;

    conexao.query(sql, [id], callback);

}

module.exports = {

    cadastrar,
    listar,
    buscarPorId,
    buscarPorIdcategoria,
    atualizar,
    excluir

};