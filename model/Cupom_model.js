const conexao = require("../conexao/conexao.js");

// =========================
// Cadastrar Produto
// =========================

function cadastrar(cupom, callback) {

    const sql = `INSERT INTO Cupom
        (nome, data_validade, desconto, quantidade,
         Loja_idLoja)
        VALUES (?, ?, ?, ?, ?)`;

    conexao.query(
        sql,
        [
            cupom.nome,
            cupom.data_validade,
            cupom.desconto,
            cupom.quantidade,
            cupom.Loja_idLoja
        ],
        callback
    );

}

// =========================
// Listar Cupom
// =========================

function listar(callback) {

    const sql = `
        SELECT * FROM Cupom
    `;

    conexao.query(sql, callback);

}

// =========================
// Buscar por ID
// =========================

function buscarPorId(id, callback) {

    const sql = `
        SELECT *
        FROM Cupom
        WHERE idCupom = ?
    `;

    conexao.query(sql, [id], callback);

}

// =========================
// Buscar por Email
// =========================

function buscarPornome(nome, callback) {

    const sql = `
        SELECT * FROM Cupom
        WHERE nome = ?
    `;

    conexao.query(sql, [nome], callback);

}

// =========================
// Atualizar Cupom
// =========================

function atualizar(id, cupom, callback) {

    const sql = `
        UPDATE Cupom
        SET

            nome = ?,
            data_validade = ?,
            desconto = ?,
            quantidade = ?,
            Loja_idLoja = ?
        WHERE idCupom = ?

    `;

    conexao.query(
        sql,
        [
            cupom.nome,
            cupom.data_validade,
            cupom.desconto,
            cupom.quantidade,
            cupom.Loja_idLoja,
            id
        ],
        callback
    );

}


// =========================
// Excluir Cliente
// =========================

function excluir(id, callback) {

    const sql = `
        DELETE FROM Cupom
        WHERE idCupom = ?
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