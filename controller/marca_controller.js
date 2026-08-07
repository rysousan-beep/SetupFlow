// ============================================================
// CONTROLLER DE MARCA
// ============================================================

const marcaModel = require("../model/marca_model.js");

// ============================================================
// CADASTRAR MARCA
// ============================================================

function cadastrar(req, res) {
    const marca = req.body;

    // --------------------------------------------------------
    // VALIDAR NOME
    // --------------------------------------------------------
    if (!marca.nome || marca.nome.trim() === "") {
        return res.status(400).json({
            sucesso: false,
            mensagem: "Preencha o nome da marca."
        });
    }

    // --------------------------------------------------------
    // VALIDAR LOGO
    // --------------------------------------------------------
    if (!req.file) {
        return res.status(400).json({
            sucesso: false,
            mensagem: "Selecione uma imagem para a marca."
        });
    }

    // --------------------------------------------------------
    // PREPARAR DADOS
    // --------------------------------------------------------
    marca.nome = marca.nome.trim();

    // Como a coluna logo é LONGBLOB, usamos o Buffer da imagem
    marca.logo = req.file.buffer;

    // --------------------------------------------------------
    // VERIFICAR SE A MARCA JÁ EXISTE
    // --------------------------------------------------------
    marcaModel.buscarPorNome(marca.nome, (erro, resultado) => {
        if (erro) {
            console.error("ERRO AO BUSCAR MARCA:", erro);
            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao consultar o banco de dados."
            });
        }

        if (resultado.length > 0) {
            return res.status(409).json({
                sucesso: false,
                mensagem: "Marca já cadastrada."
            });
        }

        // ----------------------------------------------------
        // CADASTRAR MARCA
        // ----------------------------------------------------
        marcaModel.cadastrar(marca, (erro, resultado) => {
            if (erro) {
                console.error("ERRO AO CADASTRAR MARCA:", erro);
                return res.status(500).json({
                    sucesso: false,
                    mensagem: "Erro ao cadastrar marca."
                });
            }

            return res.status(201).json({
                sucesso: true,
                mensagem: "Marca cadastrada com sucesso!",
                idMarca: resultado.insertId
            });
        });
    });
}

// ============================================================
// LISTAR MARCAS
// ============================================================

function listar(req, res) {
    marcaModel.listar((erro, resultado) => {
        if (erro) {
            console.error("ERRO AO LISTAR MARCAS:", erro);
            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao listar marcas."
            });
        }

        // Converte o Buffer do LONGBLOB para String Base64 para exibir fácil no frontend
        const marcasFormatadas = resultado.map(marca => {
            if (marca.logo) {
                const base64 = Buffer.from(marca.logo).toString("base64");
                marca.logo = `data:image/jpeg;base64,${base64}`;
            }
            return marca;
        });

        return res.status(200).json({
            sucesso: true,
            marcas: marcasFormatadas
        });
    });
}

// ============================================================
// BUSCAR MARCA POR ID
// ============================================================

function buscarPorId(req, res) {
    const id = req.params.id;

    marcaModel.buscarPorId(id, (erro, resultado) => {
        if (erro) {
            console.error("ERRO AO BUSCAR MARCA:", erro);
            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao buscar marca."
            });
        }

        if (resultado.length === 0) {
            return res.status(404).json({
                sucesso: false,
                mensagem: "Marca não encontrada."
            });
        }

        const marca = resultado[0];

        // Converte o Buffer em Base64 para consumo na tag <img src="...">
        if (marca.logo) {
            const base64 = Buffer.from(marca.logo).toString("base64");
            marca.logo = `data:image/jpeg;base64,${base64}`;
        }

        return res.status(200).json({
            sucesso: true,
            marca: marca
        });
    });
}

// ============================================================
// ATUALIZAR MARCA
// ============================================================

function atualizar(req, res) {
    const id = req.params.id;
    const marca = req.body;

    if (!marca.nome || marca.nome.trim() === "") {
        return res.status(400).json({
            sucesso: false,
            mensagem: "Preencha o nome da marca."
        });
    }

    marca.nome = marca.nome.trim();

    // Se enviou uma nova imagem, atribui o Buffer (LONGBLOB)
    if (req.file) {
        marca.logo = req.file.buffer;
    }

    marcaModel.atualizar(id, marca, (erro, resultado) => {
        if (erro) {
            console.error("ERRO AO ATUALIZAR MARCA:", erro);
            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao atualizar marca."
            });
        }

        if (resultado.affectedRows === 0) {
            return res.status(404).json({
                sucesso: false,
                mensagem: "Marca não encontrada."
            });
        }

        return res.status(200).json({
            sucesso: true,
            mensagem: "Marca atualizada com sucesso."
        });
    });
}

// ============================================================
// EXCLUIR MARCA
// ============================================================

function excluir(req, res) {
    const id = req.params.id;

    marcaModel.excluir(id, (erro, resultado) => {
        if (erro) {
            console.error("ERRO AO EXCLUIR MARCA:", erro);
            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao excluir marca."
            });
        }

        if (resultado.affectedRows === 0) {
            return res.status(404).json({
                sucesso: false,
                mensagem: "Marca não encontrada."
            });
        }

        return res.status(200).json({
            sucesso: true,
            mensagem: "Marca excluída com sucesso."
        });
    });
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