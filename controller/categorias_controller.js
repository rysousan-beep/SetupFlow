// ============================================================
// CONTROLLER DE CATEGORIAS
// ============================================================

const categoriasModel = require(
    "../model/categorias_model.js"
);


// ============================================================
// CADASTRAR
// ============================================================

function cadastrar(req, res) {

    const categoria = req.body;


    if (
        !categoria.nome ||
        categoria.nome.trim() === ""
    ) {

        return res.status(400).json({

            sucesso: false,

            mensagem:
                "Preencha o nome da categoria."

        });
    }


    categoria.nome =
        categoria.nome.trim();


    categoriasModel.buscarPorNome(

        categoria.nome,

        (erro, resultado) => {

            if (erro) {

                console.error(
                    "ERRO AO BUSCAR CATEGORIA:",
                    erro
                );

                return res.status(500).json({

                    sucesso: false,

                    mensagem:
                        "Erro ao consultar o banco de dados."

                });
            }


            if (resultado.length > 0) {

                return res.status(409).json({

                    sucesso: false,

                    mensagem:
                        "Categoria já cadastrada."

                });
            }


            categoriasModel.cadastrar(

                categoria,

                (erro, resultado) => {

                    if (erro) {

                        console.error(
                            "ERRO AO CADASTRAR CATEGORIA:",
                            erro
                        );

                        return res.status(500).json({

                            sucesso: false,

                            mensagem:
                                "Erro ao cadastrar categoria."

                        });
                    }


                    return res.status(201).json({

                        sucesso: true,

                        mensagem:
                            "Categoria cadastrada com sucesso!",

                        idCategoria:
                            resultado.insertId

                    });

                }
            );

        }
    );
}


// ============================================================
// LISTAR
// ============================================================

function listar(req, res) {

    categoriasModel.listar(

        (erro, resultado) => {

            if (erro) {

                console.error(
                    "ERRO AO LISTAR CATEGORIAS:",
                    erro
                );

                return res.status(500).json({

                    sucesso: false,

                    mensagem:
                        "Erro ao listar categorias."

                });
            }


            return res.status(200).json({

                sucesso: true,

                categorias: resultado

            });

        }
    );
}


// ============================================================
// BUSCAR POR ID
// ============================================================

function buscarPorId(req, res) {

    const id = req.params.id;


    categoriasModel.buscarPorId(

        id,

        (erro, resultado) => {

            if (erro) {

                console.error(
                    "ERRO AO BUSCAR CATEGORIA:",
                    erro
                );

                return res.status(500).json({

                    sucesso: false,

                    mensagem:
                        "Erro ao buscar categoria."

                });
            }


            if (resultado.length === 0) {

                return res.status(404).json({

                    sucesso: false,

                    mensagem:
                        "Categoria não encontrada."

                });
            }


            return res.status(200).json({

                sucesso: true,

                categoria: resultado[0]

            });

        }
    );
}


// ============================================================
// ATUALIZAR
// ============================================================

function atualizar(req, res) {

    const id = req.params.id;

    const categoria = req.body;


    if (
        !categoria.nome ||
        categoria.nome.trim() === ""
    ) {

        return res.status(400).json({

            sucesso: false,

            mensagem:
                "Preencha o nome da categoria."

        });
    }


    categoria.nome =
        categoria.nome.trim();


    categoriasModel.atualizar(

        id,

        categoria,

        (erro, resultado) => {

            if (erro) {

                console.error(
                    "ERRO AO ATUALIZAR CATEGORIA:",
                    erro
                );

                return res.status(500).json({

                    sucesso: false,

                    mensagem:
                        "Erro ao atualizar categoria."

                });
            }


            if (
                resultado.affectedRows === 0
            ) {

                return res.status(404).json({

                    sucesso: false,

                    mensagem:
                        "Categoria não encontrada."

                });
            }


            return res.status(200).json({

                sucesso: true,

                mensagem:
                    "Categoria atualizada com sucesso."

            });

        }
    );
}


// ============================================================
// EXCLUIR
// ============================================================

function excluir(req, res) {

    const id = req.params.id;


    categoriasModel.excluir(

        id,

        (erro, resultado) => {

            if (erro) {

                console.error(
                    "ERRO AO EXCLUIR CATEGORIA:",
                    erro
                );

                return res.status(500).json({

                    sucesso: false,

                    mensagem:
                        "Erro ao excluir categoria."

                });
            }


            if (
                resultado.affectedRows === 0
            ) {

                return res.status(404).json({

                    sucesso: false,

                    mensagem:
                        "Categoria não encontrada."

                });
            }


            return res.status(200).json({

                sucesso: true,

                mensagem:
                    "Categoria excluída com sucesso."

            });

        }
    );
}


// ============================================================
// EXPORTAÇÃO
// ============================================================

module.exports = {

    cadastrar,
    listar,
    buscarPorId,
    atualizar,
    excluir

};