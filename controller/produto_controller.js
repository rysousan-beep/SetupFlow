//==========================================
// IMPORTA O MODEL
//==========================================

const produtoModel = require("../model/produto_model");

//==========================================
// CADASTRAR PRODUTO
//==========================================

function cadastrar(req, res) {

    const produto = req.body;

    // Define valores padrão
    if (produto.ativo == null) {
        produto.ativo = 1;
    }

    if (produto.quantidade_estoque == null) {
        produto.quantidade_estoque = 0;
    }

    // Validação dos campos obrigatórios
    if (
        !produto.nome ||
        !produto.descricao ||
        !produto.loja_idloja ||
        !produto.marca_idmarca ||
        !produto.categorias_idcategorias
    ) {

        return res.status(400).json({
            sucesso: false,
            mensagem: "Preencha todos os campos obrigatórios."
        });

    }

    produtoModel.cadastrar(produto, (erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao cadastrar produto."
            });

        }

        return res.status(201).json({

            sucesso: true,
            mensagem: "Produto cadastrado com sucesso!",
            idProduto: resultado.insertId

        });

    });

}

//==========================================
// LISTAR PRODUTOS
//==========================================

function listar(req, res) {

    produtoModel.listar((erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao listar produtos."
            });

        }

        res.json(resultado);

    });

}

//==========================================
// BUSCAR PRODUTO POR ID
//==========================================

function buscarPorId(req, res) {

    const id = req.params.id;

    produtoModel.buscarPorId(id, (erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao buscar produto."
            });

        }

        if (resultado.length === 0) {

            return res.status(404).json({
                sucesso: false,
                mensagem: "Produto não encontrado."
            });

        }

        res.json(resultado[0]);

    });

}

//==========================================
// ATUALIZAR PRODUTO
//==========================================

function atualizar(req, res) {

    const id = req.params.id;
    const produto = req.body;

    produtoModel.atualizar(id, produto, (erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao atualizar produto."
            });

        }

        if (resultado.affectedRows === 0) {

            return res.status(404).json({
                sucesso: false,
                mensagem: "Produto não encontrado."
            });

        }

        res.json({
            sucesso: true,
            mensagem: "Produto atualizado com sucesso."
        });

    });

}

//==========================================
// EXCLUIR PRODUTO
//==========================================

function excluir(req, res) {

    const id = req.params.id;

    produtoModel.excluir(id, (erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao excluir produto."
            });

        }

        if (resultado.affectedRows === 0) {

            return res.status(404).json({
                sucesso: false,
                mensagem: "Produto não encontrado."
            });

        }

        res.json({
            sucesso: true,
            mensagem: "Produto excluído com sucesso."
        });

    });

}

//==========================================
// EXPORTAÇÃO
//==========================================

module.exports = {

    cadastrar,
    listar,
    buscarPorId,
    atualizar,
    excluir

};