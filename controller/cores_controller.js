//==========================================
// IMPORTA O MODEL
// passe aqui o caminho correto do seu arquivo model
//==========================================

const coresModel = require("../model/cores_model");

//==========================================
// CADASTRAR CORES
//==========================================

function cadastrar(req, res) {

    const cores = req.body;
// Caso não seja enviado o código da loja
    if (!cores.produto_idproduto) {

        cores.produto_idproduto = 1;

    }

    // Validação dos campos obrigatórios

    if (
        !cores.nome ||
        !cores.codigo 
       
    ) {

        return res.status(400).json({
            sucesso: false,
            mensagem: "Preencha todos os campos."
        });

    }

    

    // Verifica se já existe um usuário com o mesmo e-mail

    coresModel.buscarPorcodigo(cores.codigo, (erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao consultar o banco de dados."
            });

        }

        if (resultado.length > 0) {

            return res.status(409).json({
                sucesso: false,
                mensagem: "Código já cadastrado."
            });

        }

        // Cadastra a cor

        coresModel.cadastrar(cores, (erro, resultado) => {

            if (erro) {

                return res.status(500).json({
                    sucesso: false,
                    mensagem: "Erro ao cadastrar cores."
                });

            }

            return res.status(201).json({

                sucesso: true,
                mensagem: "Cores cadastradas com sucesso!",
                idCores: resultado.insertId

            });

        });

    });

}

//==========================================
// LISTAR CORES
//==========================================

function listar(req, res) {

    coresModel.listar((erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao listar cores."
            });

        }
        // Retorna a lista de cores em formato JSON
        res.json(resultado);

    });

}

//==========================================
// BUSCAR CORES POR ID
//==========================================

function buscarPorId(req, res) {

    const id = req.params.id;

    avaliacaoModel.buscarPorId(id, (erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao buscar cores."
            });

        }

        if (resultado.length === 0) {

            return res.status(404).json({
                sucesso: false,
                mensagem: "Cores não encontradas."
            });

        }
        // Retorna a cores encontrada em formato JSON
        res.json(resultado[0]);

    });

}

//==========================================
// ATUALIZAR CORES
//==========================================

function atualizar(req, res) {
    // Obtém o ID da cor a ser atualizada a partir dos parâmetros da URL
    const id = req.params.id;
    // Obtém os dados atualizados da cor a partir do corpo da requisição
    const cores = req.body;

    coresModel.atualizar(id, cores, (erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao atualizar cores."
            });

        }

        res.json({
            sucesso: true,
            mensagem: "Cores atualizadas com sucesso."
        });

    });

}

//==========================================
// EXCLUIR CORES
//==========================================

function excluir(req, res) {
    // Obtém o ID da cor a ser excluída a partir dos parâmetros da URL
    const id = req.params.id;

    coresModel.excluir(id, (erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao excluir cores."
            });

        }

        res.json({
            sucesso: true,
            mensagem: "Cores excluídas com sucesso."
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