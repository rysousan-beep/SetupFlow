//==========================================
// IMPORTA O MODEL
//==========================================

const CategoriaHasCupomModel = require("../model/Categoria_has_Cupom_model");

//==========================================
// CADASTRAR RELACIONAMENTO
//==========================================

function cadastrar(req, res) {

    const dados = req.body;

    // Validação dos campos obrigatórios
    if (
        !dados.categoria_idcategoria ||
        !dados.cupom_idcupom
    ) {

        return res.status(400).json({
            sucesso: false,
            mensagem: "Preencha todos os os campos obrigatórios."
        });

    }

    CategoriaHasCupomModel.cadastrar(dados, (erro, resultado) => {

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

    CategoriaHasCupomModel.listar((erro, resultado) => {

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

    const categoria = req.params.categoria;
    const cupom = req.params.cupom;

    CategoriaHasCupomModel.buscarPorId(

        categoria,
        cupom,

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

    const categoria = req.params.categoria;
    const cupom = req.params.cupom;
    const dados = req.body;

    CategoriaHasCupomModel.atualizar(

        categoria,
        cupom,
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

    const categoria = req.params.categoria;
    const cupom = req.params.cupom;

    CategoriaHasCupomModel.excluir(

        categoria,
        cupom,

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