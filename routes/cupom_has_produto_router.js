const express = require("express");
const router = express.Router();

const Controller = require("../controller/cupom_has_produto_controller.js");

router.post("/", Controller.cadastrar);
router.get("/", Controller.listar);
router.get("/:id", Controller.buscarPorId);
router.put("/:id", Controller.atualizar);
router.delete("/:id", Controller.excluir);

module.exports = router;