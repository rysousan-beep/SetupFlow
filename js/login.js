/*=====================================================
    DADOS DA APLICAÇÃO
=====================================================*/

const app = {

    pagina: {
        titulo: "SetupFlow! Tech Login"
    },

    empresa: {
        nome: "SetupFlow! Tech Login",
        logo: "/assets/logo.n.png",
        alt: "Logo da Empresa"
    },

    login: {
        titulo: "Criar conta ou entrar",

        descricao:
            "Faça login para comprar peças de tecnologia e produtos gamer com rapidez.",

        emailPlaceholder: "E-mail ou CPF",

        senhaPlaceholder: "Senha",

        entrar: "Entrar",

        cadastrar: "Cadastro"
    },

    beneficios: [

        {

            icone: "/assets/cadeado.png",

            alt: "Login Seguro",

            titulo: "Entrar com Google",

            descricao: "Rápido e seguro",

            destaque: "1 clique"

        },

        {

            icone: "/assets/escudo.png",

            alt: "Segurança",

            titulo: "Ambiente confiável",

            descricao: "Proteção de conta",

            destaque: "Validação de dados"

        }

    ],

    footer: {

        copyright:
            "© 2026 KaBuM! - Loja Tech & eSports",

        privacidade: "Privacidade • Segurança",

        link: "#"

    }

};

/*=====================================================
    CARREGAR PÁGINA
=====================================================*/

window.addEventListener("DOMContentLoaded", () => {

    carregarPagina();

});


/*=====================================================
    FUNÇÃO PRINCIPAL
=====================================================*/

function carregarPagina() {

    carregarTituloPagina();

    carregarEmpresa();

    carregarLogin();

    carregarBeneficios();

    carregarFooter();

}


/*=====================================================
    TÍTULO DA PÁGINA
=====================================================*/

function carregarTituloPagina() {

    document.title = app.pagina.titulo;

}


/*=====================================================
    HEADER
=====================================================*/

function carregarEmpresa() {

    const logo = document.getElementById("logo");

    const empresaNome = document.getElementById("empresaNome");

    logo.src = app.empresa.logo;

    logo.alt = app.empresa.alt;

    empresaNome.textContent = app.empresa.nome;

}


/*=====================================================
    LOGIN
=====================================================*/

function carregarLogin() {

    document.getElementById("tituloLogin").textContent =
        app.login.titulo;

    document.getElementById("descricaoLogin").textContent =
        app.login.descricao;

    document.getElementById("email").placeholder =
        app.login.emailPlaceholder;

    document.getElementById("senha").placeholder =
        app.login.senhaPlaceholder;

    document.getElementById("btnEntrar").textContent =
        app.login.entrar;

    document.getElementById("btnCadastrar").textContent =
        app.login.cadastrar;

}


/*=====================================================
    BENEFÍCIOS
=====================================================*/

function carregarBeneficios() {

    const card1 = app.beneficios[0];

    document.getElementById("icone1").src = card1.icone;
    document.getElementById("icone1").alt = card1.alt;

    document.getElementById("tituloCard1").textContent =
        card1.titulo;

    document.getElementById("descricaoCard1").textContent =
        card1.descricao;

    document.getElementById("destaqueCard1").textContent =
        card1.destaque;



    const card2 = app.beneficios[1];

    document.getElementById("icone2").src = card2.icone;
    document.getElementById("icone2").alt = card2.alt;

    document.getElementById("tituloCard2").textContent =
        card2.titulo;

    document.getElementById("descricaoCard2").textContent =
        card2.descricao;

    document.getElementById("destaqueCard2").textContent =
        card2.destaque;

}


/*=====================================================
    FOOTER
=====================================================*/

function carregarFooter() {

    document.getElementById("copyright").textContent =
        app.footer.copyright;

    const link = document.getElementById("linkPrivacidade");

    link.textContent = app.footer.privacidade;

    link.href = app.footer.link;

}


/*=====================================================
    EVENTOS
=====================================================*/

document.getElementById("btnEntrar").addEventListener("click", () => {

    const email = document.getElementById("email").value.trim();

    const senha = document.getElementById("senha").value.trim();

    if (email === "" || senha === "") {

        alert("Preencha e-mail e senha.");

        return;

    }

    alert("Login realizado com sucesso!");

});


document.getElementById("btnCadastrar").addEventListener("click", () => {

    window.location.href =
        "../pages/cadastro.html";


});