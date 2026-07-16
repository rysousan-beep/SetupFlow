//==========================================
// IMPORTA O MODEL
// passe aqui o caminho correto do seu arquivo model
//==========================================

const cartao_pagamentoModel = require("../model/cartao_pagamento_model");

//==========================================
// CADASTRAR CARTAO DE PAGAMENTO
//==========================================

function cadastrar(req, res) {

    const cartao_pagamento = req.body;
// Caso não seja enviado o código da loja
    if (!cartao_pagamento.cliente_idcliente) {

        cartao_pagamento.cliente_idcliente = 1;

    }

    // Validação dos campos obrigatórios

    if (
        !cartao_pagamento.numero ||
        !cartao_pagamento.data_vencimento ||
        !cartao_pagamento.cvc||
        !cartao_pagamento.nome_propietario||
        !cartao_pagamento.nome_indentificacao||
        !cartao_pagamento.bandeira||
        !cartao_pagamento.tipo||
        !cartao_pagamento.ativo||
        !cartao_pagamento.Cliente_idCliente
    ) {

        return res.status(400).json({
            sucesso: false,
            mensagem: "Preencha todos os campos."
        });

    }

    

    // Verifica se já existe um usuário com o mesmo e-mail

    cartao_pagamentoModel.buscarPorNumero(cartao_pagamento.numero, (erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao consultar o banco de dados."
            });

        }

        if (resultado.length > 0) {

            return res.status(409).json({
                sucesso: false,
                mensagem: "Cartão de pagamento já cadastrado."
            });

        }

        // Cadastra o cartão de pagamento

        cartao_pagamentoModel.cadastrar(cartao_pagamento, (erro, resultado) => {

            if (erro) {

                return res.status(500).json({
                    sucesso: false,
                    mensagem: "Erro ao cadastrar cartão de pagamento."
                });

            }

            return res.status(201).json({

                sucesso: true,
                mensagem: "Cartão de pagamento cadastrado com sucesso!",
                idCartaoPagamento: resultado.insertId

            });

        });

    });

}

//==========================================
// LISTAR CARTÕES DE PAGAMENTO
//==========================================

function listar(req, res) {

    cartao_pagamentoModel.listar((erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao listar cartões de pagamento."
            });

        }
        // Retorna a lista de cartões de pagamento em formato JSON
        res.json(resultado);

    });

}

//==========================================
// BUSCAR CARTÃO DE PAGAMENTO POR ID
//==========================================

function buscarPorId(req, res) {

    const id = req.params.id;

    cartao_pagamentoModel.buscarPorId(id, (erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao buscar cartão de pagamento."
            });

        }

        if (resultado.length === 0) {

            return res.status(404).json({
                sucesso: false,
                mensagem: "Cartão de pagamento não encontrado."
            });

        }
        // Retorna o cartão de pagamento encontrado em formato JSON
        res.json(resultado[0]);

    });

}

//==========================================
// ATUALIZAR CARTÃO DE PAGAMENTO
//==========================================

function atualizar(req, res) {
    // Obtém o ID do cartão de pagamento a ser atualizado a partir dos parâmetros da URL
    const id = req.params.id;
    // Obtém os dados atualizados do cartão de pagamento a partir do corpo da requisição
    const cartao_pagamento = req.body;

    cartao_pagamentoModel.atualizar(id, cartao_pagamento, (erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao atualizar cartão de pagamento."
            });

        }

        res.json({
            sucesso: true,
            mensagem: "Cartão de pagamento atualizado com sucesso."
        });

    });

}

//==========================================
// EXCLUIR CARTÃO DE PAGAMENTO
//==========================================

function excluir(req, res) {
    // Obtém o ID do cartão de pagamento a ser excluído a partir dos parâmetros da URL
    const id = req.params.id;

    cartao_pagamentoModel.excluir(id, (erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao excluir cartão de pagamento."
            });

        }

        res.json({
            sucesso: true,
            mensagem: "Cartão de pagamento excluído com sucesso."
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