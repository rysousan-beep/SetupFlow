// ============================================================
// MODEL DE MARCA
// ============================================================

const conexao = require("../conexao/conexao.js");


// ============================================================
// CADASTRAR MARCA
// ============================================================

function cadastrar(marca, callback) {

    const sql = `
        INSERT INTO Marca
        (
            nome,
            logo
        )
        VALUES (?, ?)
    `;

    conexao.query(
        sql,
        [
            marca.nome,
            marca.logo
        ],
        callback
    );
}


// ============================================================
// LISTAR MARCAS
// ============================================================

function listar(callback) {

    const sql = `
        SELECT *
        FROM Marca
        ORDER BY nome ASC
    `;

    conexao.query(
        sql,
        callback
    );
}


// ============================================================
// BUSCAR MARCA POR ID
// ============================================================

function buscarPorId(id, callback) {

    const sql = `
        SELECT *
        FROM Marca
        WHERE idMarca = ?
    `;

    conexao.query(
        sql,
        [id],
        callback
    );
}


// ============================================================
// BUSCAR MARCA POR NOME
// ============================================================

function buscarPorNome(nome, callback) {

    const sql = `
        SELECT *
        FROM Marca
        WHERE nome = ?
    `;

    conexao.query(
        sql,
        [nome],
        callback
    );
}


// ============================================================
// ATUALIZAR MARCA
// ============================================================

function atualizar(id, marca, callback) {

    let sql;
    let valores;


    // --------------------------------------------------------
    // COM NOVA LOGO
    // --------------------------------------------------------

    if (marca.logo) {

        sql = `
            UPDATE Marca
            SET
                nome = ?,
                logo = ?
            WHERE idMarca = ?
        `;

        valores = [
            marca.nome,
            marca.logo,
            id
        ];

    }


    // --------------------------------------------------------
    // SEM NOVA LOGO
    // --------------------------------------------------------

    else {

        sql = `
            UPDATE Marca
            SET
                nome = ?
            WHERE idMarca = ?
        `;

        valores = [
            marca.nome,
            id
        ];

    }


    conexao.query(
        sql,
        valores,
        callback
    );
}


// ============================================================
// EXCLUIR MARCA
// ============================================================

function excluir(id, callback) {

    const sql = `
        DELETE FROM Marca
        WHERE idMarca = ?
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