//==========================================
// IMPORTA O MODEL
// passe aqui o caminho correto do seu arquivo model
//==========================================

const avaliacaoModel = require("../model/avaliacao_produto_model");

//==========================================
// CADASTRAR AVALIACAO DE PRODUTO
//==========================================

function cadastrar(req, res) {

    const avaliacao = req.body;
// Caso não seja enviado o código da loja
    if (!avaliacao.produto_idproduto) {

        avaliacao.produto_idproduto = 1;

    }

    // Validação dos campos obrigatórios

    if (
        !avaliacao.data_ ||
        !avaliacao.nota ||
        !avaliacao.descricao ||
        !avaliacao.produto_idproduto
    ) {

        return res.status(400).json({
            sucesso: false,
            mensagem: "Preencha todos os campos."
        });

    }

    

    // Verifica se já existe um usuário com o mesmo e-mail

    avaliacaoModel.buscarPornota(avaliacao.nota, (erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao consultar o banco de dados."
            });

        }

        if (resultado.length > 0) {

            return res.status(409).json({
                sucesso: false,
                mensagem: "Nota já cadastrada."
            });

        }

        // Cadastra a avaliação

        avaliacaoModel.cadastrar(avaliacao, (erro, resultado) => {

            if (erro) {

                return res.status(500).json({
                    sucesso: false,
                    mensagem: "Erro ao cadastrar avaliação."
                });

            }

            return res.status(201).json({

                sucesso: true,
                mensagem: "Avaliação cadastrada com sucesso!",
                idAvaliacao: resultado.insertId

            });

        });

    });

}

//==========================================
// LISTAR AVALIAÇÕES DE PRODUTO
//==========================================

function listar(req, res) {

    avaliacaoModel.listar((erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao listar avaliações."
            });

        }
        // Retorna a lista de avaliações em formato JSON
        res.json(resultado);

    });

}

//==========================================
// BUSCAR AVALIAÇÃO POR ID
//==========================================

function buscarPorId(req, res) {

    const id = req.params.id;

    avaliacaoModel.buscarPorId(id, (erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao buscar avaliação."
            });

        }

        if (resultado.length === 0) {

            return res.status(404).json({
                sucesso: false,
                mensagem: "Avaliação não encontrada."
            });

        }
        // Retorna a avaliação encontrada em formato JSON
        res.json(resultado[0]);

    });

}

//==========================================
// ATUALIZAR AVALIAÇÃO
//==========================================

function atualizar(req, res) {
    // Obtém o ID da avaliação a ser atualizada a partir dos parâmetros da URL
    const id = req.params.id;
    // Obtém os dados atualizados da avaliação a partir do corpo da requisição
    const avaliacao = req.body;

    avaliacaoModel.atualizar(id, avaliacao, (erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao atualizar avaliação."
            });

        }

        res.json({
            sucesso: true,
            mensagem: "Avaliação atualizada com sucesso."
        });

    });

}

//==========================================
// EXCLUIR AVALIAÇÃO
//==========================================

function excluir(req, res) {
    // Obtém o ID da avaliação a ser excluída a partir dos parâmetros da URL
    const id = req.params.id;

    avaliacaoModel.excluir(id, (erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao excluir avaliação."
            });

        }

        res.json({
            sucesso: true,
            mensagem: "Avaliação excluída com sucesso."
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