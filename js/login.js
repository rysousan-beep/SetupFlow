/*==================================================*
 * CONFIGURAÇÃO DA APLICAÇÃO
 *==================================================*/

const app = {

    pagina: {

        titulo: "Login",

        subtitulo:
            "Entre na sua conta para comprar produtos de tecnologia e eSports."

    },

    header: {

        logo: "/assets/logo.n.png",

        titulo: "SetupFlow! Tech Login"

    },

    menu: {

        entrar: "Entrar",

        cadastrar: "Criar Conta"

    },

    login: {

        email: {

            label: "E-mail ou CPF",

            placeholder: "Digite seu e-mail ou CPF"

        },

        senha: {

            label: "Senha",

            placeholder: "Digite sua senha"

        },

        botaoEntrar: "Entrar",

        botaoCadastrar: "Criar Conta"

    },

    beneficios: [

        {

            imagem: "/assets/cadeado.png",

            titulo: "Entrar com Google",

            descricao: "Rápido e seguro",

            destaque: "1 clique"

        },

        {

            imagem: "/assets/escudo..png",

            titulo: "Ambiente Seguro",

            descricao: "Proteção total dos seus dados.",

            destaque: "Criptografia"

        }

    ],

    footer: {

        texto:
            "© 2026 SetupFlow! Tech • Loja Tech & eSports",

        link:
            "Privacidade • Segurança"

    }

};


/*==================================================*
 * INICIALIZAÇÃO
 *==================================================*/

document.addEventListener("DOMContentLoaded", () => {

    preencherHeader();

    preencherPagina();

    preencherFormulario();

    preencherMenu();

    preencherBeneficios();

    preencherFooter();

    configurarEventos();

});


/*==================================================*
 * HEADER
 *==================================================*/

function preencherHeader() {

    document.getElementById("logo").src =
        app.header.logo;

    document.getElementById("empresaNome").textContent =
        app.header.titulo;

}


/*==================================================*
 * TOPO
 *==================================================*/

function preencherPagina() {

    document.title =
        app.pagina.titulo;

    document.getElementById("tituloLogin").textContent =
        app.pagina.titulo;

    document.getElementById("descricaoLogin").textContent =
        app.pagina.subtitulo;

}


/*==================================================*
 * MENU
 *==================================================*/

function preencherMenu() {

    document.getElementById("menuEntrar").textContent =
        app.menu.entrar;

    document.getElementById("menuCadastro").textContent =
        app.menu.cadastrar;

}


/*==================================================*
 * FORMULÁRIO
 *==================================================*/

function preencherFormulario() {

    document.getElementById("labelEmail").textContent =
        app.login.email.label;

    document.getElementById("email").placeholder =
        app.login.email.placeholder;


    document.getElementById("labelSenha").textContent =
        app.login.senha.label;

    document.getElementById("senha").placeholder =
        app.login.senha.placeholder;


    document.getElementById("btnEntrar").textContent =
        app.login.botaoEntrar;

    document.getElementById("btnCadastrar").textContent =
        app.login.botaoCadastrar;

}


/*==================================================*
 * BENEFÍCIOS
 *==================================================*/

function preencherBeneficios() {

    const card1 =
        app.beneficios[0];

    document.getElementById("icone1").src =
        card1.imagem;

    document.getElementById("icone1").alt =
        card1.titulo;

    document.getElementById("tituloCard1").textContent =
        card1.titulo;

    document.getElementById("descricaoCard1").textContent =
        card1.descricao;

    document.getElementById("destaqueCard1").textContent =
        card1.destaque;


    const card2 =
        app.beneficios[1];

    document.getElementById("icone2").src =
        card2.imagem;

    document.getElementById("icone2").alt =
        card2.titulo;

    document.getElementById("tituloCard2").textContent =
        card2.titulo;

    document.getElementById("descricaoCard2").textContent =
        card2.descricao;

    document.getElementById("destaqueCard2").textContent =
        card2.destaque;

}


/*==================================================*
 * FOOTER
 *==================================================*/

function preencherFooter() {

    document.getElementById("copyright").textContent =
        app.footer.texto;

    document.getElementById("linkPrivacidade").textContent =
        app.footer.link;

}

/*==================================================*
 * EVENTOS
 *==================================================*/

function configurarEventos() {

    document
        .getElementById("btnEntrar")
        .addEventListener("click", realizarLogin);

    document
        .getElementById("btnCadastrar")
        .addEventListener("click", () => {

            window.location.href = "/pages/cadastro.html";

        });

}


/*==================================================*
 * LOGIN
 *==================================================*/

function realizarLogin() {

    const email =
        document.getElementById("email").value.trim();

    const senha =
        document.getElementById("senha").value.trim();

    const mensagem =
        document.getElementById("mensagem");


    mensagem.innerHTML = "";
    mensagem.style.color = "";


    if (email === "" || senha === "") {

        mensagem.style.color = "red";

        mensagem.innerHTML =
            "Preencha todos os campos.";

        return;

    }


    if (!email.includes("@") && email.length < 11) {

        mensagem.style.color = "red";

        mensagem.innerHTML =
            "Digite um e-mail ou CPF válido.";

        return;

    }


    const usuario = {

        email: email,

        senha: senha

    };


    fetch("http://localhost:3000/clientes/login", {

        method: "POST",

        headers: {

            "Content-Type": "application/json"

        },

        body: JSON.stringify(usuario)

    })

    .then(res => res.json())

    .then(resposta => {

        if (resposta.sucesso) {

            mensagem.style.color = "green";

            mensagem.innerHTML =
                resposta.mensagem;


            setTimeout(() => {

                window.location.href = "/index.html";

            }, 1000);

        }
        else {

            mensagem.style.color = "red";

            mensagem.innerHTML =
                resposta.mensagem;

        }

    })

    .catch(() => {

        mensagem.style.color = "red";

        mensagem.innerHTML =
            "Erro ao conectar com o servidor.";

    });

}