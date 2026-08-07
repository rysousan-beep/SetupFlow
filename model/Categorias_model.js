// ============================================================
// MODEL DE CATEGORIAS
// ============================================================

const conexao = require("../conexao/conexao.js");


// ============================================================
// CADASTRAR
// ============================================================

function cadastrar(categoria, callback) {

    const sql = `
        INSERT INTO Categoria
        (nome)
        VALUES (?)
    `;

    conexao.query(
        sql,
        [
            categoria.nome
        ],
        callback
    );
}


// ============================================================
// LISTAR
// ============================================================

function listar(callback) {

    const sql = `
        SELECT *
        FROM Categoria
        ORDER BY nome ASC
    `;

    conexao.query(
        sql,
        callback
    );
}


// ============================================================
// BUSCAR POR ID
// ============================================================

function buscarPorId(id, callback) {

    const sql = `
        SELECT *
        FROM Categoria
        WHERE idCategoria = ?
    `;

    conexao.query(
        sql,
        [id],
        callback
    );
}


// ============================================================
// BUSCAR POR NOME
// ============================================================

function buscarPorNome(nome, callback) {

    const sql = `
        SELECT *
        FROM Categoria
        WHERE nome = ?
    `;

    conexao.query(
        sql,
        [nome],
        callback
    );
}


// ============================================================
// ATUALIZAR
// ============================================================

function atualizar(
    id,
    categoria,
    callback
) {

    const sql = `
        UPDATE Categoria
        SET
            nome = ?
        WHERE idCategoria = ?
    `;

    conexao.query(
        sql,
        [
            categoria.nome,
            id
        ],
        callback
    );
}


// ============================================================
// EXCLUIR
// ============================================================

function excluir(
    id,
    callback
) {

    const sql = `
        DELETE FROM Categoria
        WHERE idCategoria = ?
    `;

    conexao.query(
        sql,
        [id],
        callback
    );
}


// ============================================================
// EXPORTAÇÃO
// ============================================================

module.exports = {

    cadastrar,
    listar,
    buscarPorId,
    buscarPorNome,
    atualizar,
    excluir

};