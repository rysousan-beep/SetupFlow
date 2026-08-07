// ============================================================
// ROTAS DE MARCAS
// ============================================================

const express = require("express");
const router = express.Router();
const multer = require("multer");

const MarcaController = require(
    "../controller/marca_controller.js"
);

// ============================================================
// CONFIGURAÇÃO DO MULTER (ARMAZENAMENTO EM MEMÓRIA PARA LONGBLOB)
// ============================================================

// Usa memória para obter o req.file.buffer
const storage = multer.memoryStorage();

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 16 * 1024 * 1024 // Limite de 16MB (LONGBLOB suporta até 4GB, mas 16MB é seguro para web)
    },
    fileFilter: function (req, file, cb) {
        if (
            file.mimetype &&
            file.mimetype.startsWith("image/")
        ) {
            cb(null, true);
        } else {
            cb(
                new Error(
                    "Apenas imagens são permitidas."
                )
            );
        }
    }
});

// ============================================================
// CADASTRAR
// POST /marcas
// ============================================================

router.post(
    "/",
    upload.single("logo"),
    MarcaController.cadastrar
);

// ============================================================
// LISTAR
// GET /marcas
// ============================================================

router.get(
    "/",
    MarcaController.listar
);

// ============================================================
// BUSCAR POR ID
// GET /marcas/:id
// ============================================================

router.get(
    "/:id",
    MarcaController.buscarPorId
);

// ============================================================
// ATUALIZAR
// PUT /marcas/:id
// ============================================================

router.put(
    "/:id",
    upload.single("logo"),
    MarcaController.atualizar
);

// ============================================================
// EXCLUIR
// DELETE /marcas/:id
// ============================================================

router.delete(
    "/:id",
    MarcaController.excluir
);

// ============================================================
// EXPORTAÇÃO
// ============================================================

module.exports = router;