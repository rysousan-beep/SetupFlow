/*=====================================================
    DADOS DA APLICAÇÃO
=====================================================*/

const app = {

    pagina: {

        titulo: "Itens no Carrinho"

    },

    header: {

        logo: "/assets/logo.n.png",

        logoAlt: "Logo da Loja",

        titulo: "Itens no carrinho",

        home: "Home",

        linkHome: "../index.html",

        limpar: "Limpar carrinho"

    },

    cabecalho: {

        produtos: "Produtos",

        quantidade: "Qtd.",

        preco: "À vista"

    },

    resumo: {

        titulo: "Resumo",

        subtotal: "SubTotal",

        total: "Total",

        pixTexto: "no PIX com 15% desconto",

        parceladoInfo: "Em até 12x de R$ 19,91 sem juros no cartão"

    },

    botoes: {

        finalizar: "Finalizar",

        frete: "Frete",

        comprarNovamente: "Comprar novamente",

        adicionar: "Adicionar ao carrinho"

    },

    pedidos: {

        titulo: "Lista de pedidos"

    },

    footer: {

        copyright:
            "© 2026 SetupFlow Tech",

        privacidade:
            "Privacidade • Segurança",

        link:
            "#"

    },

    carrinho: [

        {

            id:1,

            imagem:"/assets/fonte-msi.png",

            nome:"Fonte MSI MAG A600DN, 600W, 80 Plus White",

            descricao:"PFC Ativo • Cabo Preto • 306-7ZGB22-809",

            quantidade:1,

            preco:359.91

        },

        {

            id:2,

            imagem:"/assets/ssd.png",

            nome:"SSD Kingston NV3 1TB M.2 PCIe 4.0",

            descricao:"Leitura 6000MB/s • Gravação 4000MB/s",

            quantidade:1,

            preco: 359.91

        }

    ],

    historico:[

        {

            imagem:"/assets/pc-gamer.png",

            nome:"PC Gamer Redragon Lakshmi",

            descricao:"Ryzen • RTX • 16GB"

        },

        {

            imagem:"/assets/teclado-gamer.png",

            nome:"Teclado Mecânico Redragon",

            descricao:"Switch Brown"

        },

        {

            imagem:"/assets/mouse.png",

            nome:"Mouse Gamer Redragon",

            descricao:"16000 DPI"

        }

    ]

};


/*=====================================================
    INICIALIZAÇÃO
=====================================================*/

window.addEventListener("DOMContentLoaded",()=>{

    carregarPagina();

});


/*=====================================================
    CARREGAR PÁGINA
=====================================================*/

function carregarPagina(){

    document.title = app.pagina.titulo;

    carregarHeader();

    carregarCabecalho();

    carregarCarrinho();

    carregarResumo();

    carregarHistorico();

    carregarFooter();

    adicionarEventos();

}


/*=====================================================
    HEADER
=====================================================*/

function carregarHeader(){

    document.getElementById("logo").src =
        app.header.logo;

    document.getElementById("logo").alt =
        app.header.logoAlt;

    document.getElementById("tituloPagina").textContent =
        app.header.titulo;

    const home =
        document.getElementById("linkHome");

    home.textContent =
        app.header.home;

    home.href =
        app.header.linkHome;

    document.getElementById("btnLimparCarrinho").textContent =
        app.header.limpar;

}


/*=====================================================
    CABEÇALHO
=====================================================*/

function carregarCabecalho(){

    document.getElementById("tituloProdutos").textContent =
        app.cabecalho.produtos;

    document.getElementById("tituloQuantidade").textContent =
        app.cabecalho.quantidade;

    document.getElementById("tituloPreco").textContent =
        app.cabecalho.preco;

}

/*=====================================================
    CARRINHO
=====================================================*/

function carregarCarrinho(){

    const lista =
        document.getElementById("listaCarrinho");

    lista.innerHTML = "";

    app.carrinho.forEach(produto => {

        /*==============================
            CARD
        ==============================*/

        const card =
            document.createElement("div");

        card.className =
            "item-carrinho";


        /*==============================
            IMAGEM
        ==============================*/

        const imagem =
            document.createElement("img");

        imagem.src =
            produto.imagem;

        imagem.alt =
            produto.nome;


        /*==============================
            DADOS
        ==============================*/

        const dados =
            document.createElement("div");

        dados.className =
            "dados";


        const nome =
            document.createElement("h3");

        nome.textContent =
            produto.nome;


        const descricao =
            document.createElement("p");

        descricao.textContent =
            produto.descricao;


        dados.appendChild(nome);

        dados.appendChild(descricao);


        /*==============================
            QUANTIDADE
        ==============================*/

        const quantidade =
            document.createElement("div");

        quantidade.className =
            "quantidade";


        const btnMenos =
            document.createElement("button");

        btnMenos.textContent = "−";

        btnMenos.title = "Diminuir";


        const valor =
            document.createElement("span");

        valor.textContent =
            produto.quantidade;


        const btnMais =
            document.createElement("button");

        btnMais.textContent = "+";

        btnMais.title = "Aumentar";


        const btnExcluir =
            document.createElement("button");

        btnExcluir.innerHTML = "🗑";

        btnExcluir.title = "Remover";


        quantidade.appendChild(btnMenos);

        quantidade.appendChild(valor);

        quantidade.appendChild(btnMais);

        quantidade.appendChild(btnExcluir);


        /*==============================
            PREÇO
        ==============================*/

        const preco =
            document.createElement("div");

        preco.className =
            "preco";

        preco.textContent =
            formatarMoeda(produto.preco);


        /*==============================
            EVENTOS
        ==============================*/

        btnMais.addEventListener("click",()=>{

            aumentarQuantidade(produto.id);

        });


        btnMenos.addEventListener("click",()=>{

            diminuirQuantidade(produto.id);

        });


        btnExcluir.addEventListener("click",()=>{

            removerProduto(produto.id);

        });


        /*==============================
            MONTAR CARD
        ==============================*/

        card.appendChild(imagem);

        card.appendChild(dados);

        card.appendChild(quantidade);

        card.appendChild(preco);


        lista.appendChild(card);

    });

}


/*=====================================================
    AUMENTAR QUANTIDADE
=====================================================*/

function aumentarQuantidade(id){

    const produto =
        app.carrinho.find(item => item.id === id);

    if(!produto) return;

    produto.quantidade++;

    carregarCarrinho();

    carregarResumo();

}


/*=====================================================
    DIMINUIR QUANTIDADE
=====================================================*/

function diminuirQuantidade(id){

    const produto =
        app.carrinho.find(item => item.id === id);

    if(!produto) return;

    if(produto.quantidade > 1){

        produto.quantidade--;

    }

    carregarCarrinho();

    carregarResumo();

}


/*=====================================================
    REMOVER PRODUTO
=====================================================*/

function removerProduto(id){

    app.carrinho =
        app.carrinho.filter(item => item.id !== id);

    carregarCarrinho();

    carregarResumo();

}
/*=====================================================
    RESUMO DO PEDIDO
=====================================================*/

function carregarResumo(){

    const lista =
        document.getElementById("listaResumo");

    lista.innerHTML = "";


    /*==============================
        CÁLCULOS
    ==============================*/

    const subtotal = calcularSubtotal();

    const total = subtotal;

    const valorPix = total * 0.85;

    const valorParcela = total / 12;


    /*==============================
        SUBTOTAL
    ==============================*/

    lista.appendChild(

        criarLinhaResumo(

            app.resumo.subtotal,

            formatarMoeda(subtotal)

        )

    );


    /*==============================
        TOTAL
    ==============================*/

    lista.appendChild(

        criarLinhaResumo(

            app.resumo.total,

            formatarMoeda(total)

        )

    );


    /*==============================
        VALOR PIX
    ==============================*/

    const totalPix =
        document.createElement("div");

    totalPix.className =
        "total";

    totalPix.textContent =
        formatarMoeda(valorPix);

    lista.appendChild(totalPix);


    const textoPix =
        document.createElement("div");

    textoPix.className =
        "pix";

    textoPix.textContent =
        app.resumo.textoPix;

    lista.appendChild(textoPix);


    /*==============================
        PARCELADO
    ==============================*/

    const parcelado =
        document.createElement("div");

    parcelado.className =
        "parcelado";

    parcelado.textContent =
        formatarMoeda(total);

    lista.appendChild(parcelado);


    const info =
        document.createElement("div");

    info.className =
        "parcelado-info";

    info.textContent =
        `Em até 12x de ${formatarMoeda(valorParcela)} sem juros no cartão`;

    lista.appendChild(info);


    /*==============================
        BOTÕES
    ==============================*/

    document.getElementById("btnFinalizar").textContent =
        app.botoes.finalizar;

    document.getElementById("btnFrete").textContent =
        app.botoes.frete;

}


/*=====================================================
    CRIAR LINHA DO RESUMO
=====================================================*/

function criarLinhaResumo(titulo,valor){

    const linha =
        document.createElement("div");

    linha.className =
        "linhaResumo";


    const texto =
        document.createElement("span");

    texto.textContent =
        titulo;


    const preco =
        document.createElement("strong");

    preco.textContent =
        valor;


    linha.appendChild(texto);

    linha.appendChild(preco);

    return linha;

}


/*=====================================================
    CALCULAR SUBTOTAL
=====================================================*/

function calcularSubtotal(){

    let total = 0;

    app.carrinho.forEach(produto=>{

        total +=
            produto.preco *
            produto.quantidade;

    });

    return total;

}

/*=====================================================
    HISTÓRICO DE PEDIDOS
=====================================================*/

function carregarHistorico(){

    document.getElementById("tituloPedidos").textContent =
        app.pedidos.titulo;


    const lista =
        document.getElementById("listaPedidos");

    lista.innerHTML = "";


    app.historico.forEach(produto=>{

        /*==============================
            CARD
        ==============================*/

        const card =
            document.createElement("div");

        card.className =
            "pedido-card";


        /*==============================
            IMAGEM
        ==============================*/

        const imagem =
            document.createElement("img");

        imagem.src =
            produto.imagem;

        imagem.alt =
            produto.nome;


        /*==============================
            INFORMAÇÕES
        ==============================*/

        const info =
            document.createElement("div");

        info.className =
            "pedido-info";


        const nome =
            document.createElement("h3");

        nome.textContent =
            produto.nome;


        const descricao =
            document.createElement("p");

        descricao.textContent =
            produto.descricao;


        info.appendChild(nome);

        info.appendChild(descricao);


        /*==============================
            BOTÕES
        ==============================*/

        const botoes =
            document.createElement("div");

        botoes.className =
            "pedido-botoes";


        const btnComprar =
            document.createElement("button");

        btnComprar.textContent =
            app.botoes.comprarNovamente;


        const btnAdicionar =
            document.createElement("button");

        btnAdicionar.textContent =
            app.botoes.adicionarCarrinho;


        /*==============================
            EVENTOS
        ==============================*/

        btnComprar.addEventListener("click",()=>{

            comprarNovamente(produto);

        });


        btnAdicionar.addEventListener("click",()=>{

            adicionarHistoricoAoCarrinho(produto);

        });


        botoes.appendChild(btnComprar);

        botoes.appendChild(btnAdicionar);


        /*==============================
            MONTA CARD
        ==============================*/

        card.appendChild(imagem);

        card.appendChild(info);

        card.appendChild(botoes);


        lista.appendChild(card);

    });

}


/*=====================================================
    COMPRAR NOVAMENTE
=====================================================*/

function comprarNovamente(produto){

    alert(`Comprando novamente: ${produto.nome}`);

    adicionarHistoricoAoCarrinho(produto);

}


/*=====================================================
    ADICIONAR AO CARRINHO
=====================================================*/

function adicionarHistoricoAoCarrinho(produto){

    const existente =
        app.carrinho.find(item => item.id === produto.id);

    if(existente){

        existente.quantidade++;

    }else{

        app.carrinho.push({

            id: produto.id,

            imagem: produto.imagem,

            nome: produto.nome,

            descricao: produto.descricao,

            quantidade: 1,

            preco: 359.91

        });

    }

    carregarCarrinho();

    carregarResumo();

    alert("Produto adicionado ao carrinho!");

}

/*=====================================================
    FOOTER
=====================================================*/

function carregarFooter(){

    document.getElementById("copyright").textContent =
        app.footer.copyright;

    const link =
        document.getElementById("linkPrivacidade");

    link.textContent =
        app.footer.privacidade;

    link.href =
        app.footer.link;

}


/*=====================================================
    EVENTOS
=====================================================*/

function adicionarEventos(){

    document
        .getElementById("btnLimparCarrinho")
        .addEventListener("click", limparCarrinho);


    document
        .getElementById("btnFinalizar")
        .addEventListener("click", finalizarPedido);


    document
        .getElementById("btnFrete")
        .addEventListener("click", calcularFrete);

}


/*=====================================================
    LIMPAR CARRINHO
=====================================================*/

function limparCarrinho(){

    const confirmar = confirm(
        "Deseja realmente limpar o carrinho?"
    );

    if(!confirmar){

        return;

    }

    app.carrinho = [];

    carregarCarrinho();

    carregarResumo();

    salvarCarrinho();

}


/*=====================================================
    FINALIZAR PEDIDO
=====================================================*/

function finalizarPedido(){

    if(app.carrinho.length === 0){

        alert("Seu carrinho está vazio.");

        return;

    }

    salvarCarrinho();

    alert("Pedido finalizado com sucesso!");

    // Altere para a página desejada
    // window.location.href = "pagamento.html";

}


/*=====================================================
    FRETE
=====================================================*/

function calcularFrete(){

    const cep = prompt(
        "Informe o CEP para calcular o frete:"
    );

    if(!cep){

        return;

    }

    const valorFrete = 24.90;

    alert(

        "Frete estimado: " +

        formatarMoeda(valorFrete)

    );

}


/*=====================================================
    LOCAL STORAGE
=====================================================*/

function salvarCarrinho(){

    localStorage.setItem(

        "carrinho",

        JSON.stringify(app.carrinho)

    );

}


function carregarCarrinhoStorage(){

    const dados =

        localStorage.getItem("carrinho");

    if(dados){

        app.carrinho =

            JSON.parse(dados);

    }

}


/*=====================================================
    FORMATAÇÃO DE MOEDA
=====================================================*/

function formatarMoeda(valor){

    return valor.toLocaleString(

        "pt-BR",

        {

            style:"currency",

            currency:"BRL"

        }

    );

}


/*=====================================================
    ATUALIZAR TELA
=====================================================*/

function atualizarTela(){

    carregarCarrinho();

    carregarResumo();

    salvarCarrinho();

}


/*=====================================================
    INICIALIZAÇÃO DO STORAGE
=====================================================*/

carregarCarrinhoStorage();


/*=====================================================
    DEBUG
=====================================================*/

// console.log(app);

// console.table(app.carrinho);

// console.table(app.historico);