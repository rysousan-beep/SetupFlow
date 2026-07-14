/*=====================================================
    DADOS DA APLICAÇÃO
=====================================================*/

const app = {

    pagina: {

        titulo: "Rastreamento do Pedido"

    },

    header: {

        logo: "/assets/logo.n.png",

        logoAlt: "Logo SetupFlow"

    },

    menu: [

        {

            texto: "Departamentos",

            link: "#"

        },

        

    ],

    pedido: {

        titulo: "Rastreamento",

        numero: "#458792163",

        previsaoTitulo: "Previsão de entrega",

        previsao: "Hoje • 18:30"

    },

    produto: {

        imagem: "/assets/rtx-5070.jpg",

        nome: "RTX 5070 TI Gaming X Trio",

        preco: 5899.90

    },

    footer: {

        copyright:
            "© 2026 SetupFlow Tech",

        privacidade:
            "Privacidade • Segurança",

        link:"#"

    }

};


/*=====================================================
    INICIALIZAÇÃO
=====================================================*/

window.addEventListener(

    "DOMContentLoaded",

    ()=>{

        carregarPagina();

    }

);


/*=====================================================
    CARREGAR PÁGINA
=====================================================*/

function carregarPagina(){

    carregarTitulo();

    carregarHeader();

    carregarMenu();

    carregarPedido();

    carregarTimeline();

    carregarEntregador();

    carregarMapa();

    carregarProdutoFlutuante();

    carregarFooter();

    adicionarEventos();

}


/*=====================================================
    TÍTULO
=====================================================*/

function carregarTitulo(){

    document.title =
        app.pagina.titulo;

}


/*=====================================================
    HEADER
=====================================================*/

function carregarHeader(){

    const logo =
        document.getElementById("logo");

    logo.src =
        app.header.logo;

    logo.alt =
        app.header.logoAlt;

}


/*=====================================================
    MENU
=====================================================*/

function carregarMenu(){

    const menu =
        document.getElementById("menuPrincipal");

    menu.innerHTML = "";

    app.menu.forEach(item=>{

        const li =
            document.createElement("li");


        const link =
            document.createElement("a");

        link.href =
            item.link;

        link.textContent =
            item.texto;


        li.appendChild(link);

        menu.appendChild(li);

    });

}

/*=====================================================
    PEDIDO
=====================================================*/

function carregarPedido(){

    document.getElementById("tituloRastreamento").textContent =
        app.pedido.titulo;

    document.getElementById("numeroPedido").textContent =
        "Pedido " + app.pedido.numero;

    document.getElementById("tituloPrevisao").textContent =
        app.pedido.previsaoTitulo;

    document.getElementById("horarioEntrega").textContent =
        app.pedido.previsao;

    carregarProduto();

}


/*=====================================================
    CARD DO PRODUTO
=====================================================*/

function carregarProduto(){

    const card =
        document.getElementById("produtoCard");

    card.innerHTML = "";


    /*==============================
        IMAGEM
    ==============================*/

    const imagem =
        document.createElement("img");

    imagem.src =
        app.produto.imagem;

    imagem.alt =
        app.produto.nome;


    /*==============================
        INFORMAÇÕES
    ==============================*/

    const info =
        document.createElement("div");

    info.className =
        "produto-info";


    const nome =
        document.createElement("h3");

    nome.textContent =
        app.produto.nome;


    const preco =
        document.createElement("span");

    preco.textContent =
        formatarMoeda(app.produto.preco);


    info.appendChild(nome);

    info.appendChild(preco);


    /*==============================
        MONTA CARD
    ==============================*/

    card.appendChild(imagem);

    card.appendChild(info);

}


/*=====================================================
    FORMATAR MOEDA
=====================================================*/

function formatarMoeda(valor){

    return valor.toLocaleString(

        "pt-BR",

        {

            style: "currency",

            currency: "BRL"

        }

    );

}

/*=====================================================
    TIMELINE
=====================================================*/

app.timeline = [

    {

        titulo: "Pedido realizado",

        data: "20/02/2026",

        hora: "09:15",

        ativo: true

    },

    {

        titulo: "Pagamento aprovado",

        data: "20/02/2026",

        hora: "09:18",

        ativo: true

    },

    {

        titulo: "Pedido em separação",

        data: "20/02/2026",

        hora: "11:45",

        ativo: true

    },

    {

        titulo: "Saiu para entrega",

        data: "21/02/2026",

        hora: "08:30",

        ativo: true

    },

    {

        titulo: "Entregue",

        data: "--",

        hora: "--",

        ativo: false

    }

];


/*=====================================================
    CARREGAR TIMELINE
=====================================================*/

function carregarTimeline(){

    const lista =
        document.getElementById("listaStatus");

    lista.innerHTML = "";

    app.timeline.forEach(status=>{

        const item =
            document.createElement("div");

        item.className =
            status.ativo
            ? "status-item ativo"
            : "status-item";


        const icone =
            document.createElement("div");

        icone.className =
            "status-icon";

        icone.innerHTML =
            status.ativo ? "✔" : "○";


        const info =
            document.createElement("div");

        info.className =
            "status-info";


        const titulo =
            document.createElement("h4");

        titulo.textContent =
            status.titulo;


        const data =
            document.createElement("span");

        data.textContent =
            status.data;


        const hora =
            document.createElement("p");

        hora.textContent =
            status.hora;


        info.appendChild(titulo);
        info.appendChild(data);
        info.appendChild(hora);

        item.appendChild(icone);
        item.appendChild(info);

        lista.appendChild(item);

    });

}


/*=====================================================
    ENTREGADOR
=====================================================*/

app.entregador = {

    foto:"/assets/entregador.png",

    nome:"Carlos Henrique",

    cargo:"Entregador",

    avaliacao:"★★★★★"

};


function carregarEntregador(){

    const card =
        document.getElementById("entregadorCard");

    card.innerHTML = "";


    const foto =
        document.createElement("img");

    foto.src =
        app.entregador.foto;

    foto.alt =
        app.entregador.nome;


    const info =
        document.createElement("div");

    info.className =
        "entregador-info";


    const cargo =
        document.createElement("small");

    cargo.textContent =
        app.entregador.cargo;


    const nome =
        document.createElement("h4");

    nome.textContent =
        app.entregador.nome;


    const estrelas =
        document.createElement("span");

    estrelas.textContent =
        app.entregador.avaliacao;


    info.appendChild(cargo);
    info.appendChild(nome);
    info.appendChild(estrelas);


    const acoes =
        document.createElement("div");

    acoes.className =
        "entregador-acoes";


    const ligar =
        document.createElement("button");

    ligar.innerHTML = "📞";


    const mensagem =
        document.createElement("button");

    mensagem.innerHTML = "💬";


    acoes.appendChild(ligar);
    acoes.appendChild(mensagem);


    card.appendChild(foto);
    card.appendChild(info);
    card.appendChild(acoes);

}


/*=====================================================
    CARD FLUTUANTE
=====================================================*/

function carregarProdutoFlutuante(){

    const card =
        document.getElementById("produtoFlutuante");

    card.innerHTML = "";


    const topo =
        document.createElement("div");

    topo.className =
        "produto-topo";


    const imagem =
        document.createElement("img");

    imagem.src =
        app.produto.imagem;

    imagem.alt =
        app.produto.nome;


    const detalhes =
        document.createElement("div");

    detalhes.className =
        "produto-detalhes";


    const nome =
        document.createElement("h3");

    nome.textContent =
        app.produto.nome;


    const preco =
        document.createElement("span");

    preco.textContent =
        formatarMoeda(app.produto.preco);


    detalhes.appendChild(nome);
    detalhes.appendChild(preco);


    topo.appendChild(imagem);
    topo.appendChild(detalhes);


    const botao =
        document.createElement("button");

    botao.id = "btnVerRota";

    botao.textContent =
        "Ver rota completa";


    card.appendChild(topo);
    card.appendChild(botao);

}

/*=====================================================
    DADOS DO MAPA
=====================================================*/

app.mapa = {

    imagem: "/assets/mapa.png",

    imagemAlt: "Mapa de Rastreamento",

    marcadores: [

        

        {

            id: 2,

            tipo: "entregador",

            icone: "/assets/localizacao.png",

            alt: "Entregador"

        },

        {

            id: 3,

            tipo: "destino",

            icone: "/assets/marcador.png",

            alt: "Destino"

        }

    ]

};


/*=====================================================
    CARREGAR MAPA
=====================================================*/

function carregarMapa(){

    const mapa =
        document.getElementById("imagemMapa");

    mapa.src =
        app.mapa.imagem;

    mapa.alt =
        app.mapa.imagemAlt;


    carregarMarcadores();

    carregarControlesMapa();

}


/*=====================================================
    MARCADORES
=====================================================*/

function carregarMarcadores(){

    const container =
        document.getElementById("marcadoresMapa");

    container.innerHTML = "";


    app.mapa.marcadores.forEach(item=>{

        const marcador =
            document.createElement("div");

        marcador.className =
            `marcador ${item.tipo}`;


        const imagem =
            document.createElement("img");

        imagem.src =
            item.icone;

        imagem.alt =
            item.alt;


        marcador.appendChild(imagem);

        container.appendChild(marcador);

    });

}


/*=====================================================
    CONTROLES DO MAPA
=====================================================*/

function carregarControlesMapa(){

    document.getElementById("btnZoomMais").textContent = "+";

    document.getElementById("btnZoomMenos").textContent = "−";

    document.getElementById("btnLocalizacao").textContent = "◎";

}


/*=====================================================
    CONTROLE DE ZOOM
=====================================================*/

let escalaMapa = 1;


function aumentarZoom(){

    escalaMapa += 0.1;

    aplicarZoom();

}


function diminuirZoom(){

    if(escalaMapa > 0.5){

        escalaMapa -= 0.1;

    }

    aplicarZoom();

}


function aplicarZoom(){

    document.getElementById("imagemMapa").style.transform =
        `scale(${escalaMapa})`;

}


/*=====================================================
    CENTRALIZAR MAPA
=====================================================*/

function centralizarMapa(){

    escalaMapa = 1;

    aplicarZoom();

    alert("Mapa centralizado.");

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

    /*==============================
        MAPA
    ==============================*/

    document
        .getElementById("btnZoomMais")
        .addEventListener("click", aumentarZoom);

    document
        .getElementById("btnZoomMenos")
        .addEventListener("click", diminuirZoom);

    document
        .getElementById("btnLocalizacao")
        .addEventListener("click", centralizarMapa);


    /*==============================
        CARD FLUTUANTE
    ==============================*/

    document.addEventListener("click",(e)=>{

        if(e.target.id === "btnVerRota"){

            verRotaCompleta();

        }

    });


    /*==============================
        ENTREGADOR
    ==============================*/

    const botoes =
        document.querySelectorAll(".entregador-acoes button");

    if(botoes.length >= 2){

        botoes[0].addEventListener(
            "click",
            ligarEntregador
        );

        botoes[1].addEventListener(
            "click",
            enviarMensagem
        );

    }

}


/*=====================================================
    VER ROTA COMPLETA
=====================================================*/

function verRotaCompleta(){

    alert(
        "Abrindo a rota completa do pedido..."
    );

    // Exemplo para integração futura:
    // window.location.href = "rota.html";

}


/*=====================================================
    LIGAR PARA O ENTREGADOR
=====================================================*/

function ligarEntregador(){

    alert(

        "Ligando para " +

        app.entregador.nome +

        "..."

    );

}


/*=====================================================
    ENVIAR MENSAGEM
=====================================================*/

function enviarMensagem(){

    alert(

        "Abrindo conversa com " +

        app.entregador.nome +

        "..."

    );

}


/*=====================================================
    ATUALIZAR STATUS
=====================================================*/

function atualizarStatus(indice){

    app.timeline.forEach((item,posicao)=>{

        item.ativo =

            posicao <= indice;

    });

    carregarTimeline();

}


/*=====================================================
    SIMULAR RASTREAMENTO
=====================================================*/

function iniciarSimulacao(){

    let etapa = 0;

    const intervalo = setInterval(()=>{

        etapa++;

        if(etapa >= app.timeline.length){

            clearInterval(intervalo);

            return;

        }

        atualizarStatus(etapa);

    },5000);

}


/*=====================================================
    RECARREGAR MAPA
=====================================================*/

function atualizarMapa(){

    carregarMapa();

}


/*=====================================================
    DEBUG
=====================================================*/

// console.log(app);

// console.table(app.timeline);

// console.table(app.menu);


/*=====================================================
    SIMULAÇÃO (OPCIONAL)
=====================================================*/

// iniciarSimulacao();