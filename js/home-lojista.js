/*==================================================
        DASHBOARD - PARTE 1
        HOME DO LOJISTA
==================================================*/

document.addEventListener("DOMContentLoaded", () => {

    iniciarMenu();
    iniciarPesquisa();
    iniciarFiltros();
    iniciarBotoes();
    atualizarSaudacao();
    animarEntrada();

});


/*==================================================
        MENU LATERAL
==================================================*/

function iniciarMenu(){

    const itens = document.querySelectorAll(".sidebar li");

    itens.forEach(item=>{

        item.addEventListener("click",()=>{

            itens.forEach(li=>li.classList.remove("active"));

            item.classList.add("active");

        });

    });

}


/*==================================================
        PESQUISA
==================================================*/

function iniciarPesquisa(){

    const campo = document.querySelector(".search-main");

    if(!campo) return;

    campo.addEventListener("keyup",(e)=>{

        const texto = e.target.value.trim();

        console.log("Pesquisar:",texto);

        // Futuramente:
        // buscarProdutos(texto);

    });

}


/*==================================================
        FILTROS
==================================================*/

function iniciarFiltros(){

    const filtros=document.querySelectorAll(".filters button");

    filtros.forEach(botao=>{

        botao.addEventListener("click",()=>{

            filtros.forEach(btn=>{

                btn.style.background="#bdbdbd";

            });

            botao.style.background="#111";

            console.log("Filtro:",botao.textContent);

            atualizarDashboard(botao.textContent);

        });

    });

}


/*==================================================
        BOTÕES
==================================================*/

function iniciarBotoes(){

    const relatorio=document.querySelector(".btn-light");

    const oferta=document.querySelector(".btn-dark");

    if(relatorio){

        relatorio.addEventListener("click",()=>{

            alert("Abrindo relatórios...");

        });

    }

    if(oferta){

        oferta.addEventListener("click",()=>{

            alert("Nova oferta criada.");

        });

    }

}


/*==================================================
        SAUDAÇÃO
==================================================*/

function atualizarSaudacao(){

    const titulo=document.querySelector(".hero h2");

    if(!titulo) return;

    const hora=new Date().getHours();

    let periodo="";

    if(hora<12){

        periodo="Bom dia";

    }else if(hora<18){

        periodo="Boa tarde";

    }else{

        periodo="Boa noite";

    }

    titulo.innerHTML=`${periodo}, Joana 👋`;

}


/*==================================================
        ANIMAÇÃO
==================================================*/

function animarEntrada(){

    const hero=document.querySelector(".hero");

    const banner=document.querySelector(".banner-placeholder");

    if(hero){

        hero.animate([

            {
                opacity:0,
                transform:"translateX(-40px)"
            },

            {
                opacity:1,
                transform:"translateX(0)"
            }

        ],{

            duration:700,

            easing:"ease"

        });

    }

    if(banner){

        banner.animate([

            {
                opacity:0,
                transform:"translateX(40px)"
            },

            {
                opacity:1,
                transform:"translateX(0)"
            }

        ],{

            duration:900,

            easing:"ease"

        });

    }

}


/*==================================================
        ATUALIZAÇÃO DO DASHBOARD
==================================================*/

function atualizarDashboard(periodo){

    console.log("Atualizando dashboard:",periodo);

    // Aqui futuramente poderá chamar uma API

    /*
    fetch("/api/dashboard?periodo="+periodo)
    .then(r=>r.json())
    .then(dados=>{

        atualizarCards(dados);

    });
    */

}


/*==================================================
        FUNÇÃO FUTURA
==================================================*/

function atualizarCards(dados){

    console.log(dados);

}

/*==================================================
        DASHBOARD - PARTE 2
        RESUMO DA SEMANA
==================================================*/

document.addEventListener("DOMContentLoaded",()=>{

    iniciarResumoSemana();

});


/*==================================================
        DADOS
==================================================*/

let resumoSemana={

    receita:48920,

    pedidos:312,

    ticket:156.70,

    crescimentoReceita:12.4,

    crescimentoPedidos:6.1,

    crescimentoTicket:5.0

};


/*==================================================
        INICIAR
==================================================*/

function iniciarResumoSemana(){

    atualizarResumo();

    iniciarBotoesResumo();

    atualizarAutomaticamente();

}


/*==================================================
        ATUALIZAR CARDS
==================================================*/

function atualizarResumo(){

    const cards=document.querySelectorAll(".summary-card");

    if(cards.length===0) return;


    atualizarNumero(

        cards[0].querySelector("h3"),

        resumoSemana.receita,

        "R$ "

    );

    atualizarNumero(

        cards[1].querySelector("h3"),

        resumoSemana.pedidos,

        ""

    );

    atualizarNumero(

        cards[2].querySelector("h3"),

        resumoSemana.ticket,

        "R$ "

    );


    atualizarVariacao(

        cards[0].querySelector("small"),

        resumoSemana.crescimentoReceita

    );

    atualizarVariacao(

        cards[1].querySelector("small"),

        resumoSemana.crescimentoPedidos

    );

    atualizarVariacao(

        cards[2].querySelector("small"),

        resumoSemana.crescimentoTicket

    );

}


/*==================================================
        ANIMAÇÃO DOS NÚMEROS
==================================================*/

function atualizarNumero(elemento,valor,prefixo){

    if(!elemento) return;

    let inicio=0;

    const duracao=1200;

    const incremento=valor/(duracao/20);

    const timer=setInterval(()=>{

        inicio+=incremento;

        if(inicio>=valor){

            inicio=valor;

            clearInterval(timer);

        }

        if(prefixo==="R$ "){

            elemento.innerHTML=

                prefixo+

                inicio.toLocaleString("pt-BR",{

                    minimumFractionDigits:valor%1?2:0,

                    maximumFractionDigits:2

                });

        }else{

            elemento.innerHTML=Math.floor(inicio);

        }

    },20);

}


/*==================================================
        VARIAÇÃO
==================================================*/

function atualizarVariacao(elemento,valor){

    if(!elemento) return;

    if(valor>=0){

        elemento.style.color="#27ae60";

        elemento.innerHTML="▲ +"+valor+"%";

    }else{

        elemento.style.color="#e74c3c";

        elemento.innerHTML="▼ "+valor+"%";

    }

}


/*==================================================
        BOTÕES
==================================================*/

function iniciarBotoesResumo(){

    const exportar=document.querySelector(".summary-actions .btn-dark");

    const configurar=document.querySelector(".summary-actions .btn-outline");


    if(exportar){

        exportar.addEventListener("click",()=>{

            exportarResumo();

        });

    }


    if(configurar){

        configurar.addEventListener("click",()=>{

            configurarMetricas();

        });

    }

}


/*==================================================
        EXPORTAR
==================================================*/

function exportarResumo(){

    alert("Resumo exportado com sucesso.");

}


/*==================================================
        CONFIGURAÇÃO
==================================================*/

function configurarMetricas(){

    alert("Abrindo configurações das métricas.");

}


/*==================================================
        ATUALIZAÇÃO AUTOMÁTICA
==================================================*/

function atualizarAutomaticamente(){

    setInterval(()=>{

        resumoSemana.receita+=Math.floor(Math.random()*800);

        resumoSemana.pedidos+=Math.floor(Math.random()*5);

        resumoSemana.ticket+=Math.random()*2;

        resumoSemana.crescimentoReceita=

            (Math.random()*20).toFixed(1);

        resumoSemana.crescimentoPedidos=

            (Math.random()*10).toFixed(1);

        resumoSemana.crescimentoTicket=

            (Math.random()*8).toFixed(1);

        atualizarResumo();

    },30000);

}


/*==================================================
        API FUTURA
==================================================*/

async function carregarResumoAPI(){

    /*
    const resposta=await fetch("/api/resumo");

    const dados=await resposta.json();

    resumoSemana=dados;

    atualizarResumo();
    */

}

/*==================================================
        DASHBOARD - PARTE 3
        DESEMPENHO DE VENDAS
==================================================*/

document.addEventListener("DOMContentLoaded",()=>{

    iniciarGraficos();

    iniciarBotoesGraficos();

});


/*==================================================
        DADOS
==================================================*/

let vendas=[

    120,
    180,
    150,
    220,
    190,
    280,
    260

];

let pedidos=[

    82,
    60,
    40,
    62,
    48,
    74,
    56

];


/*==================================================
        INICIAR
==================================================*/

function iniciarGraficos(){

    desenharLinha();

    animarBarras();

}


/*==================================================
        LINHA SVG
==================================================*/

function desenharLinha(){

    const linha=document.querySelector(".sales-line");

    if(!linha) return;

    const pontos=gerarPath(vendas);

    linha.setAttribute("d",pontos);

}


/*==================================================
        GERAR PATH SVG
==================================================*/

function gerarPath(dados){

    const largura=500;
    const altura=250;

    const passo=largura/(dados.length-1);

    const maior=Math.max(...dados);

    let caminho="";

    dados.forEach((valor,index)=>{

        const x=index*passo;

        const y=altura-(valor/maior)*200;

        if(index===0){

            caminho+=`M ${x} ${y}`;

        }else{

            caminho+=` L ${x} ${y}`;

        }

    });

    return caminho;

}


/*==================================================
        BARRAS
==================================================*/

function animarBarras(){

    const barras=document.querySelectorAll(".bar");

    barras.forEach((barra,index)=>{

        barra.style.height="0%";

        setTimeout(()=>{

            barra.style.transition="1s";

            barra.style.height=pedidos[index]+"%";

        },index*120);

    });

}


/*==================================================
        BOTÕES
==================================================*/

function iniciarBotoesGraficos(){

    const baixar=document.querySelector(".performance-actions .btn-outline");

    const analisar=document.querySelector(".performance-actions .btn-dark");


    if(baixar){

        baixar.addEventListener("click",baixarGrafico);

    }


    if(analisar){

        analisar.addEventListener("click",()=>{

            atualizarGraficos();

        });

    }

}


/*==================================================
        BAIXAR
==================================================*/

function baixarGrafico(){

    alert("Download do gráfico iniciado.");

}


/*==================================================
        ATUALIZAR DADOS
==================================================*/

function atualizarGraficos(){

    vendas=vendas.map(()=>{

        return Math.floor(Math.random()*220)+80;

    });


    pedidos=pedidos.map(()=>{

        return Math.floor(Math.random()*90)+10;

    });


    desenharLinha();

    atualizarBarras();

}


/*==================================================
        NOVAS BARRAS
==================================================*/

function atualizarBarras(){

    const barras=document.querySelectorAll(".bar");

    barras.forEach((barra,index)=>{

        barra.style.height=pedidos[index]+"%";

    });

}


/*==================================================
        AUTO UPDATE
==================================================*/

setInterval(()=>{

    atualizarGraficos();

},20000);


/*==================================================
        TOOLTIP
==================================================*/

const barras=document.querySelectorAll(".bar");

barras.forEach((barra,index)=>{

    barra.title="Pedidos: "+pedidos[index];

});


/*==================================================
        FUTURA API
==================================================*/

async function carregarDadosGraficos(){

    /*
    const resposta=await fetch("/api/vendas");

    const dados=await resposta.json();

    vendas=dados.vendas;

    pedidos=dados.pedidos;

    desenharLinha();

    atualizarBarras();
    */

}

/*==================================================
        DASHBOARD - PARTE 4
        PRODUTOS EM DESTAQUE
==================================================*/

document.addEventListener("DOMContentLoaded",()=>{

    iniciarProdutos();

});


/*==================================================
        DADOS
==================================================*/

const produtos=[

{
    nome:"Camiseta Básica Preta",
    vendidos:184,
    margem:32,
    estoque:42,
    favorito:false
},

{
    nome:"Tênis Branco Minimalista",
    vendidos:127,
    margem:28,
    estoque:18,
    favorito:false
},

{
    nome:"Squeeze Aço 500ml",
    vendidos:98,
    margem:35,
    estoque:64,
    favorito:false
},

{
    nome:"Mochila Urbana 20L",
    vendidos:76,
    margem:26,
    estoque:15,
    favorito:false
}

];


/*==================================================
        INICIAR
==================================================*/

function iniciarProdutos(){

    atualizarCards();

    registrarEventos();

}


/*==================================================
        EVENTOS
==================================================*/

function registrarEventos(){

    const cards=document.querySelectorAll(".product-card");

    cards.forEach((card,index)=>{

        const botoes=card.querySelectorAll("button");

        if(botoes.length<4) return;

        /* Carrinho */

        botoes[0].addEventListener("click",()=>{

            adicionarCarrinho(index);

        });

        /* Estoque */

        botoes[1].addEventListener("click",()=>{

            verificarEstoque(index);

        });

        /* Promoção */

        botoes[2].addEventListener("click",()=>{

            ativarPromocao(index);

        });

        /* Favorito / Estatísticas */

        botoes[3].addEventListener("click",()=>{

            alternarFavorito(index,botoes[3]);

        });

        /* Hover */

        card.addEventListener("mouseenter",()=>{

            card.style.transform="translateY(-8px)";

        });

        card.addEventListener("mouseleave",()=>{

            card.style.transform="translateY(0)";

        });

    });

}


/*==================================================
        CARRINHO
==================================================*/

function adicionarCarrinho(index){

    alert(

        produtos[index].nome +

        "\n\nProduto enviado para o carrinho."

    );

}


/*==================================================
        ESTOQUE
==================================================*/

function verificarEstoque(index){

    const p=produtos[index];

    alert(

`Produto: ${p.nome}

Estoque disponível: ${p.estoque}

Vendidos: ${p.vendidos}`

    );

}


/*==================================================
        PROMOÇÃO
==================================================*/

function ativarPromocao(index){

    alert(

        "Promoção ativada para:\n\n"+

        produtos[index].nome

    );

}


/*==================================================
        FAVORITO
==================================================*/

function alternarFavorito(index,botao){

    produtos[index].favorito=

        !produtos[index].favorito;

    if(produtos[index].favorito){

        botao.style.background="#111";

        botao.style.color="#fff";

    }

    else{

        botao.style.background="#f1f1f1";

        botao.style.color="#111";

    }

}


/*==================================================
        ATUALIZAÇÃO DOS DADOS
==================================================*/

function atualizarCards(){

    const cards=document.querySelectorAll(".product-card");

    cards.forEach((card,index)=>{

        const info=

            card.querySelector(".product-body p");

        info.innerHTML=

        `Vendidos:
        <strong>${produtos[index].vendidos}</strong>
        •
        Margem:
        <strong>${produtos[index].margem}%</strong>`;

    });

}


/*==================================================
        SIMULAÇÃO
==================================================*/

setInterval(()=>{

    produtos.forEach(produto=>{

        produto.vendidos+=

            Math.floor(Math.random()*3);

        produto.margem=

            Math.max(

                20,

                Math.min(

                    40,

                    produto.margem+

                    (Math.random()>.5?1:-1)

                )

            );

    });

    atualizarCards();

},25000);


/*==================================================
        API FUTURA
==================================================*/

async function carregarProdutos(){

    /*
    const resposta=

        await fetch("/api/produtos");

    const dados=

        await resposta.json();

    produtos.splice(

        0,

        produtos.length,

        ...dados

    );

    atualizarCards();
    */

}

/*==================================================
        DASHBOARD - PARTE 5
        ATALHOS DO LOJISTA
==================================================*/

document.addEventListener("DOMContentLoaded",()=>{

    iniciarAtalhos();

});


/*==================================================
        DADOS
==================================================*/

const atalhos=[

{
    titulo:"Novos pedidos",
    quantidade:12
},

{
    titulo:"Expedição",
    quantidade:8
},

{
    titulo:"Pagamentos",
    quantidade:21430
},

{
    titulo:"Mensagens",
    quantidade:5
}

];


/*==================================================
        INICIAR
==================================================*/

function iniciarAtalhos(){

    atualizarAtalhos();

    registrarEventosAtalhos();

}


/*==================================================
        EVENTOS
==================================================*/

function registrarEventosAtalhos(){

    const cards=document.querySelectorAll(".shortcut-card");

    cards.forEach((card,index)=>{

        card.addEventListener("click",()=>{

            abrirAtalho(index);

        });

        card.addEventListener("mouseenter",()=>{

            card.style.transform="translateY(-8px)";

        });

        card.addEventListener("mouseleave",()=>{

            card.style.transform="translateY(0px)";

        });

    });

}


/*==================================================
        ABRIR ATALHO
==================================================*/

function abrirAtalho(index){

    switch(index){

        case 0:

            alert("Abrindo lista de pedidos...");

        break;

        case 1:

            alert("Abrindo expedição...");

        break;

        case 2:

            alert("Abrindo pagamentos...");

        break;

        case 3:

            alert("Abrindo mensagens...");

        break;

    }

}


/*==================================================
        ATUALIZAR DADOS
==================================================*/

function atualizarAtalhos(){

    const cards=document.querySelectorAll(".shortcut-card");

    cards.forEach((card,index)=>{

        const valor=card.querySelector("strong");

        if(!valor) return;

        if(index===2){

            valor.innerHTML="R$ "+atalhos[index].quantidade.toLocaleString("pt-BR");

        }

        else{

            valor.innerHTML=atalhos[index].quantidade;

        }

    });

}


/*==================================================
        SIMULAÇÃO
==================================================*/

function atualizarAutomaticamente(){

    atalhos[0].quantidade+=Math.floor(Math.random()*3);

    atalhos[1].quantidade+=Math.floor(Math.random()*2);

    atalhos[2].quantidade+=Math.floor(Math.random()*800);

    atalhos[3].quantidade+=Math.floor(Math.random()*2);

    atualizarAtalhos();

}

setInterval(atualizarAutomaticamente,30000);


/*==================================================
        NOTIFICAÇÃO
==================================================*/

function mostrarNotificacao(texto){

    const aviso=document.createElement("div");

    aviso.className="toast-lojista";

    aviso.innerHTML=texto;

    aviso.style.position="fixed";
    aviso.style.right="25px";
    aviso.style.bottom="25px";
    aviso.style.background="#111";
    aviso.style.color="#fff";
    aviso.style.padding="15px 25px";
    aviso.style.borderRadius="8px";
    aviso.style.boxShadow="0 8px 20px rgba(0,0,0,.2)";
    aviso.style.zIndex="9999";
    aviso.style.opacity="0";

    document.body.appendChild(aviso);

    setTimeout(()=>{

        aviso.style.transition=".4s";
        aviso.style.opacity="1";

    },100);

    setTimeout(()=>{

        aviso.style.opacity="0";

        setTimeout(()=>{

            aviso.remove();

        },400);

    },2500);

}


/*==================================================
        EXEMPLO
==================================================*/

setTimeout(()=>{

    mostrarNotificacao("Você possui novos pedidos.");

},4000);


/*==================================================
        API FUTURA
==================================================*/

async function carregarAtalhos(){

    /*
    const resposta=await fetch("/api/atalhos");

    const dados=await resposta.json();

    atalhos.splice(0,atalhos.length,...dados);

    atualizarAtalhos();
    */

}

/*==================================================
        DASHBOARD - PARTE 6
        AVALIAÇÕES RECENTES
==================================================*/

document.addEventListener("DOMContentLoaded",()=>{

    iniciarAvaliacoes();

});


/*==================================================
        DADOS
==================================================*/

let avaliacoes=[

{
    cliente:"Marcos A.",
    estrelas:5,
    curtida:false,
    destaque:false,
    comentario:"Chegou antes do prazo e a qualidade é excelente!"
},

{
    cliente:"Renata S.",
    estrelas:5,
    curtida:false,
    destaque:false,
    comentario:"Atendimento rápido e produto fiel à descrição."
},

{
    cliente:"Carlos M.",
    estrelas:5,
    curtida:false,
    destaque:false,
    comentario:"Ótimo custo-benefício."
}

];


/*==================================================
        INICIAR
==================================================*/

function iniciarAvaliacoes(){

    registrarEventosAvaliacoes();

    atualizarCardsAvaliacoes();

}


/*==================================================
        EVENTOS
==================================================*/

function registrarEventosAvaliacoes(){

    const cards=document.querySelectorAll(".review-card");

    cards.forEach((card,index)=>{

        const botoes=card.querySelectorAll("button");

        if(botoes.length<3) return;

        /* Curtir */

        botoes[0].addEventListener("click",()=>{

            curtirAvaliacao(index,botoes[0]);

        });

        /* Destacar */

        botoes[1].addEventListener("click",()=>{

            destacarAvaliacao(index,card,botoes[1]);

        });

        /* Responder */

        botoes[2].addEventListener("click",()=>{

            responderAvaliacao(index);

        });

    });

}


/*==================================================
        CURTIR
==================================================*/

function curtirAvaliacao(index,botao){

    avaliacoes[index].curtida=!avaliacoes[index].curtida;

    if(avaliacoes[index].curtida){

        botao.style.background="#27ae60";
        botao.style.color="#fff";

    }else{

        botao.style.background="#f1f1f1";
        botao.style.color="#111";

    }

}


/*==================================================
        DESTACAR
==================================================*/

function destacarAvaliacao(index,card,botao){

    avaliacoes[index].destaque=!avaliacoes[index].destaque;

    if(avaliacoes[index].destaque){

        card.style.border="2px solid gold";
        card.style.boxShadow="0 0 18px rgba(255,215,0,.4)";

        botao.style.background="gold";
        botao.style.color="#111";

    }else{

        card.style.border="1px solid #e5e5e5";
        card.style.boxShadow="";

        botao.style.background="#f1f1f1";
        botao.style.color="#111";

    }

}


/*==================================================
        RESPONDER
==================================================*/

function responderAvaliacao(index){

    const resposta=prompt(

        "Responder avaliação de "+avaliacoes[index].cliente+":"

    );

    if(!resposta) return;

    alert(

        "Resposta enviada para "+avaliacoes[index].cliente

    );

}


/*==================================================
        ATUALIZAR
==================================================*/

function atualizarCardsAvaliacoes(){

    const cards=document.querySelectorAll(".review-card");

    cards.forEach((card,index)=>{

        const texto=card.querySelector(".review-text");

        if(texto){

            texto.innerHTML=avaliacoes[index].comentario;

        }

    });

}


/*==================================================
        FILTRO
==================================================*/

function filtrarPorEstrelas(minimo){

    const cards=document.querySelectorAll(".review-card");

    cards.forEach((card,index)=>{

        if(avaliacoes[index].estrelas>=minimo){

            card.style.display="block";

        }else{

            card.style.display="none";

        }

    });

}


/*==================================================
        NOVAS AVALIAÇÕES
==================================================*/

function gerarNovaAvaliacao(){

    const nomes=[

        "Fernanda",
        "Lucas",
        "Ana",
        "Roberto",
        "Juliana"

    ];

    const comentarios=[

        "Excelente atendimento.",

        "Entrega muito rápida.",

        "Voltarei a comprar.",

        "Produto muito bonito.",

        "Recomendo a loja."

    ];

    avaliacoes.push({

        cliente:nomes[Math.floor(Math.random()*nomes.length)],

        estrelas:5,

        curtida:false,

        destaque:false,

        comentario:comentarios[Math.floor(Math.random()*comentarios.length)]

    });

}


/*==================================================
        CONTADOR
==================================================*/

function totalAvaliacoes(){

    console.log(

        "Total:",

        avaliacoes.length

    );

}


/*==================================================
        AUTO UPDATE
==================================================*/

setInterval(()=>{

    gerarNovaAvaliacao();

    totalAvaliacoes();

},60000);


/*==================================================
        API FUTURA
==================================================*/

async function carregarAvaliacoes(){

    /*
    const resposta=await fetch("/api/avaliacoes");

    const dados=await resposta.json();

    avaliacoes=dados;

    atualizarCardsAvaliacoes();
    */

}

/*==================================================
        DASHBOARD - PARTE 7
        BOAS PRÁTICAS PARA VENDER MAIS
==================================================*/

document.addEventListener("DOMContentLoaded",()=>{

    iniciarDicas();

});


/*==================================================
        DADOS
==================================================*/

let dicas=[

{
    titulo:"Ajuste seus preços por margem",
    categoria:"Recomendação automática",
    favorita:false,
    concluida:false
},

{
    titulo:"Otimize fotos e descrições",
    categoria:"Impacto direto nas conversões",
    favorita:false,
    concluida:false
}

];


/*==================================================
        INICIAR
==================================================*/

function iniciarDicas(){

    registrarEventosDicas();

    atualizarDicas();

}


/*==================================================
        EVENTOS
==================================================*/

function registrarEventosDicas(){

    const cards=document.querySelectorAll(".tip-card");

    cards.forEach((card,index)=>{

        const botoes=card.querySelectorAll("button");

        if(botoes.length<2) return;

        /* Salvar */

        botoes[0].addEventListener("click",()=>{

            salvarDica(index);

        });

        /* Favoritar */

        botoes[1].addEventListener("click",()=>{

            favoritarDica(index,botoes[1]);

        });

        /* Expandir */

        card.addEventListener("dblclick",()=>{

            expandirDescricao(card);

        });

    });

}


/*==================================================
        SALVAR
==================================================*/

function salvarDica(index){

    dicas[index].concluida=true;

    mostrarToast(

        "✔ Dica salva com sucesso."

    );

}


/*==================================================
        FAVORITAR
==================================================*/

function favoritarDica(index,botao){

    dicas[index].favorita=!dicas[index].favorita;

    if(dicas[index].favorita){

        botao.style.background="#e74c3c";

        botao.style.color="#fff";

    }else{

        botao.style.background="#f3f3f3";

        botao.style.color="#111";

    }

}


/*==================================================
        EXPANDIR TEXTO
==================================================*/

function expandirDescricao(card){

    const texto=card.querySelector("p");

    if(!texto) return;

    if(texto.dataset.expandido==="1"){

        texto.style.maxHeight="70px";

        texto.dataset.expandido="0";

    }else{

        texto.style.maxHeight="400px";

        texto.dataset.expandido="1";

    }

}


/*==================================================
        ATUALIZAÇÃO
==================================================*/

function atualizarDicas(){

    const cards=document.querySelectorAll(".tip-card");

    cards.forEach((card,index)=>{

        const titulo=card.querySelector("h3");

        const categoria=card.querySelector("span");

        if(titulo){

            titulo.innerHTML=dicas[index].titulo;

        }

        if(categoria){

            categoria.innerHTML=dicas[index].categoria;

        }

    });

}


/*==================================================
        NOVAS RECOMENDAÇÕES
==================================================*/

function gerarNovaDica(){

    const novas=[

        {
            titulo:"Invista em anúncios patrocinados",
            categoria:"Marketing"
        },

        {
            titulo:"Reduza o tempo de envio",
            categoria:"Logística"
        },

        {
            titulo:"Atualize seu estoque diariamente",
            categoria:"Operação"
        },

        {
            titulo:"Responda clientes rapidamente",
            categoria:"Relacionamento"
        }

    ];

    const indice=Math.floor(Math.random()*novas.length);

    dicas[0].titulo=novas[indice].titulo;

    dicas[0].categoria=novas[indice].categoria;

    atualizarDicas();

}


/*==================================================
        TOAST
==================================================*/

function mostrarToast(texto){

    const toast=document.createElement("div");

    toast.innerHTML=texto;

    toast.style.position="fixed";
    toast.style.right="25px";
    toast.style.bottom="25px";
    toast.style.padding="15px 20px";
    toast.style.background="#111";
    toast.style.color="#fff";
    toast.style.borderRadius="8px";
    toast.style.opacity="0";
    toast.style.zIndex="9999";
    toast.style.transition=".3s";

    document.body.appendChild(toast);

    setTimeout(()=>{

        toast.style.opacity="1";

    },100);

    setTimeout(()=>{

        toast.style.opacity="0";

        setTimeout(()=>{

            toast.remove();

        },300);

    },2500);

}


/*==================================================
        AUTO UPDATE
==================================================*/

setInterval(()=>{

    gerarNovaDica();

},45000);


/*==================================================
        API FUTURA
==================================================*/

async function carregarDicas(){

    /*
    const resposta=await fetch("/api/dicas");

    const dados=await resposta.json();

    dicas=dados;

    atualizarDicas();
    */

}

/*==================================================
        DASHBOARD - PARTE 8
        PROMOÇÕES
==================================================*/

document.addEventListener("DOMContentLoaded",()=>{

    iniciarPromocoes();

});


/*==================================================
        INICIAR
==================================================*/

function iniciarPromocoes(){

    registrarEventosPromocao();

}


/*==================================================
        EVENTOS
==================================================*/

function registrarEventosPromocao(){

    const salvar=document.querySelector(".promotion-actions .btn-outline");

    const publicar=document.querySelector(".promotion-actions .btn-dark");

    if(salvar){

        salvar.addEventListener("click",salvarRascunho);

    }

    if(publicar){

        publicar.addEventListener("click",publicarPromocao);

    }

}


/*==================================================
        CAMPOS
==================================================*/

function obterFormulario(){

    return{

        tipo:

        document.getElementById("promotionType"),

        periodo:

        document.getElementById("promotionPeriod")

    };

}


/*==================================================
        VALIDAR
==================================================*/

function validarFormulario(){

    const form=obterFormulario();

    if(form.tipo.value.trim()===""){

        mostrarMensagem(

            "Informe o tipo da promoção.",

            "erro"

        );

        form.tipo.focus();

        return false;

    }

    if(form.periodo.value.trim()===""){

        mostrarMensagem(

            "Informe a duração da promoção.",

            "erro"

        );

        form.periodo.focus();

        return false;

    }

    return true;

}


/*==================================================
        PUBLICAR
==================================================*/

function publicarPromocao(){

    if(!validarFormulario()) return;

    const form=obterFormulario();

    const promocao={

        tipo:form.tipo.value,

        periodo:form.periodo.value,

        data:new Date()

    };

    console.log(promocao);

    mostrarMensagem(

        "Promoção publicada com sucesso!",

        "sucesso"

    );

    limparFormulario();

}


/*==================================================
        RASCUNHO
==================================================*/

function salvarRascunho(){

    const form=obterFormulario();

    const dados={

        tipo:form.tipo.value,

        periodo:form.periodo.value

    };

    localStorage.setItem(

        "rascunhoPromocao",

        JSON.stringify(dados)

    );

    mostrarMensagem(

        "Rascunho salvo.",

        "sucesso"

    );

}


/*==================================================
        RECUPERAR RASCUNHO
==================================================*/

function carregarRascunho(){

    const dados=localStorage.getItem("rascunhoPromocao");

    if(!dados) return;

    const form=obterFormulario();

    const rascunho=JSON.parse(dados);

    form.tipo.value=rascunho.tipo;

    form.periodo.value=rascunho.periodo;

}

carregarRascunho();


/*==================================================
        LIMPAR
==================================================*/

function limparFormulario(){

    const form=obterFormulario();

    form.tipo.value="";

    form.periodo.value="";

}


/*==================================================
        MENSAGEM
==================================================*/

function mostrarMensagem(texto,tipo){

    const box=document.createElement("div");

    box.innerHTML=texto;

    box.style.position="fixed";
    box.style.right="25px";
    box.style.top="25px";
    box.style.padding="15px 25px";
    box.style.borderRadius="8px";
    box.style.color="#fff";
    box.style.fontWeight="bold";
    box.style.zIndex="99999";
    box.style.opacity="0";
    box.style.transition=".4s";

    if(tipo==="erro"){

        box.style.background="#e74c3c";

    }else{

        box.style.background="#27ae60";

    }

    document.body.appendChild(box);

    setTimeout(()=>{

        box.style.opacity="1";

    },100);

    setTimeout(()=>{

        box.style.opacity="0";

        setTimeout(()=>{

            box.remove();

        },400);

    },2500);

}


/*==================================================
        PRÉ-VISUALIZAÇÃO
==================================================*/

function visualizarPromocao(){

    const form=obterFormulario();

    console.table({

        Tipo:form.tipo.value,

        Duração:form.periodo.value

    });

}


/*==================================================
        API FUTURA
==================================================*/

async function enviarPromocao(){

    /*
    const resposta=await fetch("/api/promocoes",{

        method:"POST",

        headers:{

            "Content-Type":"application/json"

        },

        body:JSON.stringify({

            tipo:

            document.getElementById("promotionType").value,

            periodo:

            document.getElementById("promotionPeriod").value

        })

    });

    const dados=await resposta.json();

    console.log(dados);
    */

}