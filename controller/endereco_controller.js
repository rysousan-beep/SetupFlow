//==========================================
// IMPORTA O MODEL
// passe aqui o caminho correto do seu arquivo model
//==========================================

const enderecoModel = require("../model/endereco_model");

//==========================================
// CADASTRAR ENDERECO
//==========================================

function cadastrar(req, res) {

    const endereco = req.body;
// Caso não seja enviado o código da loja
  

    // Validação dos campos obrigatórios

    if (
        !endereco.rua  ||
        !endereco.cep ||
        !endereco.bairro ||
        !endereco.numero ||
        !endereco.complemento ||
        !endereco.tipo 
    ) {

        return res.status(400).json({
            sucesso: false,
            mensagem: "Preencha todos os campos."
        });

    }

    

    // Verifica se já existe um usuário com o mesmo e-mail

    enderecoModel.buscarPorCep(endereco.cep, (erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao consultar o banco de dados."
            });

        }

        if (resultado.length > 0) {

            return res.status(409).json({
                sucesso: false,
                mensagem: "Endereço já cadastrado."
            });

        }

        // Cadastra o endereço

        enderecoModel.cadastrar(endereco, (erro, resultado) => {

            if (erro) {

                return res.status(500).json({
                    sucesso: false,
                    mensagem: "Erro ao cadastrar endereço."
                });

            }

            return res.status(201).json({

                sucesso: true,
                mensagem: "Endereço cadastrado com sucesso!",
                idEndereco: resultado.insertId

            });

        });

    });

}

//==========================================
// LISTAR ENDEREÇOS
//==========================================

function listar(req, res) {

    enderecoModel.listar((erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao listar endereços."
            });

        }
        // Retorna a lista de endereços em formato JSON
        res.json(resultado);

    });

}

//==========================================
// BUSCAR ENDERECO POR ID
//==========================================

function buscarPorId(req, res) {

    const id = req.params.id;

    enderecoModel.buscarPorId(id, (erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao buscar endereço."
            });

        }

        if (resultado.length === 0) {

            return res.status(404).json({
                sucesso: false,
                mensagem: "Endereço não encontrado."
            });

        }
        // Retorna o endereço encontrado em formato JSON
        res.json(resultado[0]);

    });

}

//==========================================
// ATUALIZAR ENDERECO
//==========================================

function atualizar(req, res) {
    // Obtém o ID do endereço a ser atualizado a partir dos parâmetros da URL
    const id = req.params.id;
    // Obtém os dados atualizados do endereço a partir do corpo da requisição
    const endereco = req.body;

    enderecoModel.atualizar(id, endereco, (erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao atualizar endereço."
            });

        }

        res.json({
            sucesso: true,
            mensagem: "Endereço atualizado com sucesso."
        });

    });

}

//==========================================
// EXCLUIR ENDERECO
//==========================================

function excluir(req, res) {
    // Obtém o ID do endereço a ser excluído a partir dos parâmetros da URL
    const id = req.params.id;

    enderecoModel.excluir(id, (erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao excluir endereço."
            });

        }

        res.json({
            sucesso: true,
            mensagem: "Endereço excluído com sucesso."
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