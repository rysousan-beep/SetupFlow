//express é um framework para criar servidorees web
//explicações web com node.js
const express = require('express');
const cors = require('cors');
// cors é um pacote que permite que o servidor aceite requisições de outros domínios
const app = express();

app.use(cors());
app.use(express.json());

const conexao = require('./conexao');
const avaliacaoProdutoRouter = require("../routes/avaliacao_produto_router");
const bannerHasProdutoRouter = require("../routes/banner_has_produto_router");
const bannerRouter = require("../routes/banner_router");
const carrinhoRouter = require("../routes/carrinho_router");
const cartaoPagamentoRouter = require("../routes/cartao_pagamento_router");
const categoriasHasCupomRouter = require("../routes/categorias_has_cupom_router");
const categoriasHasPromocaoRouter = require("../routes/categorias_has_promocao_router");
const clienteRouter = require("../routes/cliente_router");
const coresRouter = require("../routes/cores_router");
const cupomHasCategoriasRouter = require("../routes/cupom_has_categorias_router");
const cupomHasProdutoRouter = require("../routes/cupom_has_produto_router");
const cupomRouter = require("../routes/cupom_router");
const enderecoHasClienteRouter = require("../routes/endereco_has_cliente_router");
const enderecoRouter = require("../routes/endereco_router");
const formasPagamentoRouter = require("../routes/formas_pagamento_router");
const freteRouter = require("../routes/frete_router");
const imagemProdutoRouter = require("../routes/imagem_produto_router");
const marcaRouter = require("../routes/marca_router");
const pedidosHasProdutoRouter = require("../routes/pedidos_has_produto_router");
const pedidosRouter = require("../routes/pedidos_router");
const produtoHasCarrinhoRouter = require("../routes/produto_has_carrinho_router");
const produtoHasCoresRouter = require("../routes/produto_has_cores_router");
const produtoHasPromocaoRouter = require("../routes/produto_has_promocao_router");
const produtoRouter = require("../routes/produto_router");
const promocaoRouter = require("../routes/promocao_router");
const tamanhoRouter = require("../routes/tamanho_router");
app.use("/avaliacao-produto", avaliacaoProdutoRouter);
app.use("/banner-has-produto", bannerHasProdutoRouter);
app.use("/banners", bannerRouter);
app.use("/carrinhos", carrinhoRouter);
app.use("/cartoes-pagamento", cartaoPagamentoRouter);
app.use("/categorias-has-cupom", categoriasHasCupomRouter);
app.use("/categorias-has-promocao", categoriasHasPromocaoRouter);
app.use("/clientes", clienteRouter);
app.use("/cores", coresRouter);
app.use("/cupom-has-categorias", cupomHasCategoriasRouter);
app.use("/cupom-has-produto", cupomHasProdutoRouter);
app.use("/cupons", cupomRouter);
app.use("/endereco-has-cliente", enderecoHasClienteRouter);
app.use("/enderecos", enderecoRouter);
app.use("/formas-pagamento", formasPagamentoRouter);
app.use("/fretes", freteRouter);
app.use("/imagens-produto", imagemProdutoRouter);
app.use("/marcas", marcaRouter);
app.use("/pedidos-has-produto", pedidosHasProdutoRouter);
app.use("/pedidos", pedidosRouter);
app.use("/produto-has-carrinho", produtoHasCarrinhoRouter);
app.use("/produto-has-cores", produtoHasCoresRouter);
app.use("/produto-has-promocao", produtoHasPromocaoRouter);
app.use("/produtos", produtoRouter);
app.use("/promocoes", promocaoRouter);
app.use("/tamanhos", tamanhoRouter);




app.listen(3000, () => {
    console.log('servidor iniciado');
});
