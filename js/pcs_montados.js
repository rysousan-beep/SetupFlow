/*=========================================================
    CONFIGURAÇÃO DA APLICAÇÃO
=========================================================*/

const app = {

    pagina: {

        titulo: "PCs Prontos",

        descricao: "Monte ou escolha o computador ideal para jogos, trabalho e estudos."

    },

    /*=====================================================
        HEADER
    =====================================================*/

    header: {

        logo: "/ASSETS/logo.nv.png",

        menu: [

            {
                texto: "HOME",
                link: "#"
            },

            {
                texto: "PCS MONTADOS",
                link: "#"
            },

            {
                texto: "MONTE SEU PC",
                link: "#"
            },

          
        ],

        botoes: [

            {
                id: "buscar",
                icone: "🔍"
            },

            {
                id: "usuario",
                icone: "👤"
            },

            {
                id: "favoritos",
                icone: "❤"
            },

            {
                id: "carrinho",
                icone: "🛒"
            }

        ]

    },

    /*=====================================================
        BANNER
    =====================================================*/

    banner: {

        tag: "LANÇAMENTO",

        titulo: "PC GAMER",

        subtitulo:

        "Os computadores gamers mais vendidos do Brasil.",

        botao: "VER OFERTAS",

        imagem:

        "../ASSETS/banner.png"

    },

    /*=====================================================
        FILTROS
    =====================================================*/

    filtros: [

        {

            titulo: "Categorias",

            tipo: "checkbox",

            opcoes: [

                "PC Gamer",

                "PC Escritório",

                "Workstation",

                "Mini PC"

            ]

        },

        {

            titulo: "Processador",

            tipo: "checkbox",

            opcoes: [

                "Intel Core i5",

                "Intel Core i7",

                "Intel Core i9",

                "Ryzen 5",

                "Ryzen 7",

                "Ryzen 9"

            ]

        },

        {

            titulo: "Placa de Vídeo",

            tipo: "checkbox",

            opcoes: [

                "RTX 4060",

                "RTX 4070",

                "RTX 4080",

                "RTX 4090"

            ]

        },

        {

            titulo: "Memória RAM",

            tipo: "checkbox",

            opcoes: [

                "16 GB",

                "32 GB",

                "64 GB"

            ]

        }

    ],

    /*=====================================================
        PRODUTOS
    =====================================================*/

    produtos: [

        {

            id:1,

            destaque:"OFERTA",

            nome:"PC Gamer RTX 4060",

            imagem:"/ASSETS/pc-4060.webp",

            preco:5499.90,

            parcelado:"12x de R$ 458,32",

            avista:"À vista no PIX",

            especificacoes:[

                "Intel Core i5 14400F",

                "RTX 4060 8GB",

                "16GB DDR5",

                "SSD NVMe 1TB"

            ]

        },

        {

            id:2,

            destaque:"NOVO",

            nome:"PC Gamer RTX 4070",

            imagem:"/ASSETS/pc2.webp",

            preco:7399.90,

            parcelado:"12x de R$ 616,65",

            avista:"À vista no PIX",

            especificacoes:[

                "Ryzen 7 7800X",

                "RTX 4070",

                "32GB DDR5",

                "SSD 1TB"

            ]

        },

        {

            id:3,

            destaque:"TOP",

            nome:"PC Gamer RTX 4080",

            imagem:"/ASSETS/pc3.png",

            preco:11499.90,

            parcelado:"12x de R$ 958,32",

            avista:"À vista no PIX",

            especificacoes:[

                "Core i9",

                "RTX 4080",

                "32GB DDR5",

                "SSD 2TB"

            ]

        },

        {

            id:4,

            destaque:"PROMOÇÃO",

            nome:"PC Office Ryzen 5",

            imagem:"/ASSETS/pc4.webp",

            preco:2899.90,

            parcelado:"12x de R$ 241,65",

            avista:"À vista no PIX",

            especificacoes:[

                "Ryzen 5",

                "16GB DDR4",

                "SSD 512GB",

                "Windows 11"

            ]

        }

    ],

    /*=====================================================
        FOOTER
    =====================================================*/
//
    footer:{

        logo:"/ASSETS/logo.nv.png",

        descricao:

        "Especialistas em computadores gamers, workstations e acessórios.",

        links:[

            "Empresa",

            "Produtos",

            "Promoções",

            "Contato",

            "Suporte"

        ],

        

        copyright:

        "© 2026 - Todos os direitos reservados."

    }

};

/*=========================================================
    ELEMENTOS DA PÁGINA
=========================================================*/

const header = document.getElementById("header");

const banner = document.getElementById("banner");

const filtros = document.getElementById("filtros");

const tituloProdutos = document.getElementById("titulo-produtos");

const ordenacao = document.getElementById("ordenacao");

const listaProdutos = document.getElementById("lista-produtos");

const footer = document.getElementById("footer");

/*=========================================================
    VARIÁVEIS DE CONTROLE
=========================================================*/

let produtosRenderizados = [...app.produtos];

let filtrosSelecionados = [];

let textoPesquisa = "";

let ordenacaoAtual = "padrao";

/*=========================================================
    RENDERIZA O HEADER
=========================================================*/

function renderHeader() {

    header.innerHTML = "";

    const template = document
        .getElementById("template-menu")
        .content
        .cloneNode(true);

    /*============================
        LOGO
    ============================*/

    const logo = template.querySelector(".menu-logo");

    logo.innerHTML = `
        <img src="${app.header.logo}" alt="Logo">
    `;

    /*============================
        MENU
    ============================*/

    const menu = template.querySelector(".menu-links");

    app.header.menu.forEach(item => {

        const tpl = document
            .getElementById("template-link-menu")
            .content
            .cloneNode(true);

        const link = tpl.querySelector(".menu-link");

        link.textContent = item.texto;

        link.href = item.link;

        menu.appendChild(tpl);

    });

    /*============================
        BOTÕES
    ============================*/

    const acoes = template.querySelector(".menu-acoes");

    app.header.botoes.forEach(botao => {

        const button = document.createElement("button");

        button.className = "menu-btn";

        button.id = botao.id;

        button.innerHTML = botao.icone;

        acoes.appendChild(button);

    });

    header.appendChild(template);

}

/*=========================================================
    RENDERIZA O BANNER
=========================================================*/

function renderBanner() {

    banner.innerHTML = "";

    const template = document
        .getElementById("template-banner")
        .content
        .cloneNode(true);

    template.querySelector(".banner-tag").textContent =
        app.banner.tag;

    template.querySelector(".banner-titulo").textContent =
        app.banner.titulo;

    template.querySelector(".banner-subtitulo").textContent =
        app.banner.subtitulo;

    template.querySelector(".banner-botao").textContent =
        app.banner.botao;

    template.querySelector(".banner-imagem")
        .style.backgroundImage =
        `url(${app.banner.imagem})`;

    banner.appendChild(template);

}

/*=========================================================
    RENDERIZA OS FILTROS
=========================================================*/

function renderFiltros() {

    filtros.innerHTML = "";

    app.filtros.forEach(filtro => {

        const bloco = document
            .getElementById("template-filtro")
            .content
            .cloneNode(true);

        bloco.querySelector(".titulo-filtro").textContent =
            filtro.titulo;

        const conteudo =
            bloco.querySelector(".conteudo-filtro");

        filtro.opcoes.forEach(opcao => {

            const item = document
                .getElementById("template-checkbox")
                .content
                .cloneNode(true);

            item.querySelector("span").textContent = opcao;

            const input = item.querySelector("input");

            input.value = opcao;

            input.dataset.grupo = filtro.titulo;

            conteudo.appendChild(item);

        });

        filtros.appendChild(bloco);

    });

}

/*=========================================================
    TÍTULO DOS PRODUTOS
=========================================================*/

function renderTituloProdutos() {

    tituloProdutos.innerHTML = `
        <h2>${app.pagina.titulo}</h2>
        <span>${app.pagina.descricao}</span>
    `;

}

/*=========================================================
    CAMPO DE ORDENAÇÃO
=========================================================*/

function renderOrdenacao() {

    ordenacao.innerHTML = `
        <select id="selectOrdenacao">

            <option value="padrao">
                Ordenar por
            </option>

            <option value="menor">
                Menor preço
            </option>

            <option value="maior">
                Maior preço
            </option>

            <option value="az">
                Nome A-Z
            </option>

            <option value="za">
                Nome Z-A
            </option>

        </select>
    `;

}

/*=========================================================
    RENDERIZA PRODUTOS
=========================================================*/

function renderProdutos(lista = produtosRenderizados) {

    listaProdutos.innerHTML = "";

    lista.forEach(produto => {

        const card = document
            .getElementById("template-produto")
            .content
            .cloneNode(true);

        card.querySelector(".produto-etiqueta").textContent =
            produto.destaque;

        card.querySelector(".produto-nome").textContent =
            produto.nome;

        card.querySelector(".produto-a-vista").textContent =
            produto.avista;

        card.querySelector(".produto-preco").textContent =
            produto.preco.toLocaleString("pt-BR", {

                style: "currency",

                currency: "BRL"

            });

        card.querySelector(".produto-parcelado").textContent =
            produto.parcelado;

        /*============================
            IMAGEM
        ============================*/

        card.querySelector(".produto-imagem").innerHTML = `
            <img src="${produto.imagem}" alt="${produto.nome}">
        `;

        /*============================
            ESPECIFICAÇÕES
        ============================*/

        const listaSpecs =
            card.querySelector(".produto-especificacoes");

        produto.especificacoes.forEach(spec => {

            const item = document
                .getElementById("template-especificacao")
                .content
                .cloneNode(true);

            item.querySelector(".spec-item").textContent =
                spec;

            listaSpecs.appendChild(item);

        });

        /*============================
            BOTÃO
        ============================*/

        const botao =
            card.querySelector(".produto-botao");

        botao.textContent = "COMPRAR";

        botao.dataset.id = produto.id;

        listaProdutos.appendChild(card);

    });

}

/*=========================================================
    RENDERIZA O FOOTER
=========================================================*/

function renderFooter() {

    footer.innerHTML = "";

    const template = document
        .getElementById("template-footer")
        .content
        .cloneNode(true);

    /*============================
        LOGO
    ============================*/

    template.querySelector(".footer-logo").innerHTML = `
        <img src="${app.footer.logo}" alt="Logo">
        <p>${app.footer.descricao}</p>
    `;

    /*============================
        LINKS
    ============================*/

    const links =
        template.querySelector(".footer-links");

    links.innerHTML = "<h3>Institucional</h3>";

    app.footer.links.forEach(link => {

        const item = document
            .getElementById("template-footer-link")
            .content
            .cloneNode(true);

        item.querySelector(".footer-link").textContent =
            link;

        links.appendChild(item);

    });

    /*============================
        REDES SOCIAIS
    ============================*/

    const redes =
        template.querySelector(".footer-redes");

    redes.innerHTML = `
        <h3>Redes Sociais</h3>
        <div class="redes-icons"></div>
    `;

    const container =
        redes.querySelector(".redes-icons");

    app.footer.redes.forEach(rede => {

        const item = document
            .getElementById("template-social")
            .content
            .cloneNode(true);

        item.querySelector(".social-item").textContent =
            rede.substring(0, 1);

        container.appendChild(item);

    });

    /*============================
        COPYRIGHT
    ============================*/

    template.querySelector(".footer-copy").innerHTML = `
        <p>${app.footer.copyright}</p>
    `;

    footer.appendChild(template);

}

/*=========================================================
    ORDENAÇÃO DOS PRODUTOS
=========================================================*/

function ordenarProdutos(tipo) {

    produtosRenderizados = [...app.produtos];

    switch (tipo) {

        case "menor":

            produtosRenderizados.sort((a, b) => a.preco - b.preco);

            break;

        case "maior":

            produtosRenderizados.sort((a, b) => b.preco - a.preco);

            break;

        case "az":

            produtosRenderizados.sort((a, b) =>
                a.nome.localeCompare(b.nome)
            );

            break;

        case "za":

            produtosRenderizados.sort((a, b) =>
                b.nome.localeCompare(a.nome)
            );

            break;

        default:

            break;

    }

    renderProdutos(produtosRenderizados);

    iniciarEventosProdutos();

}

/*=========================================================
    PESQUISA
=========================================================*/

function pesquisarProdutos(texto) {

    textoPesquisa = texto.toLowerCase();

    produtosRenderizados = app.produtos.filter(produto => {

        return (

            produto.nome.toLowerCase().includes(textoPesquisa)

            ||

            produto.especificacoes.some(item =>

                item.toLowerCase().includes(textoPesquisa)

            )

        );

    });

    renderProdutos(produtosRenderizados);

    iniciarEventosProdutos();

}

/*=========================================================
    FILTROS
=========================================================*/

function aplicarFiltros() {

    filtrosSelecionados = [];

    document
        .querySelectorAll("#filtros input:checked")
        .forEach(item => {

            filtrosSelecionados.push(item.value);

        });

    if (filtrosSelecionados.length === 0) {

        produtosRenderizados = [...app.produtos];

    } else {

        produtosRenderizados = app.produtos.filter(produto => {

            return filtrosSelecionados.some(filtro => {

                return (

                    produto.nome.includes(filtro)

                    ||

                    produto.especificacoes.some(spec =>

                        spec.includes(filtro)

                    )

                );

            });

        });

    }

    renderProdutos(produtosRenderizados);

    iniciarEventosProdutos();

}

/*=========================================================
    LIMPAR FILTROS
=========================================================*/

function limparFiltros() {

    document
        .querySelectorAll("#filtros input")
        .forEach(input => {

            input.checked = false;

        });

    produtosRenderizados = [...app.produtos];

    renderProdutos(produtosRenderizados);

    iniciarEventosProdutos();

}

/*=========================================================
    EVENTOS DOS FILTROS
=========================================================*/

function iniciarEventosFiltros() {

    document
        .querySelectorAll("#filtros input")
        .forEach(input => {

            input.addEventListener("change", aplicarFiltros);

        });

}

/*=========================================================
    EVENTOS DOS BOTÕES DO MENU
=========================================================*/

function iniciarEventosMenu() {

    document
        .querySelectorAll(".menu-btn")
        .forEach(botao => {

            botao.addEventListener("click", () => {

                console.log(`Botão ${botao.id} clicado.`);

            });

        });

}

/*=========================================================
    EVENTOS DOS PRODUTOS
=========================================================*/

function iniciarEventosProdutos() {

    document
        .querySelectorAll(".produto-botao")
        .forEach(botao => {

            botao.addEventListener("click", () => {

                const id = Number(botao.dataset.id);

                const produto = app.produtos.find(p => p.id === id);

                if (!produto) return;

                alert(
`Produto selecionado:

${produto.nome}

Preço: ${produto.preco.toLocaleString("pt-BR",{
style:"currency",
currency:"BRL"
})}`
                );

            });

        });

}

/*=========================================================
    EVENTO DA ORDENAÇÃO
=========================================================*/

function iniciarOrdenacao() {

    const select = document.getElementById("selectOrdenacao");

    if (!select) return;

    select.addEventListener("change", e => {

        ordenacaoAtual = e.target.value;

        ordenarProdutos(ordenacaoAtual);

    });

}

/*=========================================================
    CAMPO DE PESQUISA
=========================================================*/

function iniciarPesquisa() {

    const campo = document.getElementById("buscar");

    if (!campo) return;

    campo.addEventListener("keyup", e => {

        pesquisarProdutos(e.target.value);

    });

}

/*=========================================================
    INICIALIZAÇÃO
=========================================================*/

function iniciarAplicacao() {

    renderHeader();

    renderBanner();

    renderFiltros();

    renderTituloProdutos();

    renderOrdenacao();

    renderProdutos();

    renderFooter();

    iniciarEventosMenu();

    iniciarEventosFiltros();

    iniciarOrdenacao();

    iniciarPesquisa();

    iniciarEventosProdutos();

}

/*=========================================================
    DOM READY
=========================================================*/

document.addEventListener("DOMContentLoaded", () => {

    iniciarAplicacao();

});

/*=========================================================
    DISPONIBILIZA APP GLOBALMENTE
=========================================================*/

window.app = app;