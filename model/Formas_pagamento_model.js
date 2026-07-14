const conexao = require("../conexao/conexao.js");

// =========================
// Cadastrar Produto
// =========================

function cadastrar(Formas_pagamento, callback) {

    const sql = `INSERT INTO Formas_pagamento
        ( nome, link, ativo )
        VALUES (?, ?, ?)`;

    conexao.query(
        sql,
        [
            Formas_pagamento.nome,
            Formas_pagamento.link,
            Formas_pagamento.ativo
        ],
        callback
    );

}

// =========================
// Listar Formas de Pagamento
// =========================

function listar(callback) {

    const sql = `
        SELECT * FROM Formas_pagamento
    `;

    conexao.query(sql, callback);

}

// =========================
// Buscar por ID
// =========================

function buscarPornome(nome, callback) {

    const sql = `
        SELECT *
        FROM Formas_pagamento
        WHERE nome = ?
    `;

    conexao.query(sql, [nome], callback);

}

// =========================
// Buscar por nome
// =========================

function buscarPornome(nome, callback) {

    const sql = `
        SELECT * FROM Formas_pagamento
        WHERE nome = ?
    `;

    conexao.query(sql, [nome], callback);

}

// =========================
// Atualizar formas de pagamento
// =========================

function atualizar(nome, Formas_pagamento, callback) {

    const sql = `
        UPDATE Formas_pagamento
        SET

            nome = ?,
            link = ?,
            ativo = ?

        WHERE nome = ?
    `;

    conexao.query(
        sql,
        [
            Formas_pagamento.nome,
            Formas_pagamento.link,
            Formas_pagamento.ativo,
           
        ],

        callback
    );

}

// =========================
// Excluir Formas de Pagamento
// =========================

function excluir(id, callback) {

    const sql = `
        DELETE FROM Formas_pagamento
        WHERE idFormas_pagamento = ?
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