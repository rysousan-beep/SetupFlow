/*=====================================================
    DADOS DA APLICAÇÃO
=====================================================*/

const app = {

    pagina:{

        titulo:"SetupFlow Tech"

    },

    header:{

        logo:"/assets/logo.nv.png",

        logoAlt:"Logo SetupFlow",

        placeholderPesquisa:"Pesquisar produtos..."

    },

    menuSuperior:[

        {

            id:1,

            texto:"Rastreamento",

            icone:"/assets/localização.png",

            link:"rastreamento.html"

        },

        {

            id:2,

            texto:"Perfil",

            icone:"/assets/perfil.png",

            link:"perfil.html"

        },

        {

            id:3,

            texto:"Favoritos",

            icone:"/assets/favoritos.png",

            link:"favorito.html"

        },

        {

            id:4,

            texto:"Carrinho",

            icone:"/assets/carrinho.png",

            link:"carrinho.html"

        }

    ],

    menuPrincipal:[

        {

            texto:"Departamentos",

            link:"#"

        },

        {

            texto:"Monte seu PC",

            link:"#"

        },

        {

            texto:"PC Gamer",

            link:"#"

        },

    ],

    banners:[],

    produtos:[],

    footer:{}

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

    carregarMenuSuperior();

    carregarMenuPrincipal();

    carregarBannerPrincipal();

    carregarBannerSecundario();

    carregarProdutos();

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


    document.getElementById("campoPesquisa").placeholder =
        app.header.placeholderPesquisa;

}


/*=====================================================
    MENU SUPERIOR
=====================================================*/

function carregarMenuSuperior(){

    const menu =
        document.getElementById("menuSuperior");

    menu.innerHTML = "";

    app.menuSuperior.forEach(item=>{

        const card =
            document.createElement("div");

        card.className =
            "menu-item";


        const imagem =
            document.createElement("img");

        imagem.src =
            item.icone;

        imagem.alt =
            item.texto;


        const texto =
            document.createElement("span");

        texto.textContent =
            item.texto;


        card.appendChild(imagem);

        card.appendChild(texto);


        card.addEventListener(

            "click",

            ()=>{

                window.location.href =
                    item.link;

            }

        );


        menu.appendChild(card);

    });

}


/*=====================================================
    MENU PRINCIPAL
=====================================================*/

function carregarMenuPrincipal(){

    const menu =
        document.getElementById("menuHorizontal");

    menu.innerHTML = "";

    app.menuPrincipal.forEach(item=>{

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
    DADOS DOS BANNERS
=====================================================*/

app.banners = {

    principal: [

        {
            id: 1,
            imagem: "/assets/banner.png",
            alt: "Banner 1"
        },

    
    ],

   


    tituloProdutos: "Ofertas da Semana"

};


/*=====================================================
    CONTROLE DO SLIDER
=====================================================*/

let bannerAtual = 0;


/*=====================================================
    BANNER PRINCIPAL
=====================================================*/

function carregarBannerPrincipal(){

    const banner =
        document.getElementById("bannerPrincipal");

    banner.innerHTML = "";


    /*==============================
        IMAGEM
    ==============================*/

    const imagem =
        document.createElement("img");

    imagem.src =
        app.banners.principal[bannerAtual].imagem;

    imagem.alt =
        app.banners.principal[bannerAtual].alt;

    imagem.className = "fade";


    /*==============================
        INDICADORES
    ==============================*/

    const indicadores =
        document.createElement("div");

    indicadores.className = "banner-indicadores";


    app.banners.principal.forEach((item,index)=>{

        const indicador =
            document.createElement("span");

        indicador.className =
            index === bannerAtual
            ? "indicador ativo"
            : "indicador";


        indicador.addEventListener("click",()=>{

            bannerAtual = index;

            carregarBannerPrincipal();

        });


        indicadores.appendChild(indicador);

    });


    banner.appendChild(imagem);

    banner.appendChild(indicadores);

}


/*=====================================================
    BANNERS SECUNDÁRIOS
=====================================================*/

function carregarBannerSecundario(){

    const area =
        document.getElementById("bannerSecundario");

    area.innerHTML = "";


    app.banners.secundarios.forEach(item=>{

        const card =
            document.createElement("div");

        card.className = "banner-item";


        const imagem =
            document.createElement("img");

        imagem.src =
            item.imagem;

        imagem.alt =
            item.alt;


        card.appendChild(imagem);

        area.appendChild(card);

    });


    document.getElementById("tituloOfertas").textContent =
        app.banners.tituloProdutos;

}


/*=====================================================
    SLIDER AUTOMÁTICO
=====================================================*/

function iniciarSlider(){

    setInterval(()=>{

        bannerAtual++;

        if(bannerAtual >= app.banners.principal.length){

            bannerAtual = 0;

        }

        carregarBannerPrincipal();

    },5000);

}

/*=====================================================
    PRODUTOS
=====================================================*/

app.produtos = [

    {

        id:1,

        nome:"Placa de Vídeo RTX 5070 Ti Gaming X Trio",

        categoria:"Placa de Vídeo",

        imagem:"/assets/rtx-5070.jpg",

        preco:5899.90,

        pix:5309.91,

        favorito:false

    },

    {

        id:2,

        nome:"Processador AMD Ryzen 7 9800X3D",

        categoria:"Processador",

        imagem:"/assets/ryzen.webp",

        preco:3499.90,

        pix:3149.91,

        favorito:true

    },

    {

        id:3,

        nome:"SSD Kingston NV3 1TB PCIe 4.0",

        categoria:"SSD",

        imagem:"/assets/ssd.webp",

        preco:999.99,

        pix:985.90,

        favorito:false

    },

    {

        id:4,

        nome:"Fonte MSI MAG A600DN 600W",

        categoria:"Fonte",

        imagem:"/assets/fonte-msi.png",

        preco:499.90,

        pix:480.90,

        favorito:false

    },



{

        id:5,

        nome:"Placa Mae Asus TUF GAMING B550M-PLUS DDR4 Socket AM4 Chipset AMD B550",

        categoria:"Placa mãe",

        imagem:"/assets/placa-mae.jpg",

        preco:999.99,

        pix:980.99,

        favorito:false

}

];


/*=====================================================
    LISTA DE PRODUTOS
=====================================================*/

function carregarProdutos(){

    const lista =
        document.getElementById("listaProdutos");

    lista.innerHTML = "";


    app.produtos.forEach(produto=>{

        /*==============================
            CARD
        ==============================*/

        const card =
            document.createElement("div");

        card.className =
            "produto-card fade";


        /*==============================
            FAVORITO
        ==============================*/

        const favorito =
            document.createElement("div");

        favorito.className =
            "favorito";

        favorito.innerHTML =
            produto.favorito ? "❤️" : "🤍";


        favorito.addEventListener("click",(e)=>{

            e.stopPropagation();

            alternarFavorito(produto.id);

        });


        /*==============================
            IMAGEM
        ==============================*/

        const imagemArea =
            document.createElement("div");

        imagemArea.className =
            "produto-imagem";


        const imagem =
            document.createElement("img");

        imagem.src =
            produto.imagem;

        imagem.alt =
            produto.nome;


        imagemArea.appendChild(imagem);


        /*==============================
            INFORMAÇÕES
        ==============================*/

        const info =
            document.createElement("div");

        info.className =
            "produto-info";


        const categoria =
            document.createElement("span");

        categoria.className =
            "categoria";

        categoria.textContent =
            produto.categoria;


        const nome =
            document.createElement("h3");

        nome.textContent =
            produto.nome;


        const preco =
            document.createElement("div");

        preco.className =
            "preco";

        preco.textContent =
            formatarMoeda(produto.preco);


        const pix =
            document.createElement("div");

        pix.className =
            "pix";

        pix.textContent =
            "PIX: " +
            formatarMoeda(produto.pix);


        info.appendChild(categoria);
        info.appendChild(nome);
        info.appendChild(preco);
        info.appendChild(pix);


        /*==============================
            BOTÕES
        ==============================*/

        const botoes =
            document.createElement("div");

        botoes.className =
            "produto-botoes";


        const comprar =
            document.createElement("button");

        comprar.className =
            "btn-comprar";

        comprar.textContent =
            "Comprar";


        comprar.addEventListener("click",()=>{

            comprarProduto(produto.id);

        });


        const carrinho =
            document.createElement("button");

        carrinho.className =
            "btn-carrinho";

        carrinho.textContent =
            "Adicionar";


        carrinho.addEventListener("click",()=>{

            adicionarCarrinho(produto.id);

        });


        botoes.appendChild(comprar);
        botoes.appendChild(carrinho);


        /*==============================
            MONTA CARD
        ==============================*/

        card.appendChild(favorito);
        card.appendChild(imagemArea);
        card.appendChild(info);
        card.appendChild(botoes);

        lista.appendChild(card);

    });

}


/*=====================================================
    FAVORITOS
=====================================================*/

function alternarFavorito(id){

    const produto =
        app.produtos.find(p => p.id === id);

    if(!produto) return;

    produto.favorito =
        !produto.favorito;

    carregarProdutos();

}


/*=====================================================
    COMPRAR
=====================================================*/

function comprarProduto(id){

    const produto =
        app.produtos.find(p => p.id === id);

    if(!produto) return;

    alert(

        "Comprando:\n\n" +

        produto.nome

    );

}


/*=====================================================
    CARRINHO
=====================================================*/

function adicionarCarrinho(id){

    const produto =
        app.produtos.find(p => p.id === id);

    if(!produto) return;

    alert(

        produto.nome +

        "\n\nadicionado ao carrinho."

    );

}

/*=====================================================
    DADOS DO FOOTER
=====================================================*/

app.footer = {

    esquerda: {

        titulo: "SetupFlow Tech",

        texto: "Tecnologia, hardware e periféricos com os melhores preços."

    },

    centro: {

        titulo: "Links Úteis",

        links: [

            { texto: "Minha Conta", url: "#" },
            { texto: "Pedidos", url: "#" },
            { texto: "Rastreamento", url: "#" },
            { texto: "Contato", url: "#" }

        ]

    },

    direita: {

        titulo: "Redes Sociais",

        redes: [

            {
                nome: "Instagram",
                icone: "/assets/instagram.png",
                url: "#"
            },

            {
                nome: "tiktok",
                icone: "/assets/tiktok.png",
                url: "#"
            },

            
        ]

    }

};


/*=====================================================
    FOOTER
=====================================================*/

function carregarFooter(){

    carregarFooterEsquerda();

    carregarFooterCentro();

    carregarFooterDireita();

}


function carregarFooterEsquerda(){

    const area =
        document.getElementById("footerEsquerda");

    area.innerHTML = "";


    const titulo =
        document.createElement("h3");

    titulo.className = "footer-titulo";
    titulo.textContent = app.footer.esquerda.titulo;


    const texto =
        document.createElement("p");

    texto.className = "footer-texto";
    texto.textContent = app.footer.esquerda.texto;


    area.appendChild(titulo);
    area.appendChild(texto);

}


function carregarFooterCentro(){

    const area =
        document.getElementById("footerCentro");

    area.innerHTML = "";


    const titulo =
        document.createElement("h3");

    titulo.className = "footer-titulo";
    titulo.textContent = app.footer.centro.titulo;

    area.appendChild(titulo);


    app.footer.centro.links.forEach(item=>{

        const link =
            document.createElement("a");

        link.href = item.url;
        link.textContent = item.texto;
        link.className = "footer-link";

        area.appendChild(link);

    });

}


function carregarFooterDireita(){

    const area =
        document.getElementById("footerDireita");

    area.innerHTML = "";


    const titulo =
        document.createElement("h3");

    titulo.className = "footer-titulo";
    titulo.textContent = app.footer.direita.titulo;

    area.appendChild(titulo);


    const redes =
        document.createElement("div");

    redes.className = "redes-sociais";


    app.footer.direita.redes.forEach(rede=>{

        const item =
            document.createElement("a");

        item.href = rede.url;
        item.className = "rede-social";
        item.target = "_blank";


        const img =
            document.createElement("img");

        img.src = rede.icone;
        img.alt = rede.nome;


        item.appendChild(img);

        redes.appendChild(item);

    });

    area.appendChild(redes);

}


/*=====================================================
    PESQUISA
=====================================================*/

function pesquisarProdutos(texto){

    texto = texto.toLowerCase();

    const cards =
        document.querySelectorAll(".produto-card");

    cards.forEach((card,index)=>{

        const produto =
            app.produtos[index];

        const encontrou =

            produto.nome.toLowerCase().includes(texto) ||

            produto.categoria.toLowerCase().includes(texto);


        card.style.display =
            encontrou ? "flex" : "none";

    });

}


/*=====================================================
    LOCAL STORAGE
=====================================================*/

function salvarFavoritos(){

    const favoritos =

        app.produtos.map(item=>({

            id:item.id,

            favorito:item.favorito

        }));


    localStorage.setItem(

        "favoritos",

        JSON.stringify(favoritos)

    );

}


function carregarFavoritos(){

    const dados =

        localStorage.getItem("favoritos");

    if(!dados) return;


    const favoritos =
        JSON.parse(dados);


    favoritos.forEach(item=>{

        const produto =

            app.produtos.find(

                p=>p.id===item.id

            );

        if(produto){

            produto.favorito =
                item.favorito;

        }

    });

}


/*=====================================================
    SLIDER AUTOMÁTICO
=====================================================*/

function iniciarHome(){

    carregarFavoritos();

    carregarProdutos();

    iniciarSlider();

}

/*=====================================================
    EVENTOS
=====================================================*/

function adicionarEventos(){

    /*==============================
        CAMPO DE PESQUISA
    ==============================*/

    const campoPesquisa =
        document.getElementById("campoPesquisa");

    campoPesquisa.addEventListener("input",(e)=>{

        pesquisarProdutos(e.target.value);

    });


    /*==============================
        SALVAR FAVORITOS
    ==============================*/

    document.addEventListener("click",(e)=>{

        if(e.target.closest(".favorito")){

            salvarFavoritos();

        }

    });


    /*==============================
        MENU PRINCIPAL
    ==============================*/

    document.querySelectorAll("#menuHorizontal a").forEach(link=>{

        link.addEventListener("click",(e)=>{

            e.preventDefault();

            console.log("Menu:", e.target.textContent);

        });

    });

}


/*=====================================================
    FORMATAR MOEDA
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
    ATUALIZAR HOME
=====================================================*/

function atualizarHome(){

    carregarProdutos();

    salvarFavoritos();

}


/*=====================================================
    LIMPAR PESQUISA
=====================================================*/

function limparPesquisa(){

    const campo =
        document.getElementById("campoPesquisa");

    campo.value = "";

    pesquisarProdutos("");

}


/*=====================================================
    CONTADORES
=====================================================*/

function totalFavoritos(){

    return app.produtos.filter(

        produto => produto.favorito

    ).length;

}


function totalCarrinho(){

    const carrinho =

        JSON.parse(

            localStorage.getItem("carrinho")

        ) || [];

    return carrinho.length;

}


/*=====================================================
    ADICIONAR AO CARRINHO
=====================================================*/

function adicionarCarrinho(id){

    const carrinho =

        JSON.parse(

            localStorage.getItem("carrinho")

        ) || [];


    carrinho.push(id);


    localStorage.setItem(

        "carrinho",

        JSON.stringify(carrinho)

    );

    alert("Produto adicionado ao carrinho!");

}


/*=====================================================
    COMPRAR PRODUTO
=====================================================*/

function comprarProduto(id){

    localStorage.setItem(

        "produtoSelecionado",

        id

    );

    window.location.href =
        "pages/detalhe-produto.html";

}


/*=====================================================
    RECARREGAR PRODUTOS
=====================================================*/

function recarregarProdutos(){

    carregarProdutos();

}


/*=====================================================
    UTILITÁRIOS
=====================================================*/

function obterProduto(id){

    return app.produtos.find(

        produto => produto.id === id

    );

}


function existeProduto(id){

    return app.produtos.some(

        produto => produto.id === id

    );

}


/*=====================================================
    DEBUG
=====================================================*/

// console.log(app);

// console.table(app.produtos);

// console.table(app.menuPrincipal);


/*=====================================================
    INICIALIZAÇÃO FINAL
=====================================================*/

(function(){

    iniciarHome();

})();


/*=====================================================
    OBSERVAÇÕES

    - Todos os textos são carregados pelo JS.
    - Todos os menus são dinâmicos.
    - Todos os banners são dinâmicos.
    - Todos os produtos são carregados pelo JS.
    - O HTML permanece apenas estrutural.
    - Favoritos persistem via LocalStorage.
    - Carrinho persistido via LocalStorage.
    - Código preparado para integração futura com API.

=====================================================*/
