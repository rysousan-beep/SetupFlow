const conexao = require("../conexao/conexao.js");

// =========================
// Cadastrar Produto
// =========================

function cadastrar(pedidos, callback) {

    const sql = `INSERT INTO pedidos
        (data_pedidos, nota_fiscal, data_entrega, status_entrega, status_pagamento,codigo, 
        formas_pagamento_idformas_pagamento,  endereco_idendereco, loja_idloja, Cliente_idCliente)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    conexao.query(
        sql,
        [
            pedidos.data_pedidos,
            pedidos.nota_fiscal,
            pedidos.data_entrega,
            pedidos.status_entrega,
            pedidos.status_pagamento,
            pedidos.codigo,
            pedidos.formas_pagamento_idformas_pagamento,
            pedidos.endereco_idendereco,
            pedidos.loja_idloja,
            pedidos.Cliente_idCliente
        ],
        callback
    );


}

// =========================
// Listar Pedidos
// =========================

function listar(callback) {

    const sql = `
        SELECT * FROM pedidos
    `;

    conexao.query(sql, callback);

}

// =========================
// Buscar por ID
// =========================

function buscarPorId(id, callback) {

    const sql = `
        SELECT *
        FROM pedidos
        WHERE idpedidos = ?
    `;

    conexao.query(sql, [id], callback);

}

// =========================
// Buscar por codigos
// =========================

function buscarPorCodigo(codigo, callback) {

    const sql = `
        SELECT * FROM pedidos
        WHERE codigo = ?
    `;

    conexao.query(sql, [codigo], callback);

}

// =========================
// Atualizar Pedido
// =========================

function atualizar(id, pedidos, callback) {

    const sql = `
        UPDATE pedidos
        SET

            data_pedidos = ?,
            nota_fiscal = ?,
            data_entrega = ?,
            status_entrega = ?,
            status_pagamento = ?,
            codigo = ?,
            formas_pagamento_idformas_pagamento = ?,
            endereco_idendereco = ?,
            loja_idloja = ?,
            Cliente_idCliente = ?
        WHERE idpedidos = ?
    `;

    conexao.query(
        sql,
        [
            pedidos.data_pedidos,
            pedidos.nota_fiscal,
            pedidos.data_entrega,
            pedidos.status_entrega,
            pedidos.status_pagamento,
            pedidos.codigo,
            pedidos.formas_pagamento_idformas_pagamento,
            pedidos.endereco_idendereco,
            pedidos.loja_idloja,
            pedidos.Cliente_idCliente,
            id
        ],
        callback
    );


}

// =========================
// Excluir Pedido
// =========================

function excluir(id, callback) {

    const sql = `
        DELETE FROM pedidos
        WHERE idpedidos = ?
    `;

    conexao.query(sql, [id], callback);

}

module.exports = {

    cadastrar,
    listar,
    buscarPorId,
    buscarPorCodigo,
    atualizar,
    excluir

};