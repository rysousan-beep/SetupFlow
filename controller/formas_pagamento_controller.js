//==========================================
// IMPORTA O MODEL
// passe aqui o caminho correto do seu arquivo model
//==========================================

const formas_pagamentoModel = require("../model/formas_pagamento_model");

//==========================================
// CADASTRAR FORMA DE PAGAMENTO
//==========================================

function cadastrar(req, res) {

    const formas_pagamento = req.body;
// Caso não seja enviado o código da loja
    

    // Validação dos campos obrigatórios

    if (
        !formas_pagamento.nome ||
        !formas_pagamento.link||
        !formas_pagamento.ativo 
     
    ) {

        return res.status(400).json({
            sucesso: false,
            mensagem: "Preencha todos os campos."
        });

    }

    

    // Verifica se já existe um usuário com o mesmo e-mail

    formas_pagamentoModel.buscarPorNome(formas_pagamento.nome, (erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao consultar o banco de dados."
            });

        }

        if (resultado.length > 0) {

            return res.status(409).json({
                sucesso: false,
                mensagem: "Forma de pagamento já cadastrada."
            });

        }

        // Cadastra a forma de pagamento

        formas_pagamentoModel.cadastrar(formas_pagamento, (erro, resultado) => {

            if (erro) {

                return res.status(500).json({
                    sucesso: false,
                    mensagem: "Erro ao cadastrar forma de pagamento."
                });

            }

            return res.status(201).json({

                sucesso: true,
                mensagem: "Forma de pagamento cadastrada com sucesso!",
                idFormaPagamento: resultado.insertId

            });

        });

    });

}

//==========================================
// LISTAR FORMAS DE PAGAMENTO
//==========================================

function listar(req, res) {

    formas_pagamentoModel.listar((erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao listar formas de pagamento."
            });

        }
        // Retorna a lista de formas de pagamento em formato JSON
        res.json(resultado);

    });

}

//==========================================
// BUSCAR FORMA DE PAGAMENTO POR ID
//==========================================

function buscarPorId(req, res) {

    const id = req.params.id;

    formas_pagamentoModel.buscarPorId(id, (erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao buscar forma de pagamento."
            });

        }

        if (resultado.length === 0) {

            return res.status(404).json({
                sucesso: false,
                mensagem: "Forma de pagamento não encontrada."
            });

        }
        // Retorna a forma de pagamento encontrada em formato JSON
        res.json(resultado[0]);

    });

}

//==========================================
// ATUALIZAR FORMA DE PAGAMENTO
//==========================================

function atualizar(req, res) {
    // Obtém o ID da forma de pagamento a ser atualizada a partir dos parâmetros da URL
    const id = req.params.id;
    // Obtém os dados atualizados da forma de pagamento a partir do corpo da requisição
    const formas_pagamento = req.body;

    formas_pagamentoModel.atualizar(id, formas_pagamento, (erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao atualizar forma de pagamento."
            });

        }

        res.json({
            sucesso: true,
            mensagem: "Forma de pagamento atualizada com sucesso."
        });

    });

}

//==========================================
// EXCLUIR FORMA DE PAGAMENTO
//==========================================

function excluir(req, res) {
    // Obtém o ID da forma de pagamento a ser excluída a partir dos parâmetros da URL
    const id = req.params.id;

    formas_pagamentoModel.excluir(id, (erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao excluir forma de pagamento."
            });

        }

        res.json({
            sucesso: true,
            mensagem: "Forma de pagamento excluída com sucesso."
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