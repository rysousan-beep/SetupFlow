const conexao = require("../conexao/conexao.js");

// =========================
// Cadastrar Produto
// =========================

function cadastrar(cartao_pagamento, callback) {

    const sql = `INSERT INTO cartao_pagamento
        (numero, data_vencimento, cvc, nome_propietario, nome_indentificacao, bandeira, tipo, 
        ativo, Cliente_idCliente)
           VALUES (?, ?, ?, ?, ?, ?, ?,?,?,?)`;

    conexao.query(
        sql,
        [
            cartao_pagamento.numero,
            cartao_pagamento.data_vencimento,
            cartao_pagamento.cvc,
            cartao_pagamento.nome_propietario,
            cartao_pagamento.nome_indentificacao,
            cartao_pagamento.bandeira,
            cartao_pagamento.tipo,
            cartao_pagamento.ativo,
            cartao_pagamento.Cliente_idCliente
        ],
        callback
    );

}


// =========================
// Listar Cartões de Pagamento
// =========================

function listar(callback) {

    const sql = `
        SELECT * FROM cartao_pagamento
    `;

    conexao.query(sql, callback);

}

// =========================
// Buscar por ID
// =========================

function buscarPorId(id, callback) {

    const sql = `
        SELECT *
        FROM cartao_pagamento
        WHERE idcartao_pagamento = ?
    `;

    conexao.query(sql, [id], callback);

}

// =========================
// Buscar por cpf
// =========================

function buscarPorcpf(cpf, callback) {

    const sql = `
        SELECT * FROM cartao_pagamento
        WHERE cpf = ?
    `;

    conexao.query(sql, [cpf], callback);

}

// =========================
// Atualizar Cartão de Pagamento
// =========================

function atualizar(id, cartao_pagamento, callback) {

    const sql = `
        UPDATE cartao_pagamento
        SET

            numero = ?,
            data_vencimento = ?,
            cvc = ?,
            nome_propietario = ?,
            nome_indentificacao = ?,
            bandeira = ?,
            tipo = ?,
            ativo = ?,
            Cliente_idCliente = ?
        WHERE idcartao_pagamento = ?
    `;

    conexao.query(
        sql,
        [
            cartao_pagamento.numero,
            cartao_pagamento.data_vencimento,
            cartao_pagamento.cvc,
            cartao_pagamento.nome_propietario,
            cartao_pagamento.nome_indentificacao,
            cartao_pagamento.bandeira,
            cartao_pagamento.tipo,
            cartao_pagamento.ativo,
            cartao_pagamento.Cliente_idCliente,
            id
        ],
        callback
    );

}


// =========================
// Excluir cartao_pagamento
// =========================

function excluir(id, callback) {

    const sql = `
        DELETE FROM cartao_pagamento
        WHERE idcartao_pagamento = ?
    `;

    conexao.query(sql, [id], callback);

}

module.exports = {

    cadastrar,
    listar,
    buscarPorId,
    buscarPorcpf,
    atualizar,
    excluir

}