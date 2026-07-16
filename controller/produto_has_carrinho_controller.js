//==========================================
// IMPORTA O MODEL
//==========================================

const ProdutoHasCarrinhoModel = require("../model/Produto_has_Carrinho_model");

//==========================================
// CADASTRAR RELACIONAMENTO
//==========================================

function cadastrar(req, res) {

    const dados = req.body;

    // Validação dos campos obrigatórios
    if (
        !dados.carrinho_idcarrinho ||
        !dados.produto_idproduto
    ) {

        return res.status(400).json({
            sucesso: false,
            mensagem: "Preencha todos os campos obrigatórios."
        });

    }

    ProdutoHasCarrinhoModel.cadastrar(dados, (erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao cadastrar relacionamento."
            });

        }

        return res.status(201).json({
            sucesso: true,
            mensagem: "Relacionamento cadastrado com sucesso!"
        });

    });

}

//==========================================
// LISTAR RELACIONAMENTOS
//==========================================

function listar(req, res) {

    ProdutoHasCarrinhoModel.listar((erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao listar relacionamentos."
            });

        }

        res.json(resultado);

    });

}

//==========================================
// BUSCAR RELACIONAMENTO
//==========================================

function buscarPorId(req, res) {

    const carrinho = req.params.carrinho;
    const produto = req.params.produto;

    ProdutoHasCarrinhoModel.buscarPorId(

        carrinho,
        produto,

        (erro, resultado) => {

            if (erro) {

                return res.status(500).json({
                    sucesso: false,
                    mensagem: "Erro ao buscar relacionamento."
                });

            }

            if (resultado.length === 0) {

                return res.status(404).json({
                    sucesso: false,
                    mensagem: "Relacionamento não encontrado."
                });

            }

            res.json(resultado[0]);

        }

    );

}

//==========================================
// ATUALIZAR RELACIONAMENTO
//==========================================

function atualizar(req, res) {

    const carrinho = req.params.carrinho;
    const produto = req.params.produto;
    const dados = req.body;

    ProdutoHasCarrinhoModel.atualizar(

        carrinho,
        produto,
        dados,

        (erro, resultado) => {

            if (erro) {

                return res.status(500).json({
                    sucesso: false,
                    mensagem: "Erro ao atualizar relacionamento."
                });

            }

            if (resultado.affectedRows === 0) {

                return res.status(404).json({
                    sucesso: false,
                    mensagem: "Relacionamento não encontrado."
                });

            }

            res.json({
                sucesso: true,
                mensagem: "Relacionamento atualizado com sucesso."
            });

        }

    );

}

//==========================================
// EXCLUIR RELACIONAMENTO
//==========================================

function excluir(req, res) {

    const carrinho = req.params.carrinho;
    const produto = req.params.produto;

    ProdutoHasCarrinhoModel.excluir(

        carrinho,
        produto,

        (erro, resultado) => {

            if (erro) {

                return res.status(500).json({
                    sucesso: false,
                    mensagem: "Erro ao excluir relacionamento."
                });

            }

            if (resultado.affectedRows === 0) {

                return res.status(404).json({
                    sucesso: false,
                    mensagem: "Relacionamento não encontrado."
                });

            }

            res.json({
                sucesso: true,
                mensagem: "Relacionamento excluído com sucesso."
            });

        }

    );

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