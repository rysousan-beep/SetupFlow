/*==================================================*
 * CONFIGURAÇÃO DA APLICAÇÃO
 *==================================================*/

const app = {

    pagina: {
        titulo: "Criar conta",
        subtitulo: "Preencha os dados abaixo para criar sua conta na SetupFlow! Tech."
    },

    header: {
        logo: "../assets/logo.nv.png",
        titulo: "SetupFlow! Tech Cadastro"
    },

    campos: [

        {
            id: "nome",
            label: "Nome Completo",
            tipo: "text",
            placeholder: "Digite seu nome completo"
        },

        {
            id: "cpf",
            label: "CPF",
            tipo: "text",
            placeholder: "000.000.000-00"
        },

        {
            id: "telefone",
            label: "Telefone",
            tipo: "tel",
            placeholder: "(00) 00000-0000"
        },

        {
            id: "email",
            label: "E-mail",
            tipo: "email",
            placeholder: "Digite seu e-mail"
        },

        {
            id: "senha",
            label: "Senha",
            tipo: "password",
            placeholder: "Digite sua senha"
        },

        {
            id: "nascimento",
            label: "Data de Nascimento",
            tipo: "date",
            placeholder: ""
        }

    ],

    beneficios: [

        {

            imagem: "/assets/cadeado.png",

            titulo: "Cadastro Seguro",

            descricao: "Protegemos suas informações com criptografia."

        }

    ],

    footer: {

        texto: "© 2026 SetupFlow • Loja Tech & eSports",

        link: "Privacidade • Segurança"

    }

};

/*==================================================*
 * INICIALIZAÇÃO
 *==================================================*/

document.addEventListener("DOMContentLoaded", () => {

    preencherHeader();

    preencherPagina();

    preencherFormulario();

    preencherBotoes();

    preencherBeneficios();

    preencherFooter();

    configurarEventos();

    aplicarMascaras();

});

/*==================================================*
 * HEADER
 *==================================================*/

function preencherHeader() {

    document.getElementById("logo").src =
        app.header.logo;

    document.getElementById("header-titulo").textContent =
        app.header.titulo;

}

/*==================================================*
 * TOPO
 *==================================================*/

function preencherPagina() {

    document.getElementById("pagina-titulo").textContent =
        app.pagina.titulo;

    document.getElementById("pagina-subtitulo").textContent =
        app.pagina.subtitulo;

}

/*==================================================*
 * FORMULÁRIO
 *==================================================*/

function preencherFormulario() {

    app.campos.forEach(campo => {

        document.getElementById(`label-${campo.id}`).textContent =
            campo.label;

        const input =
            document.getElementById(campo.id);

        input.type =
            campo.tipo;

        input.placeholder =
            campo.placeholder;

    });

}

/*==================================================*
 * BOTÕES
 *==================================================*/

function preencherBotoes() {

    document.getElementById("btnCadastrar").textContent =
        "Criar Conta";

    document.getElementById("btnLogin").textContent =
        "Voltar para Login";

}

/*==================================================*
 * BENEFÍCIOS
 *==================================================*/

function preencherBeneficios() {

    const beneficio =
        app.beneficios[0];

    document.getElementById("beneficio-img").src =
        beneficio.imagem;

    document.getElementById("beneficio-img").alt =
        beneficio.titulo;

    document.getElementById("beneficio-titulo").textContent =
        beneficio.titulo;

    document.getElementById("beneficio-descricao").textContent =
        beneficio.descricao;

}

/*==================================================*
 * FOOTER
 *==================================================*/

function preencherFooter() {

    document.getElementById("footer-texto").textContent =
        app.footer.texto;

    document.getElementById("footer-link").textContent =
        app.footer.link;

}

/*==================================================*
 * EVENTOS
 *==================================================*/

function configurarEventos() {

    document
        .getElementById("btnCadastrar")
        .addEventListener("click", cadastrarCliente);

    document
        .getElementById("btnLogin")
        .addEventListener("click", () => {

            window.location.href = "login.html";

        });

}

/*==================================================*
 * CADASTRAR CLIENTE
 *==================================================*/

function cadastrarCliente() {

    const nome =
        document.getElementById("nome").value.trim();

    const cpf =
        document.getElementById("cpf").value.trim();

    const telefone =
        document.getElementById("telefone").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const senha =
        document.getElementById("senha").value;

    const dataNascimento =
        document.getElementById("nascimento").value;

    const mensagem =
        document.getElementById("mensagem");


    mensagem.innerHTML = "";
    mensagem.style.color = "";


    if (
        nome === "" ||
        cpf === "" ||
        telefone === "" ||
        email === "" ||
        senha === "" ||
        dataNascimento === ""
    ) {

        mensagem.style.color = "red";
        mensagem.innerHTML =
            "Preencha todos os campos.";

        return;

    }


    if (senha.length < 6 || senha.length > 13) {

        mensagem.style.color = "red";
        mensagem.innerHTML =
            "A senha deve possuir entre 6 e 13 caracteres.";

        return;

    }


    if (!email.includes("@")) {

        mensagem.style.color = "red";
        mensagem.innerHTML =
            "Digite um e-mail válido.";

        return;

    }


    const cliente = {

        nome: nome,

        cpf: cpf.replace(/\D/g, ""),

        telefone: telefone.replace(/\D/g, ""),

        email: email,

        senha: senha,

        data_nascimento: dataNascimento,

        Loja_idLoja: 1

    };


    fetch("http://localhost:3000/clientes", {

        method: "POST",

        headers: {

            "Content-Type": "application/json"

        },

        body: JSON.stringify(cliente)

    })

    .then(res => res.json())

    .then(resposta => {

        if (resposta.sucesso) {

            mensagem.style.color = "green";

            mensagem.innerHTML =
                resposta.mensagem;


            document.getElementById("nome").value = "";

            document.getElementById("cpf").value = "";

            document.getElementById("telefone").value = "";

            document.getElementById("email").value = "";

            document.getElementById("senha").value = "";

            document.getElementById("nascimento").value = "";

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


/*==================================================*
 * MÁSCARAS
 *==================================================*/

function aplicarMascaras() {

    const cpf =
        document.getElementById("cpf");

    const telefone =
        document.getElementById("telefone");


    cpf.addEventListener("input", () => {

        let valor =
            cpf.value.replace(/\D/g, "");

        valor = valor.replace(
            /(\d{3})(\d)/,
            "$1.$2"
        );

        valor = valor.replace(
            /(\d{3})(\d)/,
            "$1.$2"
        );

        valor = valor.replace(
            /(\d{3})(\d{1,2})$/,
            "$1-$2"
        );

        cpf.value = valor;

    });


    telefone.addEventListener("input", () => {

        let valor =
            telefone.value.replace(/\D/g, "");

        valor = valor.replace(
            /^(\d{2})(\d)/,
            "($1) $2"
        );

        valor = valor.replace(
            /(\d)(\d{4})$/,
            "$1-$2"
        );

        telefone.value = valor;

    });

}