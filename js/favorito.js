/*==================================================
    CONFIGURAÇÃO DA APLICAÇÃO
==================================================*/

const app = {

    pagina:{

        titulo:"Favoritos",

        subtitulo:"Os produtos que você marcou como favoritos."

    },

    header:{

        logo:"/assets/logo.n.png",

        avatar:"/assets/homem.png",

        placeholder:"Pesquisar favoritos..."

    },

    menu:[

        {
            nome:"Home",
            link:"home.html"
        },

        {
            nome:"Produtos",
            link:"produtos.html"
        },

        {
            nome:"Favoritos",
            link:"favoritos.html"
        },

        {
            nome:"Carrinho",
            link:"carrinho.html"
        },

        {
            nome:"Perfil",
            link:"perfil.html"
        }

    ],

    favoritos:[],

    footer:{}

};

/*==================================================
    INICIALIZAÇÃO
==================================================*/

document.addEventListener(

    "DOMContentLoaded",

    iniciarSistema

);

function iniciarSistema(){

    configurarPagina();

    carregarHeader();

    carregarMenu();

    configurarPesquisa();

    carregarAvatar();

    carregarFavoritos();

    carregarFooter();

}

/*==================================================
    PÁGINA
==================================================*/

function configurarPagina(){

    document.title = app.pagina.titulo;

    document.getElementById("pageTitle").textContent =
        app.pagina.titulo;

    document.getElementById("tituloPagina").textContent =
        app.pagina.titulo;

    document.getElementById("subtituloPagina").textContent =
        app.pagina.subtitulo;

}

/*==================================================
    HEADER
==================================================*/

function carregarHeader(){

    const logo = document.getElementById("logo");

    logo.src = app.header.logo;

    logo.alt = "Logo";

}

/*==================================================
    MENU
==================================================*/

function carregarMenu(){

    const menu = document.getElementById("menuPrincipal");

    menu.innerHTML = "";

    app.menu.forEach(item=>{

        const li = document.createElement("li");

        const a = document.createElement("a");

        a.href = item.link;

        a.textContent = item.nome;

        if(window.location.pathname.includes(item.link)){

            a.classList.add("ativo");

        }

        li.appendChild(a);

        menu.appendChild(li);

    });

}

/*==================================================
    PESQUISA
==================================================*/

function configurarPesquisa(){

    const campo = document.getElementById("campoPesquisa");

    campo.placeholder = app.header.placeholder;

    campo.addEventListener(

        "input",

        pesquisarFavoritos

    );

}

/*==================================================
    AVATAR
==================================================*/

function carregarAvatar(){

    const avatar = document.getElementById("avatarUsuario");

    avatar.src = app.header.avatar;

    avatar.alt = "Usuário";

}

/*==================================================
    FAVORITOS
==================================================*/

function carregarFavoritos() {

    const dados = localStorage.getItem("favoritos");

    if (dados) {

        app.favoritos = JSON.parse(dados);

    } else {

        app.favoritos = [

            {
                id: 1,
                nome: "Mouse Gamer RGB 7200 DPI",
                categoria: "Mouse",
                preco: 199.90,
                imagem: "/assets/mouse-gamer.jpg"
            },

            {
                id: 2,
                nome: "Teclado Mecânico RGB Switch Blue",
                categoria: "Teclado",
                preco: 349.90,
                imagem: "/assets/teclado-rgb.jpg"
            },

            {
                id: 3,
                nome: "Headset Gamer Surround 7.1",
                categoria: "Headset",
                preco: 289.90,
                imagem: "/assets/headset.png"
            },

            {
                id: 4,
                nome: "Monitor Gamer 27'' 165Hz",
                categoria: "Monitor",
                preco: 1699.90,
                imagem: "/assets/produtos/monitor.png"
            }

        ];

        salvarFavoritos();

    }

    renderizarFavoritos();

}

/*==================================================
    RENDERIZAR FAVORITOS
==================================================*/

function renderizarFavoritos(lista = app.favoritos) {

    const container = document.getElementById("listaFavoritos");

    container.innerHTML = "";

    if (lista.length === 0) {

        mostrarEstadoVazio();

        return;

    }

    ocultarEstadoVazio();

    lista.forEach(produto => {

        const card = document.createElement("div");
        card.className = "card-produto fade";

        /*==============================
            BOTÃO FAVORITO
        ==============================*/

        const btnFavorito = document.createElement("button");

        btnFavorito.className = "btn-favorito";

        btnFavorito.dataset.id = produto.id;

        btnFavorito.innerHTML = "❤";

        /*==============================
            IMAGEM
        ==============================*/

        const imagemArea = document.createElement("div");

        imagemArea.className = "produto-imagem";

        const imagem = document.createElement("img");

        imagem.src = produto.imagem;

        imagem.alt = produto.nome;

        imagemArea.appendChild(imagem);

        /*==============================
            INFORMAÇÕES
        ==============================*/

        const info = document.createElement("div");

        info.className = "produto-info";

        const categoria = document.createElement("span");

        categoria.className = "produto-categoria";

        categoria.textContent = produto.categoria;

        const nome = document.createElement("h3");

        nome.className = "produto-nome";

        nome.textContent = produto.nome;

        const preco = document.createElement("div");

        preco.className = "produto-preco";

        preco.textContent = formatarMoeda(produto.preco);

        const pix = document.createElement("small");

        pix.className = "produto-pix";

        pix.textContent = "À vista no PIX";

        /*==============================
            ÁREA DOS BOTÕES
        ==============================*/

        const acoes = document.createElement("div");

        acoes.className = "produto-acoes";

        info.appendChild(categoria);
        info.appendChild(nome);
        info.appendChild(preco);
        info.appendChild(pix);
        info.appendChild(acoes);

        card.appendChild(btnFavorito);
        card.appendChild(imagemArea);
        card.appendChild(info);

        container.appendChild(card);

        criarBotoesProduto(acoes, produto);

        btnFavorito.addEventListener("click", () => {

            removerFavorito(produto.id);

        });

    });

}

/*==================================================
    ESTADO VAZIO
==================================================*/

function mostrarEstadoVazio() {

    const estado = document.getElementById("favoritosVazio");

    estado.classList.remove("oculto");

    estado.innerHTML = "";

    const titulo = document.createElement("h2");

    titulo.textContent = "Nenhum favorito encontrado";

    const texto = document.createElement("p");

    texto.textContent =
        "Adicione produtos aos favoritos para visualizá-los aqui.";

    estado.appendChild(titulo);

    estado.appendChild(texto);

}

function ocultarEstadoVazio() {

    const estado = document.getElementById("favoritosVazio");

    estado.classList.add("oculto");

}

/*==================================================
    BOTÕES DOS PRODUTOS
==================================================*/

function criarBotoesProduto(container, produto){

    const btnAdicionar = document.createElement("button");
    btnAdicionar.className = "btn-adicionar";
    btnAdicionar.textContent = "Adicionar";

    const btnRemover = document.createElement("button");
    btnRemover.className = "btn-remover";
    btnRemover.textContent = "Remover";

    btnAdicionar.addEventListener("click",()=>{

        adicionarAoCarrinho(produto);

    });

    btnRemover.addEventListener("click",()=>{

        removerFavorito(produto.id);

    });

    container.appendChild(btnAdicionar);
    container.appendChild(btnRemover);

}

/*==================================================
    ADICIONAR AO CARRINHO
==================================================*/

function adicionarAoCarrinho(produto){

    let carrinho = JSON.parse(

        localStorage.getItem("carrinho")

    ) || [];

    const existente = carrinho.find(item=>item.id===produto.id);

    if(existente){

        existente.quantidade++;

    }else{

        carrinho.push({

            ...produto,

            quantidade:1

        });

    }

    localStorage.setItem(

        "carrinho",

        JSON.stringify(carrinho)

    );

    mostrarToast("Produto adicionado ao carrinho!");

}

/*==================================================
    REMOVER FAVORITO
==================================================*/

function removerFavorito(id){

    app.favoritos = app.favoritos.filter(

        produto=>produto.id!==id

    );

    salvarFavoritos();

    renderizarFavoritos();

    mostrarToast("Produto removido dos favoritos.");

}

/*==================================================
    MODAL
==================================================*/

function abrirModal(produto){

    const modal = document.getElementById("modalProduto");

    const conteudo = document.getElementById("modalConteudo");

    conteudo.innerHTML = "";

    const titulo = document.createElement("h2");
    titulo.textContent = produto.nome;

    const imagem = document.createElement("img");
    imagem.src = produto.imagem;
    imagem.alt = produto.nome;
    imagem.style.width = "220px";

    const categoria = document.createElement("p");
    categoria.textContent = "Categoria: " + produto.categoria;

    const preco = document.createElement("h3");
    preco.textContent = formatarMoeda(produto.preco);

    const fechar = document.createElement("button");
    fechar.textContent = "Fechar";
    fechar.className = "btn-remover";

    fechar.addEventListener("click",fecharModal);

    conteudo.appendChild(titulo);
    conteudo.appendChild(imagem);
    conteudo.appendChild(categoria);
    conteudo.appendChild(preco);
    conteudo.appendChild(fechar);

    modal.classList.remove("oculto");

}

function fecharModal(){

    document
        .getElementById("modalProduto")
        .classList.add("oculto");

}

document
    .getElementById("modalProduto")
    .addEventListener("click",(e)=>{

        if(e.target.id==="modalProduto"){

            fecharModal();

        }

});

/*==================================================
    TOAST
==================================================*/

function mostrarToast(texto){

    const toast = document.getElementById("toast");

    toast.textContent = texto;

    toast.classList.add("ativo");

    toast.classList.remove("oculto");

    clearTimeout(toast.timer);

    toast.timer = setTimeout(()=>{

        toast.classList.remove("ativo");

        setTimeout(()=>{

            toast.classList.add("oculto");

        },300);

    },2500);

}

/*==================================================
    BOTÕES DA PÁGINA
==================================================*/

function criarBotoesPagina(){

    const area = document.getElementById("botoesFavoritos");

    area.innerHTML = "";

    const limpar = document.createElement("button");
    limpar.className = "btn-limpar";
    limpar.textContent = "Limpar Favoritos";

    const comprar = document.createElement("button");
    comprar.className = "btn-comprar";
    comprar.textContent = "Comprar Todos";

    limpar.addEventListener("click",limparFavoritos);

    comprar.addEventListener("click",comprarTodos);

    area.appendChild(limpar);
    area.appendChild(comprar);

}

/*==================================================
    LIMPAR FAVORITOS
==================================================*/

function limparFavoritos(){

    if(!confirm("Deseja remover todos os favoritos?")){

        return;

    }

    app.favoritos = [];

    salvarFavoritos();

    renderizarFavoritos();

    mostrarToast("Favoritos removidos.");

}

/*==================================================
    COMPRAR TODOS
==================================================*/

function comprarTodos(){

    if(app.favoritos.length===0){

        mostrarToast("Nenhum produto favorito.");

        return;

    }

    let carrinho = JSON.parse(

        localStorage.getItem("carrinho")

    ) || [];

    app.favoritos.forEach(produto=>{

        const existe = carrinho.find(

            item=>item.id===produto.id

        );

        if(existe){

            existe.quantidade++;

        }else{

            carrinho.push({

                ...produto,

                quantidade:1

            });

        }

    });

    localStorage.setItem(

        "carrinho",

        JSON.stringify(carrinho)

    );

    mostrarToast("Todos os produtos foram adicionados ao carrinho.");

}

/*==================================================
    PESQUISA
==================================================*/

function pesquisarFavoritos(evento){

    const texto = evento.target.value
        .toLowerCase()
        .trim();

    if(texto===""){

        renderizarFavoritos();

        return;

    }

    const resultado = app.favoritos.filter(produto=>{

        return(

            produto.nome.toLowerCase().includes(texto)

            ||

            produto.categoria.toLowerCase().includes(texto)

        );

    });

    renderizarFavoritos(resultado);

}

/*==================================================
    FOOTER
==================================================*/

app.footer={

    empresa:"SetupFlow",

    descricao:"Os melhores equipamentos gamers e de informática.",

    links:[

        {
            nome:"Home",
            url:"/home.html"
        },

        {
            nome:"Produtos",
            url:"/produtos.html"
        },

        {
            nome:"Favoritos",
            url:"/favorito.html"
        },

        {
            nome:"Contato",
            url:"#"
        }

    ],

    redes:[

        {
            nome:"whatsapp",
            imagem:"/assets/whatsapp.png",
            url:"#"
        },

        {
            nome:"Instagram",
            imagem:"/assets/instagram.png",
            url:"#"
        }

    ]

};

function carregarFooter(){

    criarFooterEsquerda();

    criarFooterCentro();

    criarFooterDireita();

}

function criarFooterEsquerda(){

    const area=document.getElementById("footerEsquerda");

    area.innerHTML="";

    const titulo=document.createElement("h3");
    titulo.className="footer-titulo";
    titulo.textContent=app.footer.empresa;

    const texto=document.createElement("p");
    texto.className="footer-texto";
    texto.textContent=app.footer.descricao;

    area.appendChild(titulo);
    area.appendChild(texto);

}

function criarFooterCentro(){

    const area=document.getElementById("footerCentro");

    area.innerHTML="";

    const titulo=document.createElement("h3");
    titulo.className="footer-titulo";
    titulo.textContent="Links";

    area.appendChild(titulo);

    app.footer.links.forEach(item=>{

        const link=document.createElement("a");

        link.href=item.url;

        link.textContent=item.nome;

        link.className="footer-link";

        area.appendChild(link);

    });

}

function criarFooterDireita(){

    const area=document.getElementById("footerDireita");

    area.innerHTML="";

    const titulo=document.createElement("h3");

    titulo.className="footer-titulo";

    titulo.textContent="Redes Sociais";

    const redes=document.createElement("div");

    redes.className="redes-sociais";

    app.footer.redes.forEach(item=>{

        const link=document.createElement("a");

        link.href=item.url;

        link.target="_blank";

        link.className="rede-social";

        const img=document.createElement("img");

        img.src=item.imagem;

        img.alt=item.nome;

        link.appendChild(img);

        redes.appendChild(link);

    });

    area.appendChild(titulo);

    area.appendChild(redes);

}

/*==================================================
    LOADING
==================================================*/

function mostrarLoading(){

    document
        .getElementById("loading")
        .classList.remove("oculto");

}

function esconderLoading(){

    document
        .getElementById("loading")
        .classList.add("oculto");

}

/*==================================================
    LOCAL STORAGE
==================================================*/

function salvarFavoritos(){

    localStorage.setItem(

        "favoritos",

        JSON.stringify(app.favoritos)

    );

}

function recuperarFavoritos(){

    const dados=localStorage.getItem("favoritos");

    if(!dados){

        return false;

    }

    app.favoritos=JSON.parse(dados);

    return true;

}

/*==================================================
    ATUALIZAÇÃO
==================================================*/

function atualizarTela(){

    renderizarFavoritos();

    criarBotoesPagina();

}

/*==================================================
    FORMATAÇÃO DE MOEDA
==================================================*/

function formatarMoeda(valor){

    return valor.toLocaleString(

        "pt-BR",

        {

            style:"currency",

            currency:"BRL"

        }

    );

}

/*==================================================
    UTILITÁRIOS
==================================================*/

function obterCarrinho(){

    return JSON.parse(

        localStorage.getItem("carrinho")

    ) || [];

}

function salvarCarrinho(carrinho){

    localStorage.setItem(

        "carrinho",

        JSON.stringify(carrinho)

    );

}

function atualizarCarrinho(produto){

    const carrinho = obterCarrinho();

    const item = carrinho.find(

        p => p.id === produto.id

    );

    if(item){

        item.quantidade++;

    }else{

        carrinho.push({

            ...produto,

            quantidade:1

        });

    }

    salvarCarrinho(carrinho);

}

function limparContainer(id){

    const elemento = document.getElementById(id);

    if(elemento){

        elemento.innerHTML = "";

    }

}

/*==================================================
    EVENTOS GLOBAIS
==================================================*/

window.addEventListener("online",()=>{

    mostrarToast("Conexão restabelecida.");

});

window.addEventListener("offline",()=>{

    mostrarToast("Você está offline.");

});

window.addEventListener("keydown",(evento)=>{

    if(evento.key==="Escape"){

        fecharModal();

    }

});

/*==================================================
    INICIALIZAÇÃO
==================================================*/

function iniciarAplicacao(){

    mostrarLoading();

    configurarPagina();

    carregarHeader();

    carregarMenu();

    configurarPesquisa();

    carregarAvatar();

    if(!recuperarFavoritos()){

        carregarFavoritos();

    }else{

        renderizarFavoritos();

    }

    criarBotoesPagina();

    carregarFooter();

    esconderLoading();

}

/*==================================================
    EXECUÇÃO
==================================================*/

document.addEventListener(

    "DOMContentLoaded",

    ()=>{

        iniciarAplicacao();

    }

);

/*==================================================
    OBSERVAÇÕES

    ✔ HTML totalmente estrutural

    ✔ Produtos criados via createElement()

    ✔ Header dinâmico

    ✔ Menu dinâmico

    ✔ Footer dinâmico

    ✔ Pesquisa em tempo real

    ✔ LocalStorage

    ✔ Modal

    ✔ Toast

    ✔ Loading

    ✔ Adicionar ao Carrinho

    ✔ Remover Favoritos

    ✔ Comprar Todos

    ✔ Limpar Favoritos

    ✔ Estrutura pronta para integração
      com API REST futuramente.

==================================================*/