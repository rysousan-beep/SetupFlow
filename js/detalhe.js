/*=====================================================
    DADOS DA APLICAÇÃO
=====================================================*/

const app = {

    pagina: {

        titulo: "Detalhe do Produto"

    },

    header: {

        logo: "/assets/logo.n.png",

        logoAlt: "Logo da Loja",

        titulo: "Detalhe do Produto",

        iconeHome: "/assets/casa.png",

        textoHome: "Home",

        linkHome: "../index.html"

    },

    produto: {

        nome: "Mouse Gamer Razer Viper V3 HyperSpeed",

        imagem: "/assets/mouse.png",

        imagemAlt: "Mouse Gamer",

        preco: "R$ 359,91",

        caracteristicas: [

            "Sensor óptico Focus Pro 30K.",

            "Conexão HyperSpeed Wireless.",

            "Peso aproximado de 82g.",

            "Até 280 horas de bateria.",

            "Switches ópticos Razer de 3ª geração.",

            "Compatível com PC e Notebook."

        ],

        botaoCarrinho: "Adicionar ao carrinho",

        botaoComprar: "Comprar agora"

    },

    avaliacoes: {

        titulo: "Avaliações",

        descricao:
            "Veja o que os clientes estão dizendo sobre este produto."

    },

    clientes: [

        {

            foto: "/assets/homem2.png",

            nome: "Carlos Henrique",

            estrelas: 5,

            comentario:
                "Excelente mouse. Muito leve e extremamente preciso."

        },

        {

            foto: "/assets/mulher.png",

            nome: "Amanda Souza",

            estrelas: 5,

            comentario:
                "Gostei bastante da ergonomia e da duração da bateria."

        },

        {

            foto: "/assets/homem.png",

            nome: "Lucas Martins",

            estrelas: 4,

            comentario:
                "Ótimo custo-benefício para jogos competitivos."

        }

    ],

    footer: {

        copyright:
            "© 2026 SetupFlow Tech",

        privacidade:
            "Privacidade • Segurança",

        link:
            "#"

    }

};


/*=====================================================
    INICIALIZAÇÃO
=====================================================*/

window.addEventListener("DOMContentLoaded", () => {

    carregarPagina();

});


/*=====================================================
    CARREGAR PÁGINA
=====================================================*/

function carregarPagina(){

    carregarTitulo();

    carregarHeader();

    carregarProduto();

    carregarAvaliacoes();

    carregarFooter();

    adicionarEventos();

}


/*=====================================================
    TÍTULO
=====================================================*/

function carregarTitulo(){

    document.title = app.pagina.titulo;

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

    document.getElementById("iconeHome").src =
        app.header.iconeHome;

    document.getElementById("textoHome").textContent =
        app.header.textoHome;

    document.getElementById("btnHome").href =
        app.header.linkHome;

}
/*=====================================================
    PRODUTO
=====================================================*/

function carregarProduto(){

    const produto = app.produto;

    /*==============================
        IMAGEM
    ==============================*/

    const imagem =
        document.getElementById("imagemProduto");

    imagem.src =
        produto.imagem;

    imagem.alt =
        produto.imagemAlt;


    /*==============================
        NOME
    ==============================*/

    document.getElementById("nomeProduto").textContent =
        produto.nome;


    /*==============================
        PREÇO
    ==============================*/

    document.getElementById("precoProduto").textContent =
        produto.preco;


    /*==============================
        CARACTERÍSTICAS
    ==============================*/

    const lista =
        document.getElementById("listaCaracteristicas");

    lista.innerHTML = "";

    produto.caracteristicas.forEach(caracteristica => {

        const item =
            document.createElement("li");

        item.textContent =
            caracteristica;

        lista.appendChild(item);

    });


    /*==============================
        BOTÕES
    ==============================*/

    document.getElementById("btnCarrinho").textContent =
        produto.botaoCarrinho;

    document.getElementById("btnComprar").textContent =
        produto.botaoComprar;

}


/*=====================================================
    BOTÕES DO PRODUTO
=====================================================*/

function adicionarAoCarrinho(){

    alert("Produto adicionado ao carrinho!");

}


function comprarAgora(){

    alert("Redirecionando para o pagamento...");

    // Exemplo:
    // window.location.href = "pagamento.html";

}

/*=====================================================
    AVALIAÇÕES
=====================================================*/

function carregarAvaliacoes(){

    /*==============================
        TÍTULO
    ==============================*/

    document.getElementById("tituloAvaliacoes").textContent =
        app.avaliacoes.titulo;

    document.getElementById("descricaoAvaliacoes").textContent =
        app.avaliacoes.descricao;


    /*==============================
        LISTA
    ==============================*/

    const lista =
        document.getElementById("listaAvaliacoes");

    lista.innerHTML = "";


    app.clientes.forEach(cliente => {

        const card =
            document.createElement("div");

        card.className =
            "card-avaliacao";


        /*==============================
            TOPO
        ==============================*/

        const topo =
            document.createElement("div");

        topo.className =
            "card-topo";


        const foto =
            document.createElement("img");

        foto.src =
            cliente.foto;

        foto.alt =
            cliente.nome;


        const usuario =
            document.createElement("div");

        usuario.className =
            "usuario";


        const nome =
            document.createElement("h4");

        nome.textContent =
            cliente.nome;


        const cargo =
            document.createElement("span");

        cargo.textContent =
            "Cliente verificado";


        usuario.appendChild(nome);

        usuario.appendChild(cargo);


        topo.appendChild(foto);

        topo.appendChild(usuario);


        /*==============================
            ESTRELAS
        ==============================*/

        const estrelas =
            document.createElement("div");

        estrelas.className =
            "estrelas";

        estrelas.textContent =
            gerarEstrelas(cliente.estrelas);


        /*==============================
            COMENTÁRIO
        ==============================*/

        const comentario =
            document.createElement("p");

        comentario.textContent =
            cliente.comentario;


        /*==============================
            CARD
        ==============================*/

        card.appendChild(topo);

        card.appendChild(estrelas);

        card.appendChild(comentario);


        lista.appendChild(card);

    });

}


/*=====================================================
    GERAR ESTRELAS
=====================================================*/

function gerarEstrelas(quantidade){

    let estrelas = "";

    for(let i = 0; i < quantidade; i++){

        estrelas += "★";

    }

    for(let i = quantidade; i < 5; i++){

        estrelas += "☆";

    }

    return estrelas;

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
        .getElementById("btnCarrinho")
        .addEventListener("click", adicionarAoCarrinho);

    document
        .getElementById("btnComprar")
        .addEventListener("click", comprarAgora);

}


/*=====================================================
    ADICIONAR AO CARRINHO
=====================================================*/

function adicionarAoCarrinho(){

    const produto = {

        id: 1,

        nome: app.produto.nome,

        preco: app.produto.preco,

        imagem: app.produto.imagem,

        quantidade: 1

    };

    let carrinho =
        JSON.parse(localStorage.getItem("carrinho")) || [];

    const existente =
        carrinho.find(item => item.id === produto.id);

    if(existente){

        existente.quantidade++;

    }else{

        carrinho.push(produto);

    }

    localStorage.setItem(
        "carrinho",
        JSON.stringify(carrinho)
    );

    alert("Produto adicionado ao carrinho com sucesso!");

}


/*=====================================================
    COMPRAR AGORA
=====================================================*/

function comprarAgora(){

    adicionarAoCarrinho();

    window.location.href = "carrinho.html";

}


/*=====================================================
    FUNÇÕES AUXILIARES
=====================================================*/

function formatarMoeda(valor){

    if(typeof valor === "number"){

        return valor.toLocaleString(

            "pt-BR",

            {

                style:"currency",

                currency:"BRL"

            }

        );

    }

    return valor;

}


/*=====================================================
    DEBUG
=====================================================*/

// console.log(app);

// console.table(app.clientes);

// console.table(app.produto.caracteristicas);