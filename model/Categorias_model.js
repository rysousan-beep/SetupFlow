const conexao = require("../conexao/conexao.js");

// =========================
// Cadastrar Produto
// =========================

function cadastrar(Categoria, callback) {

    const sql = `INSERT INTO Categoria
        (nome)
        VALUES (?)`;

    conexao.query(
        sql,
        [
            Categoria.nome
        ],
        callback
    );

}

// =========================
// Listar Categorias
// =========================

function listar(callback) {

    const sql = `
        SELECT * FROM Categoria
    `;

    conexao.query(sql, callback);

}

// =========================
// Buscar por ID
// =========================

function buscarPorId(nome, callback) {

    const sql = `
        SELECT *
        FROM Categoria
        WHERE nome = ?
    `;

    conexao.query(sql, [nome], callback);

}

// =========================
// Buscar por nome
// =========================

function buscarPornome(nome, callback) {

    const sql = `
        SELECT * FROM Categoria
        WHERE nome = ?
    `;

    conexao.query(sql, [nome], callback);

}

// =========================
// Atualizar Categoria
// =========================

function atualizar(id, Categoria, callback) {

    const sql = `
        UPDATE Categoria
        SET
            nome = ?
        WHERE idCategoria = ?
    `;

    conexao.query(
        sql,
        [
            Categoria.nome,
            id
        ],
        callback
    );
}

// ========================
// Excluir Categoria
// =========================

function excluir(id, callback) {

    const sql = `
        DELETE FROM Categoria
        WHERE idCategoria = ?
    `;

    conexao.query(sql, [id], callback);

}

module.exports = {

    cadastrar,
    listar,
    buscarPorId,
    buscarPornome,
    atualizar,
    excluir

};