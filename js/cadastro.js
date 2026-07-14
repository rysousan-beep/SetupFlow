/*==================================================
    CONFIGURAÇÃO DA APLICAÇÃO
==================================================*/

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
        },

        
    ],

    footer: {
        texto: "© 2026 SetupFlow • Loja Tech & eSports",
        link: "Privacidade • Segurança"
    }

};


/*==================================================
    INICIALIZAÇÃO
==================================================*/

document.addEventListener("DOMContentLoaded", () => {

    criarHeader();
    criarTopoCadastro();
    criarFormulario();
    criarBotoes();
    criarBeneficios();
    criarFooter();
    aplicarMascaras();

});


/*==================================================
    HEADER
==================================================*/

function criarHeader(){

    const header = document.getElementById("header");

    header.innerHTML = `

        <div style="
            width:95%;
            max-width:1200px;
            display:flex;
            align-items:center;
            gap:15px;
        ">

            <img
                src="${app.header.logo}"
                alt="Logo"
                style="height:45px;"
            >

            <h2>${app.header.titulo}</h2>

        </div>

    `;

}


/*==================================================
    TOPO CADASTRO
==================================================*/

function criarTopoCadastro(){

    const topo = document.getElementById("cadastro-topo");

    topo.innerHTML = `

        <h1>${app.pagina.titulo}</h1>

        <p>${app.pagina.subtitulo}</p>

    `;

}


/*==================================================
    FORMULÁRIO
==================================================*/

function criarFormulario(){

    const formulario = document.getElementById("form-cadastro");

    app.campos.forEach(campo => {

        formulario.innerHTML += `

            <div class="campo">

                <label for="${campo.id}">
                    ${campo.label}
                </label>

                <input
                    id="${campo.id}"
                    type="${campo.tipo}"
                    placeholder="${campo.placeholder}"
                    autocomplete="off"
                >

            </div>

        `;

    });

}


/*==================================================
    BOTÕES
==================================================*/

function criarBotoes(){

    const area = document.getElementById("cadastro-botoes");

    area.innerHTML = `

        <button id="btnCadastrar">
            Criar Conta
        </button>

        <button id="btnLogin">
            Voltar para Login
        </button>

    `;

    document
        .getElementById("btnCadastrar")
        .addEventListener("click", cadastrarUsuario);

    document
        .getElementById("btnLogin")
        .addEventListener("click", () => {

            window.location.href = "login.html";

        });

}


/*==================================================
    BENEFÍCIOS
==================================================*/

function criarBeneficios(){

    const container = document.getElementById("beneficios-container");

    app.beneficios.forEach(item => {

        container.innerHTML += `

            <div class="card-beneficio">

                <img src="${item.imagem}" alt="${item.titulo}">

                <h3>${item.titulo}</h3>

                <p>${item.descricao}</p>

            </div>

        `;

    });

}


/*==================================================
    FOOTER
==================================================*/

function criarFooter(){

    const footer = document.getElementById("footer");

    footer.innerHTML = `

        <div style="
            width:95%;
            max-width:1200px;
            display:flex;
            justify-content:space-between;
            flex-wrap:wrap;
            gap:15px;
        ">

            <span>${app.footer.texto}</span>

            <span>${app.footer.link}</span>

        </div>

    `;

}


/*==================================================
    CADASTRAR USUÁRIO
==================================================*/

function cadastrarUsuario(event){

    event.preventDefault();

    const usuario = {

        nome: document.getElementById("nome").value.trim(),

        cpf: document.getElementById("cpf").value.trim(),

        telefone: document.getElementById("telefone").value.trim(),

        email: document.getElementById("email").value.trim(),

        senha: document.getElementById("senha").value,

        nascimento: document.getElementById("nascimento").value

    };


    for(const chave in usuario){

        if(usuario[chave] === ""){

            alert("Preencha todos os campos.");

            return;

        }

    }


    localStorage.setItem(
        "usuarioCadastro",
        JSON.stringify(usuario)
    );

    console.table(usuario);

    alert("Cadastro realizado com sucesso!");

}


/*==================================================
    MÁSCARAS
==================================================*/

function aplicarMascaras(){

    const cpf = document.getElementById("cpf");

    const telefone = document.getElementById("telefone");


    cpf.addEventListener("input", () => {

        let valor = cpf.value.replace(/\D/g,'');

        valor = valor.replace(/(\d{3})(\d)/,'$1.$2');
        valor = valor.replace(/(\d{3})(\d)/,'$1.$2');
        valor = valor.replace(/(\d{3})(\d{1,2})$/,'$1-$2');

        cpf.value = valor;

    });


    telefone.addEventListener("input", () => {

        let valor = telefone.value.replace(/\D/g,'');

        valor = valor.replace(/^(\d{2})(\d)/g,'($1) $2');
        valor = valor.replace(/(\d)(\d{4})$/,'$1-$2');

        telefone.value = valor;

    });

}