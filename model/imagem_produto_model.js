const conexao = require("../conexao/conexao.js");

// =========================
// Cadastrar Produto
// =========================

function cadastrar(imagem_produto, callback) {

    const sql = `INSERT INTO imagem_produto
           ( arquivo, Produto_idProduto )
            VALUES (?, ?)`;

    conexao.query(
        sql,
        [
            imagem_produto.arquivo,
            imagem_produto.Produto_idProduto
        ],
        callback
    );

}

// =========================
// Listar Imagens de Produto
// =========================

function listar(callback) {

    const sql = `
        SELECT * FROM imagem_produto
    `;

    conexao.query(sql, callback);

}

// =========================
// Buscar por ID
// =========================

function buscarPorId(id, callback) {

    const sql = `
        SELECT *
        FROM imagem_produto
        WHERE idimagem_produto = ?
    `;

    conexao.query(sql, [id], callback);

}

// =========================
// Buscar por arquivo
// =========================

function buscarPorarquivo(arquivo, callback) {

    const sql = `
        SELECT * FROM imagem_produto
        WHERE arquivo = ?
    `;

    conexao.query(sql, [arquivo], callback);

}

// =========================
// Atualizar IMAGEM de Produto
// =========================

function atualizar(id, imagem_produto, callback) {

    const sql = `
        UPDATE imagem_produto
        SET

            arquivo = ?,
            Produto_idProduto = ?
        WHERE idimagem_produto = ?
    `;

    conexao.query(
        sql,
        [
            imagem_produto.arquivo,
            imagem_produto.Produto_idProduto,
            id
        ],
        callback
    );

}


// =========================
// Excluir imagem de Produto
// =========================

function excluir(id, callback) {

    const sql = `
        DELETE FROM imagem_produto
        WHERE idimagem_produto = ?
    `;

    conexao.query(sql, [id], callback);

}

module.exports = {

    cadastrar,
    listar,
    buscarPorId,
    buscarPorarquivo,
    atualizar,
    excluir

};