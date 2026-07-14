const conexao = require("../conexao/conexao.js");

// =========================
// Cadastrar Produto
// =========================

function cadastrar(endereco_has_Cliente, callback) {

    const sql = `INSERT INTO endereco_has_Cliente
        ( Endereco_idEndereco, Cliente_idCliente )
        VALUES (?, ?)`;

    conexao.query(
        sql,
        [
            endereco_has_Cliente.Endereco_idEndereco,
            endereco_has_Cliente.Cliente_idCliente
        ],
        callback
    );

}

// =========================
// Listar endereco_has_Cliente
// =========================

function listar(callback) {

    const sql = `
        SELECT * FROM endereco_has_Cliente
    `;

    conexao.query(sql, callback);

}

// =========================
// Buscar por ID
// =========================

function buscarPorId(id, callback) {

    const sql = `
        SELECT *
        FROM endereco_has_Cliente
        WHERE idendereco_has_Cliente = ?
    `;

    conexao.query(sql, [id], callback);

}

// =========================
// Buscar por idcliente
// =========================

function buscarPorClienteId(clienteId, callback) {

    const sql = `
        SELECT * FROM endereco_has_Cliente
        WHERE Cliente_idCliente = ?
    `;

    conexao.query(sql, [clienteId], callback);

}

// =========================
// Atualizar endereco_has_Cliente
// =========================

function atualizar(id, endereco_has_Cliente, callback) {

    const sql = `
        UPDATE endereco_has_Cliente
        SET

            Endereco_idEndereco = ?,
            Cliente_idCliente = ?

        WHERE idendereco_has_Cliente = ?
    `;

    conexao.query(
        sql,
        [
            endereco_has_Cliente.Endereco_idEndereco,
            endereco_has_Cliente.Cliente_idCliente,
            id
        ],
        callback
    );

}

// =========================
// Excluir endereco_has_Cliente
// =========================

function excluir(id, callback) {

    const sql = `
        DELETE FROM endereco_has_Cliente
        WHERE idendereco_has_Cliente = ?
    `;

    conexao.query(sql, [id], callback);

}

module.exports = {

    cadastrar,
    listar,
    buscarPorId,
    buscarPorClienteId,
    atualizar,
    excluir

};