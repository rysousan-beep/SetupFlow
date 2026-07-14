
const conexao = require("../conexao/conexao.js");

// =========================
// Cadastrar Produto
// =========================

function cadastrar(produto_has_cores, callback) {

    const sql = `INSERT INTO produto_has_cores
        ( Produto_idProduto, Cores_idCores )
        VALUES (?, ?)`;

    conexao.query(
        sql,
        [
            produto_has_cores.Produto_idProduto,
            produto_has_cores.Cores_idCores
        ],
        callback
    );

}

// =========================
// Listar produto_has_cores
// =========================

function listar(callback) {

    const sql = `
        SELECT * FROM produto_has_cores
    `;

    conexao.query(sql, callback);

}

// =========================
// Buscar por ID
// =========================

function buscarPorId(id, callback) {

    const sql = `
        SELECT *
        FROM produto_has_cores
        WHERE idproduto_has_cores = ?
    `;

    conexao.query(sql, [id], callback);

}

// =========================
// Buscar por coresid
// =========================

function buscarPorCoresId(coresId, callback) {

    const sql = `
        SELECT * FROM produto_has_cores
        WHERE Cores_idCores = ?
    `;

    conexao.query(sql, [coresId], callback);

}

// =========================
// Atualizar produto_has_cores
// =========================

function atualizar(id, produto_has_cores, callback) {

    const sql = `
        UPDATE produto_has_cores
        SET

            Produto_idProduto = ?,
            Cores_idCores = ?

        WHERE idproduto_has_cores = ?
    `;

    conexao.query(
        sql,
        [
            produto_has_cores.Produto_idProduto,
            produto_has_cores.Cores_idCores,
            id
        ],
        callback
    );

}

// =========================
// Excluir produto_has_cores
// =========================

function excluir(id, callback) {

    const sql = `
        DELETE FROM produto_has_cores
        WHERE idproduto_has_cores = ?
    `;

    conexao.query(sql, [id], callback);

}

module.exports = {

    cadastrar,
    listar,
    buscarPorId,
    buscarPorCoresId,
    atualizar,
    excluir

};