const conexao = require("../conexao/conexao.js");

// =========================
// Cadastrar Produto
// =========================

function cadastrar(frete, callback) {

    const sql = `INSERT INTO frete
        ( valor, tipo, bairro, entregar_full, codigo_rastreio, 
         pedidos_endereco_idendereco, pedidos_idpedidos, pedidos_loja_idloja, pedidos_cliente_idcliente )
        VALUES (?, ?, ?, ?, ?, ?, ?,?,?,?)`;

    conexao.query(
        sql,
        [
            frete.valor,
            frete.tipo,
            frete.bairro,
            frete.entregar_full,
            frete.codigo_rastreio,
            frete.pedidos_endereco_idendereco,
            frete.pedidos_idpedidos,
            frete.pedidos_loja_idloja,
            frete.pedidos_cliente_idcliente
        ],
        callback
    );

}

// =========================
// Listar Fretes
// =========================

function listar(callback) {

    const sql = `
        SELECT * FROM frete
    `;

    conexao.query(sql, callback);

}

// =========================
// Buscar por ID
// =========================

function buscarPorId(id, callback) {

    const sql = `
        SELECT *
        FROM frete
        WHERE idfrete = ?
    `;

    conexao.query(sql, [id], callback);

}

// =========================
// Buscar por codigo
// =========================

function buscarPorcodigo(codigo, callback) {

    const sql = `
        SELECT * FROM frete
        WHERE codigo = ?
    `;

    conexao.query(sql, [codigo], callback);

}

// =========================
// Atualizar Frete
// =========================

function atualizar(id, frete, callback) {

    const sql = `
        UPDATE frete
        SET

            valor = ?,
            tipo = ?,
            bairro = ?,
            entregar_full = ?,
            codigo_rastreio = ?,
            pedidos_endereco_idendereco = ?,
            pedidos_idpedidos = ?,
            pedidos_loja_idloja = ?,
            pedidos_cliente_idcliente = ?

        WHERE idfrete = ?
    `;

    conexao.query(
        sql,
        [
            frete.valor,
            frete.tipo,
            frete.bairro,
            frete.entregar_full,
            frete.codigo_rastreio,
            frete.pedidos_endereco_idendereco,
            frete.pedidos_idpedidos,
            frete.pedidos_loja_idloja,
            frete.pedidos_cliente_idcliente,
            id
        ],
        callback
    );

}

// =========================
// Excluir Frete
// =========================

function excluir(id, callback) {

    const sql = `
        DELETE FROM frete
        WHERE idfrete = ?
    `;

    conexao.query(sql, [id], callback);

}

module.exports = {

    cadastrar,
    listar,
    buscarPorId,
    buscarPorcodigo,
    atualizar,
    excluir

}
          