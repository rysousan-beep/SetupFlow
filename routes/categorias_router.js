// ============================================================
// ROTAS DE CATEGORIAS
// ============================================================

const express = require("express");

const router = express.Router();

const CategoriasController = require(
    "../controller/categorias_controller.js"
);


// ============================================================
// CADASTRAR
// ============================================================

router.post(
    "/",
    CategoriasController.cadastrar
);


// ============================================================
// LISTAR
// ============================================================

router.get(
    "/",
    CategoriasController.listar
);


// ============================================================
// BUSCAR POR ID
// ============================================================

router.get(
    "/:id",
    CategoriasController.buscarPorId
);


// ============================================================
// ATUALIZAR
// ============================================================

router.put(
    "/:id",
    CategoriasController.atualizar
);


// ============================================================
// EXCLUIR
// ============================================================

router.delete(
    "/:id",
    CategoriasController.excluir
);


module.exports = router;