//==========================================
// IMPORTA O MODEL
// passe aqui o caminho correto do seu arquivo model
//==========================================

const tamanhoModel = require("../model/tamanho_model");

//==========================================
// CADASTRAR TAMANHO
//==========================================

function cadastrar(req, res) {

    const tamanho = req.body;
// Caso não seja enviado o código da loja
 

    // Validação dos campos obrigatórios

    if (
        !tamanho.tamanho
    ) {

        return res.status(400).json({
            sucesso: false,
            mensagem: "Preencha todos os campos."
        });

    }

    

    // Verifica se já existe um usuário com o mesmo e-mail

    tamanhoModel.buscarPorTamanho(tamanho.tamanho, (erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao consultar o banco de dados."
            });

        }

        if (resultado.length > 0) {

            return res.status(409).json({
                sucesso: false,
                mensagem: "Tamanho já cadastrado."
            });

        }

        // Cadastra o tamanho

        tamanhoModel.cadastrar(tamanho, (erro, resultado) => {

            if (erro) {

                return res.status(500).json({
                    sucesso: false,
                    mensagem: "Erro ao cadastrar tamanho."
                });

            }

            return res.status(201).json({

                sucesso: true,
                mensagem: "Tamanho cadastrado com sucesso!",
                idTamanho: resultado.insertId

            });

        });

    });

}

//==========================================
// LISTAR TAMANHOS
//==========================================

function listar(req, res) {

    tamanhoModel.listar((erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao listar tamanhos."
            });

        }
        // Retorna a lista de tamanhos em formato JSON
        res.json(resultado);

    });

}

//==========================================
// BUSCAR TAMANHO POR ID
//==========================================

function buscarPorId(req, res) {

    const id = req.params.id;

    tamanhoModel.buscarPorId(id, (erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao buscar tamanho."
            });

        }

        if (resultado.length === 0) {

            return res.status(404).json({
                sucesso: false,
                mensagem: "Tamanho não encontrado."
            });

        }
        // Retorna o tamanho encontrado em formato JSON
        res.json(resultado[0]);

    });

}

//==========================================
// ATUALIZAR TAMANHO
//==========================================

function atualizar(req, res) {
    // Obtém o ID do tamanho a ser atualizado a partir dos parâmetros da URL
    const id = req.params.id;
    // Obtém os dados atualizados do tamanho a partir do corpo da requisição
    const tamanho = req.body;

    tamanhoModel.atualizar(id, tamanho, (erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao atualizar tamanho."
            });

        }

        res.json({
            sucesso: true,
            mensagem: "Tamanho atualizado com sucesso."
        });

    });

}

//==========================================
// EXCLUIR TAMANHO
//==========================================

function excluir(req, res) {
    // Obtém o ID do tamanho a ser excluído a partir dos parâmetros da URL
    const id = req.params.id;

    tamanhoModel.excluir(id, (erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao excluir tamanho."
            });

        }

        res.json({
            sucesso: true,
            mensagem: "Tamanho excluído com sucesso."
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