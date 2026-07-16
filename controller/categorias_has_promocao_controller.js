//==========================================
// IMPORTA O MODEL
//==========================================

const CategoriasHasPromocaoModel = require("../model/Categorias_has_Promocao_model");

//==========================================
// CADASTRAR RELACIONAMENTO
//==========================================

function cadastrar(req, res) {

    const dados = req.body;

    // Validação dos campos obrigatórios
    if (
        !dados.promocao_idpromocao ||
        !dados.categorias_idcategorias
    ) {

        return res.status(400).json({
            sucesso: false,
            mensagem: "Preencha todos os campos obrigatórios."
        });

    }

    CategoriasHasPromocaoModel.cadastrar(dados, (erro, resultado) => {

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

    CategoriasHasPromocaoModel.listar((erro, resultado) => {

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

    const promocao = req.params.promocao;
    const categoria = req.params.categoria;

    CategoriasHasPromocaoModel.buscarPorId(

        promocao,
        categoria,

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

    const promocao = req.params.promocao;
    const categoria = req.params.categoria;
    const dados = req.body;

    CategoriasHasPromocaoModel.atualizar(

        promocao,
        categoria,
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

    const promocao = req.params.promocao;
    const categoria = req.params.categoria;

    CategoriasHasPromocaoModel.excluir(

        promocao,
        categoria,

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