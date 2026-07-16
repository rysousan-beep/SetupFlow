/*==================================================
    CONFIGURAÇÃO DA APLICAÇÃO
==================================================*/

const app = {

    pagina: {
        titulo: "PCs Prontos",
        subtitulo: "Encontre o computador ideal para jogos, trabalho e estudos."
    },

    header: {

        logo: "/ASSETS/logo.nv.png",

        menu: [
            "HOME",
            "PCS GAMER",
            "MONITORES",
            "PERIFÉRICOS",
            "CONTATO"
        ],

        acoes: [
            {
                icone: "🔍",
                id: "buscar"
            },
            {
                icone: "❤",
                id: "favoritos"
            },
            {
                icone: "🛒",
                id: "carrinho"
            }
        ]

    },

    banner: {

        tag: "DESTAQUE",

        titulo: "PC GAMER",

        subtitulo:
            "Máquinas de alto desempenho para quem exige velocidade e qualidade.",

        botao: "COMPRAR AGORA",

        imagem:
            "../ASSETS/imagens/banner.jpg"

    },

    filtros: [

        {
            titulo: "Categoria",

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
                "AMD Ryzen 5",
                "AMD Ryzen 7",
                "AMD Ryzen 9"
            ]
        },

        {
            titulo: "Memória RAM",

            tipo: "checkbox",

            opcoes: [
                "8GB",
                "16GB",
                "32GB",
                "64GB"
            ]
        },

        {
            titulo: "Armazenamento",

            tipo: "checkbox",

            opcoes: [
                "SSD 256GB",
                "SSD 512GB",
                "SSD 1TB",
                "SSD 2TB"
            ]
        }

    ],

    produtos: [

        {

            id:1,

            destaque:"LANÇAMENTO",

            nome:"PC Gamer RTX 4060",

            imagem:"../ASSETS/imagens/pc1.png",

            preco:5499.90,

            parcelas:"12x de R$ 458,32",

            especificacoes:[
                "Intel Core i5 14400F",
                "RTX 4060 8GB",
                "16GB DDR5",
                "SSD NVMe 1TB"
            ]

        },

        {

            id:2,

            destaque:"OFERTA",

            nome:"PC Gamer Ryzen 7",

            imagem:"../ASSETS/imagens/pc2.png",

            preco:6899.90,

            parcelas:"12x de R$ 574,99",

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

            imagem:"../ASSETS/imagens/pc3.png",

            preco:11999.90,

            parcelas:"12x de R$ 999,99",

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

            nome:"PC Escritório",

            imagem:"../ASSETS/imagens/pc4.png",

            preco:2799.90,

            parcelas:"12x de R$ 233,32",

            especificacoes:[
                "Ryzen 5",
                "16GB RAM",
                "SSD 512GB",
                "Windows 11"
            ]

        }

    ],

    footer:{

        logo:"/ASSETS/logo.nv.png",

        descricao:
        "Os melhores computadores gamers e profissionais com garantia e suporte.",

        links:[
            "Empresa",
            "Produtos",
            "Promoções",
            "Contato",
            "Suporte"
        ],

        redes:[
            "facebook",
            "instagram",
            "youtube",
            "x"
        ],

        copyright:
        "© 2026 - Todos os direitos reservados."

    }

};

/*==================================================
    VARIÁVEIS GLOBAIS
==================================================*/

const header=document.getElementById("header");
const banner=document.getElementById("banner");
const filtros=document.getElementById("filtros");
const tituloProdutos=document.getElementById("titulo-produtos");
const listaProdutos=document.getElementById("lista-produtos");
const footer=document.getElementById("footer");

/*==================================================
    FUNÇÕES DE RENDERIZAÇÃO
==================================================*/

/*==================================================
    HEADER
==================================================*/

function renderHeader() {

    header.innerHTML = "";

    const template = document
        .getElementById("template-menu")
        .content
        .cloneNode(true);

    /* Logo */

    const logo = template.querySelector(".menu-logo");

    logo.innerHTML = `
        <img src="${app.header.logo}" alt="Logo">
    `;

    /* Menu */

    const menu = template.querySelector(".menu-links");

    app.header.menu.forEach(item => {

        const li = document.createElement("li");

        li.textContent = item;

        menu.appendChild(li);

    });

    /* Ações */

    const acoes = template.querySelector(".menu-acoes");

    app.header.acoes.forEach(item => {

        const botao = document.createElement("button");

        botao.className = "menu-btn";

        botao.id = item.id;

        botao.innerHTML = item.icone;

        acoes.appendChild(botao);

    });

    header.appendChild(template);

}

/*==================================================
    BANNER
==================================================*/

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

/*==================================================
    FILTROS
==================================================*/

function renderFiltros() {

    filtros.innerHTML = "";

    app.filtros.forEach(filtro => {

        const template = document
            .getElementById("template-filtro")
            .content
            .cloneNode(true);

        template.querySelector(".titulo-filtro").textContent =
            filtro.titulo;

        const conteudo =
            template.querySelector(".conteudo-filtro");

        filtro.opcoes.forEach(opcao => {

            const label =
                document.createElement("label");

            label.className = "checkbox-item";

            label.innerHTML = `
                <input type="${filtro.tipo}">
                <span>${opcao}</span>
            `;

            conteudo.appendChild(label);

        });

        filtros.appendChild(template);

    });

}

/*==================================================
    TÍTULO DOS PRODUTOS
==================================================*/

function renderTituloProdutos() {

    tituloProdutos.innerHTML = `
        <h2>${app.pagina.titulo}</h2>
        <span>${app.pagina.subtitulo}</span>
    `;

}

/*==================================================
    PRODUTOS
==================================================*/

function renderProdutos(lista = app.produtos) {

    listaProdutos.innerHTML = "";

    lista.forEach(produto => {

        const template = document
            .getElementById("template-produto")
            .content
            .cloneNode(true);

        template.querySelector(".produto-etiqueta").textContent =
            produto.destaque;

        /* Imagem */

        const imagem =
            template.querySelector(".produto-imagem");

        imagem.innerHTML = `
            <img
                src="${produto.imagem}"
                alt="${produto.nome}">
        `;

        /* Nome */

        template.querySelector(".produto-nome")
            .textContent = produto.nome;

        /* Especificações */

        const listaSpecs =
            template.querySelector(".produto-especificacoes");

        produto.especificacoes.forEach(item => {

            const li = document.createElement("li");

            li.textContent = item;

            listaSpecs.appendChild(li);

        });

        /* Preço */

        template.querySelector(".produto-preco")
            .textContent =
            produto.preco.toLocaleString("pt-BR", {

                style: "currency",

                currency: "BRL"

            });

        /* Parcelamento */

        template.querySelector(".produto-parcelamento")
            .textContent =
            produto.parcelas;

        /* Botão */

        const botao =
            template.querySelector(".produto-botao");

        botao.textContent = "COMPRAR";

        botao.dataset.id = produto.id;

        listaProdutos.appendChild(template);

    });

}

/*==================================================
    FOOTER
==================================================*/

function renderFooter() {

    footer.innerHTML = "";

    const template = document
        .getElementById("template-footer")
        .content
        .cloneNode(true);

    /* Logo */

    template.querySelector(".footer-logo").innerHTML = `
        <img src="${app.footer.logo}" alt="Logo">
        <p>${app.footer.descricao}</p>
    `;

    /* Links */

    const links =
        template.querySelector(".footer-links");

    links.innerHTML = `<h3>Institucional</h3>`;

    app.footer.links.forEach(item => {

        const a = document.createElement("a");

        a.href = "#";

        a.textContent = item;

        links.appendChild(a);

    });

    /* Redes */

    const social =
        template.querySelector(".footer-social");

    social.innerHTML = `
        <h3>Redes Sociais</h3>
        <div class="footer-social-icons"></div>
    `;

    const icons =
        social.querySelector(".footer-social-icons");

    app.footer.redes.forEach(rede => {

        const a = document.createElement("a");

        a.href = "#";

        a.innerHTML = rede.substring(0,1).toUpperCase();

        icons.appendChild(a);

    });

    /* Copyright */

    template.querySelector(".footer-copy").innerHTML = `
        <p>${app.footer.copyright}</p>
    `;

    footer.appendChild(template);

}

/*==================================================
    ORDENAÇÃO DOS PRODUTOS
==================================================*/

function ordenarProdutos(tipo) {

    let produtos = [...app.produtos];

    switch (tipo) {

        case "menor":

            produtos.sort((a, b) => a.preco - b.preco);

            break;

        case "maior":

            produtos.sort((a, b) => b.preco - a.preco);

            break;

        case "az":

            produtos.sort((a, b) =>
                a.nome.localeCompare(b.nome)
            );

            break;

        case "za":

            produtos.sort((a, b) =>
                b.nome.localeCompare(a.nome)
            );

            break;

        default:

            break;

    }

    renderProdutos(produtos);

}

/*==================================================
    PESQUISA
==================================================*/

function pesquisarProdutos(texto) {

    const pesquisa = texto.toLowerCase();

    const resultado = app.produtos.filter(produto => {

        return (

            produto.nome.toLowerCase().includes(pesquisa)

            ||

            produto.especificacoes.some(item =>

                item.toLowerCase().includes(pesquisa)

            )

        );

    });

    renderProdutos(resultado);

}

/*==================================================
    LIMPAR FILTROS
==================================================*/

function limparFiltros() {

    document
        .querySelectorAll('#filtros input')
        .forEach(input => {

            input.checked = false;

        });

    renderProdutos(app.produtos);

}

/*==================================================
    EVENTOS DOS FILTROS
==================================================*/

function iniciarFiltros() {

    const inputs = document.querySelectorAll(
        "#filtros input"
    );

    inputs.forEach(input => {

        input.addEventListener("change", () => {

            // Local para implementar filtros reais
            console.log("Filtro alterado.");

        });

    });

}

/*==================================================
    EVENTOS DO MENU
==================================================*/

function iniciarMenu() {

    const botoes = document.querySelectorAll(".menu-btn");

    botoes.forEach(botao => {

        botao.addEventListener("click", () => {

            console.log("Botão:", botao.id);

        });

    });

}

/*==================================================
    EVENTOS DOS PRODUTOS
==================================================*/

function iniciarProdutos() {

    document
        .querySelectorAll(".produto-botao")
        .forEach(botao => {

            botao.addEventListener("click", () => {

                const id = Number(botao.dataset.id);

                const produto = app.produtos.find(p => p.id === id);

                if (!produto) return;

                alert(`Produto selecionado:\n\n${produto.nome}`);

            });

        });

}

/*==================================================
    EVENTOS DE ORDENAÇÃO
==================================================*/

function iniciarOrdenacao() {

    const select = document.querySelector(
        "#ordenacao select"
    );

    if (!select) return;

    select.addEventListener("change", e => {

        ordenarProdutos(e.target.value);

        iniciarProdutos();

    });

}

/*==================================================
    EVENTO DA PESQUISA
==================================================*/

function iniciarPesquisa() {

    const campo = document.getElementById("buscar");

    if (!campo) return;

    campo.addEventListener("keyup", e => {

        pesquisarProdutos(e.target.value);

        iniciarProdutos();

    });

}

/*==================================================
    CRIA SELECT DE ORDENAÇÃO
==================================================*/

function criarOrdenacao() {

    const ordenacao =
        document.getElementById("ordenacao");

    if (!ordenacao) return;

    ordenacao.innerHTML = `
        <select>
            <option value="padrao">Ordenar por</option>
            <option value="menor">Menor preço</option>
            <option value="maior">Maior preço</option>
            <option value="az">A → Z</option>
            <option value="za">Z → A</option>
        </select>
    `;

}

/*==================================================
    INICIALIZAÇÃO
==================================================*/

function iniciarAplicacao() {

    renderHeader();

    renderBanner();

    renderFiltros();

    renderTituloProdutos();

    criarOrdenacao();

    renderProdutos();

    renderFooter();

    iniciarMenu();

    iniciarFiltros();

    iniciarOrdenacao();

    iniciarPesquisa();

    iniciarProdutos();

}

/*==================================================
    DOM READY
==================================================*/

document.addEventListener("DOMContentLoaded", () => {

    iniciarAplicacao();

});

/*==================================================
    EXPORTAÇÃO (OPCIONAL)
==================================================*/

window.app = app;