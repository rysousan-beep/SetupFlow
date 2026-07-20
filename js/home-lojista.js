/* ==========================================
   DASHBOARD LOJISTA
   PARTE 1
========================================== */

/* ==========================================
   ATALHOS
========================================== */

const $ = (id) => document.getElementById(id);

/* ==========================================
   BANCO DE DADOS
========================================== */

const dashboard = {

    usuario: {

        nome: "Ryan Souza",

        cargo: "Lojista Premium",

        avatar: "img/avatar.png"

    },

    hero: {

        titulo: "Bem-vindo ao seu painel",

        descricao:
            "Acompanhe vendas, produtos, promoções e desempenho da sua loja em um único lugar.",

        botao: "Ver Relatórios",

        imagem: "img/hero.png"

    },

    resumo: {

        receita: {

            titulo: "Receita",

            valor: "R$ 12.850,00",

            crescimento: "+18% esta semana"

        },

        pedidos: {

            titulo: "Pedidos",

            valor: "348",

            crescimento: "+24 pedidos"

        },

        ticket: {

            titulo: "Ticket Médio",

            valor: "R$ 146,80",

            crescimento: "+7%"

        }

    }

};

/* ==========================================
   HERO
========================================== */

function carregarHero(){

    if($("tituloHero"))
        $("tituloHero").textContent =
            dashboard.hero.titulo;

    if($("descricaoHero"))
        $("descricaoHero").textContent =
            dashboard.hero.descricao;

    if($("btnHero"))
        $("btnHero").textContent =
            dashboard.hero.botao;

    if($("imagemHero"))
        $("imagemHero").src =
            dashboard.hero.imagem;

}

/* ==========================================
   USUÁRIO
========================================== */

function carregarUsuario(){

    if($("nomeUsuario"))
        $("nomeUsuario").textContent =
            dashboard.usuario.nome;

    if($("cargoUsuario"))
        $("cargoUsuario").textContent =
            dashboard.usuario.cargo;

    if($("fotoUsuario"))
        $("fotoUsuario").src =
            dashboard.usuario.avatar;

}

/* ==========================================
   RESUMO
========================================== */

function carregarResumo(){

    /* Receita */

    if($("tituloReceita"))
        $("tituloReceita").textContent =
            dashboard.resumo.receita.titulo;

    if($("valorReceita"))
        $("valorReceita").textContent =
            dashboard.resumo.receita.valor;

    if($("crescimentoReceita"))
        $("crescimentoReceita").textContent =
            dashboard.resumo.receita.crescimento;

    /* Pedidos */

    if($("tituloPedidos"))
        $("tituloPedidos").textContent =
            dashboard.resumo.pedidos.titulo;

    if($("valorPedidos"))
        $("valorPedidos").textContent =
            dashboard.resumo.pedidos.valor;

    if($("crescimentoPedidos"))
        $("crescimentoPedidos").textContent =
            dashboard.resumo.pedidos.crescimento;

    /* Ticket Médio */

    if($("tituloTicket"))
        $("tituloTicket").textContent =
            dashboard.resumo.ticket.titulo;

    if($("valorTicket"))
        $("valorTicket").textContent =
            dashboard.resumo.ticket.valor;

    if($("crescimentoTicket"))
        $("crescimentoTicket").textContent =
            dashboard.resumo.ticket.crescimento;

}

/* ==========================================
   BOTÃO HERO
========================================== */

function eventosHero(){

    if(!$("btnHero"))
        return;

    $("btnHero").addEventListener("click",()=>{

        alert("Abrindo relatório da loja...");

    });

}

/* ==========================================
   MENU LATERAL
========================================== */

function iniciarMenu(){

    const links = document.querySelectorAll(".menu a");

    links.forEach(link=>{

        link.addEventListener("click",()=>{

            links.forEach(item=>{

                item.classList.remove("ativo");

            });

            link.classList.add("ativo");

        });

    });

}

/* ==========================================
   RELÓGIO
========================================== */

function atualizarHorario(){

    if(!$("horarioAtual"))
        return;

    const agora = new Date();

    $("horarioAtual").textContent =
        agora.toLocaleTimeString("pt-BR",{

            hour:"2-digit",

            minute:"2-digit"

        });

}

setInterval(atualizarHorario,1000);

/* ==========================================
   INICIALIZAÇÃO
========================================== */

document.addEventListener("DOMContentLoaded",()=>{

    carregarHero();

    carregarUsuario();

    carregarResumo();

    eventosHero();

    iniciarMenu();

    atualizarHorario();

});

/* ==========================================
   DASHBOARD LOJISTA
   PARTE 2
========================================== */

/* ==========================================
   DADOS DOS GRÁFICOS
========================================== */

dashboard.desempenho = {

    titulo: "Desempenho de Vendas",

    descricao:
        "Acompanhe a evolução das vendas da sua loja.",

    botaoBaixar: "Baixar gráfico",

    botaoAnalise: "Analisar",

    graficoLinha:{

        titulo:"Vendas Mensais",

        subtitulo:"Últimos 6 meses",

        meses:[
            "Jan",
            "Fev",
            "Mar",
            "Abr",
            "Mai",
            "Jun"
        ],

        valores:[
            120,
            190,
            150,
            260,
            320,
            410
        ]

    },

    graficoBarra:{

        titulo:"Produtos Vendidos",

        subtitulo:"Categorias",

        categorias:[
            "Eletrônicos",
            "Casa",
            "Moda",
            "Esporte",
            "Games"
        ],

        valores:[
            60,
            42,
            85,
            35,
            73
        ]

    }

};

/* ==========================================
   PREENCHER TEXTOS
========================================== */

function carregarDesempenho(){

    if($("tituloDesempenho"))
        $("tituloDesempenho").textContent =
        dashboard.desempenho.titulo;

    if($("descricaoDesempenho"))
        $("descricaoDesempenho").textContent =
        dashboard.desempenho.descricao;

    if($("btnBaixarGrafico"))
        $("btnBaixarGrafico").textContent =
        dashboard.desempenho.botaoBaixar;

    if($("btnAnalisar"))
        $("btnAnalisar").textContent =
        dashboard.desempenho.botaoAnalise;

    if($("tituloGraficoLinha"))
        $("tituloGraficoLinha").textContent =
        dashboard.desempenho.graficoLinha.titulo;

    if($("subtituloGraficoLinha"))
        $("subtituloGraficoLinha").textContent =
        dashboard.desempenho.graficoLinha.subtitulo;

    if($("tituloGraficoBarra"))
        $("tituloGraficoBarra").textContent =
        dashboard.desempenho.graficoBarra.titulo;

    if($("subtituloGraficoBarra"))
        $("subtituloGraficoBarra").textContent =
        dashboard.desempenho.graficoBarra.subtitulo;

}

/* ==========================================
   GRÁFICO DE LINHA
========================================== */

function criarGraficoLinha(){

    const canvas = $("graficoLinha");

    if(!canvas) return;

    new Chart(canvas,{

        type:"line",

        data:{

            labels:
                dashboard.desempenho.graficoLinha.meses,

            datasets:[{

                label:"Vendas",

                data:
                    dashboard.desempenho.graficoLinha.valores,

                borderColor:"#3483fa",

                backgroundColor:"rgba(52,131,250,.18)",

                borderWidth:3,

                tension:.35,

                fill:true,

                pointRadius:5,

                pointHoverRadius:7

            }]

        },

        options:{

            responsive:true,

            maintainAspectRatio:false,

            plugins:{

                legend:{
                    display:false
                }

            },

            scales:{

                y:{
                    beginAtZero:true
                }

            }

        }

    });

}

/* ==========================================
   GRÁFICO DE BARRAS
========================================== */

function criarGraficoBarra(){

    const canvas = $("graficoBarra");

    if(!canvas) return;

    new Chart(canvas,{

        type:"bar",

        data:{

            labels:
                dashboard.desempenho.graficoBarra.categorias,

            datasets:[{

                data:
                    dashboard.desempenho.graficoBarra.valores,

                backgroundColor:[
                    "#FFE600",
                    "#3483FA",
                    "#00A650",
                    "#FF7733",
                    "#8E44AD"
                ],

                borderRadius:8

            }]

        },

        options:{

            responsive:true,

            maintainAspectRatio:false,

            plugins:{

                legend:{
                    display:false
                }

            },

            scales:{

                y:{
                    beginAtZero:true
                }

            }

        }

    });

}

/* ==========================================
   BAIXAR GRÁFICO
========================================== */

function baixarGrafico(){

    if(!$("btnBaixarGrafico"))
        return;

    $("btnBaixarGrafico")
    .addEventListener("click",()=>{

        const canvas = $("graficoLinha");

        if(!canvas) return;

        const link =
            document.createElement("a");

        link.download =
            "grafico-vendas.png";

        link.href =
            canvas.toDataURL("image/png");

        link.click();

    });

}

/* ==========================================
   ANÁLISE
========================================== */

function analisarVendas(){

    if(!$("btnAnalisar"))
        return;

    $("btnAnalisar")
    .addEventListener("click",()=>{

        const vendas =
            dashboard.desempenho
            .graficoLinha
            .valores;

        const total =
            vendas.reduce((a,b)=>a+b,0);

        const media =
            (total/vendas.length).toFixed(1);

        alert(

`RELATÓRIO

Total de vendas: ${total}

Média mensal: ${media}

Maior venda:
${Math.max(...vendas)}

Menor venda:
${Math.min(...vendas)}`

        );

    });

}

/* ==========================================
   INICIAR
========================================== */

document.addEventListener("DOMContentLoaded",()=>{

    carregarDesempenho();

    criarGraficoLinha();

    criarGraficoBarra();

    baixarGrafico();

    analisarVendas();

});

/* ==========================================
   DASHBOARD LOJISTA
   PARTE 3
========================================== */

/* ==========================================
   PRODUTOS
========================================== */

dashboard.produtos = [

    {

        badge:"Mais vendido",

        imagem:"img/produtos/notebook.png",

        nome:"Notebook Gamer",

        texto:"Vendas",

        vendas:"1.245",

        favorito:false

    },

    {

        badge:"Alta demanda",

        imagem:"img/produtos/headset.png",

        nome:"Headset Bluetooth",

        texto:"Vendas",

        vendas:"978",

        favorito:false

    },

    {

        badge:"Crescimento",

        imagem:"img/produtos/mouse.png",

        nome:"Mouse RGB",

        texto:"Vendas",

        vendas:"843",

        favorito:false

    },

    {

        badge:"Recomendado",

        imagem:"img/produtos/teclado.png",

        nome:"Teclado Mecânico",

        texto:"Vendas",

        vendas:"612",

        favorito:false

    }

];

/* ==========================================
   PREENCHER PRODUTOS
========================================== */

function carregarProdutos(){

    dashboard.produtos.forEach((produto,index)=>{

        const numero = index + 1;

        if($("badgeProduto"+numero))
            $("badgeProduto"+numero).textContent =
            produto.badge;

        if($("imagemProduto"+numero))
            $("imagemProduto"+numero).src =
            produto.imagem;

        if($("nomeProduto"+numero))
            $("nomeProduto"+numero).textContent =
            produto.nome;

        if($("textoVendas"+numero))
            $("textoVendas"+numero).textContent =
            produto.texto;

        if($("valorVendas"+numero))
            $("valorVendas"+numero).textContent =
            produto.vendas;

    });

}

/* ==========================================
   CARRINHO
========================================== */

function eventoCarrinho(){

    dashboard.produtos.forEach((produto,index)=>{

        const numero = index + 1;

        const botao =
            $("produto"+numero+"Carrinho");

        if(!botao)
            return;

        botao.innerHTML = "🛒";

        botao.addEventListener("click",()=>{

            alert(

                produto.nome +
                "\n\nAdicionado ao carrinho."

            );

        });

    });

}

/* ==========================================
   FAVORITO
========================================== */

function eventoFavorito(){

    dashboard.produtos.forEach((produto,index)=>{

        const numero = index + 1;

        const botao =
            $("produto"+numero+"Favorito");

        if(!botao)
            return;

        botao.innerHTML = "🤍";

        botao.addEventListener("click",()=>{

            produto.favorito =
                !produto.favorito;

            if(produto.favorito){

                botao.innerHTML = "❤️";

                botao.style.background =
                    "#ffe5e5";

            }

            else{

                botao.innerHTML = "🤍";

                botao.style.background =
                    "#f5f5f5";

            }

        });

    });

}

/* ==========================================
   EDITAR
========================================== */

function eventoEditar(){

    dashboard.produtos.forEach((produto,index)=>{

        const numero = index + 1;

        const botao =
            $("produto"+numero+"Editar");

        if(!botao)
            return;

        botao.innerHTML = "✏️";

        botao.addEventListener("click",()=>{

            const novoNome =
                prompt(

                    "Editar produto:",

                    produto.nome

                );

            if(!novoNome)
                return;

            produto.nome =
                novoNome;

            $("nomeProduto"+numero)
            .textContent =
                novoNome;

        });

    });

}

/* ==========================================
   EFEITO HOVER
========================================== */

function animacaoProdutos(){

    const cards =
        document.querySelectorAll(".cardProduto");

    cards.forEach(card=>{

        card.addEventListener("mouseenter",()=>{

            card.style.transform =
                "translateY(-10px)";

        });

        card.addEventListener("mouseleave",()=>{

            card.style.transform =
                "";

        });

    });

}

/* ==========================================
   FILTRO
========================================== */

function buscarProduto(nome){

    return dashboard.produtos.find(produto=>{

        return produto.nome
            .toLowerCase()
            .includes(nome.toLowerCase());

    });

}

/* ==========================================
   TOTAL DE VENDAS
========================================== */

function totalProdutosVendidos(){

    let total = 0;

    dashboard.produtos.forEach(produto=>{

        total +=
        parseInt(
            produto.vendas.replace(".","")
        );

    });

    console.log(

        "Total vendido:",

        total

    );

}

/* ==========================================
   INICIAR
========================================== */

document.addEventListener("DOMContentLoaded",()=>{

    carregarProdutos();

    eventoCarrinho();

    eventoFavorito();

    eventoEditar();

    animacaoProdutos();

    totalProdutosVendidos();

});

/* ==========================================
   DASHBOARD LOJISTA
   PARTE 4
========================================== */

/* ==========================================
   DADOS DOS ATALHOS
========================================== */

dashboard.atalhos = [

    {

        titulo: "Novos Pedidos",

        descricao: "Pedidos aguardando confirmação",

        valor: "18",

        icone: "img/icones/pedido.png",

        mensagem: "Abrindo lista de pedidos..."

    },

    {

        titulo: "Expedição",

        descricao: "Produtos aguardando envio",

        valor: "12",

        icone: "img/icones/expedicao.png",

        mensagem: "Abrindo expedição..."

    },

    {

        titulo: "Pagamentos",

        descricao: "Pagamentos pendentes",

        valor: "R$ 3.280",

        icone: "img/icones/pagamento.png",

        mensagem: "Abrindo pagamentos..."

    },

    {

        titulo: "Mensagens",

        descricao: "Novas mensagens de clientes",

        valor: "7",

        icone: "img/icones/mensagem.png",

        mensagem: "Abrindo mensagens..."

    }

];

/* ==========================================
   CARREGAR CABEÇALHO
========================================== */

function carregarCabecalhoAtalhos(){

    if($("tituloAtalhos"))
        $("tituloAtalhos").textContent =
        "Atalhos do Lojista";

    if($("descricaoAtalhos"))
        $("descricaoAtalhos").textContent =
        "Acesse rapidamente as principais áreas da sua loja.";

}

/* ==========================================
   PREENCHER CARDS
========================================== */

function carregarAtalhos(){

    const ids = [

        {
            titulo:"tituloPedido",
            descricao:"descricaoPedido",
            valor:"valorPedido",
            imagem:"iconePedidos"
        },

        {
            titulo:"tituloExpedicao",
            descricao:"descricaoExpedicao",
            valor:"valorExpedicao",
            imagem:"iconeExpedicao"
        },

        {
            titulo:"tituloPagamento",
            descricao:"descricaoPagamento",
            valor:"valorPagamento",
            imagem:"iconePagamento"
        },

        {
            titulo:"tituloMensagem",
            descricao:"descricaoMensagem",
            valor:"valorMensagem",
            imagem:"iconeMensagem"
        }

    ];

    dashboard.atalhos.forEach((atalho,index)=>{

        const item = ids[index];

        if($(item.titulo))
            $(item.titulo).textContent =
            atalho.titulo;

        if($(item.descricao))
            $(item.descricao).textContent =
            atalho.descricao;

        if($(item.valor))
            $(item.valor).textContent =
            atalho.valor;

        if($(item.imagem))
            $(item.imagem).src =
            atalho.icone;

    });

}

/* ==========================================
   EVENTOS DOS CARDS
========================================== */

function eventosAtalhos(){

    const cards =
        document.querySelectorAll(".cardAtalho");

    cards.forEach((card,index)=>{

        card.style.cursor = "pointer";

        card.addEventListener("click",()=>{

            alert(

                dashboard.atalhos[index].mensagem

            );

        });

    });

}

/* ==========================================
   ATUALIZAÇÃO AUTOMÁTICA
========================================== */

function atualizarIndicadores(){

    setInterval(()=>{

        dashboard.atalhos.forEach((atalho,index)=>{

            if(index === 2)
                return;

            const numero =
                parseInt(atalho.valor);

            if(!isNaN(numero)){

                const novo =
                    Math.max(0,
                    numero +
                    Math.floor(Math.random()*3)-1);

                atalho.valor =
                    novo.toString();

            }

        });

        carregarAtalhos();

    },10000);

}

/* ==========================================
   DESTAQUE VISUAL
========================================== */

function destacarAtalho(){

    const cards =
        document.querySelectorAll(".cardAtalho");

    cards.forEach(card=>{

        card.addEventListener("mouseenter",()=>{

            card.style.boxShadow =
                "0 18px 40px rgba(0,0,0,.15)";

        });

        card.addEventListener("mouseleave",()=>{

            card.style.boxShadow = "";

        });

    });

}

/* ==========================================
   CONTADOR TOTAL
========================================== */

function totalPendencias(){

    let total = 0;

    dashboard.atalhos.forEach((atalho,index)=>{

        if(index === 2)
            return;

        total +=
            parseInt(atalho.valor) || 0;

    });

    console.log(

        "Total de pendências:",

        total

    );

}

/* ==========================================
   INICIAR
========================================== */

document.addEventListener("DOMContentLoaded",()=>{

    carregarCabecalhoAtalhos();

    carregarAtalhos();

    eventosAtalhos();

    destacarAtalho();

    atualizarIndicadores();

    totalPendencias();

});

/* ==========================================
   DASHBOARD LOJISTA
   PARTE 5
========================================== */

/* ==========================================
   AVALIAÇÕES
========================================== */

dashboard.avaliacoes = [

    {

        nome:"Mariana Costa",

        avatar:"img/clientes/cliente1.jpg",

        estrelas:5,

        comentario:
        "Entrega muito rápida. Produto chegou antes do prazo e em perfeito estado.",

        favorito:false

    },

    {

        nome:"Carlos Oliveira",

        avatar:"img/clientes/cliente2.jpg",

        estrelas:4,

        comentario:
        "Excelente atendimento. Voltarei a comprar novamente.",

        favorito:false

    },

    {

        nome:"Fernanda Lima",

        avatar:"img/clientes/cliente3.jpg",

        estrelas:5,

        comentario:
        "Produto exatamente como anunciado. Recomendo a loja!",

        favorito:false

    }

];

/* ==========================================
   CABEÇALHO
========================================== */

function carregarCabecalhoAvaliacoes(){

    if($("tituloAvaliacoes"))
        $("tituloAvaliacoes").textContent =
        "Avaliações Recentes";

    if($("descricaoAvaliacoes"))
        $("descricaoAvaliacoes").textContent =
        "Veja o que os clientes estão dizendo sobre sua loja.";

}

/* ==========================================
   ESTRELAS
========================================== */

function gerarEstrelas(total){

    let estrelas = "";

    for(let i=1;i<=5;i++){

        estrelas += i <= total ? "⭐" : "☆";

    }

    return estrelas;

}

/* ==========================================
   CARREGAR AVALIAÇÕES
========================================== */

function carregarAvaliacoes(){

    dashboard.avaliacoes.forEach((item,index)=>{

        const numero = index + 1;

        if($("avatarCliente"+numero))
            $("avatarCliente"+numero).src =
            item.avatar;

        if($("nomeCliente"+numero))
            $("nomeCliente"+numero).textContent =
            item.nome;

        if($("comentarioCliente"+numero))
            $("comentarioCliente"+numero).textContent =
            item.comentario;

        if($("estrelasCliente"+numero))
            $("estrelasCliente"+numero).textContent =
            gerarEstrelas(item.estrelas);

    });

}

/* ==========================================
   FAVORITAR
========================================== */

function favoritarComentario(){

    dashboard.avaliacoes.forEach((item,index)=>{

        const numero = index + 1;

        const botao =
        $("favoritarComentario"+numero);

        if(!botao)
            return;

        botao.innerHTML = "🤍";

        botao.addEventListener("click",()=>{

            item.favorito = !item.favorito;

            if(item.favorito){

                botao.innerHTML = "❤️";

                botao.style.background =
                "#ffe6e6";

            }else{

                botao.innerHTML = "🤍";

                botao.style.background =
                "";

            }

        });

    });

}

/* ==========================================
   RESPONDER
========================================== */

function responderComentario(){

    dashboard.avaliacoes.forEach((item,index)=>{

        const numero = index + 1;

        const botao =
        $("responderComentario"+numero);

        if(!botao)
            return;

        botao.innerHTML = "💬";

        botao.addEventListener("click",()=>{

            const resposta = prompt(

                "Responder para " + item.nome

            );

            if(resposta){

                alert(

                    "Resposta enviada com sucesso!"

                );

            }

        });

    });

}

/* ==========================================
   REMOVER
========================================== */

function removerComentario(){

    dashboard.avaliacoes.forEach((item,index)=>{

        const numero = index + 1;

        const botao =
        $("removerComentario"+numero);

        if(!botao)
            return;

        botao.innerHTML = "🗑️";

        botao.addEventListener("click",()=>{

            const confirmar = confirm(

                "Deseja remover esta avaliação?"

            );

            if(!confirmar)
                return;

            const card =
            botao.closest(".cardAvaliacao");

            if(card){

                card.style.opacity = "0";

                card.style.transform =
                "scale(.9)";

                setTimeout(()=>{

                    card.remove();

                },300);

            }

        });

    });

}

/* ==========================================
   ESTATÍSTICAS
========================================== */

function estatisticasAvaliacoes(){

    const total =
    dashboard.avaliacoes.length;

    const media = (

        dashboard.avaliacoes.reduce(

            (soma,item)=>{

                return soma + item.estrelas;

            },0

        ) / total

    ).toFixed(1);

    console.log(

        "Avaliações:", total,

        " | Média:", media

    );

}

/* ==========================================
   ANIMAÇÃO
========================================== */

function animarAvaliacoes(){

    const cards =
    document.querySelectorAll(".cardAvaliacao");

    cards.forEach((card,index)=>{

        card.style.opacity = "0";

        card.style.transform =
        "translateY(40px)";

        setTimeout(()=>{

            card.style.transition =
            ".5s";

            card.style.opacity = "1";

            card.style.transform =
            "translateY(0)";

        },index*150);

    });

}

/* ==========================================
   INICIAR
========================================== */

document.addEventListener("DOMContentLoaded",()=>{

    carregarCabecalhoAvaliacoes();

    carregarAvaliacoes();

    favoritarComentario();

    responderComentario();

    removerComentario();

    estatisticasAvaliacoes();

    animarAvaliacoes();

});

/* ==========================================
   DASHBOARD LOJISTA
   PARTE 6
========================================== */

/* ==========================================
   BOAS PRÁTICAS
========================================== */

dashboard.boasPraticas = [

    {

        titulo:"Melhore as fotos dos produtos",

        categoria:"Recomendação automática",

        descricao:"Utilize imagens em alta resolução, com fundo claro e diferentes ângulos para aumentar a confiança dos compradores.",

        imagem:"img/dicas/fotos.jpg",

        salvo:false

    },

    {

        titulo:"Ofereça frete competitivo",

        categoria:"Impacto direto nas vendas",

        descricao:"Frete grátis ou reduzido aumenta significativamente a conversão e melhora o posicionamento dos anúncios.",

        imagem:"img/dicas/frete.jpg",

        salvo:false

    }

];

/* ==========================================
   CABEÇALHO
========================================== */

function carregarCabecalhoBoasPraticas(){

    if($("tituloBoasPraticas"))
        $("tituloBoasPraticas").textContent =
        "Boas práticas para vender mais";

    if($("descricaoBoasPraticas"))
        $("descricaoBoasPraticas").textContent =
        "Confira recomendações para melhorar o desempenho da sua loja.";

}

/* ==========================================
   CARREGAR DICAS
========================================== */

function carregarBoasPraticas(){

    dashboard.boasPraticas.forEach((item,index)=>{

        const numero = index + 1;

        if($("imagemPratica"+numero))
            $("imagemPratica"+numero).src =
            item.imagem;

        if($("tituloPratica"+numero))
            $("tituloPratica"+numero).textContent =
            item.titulo;

        if($("categoriaPratica"+numero))
            $("categoriaPratica"+numero).textContent =
            item.categoria;

        if($("descricaoPratica"+numero))
            $("descricaoPratica"+numero).textContent =
            item.descricao;

    });

}

/* ==========================================
   SALVAR DICA
========================================== */

function salvarPratica(){

    dashboard.boasPraticas.forEach((item,index)=>{

        const numero = index + 1;

        const botao = $("salvarPratica"+numero);

        if(!botao) return;

        botao.innerHTML = "🤍";

        botao.addEventListener("click",()=>{

            item.salvo = !item.salvo;

            if(item.salvo){

                botao.innerHTML = "❤️";
                botao.style.background = "#ffe5e5";

            }else{

                botao.innerHTML = "🤍";
                botao.style.background = "";

            }

        });

    });

}

/* ==========================================
   COMPARTILHAR
========================================== */

function compartilharPratica(){

    dashboard.boasPraticas.forEach((item,index)=>{

        const numero = index + 1;

        const botao = $("compartilharPratica"+numero);

        if(!botao) return;

        botao.innerHTML = "📤";

        botao.addEventListener("click",async()=>{

            if(navigator.share){

                try{

                    await navigator.share({

                        title:item.titulo,

                        text:item.descricao

                    });

                }catch(e){}

            }else{

                navigator.clipboard.writeText(

                    item.titulo +
                    "\n\n" +
                    item.descricao

                );

                alert("Conteúdo copiado para a área de transferência.");

            }

        });

    });

}

/* ==========================================
   ANIMAÇÃO DOS CARDS
========================================== */

function animarPraticas(){

    const cards =
    document.querySelectorAll(".cardPratica");

    cards.forEach((card,index)=>{

        card.style.opacity = "0";

        card.style.transform =
        "translateY(35px)";

        setTimeout(()=>{

            card.style.transition = ".5s";

            card.style.opacity = "1";

            card.style.transform =
            "translateY(0)";

        },index*180);

    });

}

/* ==========================================
   PESQUISAR DICA
========================================== */

function buscarPratica(texto){

    return dashboard.boasPraticas.filter(item=>{

        return item.titulo
            .toLowerCase()
            .includes(texto.toLowerCase());

    });

}

/* ==========================================
   ESTATÍSTICAS
========================================== */

function estatisticasPraticas(){

    console.log(

        "Boas práticas cadastradas:",

        dashboard.boasPraticas.length

    );

}

/* ==========================================
   INICIAR
========================================== */

document.addEventListener("DOMContentLoaded",()=>{

    carregarCabecalhoBoasPraticas();

    carregarBoasPraticas();

    salvarPratica();

    compartilharPratica();

    animarPraticas();

    estatisticasPraticas();

});

/* ==========================================
   DASHBOARD LOJISTA
   PARTE 7 (FINAL)
========================================== */

/* ==========================================
   DADOS DA PROMOÇÃO
========================================== */

dashboard.promocao = {

    titulo: "Promoção de Inverno",

    desconto: "20",

    inicio: "2025-07-01",

    termino: "2025-07-31",

    status: "Rascunho"

};

/* ==========================================
   CARREGAR PROMOÇÃO
========================================== */

function carregarPromocao(){

    if($("tituloPromocao"))
        $("tituloPromocao").value =
        dashboard.promocao.titulo;

    if($("descontoPromocao"))
        $("descontoPromocao").value =
        dashboard.promocao.desconto;

    if($("inicioPromocao"))
        $("inicioPromocao").value =
        dashboard.promocao.inicio;

    if($("terminoPromocao"))
        $("terminoPromocao").value =
        dashboard.promocao.termino;

    if($("statusPromocao"))
        $("statusPromocao").textContent =
        dashboard.promocao.status;

}

/* ==========================================
   VALIDAR FORMULÁRIO
========================================== */

function validarPromocao(){

    const titulo = $("tituloPromocao")?.value.trim();

    const desconto = $("descontoPromocao")?.value.trim();

    const inicio = $("inicioPromocao")?.value;

    const termino = $("terminoPromocao")?.value;

    if(!titulo){

        alert("Informe o título da promoção.");

        return false;

    }

    if(!desconto || Number(desconto)<=0){

        alert("Informe um desconto válido.");

        return false;

    }

    if(!inicio || !termino){

        alert("Informe as datas.");

        return false;

    }

    if(inicio > termino){

        alert("A data inicial deve ser menor.");

        return false;

    }

    return true;

}

/* ==========================================
   SALVAR RASCUNHO
========================================== */

function salvarRascunho(){

    if(!$("btnSalvarRascunho"))
        return;

    $("btnSalvarRascunho")
    .addEventListener("click",()=>{

        dashboard.promocao.titulo =
        $("tituloPromocao").value;

        dashboard.promocao.desconto =
        $("descontoPromocao").value;

        dashboard.promocao.inicio =
        $("inicioPromocao").value;

        dashboard.promocao.termino =
        $("terminoPromocao").value;

        dashboard.promocao.status =
        "Rascunho";

        carregarPromocao();

        alert("Rascunho salvo.");

    });

}

/* ==========================================
   PUBLICAR
========================================== */

function publicarPromocao(){

    if(!$("btnPublicarPromocao"))
        return;

    $("btnPublicarPromocao")
    .addEventListener("click",()=>{

        if(!validarPromocao())
            return;

        dashboard.promocao.status =
        "Publicada";

        carregarPromocao();

        alert("Promoção publicada com sucesso!");

    });

}

/* ==========================================
   LIMPAR
========================================== */

function limparFormulario(){

    if(!$("btnLimparPromocao"))
        return;

    $("btnLimparPromocao")
    .addEventListener("click",()=>{

        $("tituloPromocao").value = "";

        $("descontoPromocao").value = "";

        $("inicioPromocao").value = "";

        $("terminoPromocao").value = "";

        $("statusPromocao").textContent =
        "-";

    });

}

/* ==========================================
   STATUS VISUAL
========================================== */

function atualizarStatusVisual(){

    if(!$("statusPromocao"))
        return;

    const status =
    $("statusPromocao");

    if(status.textContent==="Publicada"){

        status.style.color="#00A650";

    }else{

        status.style.color="#FF9900";

    }

}

/* ==========================================
   INICIALIZAÇÃO FINAL
========================================== */

document.addEventListener("DOMContentLoaded",()=>{

    carregarPromocao();

    salvarRascunho();

    publicarPromocao();

    limparFormulario();

    atualizarStatusVisual();

});

/* ==========================================
   FIM DO DASHBOARD
========================================== */

console.log(

"Dashboard do Lojista iniciado com sucesso."

);