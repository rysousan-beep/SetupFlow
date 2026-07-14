/*=====================================================
    DADOS DA APLICAÇÃO
=====================================================*/

const app = {

    pagina: {

        titulo: "Meu Perfil",

        subtitulo: "Gerencie suas informações pessoais e configurações da conta."

    },

    header: {

        logo: "/assets/logo.n.png",

        logoAlt: "Logo SetupFlow",

        avatar: "/assets/homem.png",

        avatarAlt: "Foto do Usuário"

    },

    menu: [

       
    ],

    usuario: {},

    footer: {}

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

    carregarPerfil();

    carregarSenha();

    carregarFooter();

    adicionarEventos();

}


/*=====================================================
    TÍTULO DA PÁGINA
=====================================================*/

function carregarTitulo(){

    document.title = app.pagina.titulo;

    document.getElementById("tituloPagina").textContent =
        app.pagina.titulo;

    document.getElementById("subTituloPagina").textContent =
        app.pagina.subtitulo;

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


    const avatar =
        document.getElementById("avatarHeader");

    avatar.src =
        app.header.avatar;

    avatar.alt =
        app.header.avatarAlt;

}


/*=====================================================
    MENU PRINCIPAL
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
    DADOS DO USUÁRIO
=====================================================*/

app.usuario = {

    foto: "/assets/homem.png",

    nome: "Ryan Silva",

    email: "ryan@email.com",

    telefone: "(11) 99999-9999",

    cpf: "000.000.000-00",

    nascimento: "1998-05-18"

};


/*=====================================================
    CARREGAR PERFIL
=====================================================*/

function carregarPerfil(){

    carregarFotoPerfil();

    carregarDadosContato();

}


/*=====================================================
    FOTO DO PERFIL
=====================================================*/

function carregarFotoPerfil(){

    const foto =
        document.getElementById("fotoPerfil");

    foto.src =
        app.usuario.foto;

    foto.alt =
        app.usuario.nome;


    document.getElementById("tituloFoto").textContent =
        app.usuario.nome;

    document.getElementById("descricaoFoto").textContent =
        "Atualize sua foto para personalizar sua conta.";


    criarBotoesFoto();

}


/*=====================================================
    BOTÕES DA FOTO
=====================================================*/

function criarBotoesFoto(){

    const area =
        document.getElementById("botoesFoto");

    area.innerHTML = "";


    const alterar =
        document.createElement("button");

    alterar.className =
        "btn-alterar";

    alterar.id =
        "btnAlterarFoto";

    alterar.textContent =
        "Alterar Foto";


    const remover =
        document.createElement("button");

    remover.className =
        "btn-remover";

    remover.id =
        "btnRemoverFoto";

    remover.textContent =
        "Remover Foto";


    area.appendChild(alterar);

    area.appendChild(remover);

}


/*=====================================================
    CAMPOS DO FORMULÁRIO
=====================================================*/

function carregarDadosContato(){

    document.getElementById("tituloContato").textContent =
        "Informações Pessoais";


    const area =
        document.getElementById("dadosContato");

    area.innerHTML = "";


    const campos = [

        {

            label:"Nome Completo",

            id:"nome",

            tipo:"text",

            valor:app.usuario.nome

        },

        {

            label:"E-mail",

            id:"email",

            tipo:"email",

            valor:app.usuario.email

        },

        {

            label:"Telefone",

            id:"telefone",

            tipo:"tel",

            valor:app.usuario.telefone

        },

        {

            label:"CPF",

            id:"cpf",

            tipo:"text",

            valor:app.usuario.cpf

        },

        {

            label:"Data de Nascimento",

            id:"nascimento",

            tipo:"date",

            valor:app.usuario.nascimento

        }

    ];


    campos.forEach(campo=>{

        const grupo =
            document.createElement("div");

        grupo.className =
            "campo";


        const label =
            document.createElement("label");

        label.setAttribute(
            "for",
            campo.id
        );

        label.textContent =
            campo.label;


        const input =
            document.createElement("input");

        input.type =
            campo.tipo;

        input.id =
            campo.id;

        input.value =
            campo.valor;


        grupo.appendChild(label);

        grupo.appendChild(input);

        area.appendChild(grupo);

    });

}

/*=====================================================
    ALTERAÇÃO DE SENHA
=====================================================*/

function carregarSenha(){

    document.getElementById("tituloSenha").textContent =
        "Alterar Senha";

    document.getElementById("descricaoSenha").textContent =
        "Para sua segurança, informe sua senha atual antes de definir uma nova senha.";

    const area =
        document.getElementById("dadosSenha");

    area.innerHTML = "";

    const campos = [

        {
            label:"Senha Atual",
            id:"senhaAtual",
            tipo:"password"
        },

        {
            label:"Nova Senha",
            id:"novaSenha",
            tipo:"password"
        },

        {
            label:"Confirmar Nova Senha",
            id:"confirmarSenha",
            tipo:"password"
        }

    ];

    campos.forEach(campo=>{

        const grupo =
            document.createElement("div");

        grupo.className =
            "campo";

        const label =
            document.createElement("label");

        label.setAttribute("for", campo.id);

        label.textContent =
            campo.label;

        const container =
            document.createElement("div");

        container.className =
            "senha-container";

        const input =
            document.createElement("input");

        input.type =
            campo.tipo;

        input.id =
            campo.id;

        const visualizar =
            document.createElement("span");

        visualizar.className =
            "btn-visualizar";

        visualizar.dataset.input =
            campo.id;

        visualizar.innerHTML =
            "👁";

        container.appendChild(input);

        container.appendChild(visualizar);

        grupo.appendChild(label);

        grupo.appendChild(container);

        area.appendChild(grupo);

    });

    carregarAviso();

    carregarAcoes();

}

/*=====================================================
    AVISO
=====================================================*/

function carregarAviso(){

    document.getElementById("avisoSeguranca").textContent =

        "Nunca compartilhe sua senha. Utilize uma senha forte contendo letras maiúsculas, minúsculas, números e caracteres especiais.";

}

/*=====================================================
    BOTÕES
=====================================================*/

function carregarAcoes(){

    const area =
        document.getElementById("acoesPerfil");

    area.innerHTML = "";

    const botoes = [

        {
            id:"btnCancelar",
            texto:"Cancelar",
            classe:"btn-cancelar"
        },

        {
            id:"btnSalvar",
            texto:"Salvar Alterações",
            classe:"btn-salvar"
        }

    ];

    botoes.forEach(botao=>{

        const button =
            document.createElement("button");

        button.id =
            botao.id;

        button.className =
            botao.classe;

        button.textContent =
            botao.texto;

        area.appendChild(button);

    });

}




/*=====================================================
    EVENTOS
=====================================================*/

function adicionarEventos(){

    adicionarEventoAlterarFoto();

    adicionarEventoRemoverFoto();

    adicionarEventoSalvar();

    adicionarEventoCancelar();

    adicionarEventoVisualizarSenha();

}


/*=====================================================
    ALTERAR FOTO
=====================================================*/

function adicionarEventoAlterarFoto(){

    const botao =
        document.getElementById("btnAlterarFoto");

    if(!botao) return;

    botao.addEventListener("click",()=>{

        const input =
            document.createElement("input");

        input.type = "file";

        input.accept = "image/*";

        input.click();

        input.addEventListener("change",(e)=>{

            const arquivo =
                e.target.files[0];

            if(!arquivo) return;

            const leitor =
                new FileReader();

            leitor.onload = function(evento){

                app.usuario.foto =
                    evento.target.result;

                document.getElementById("fotoPerfil").src =
                    app.usuario.foto;

                document.getElementById("avatarHeader").src =
                    app.usuario.foto;

            }

            leitor.readAsDataURL(arquivo);

        });

    });

}


/*=====================================================
    REMOVER FOTO
=====================================================*/

function adicionarEventoRemoverFoto(){

    const botao =
        document.getElementById("btnRemoverFoto");

    if(!botao) return;

    botao.addEventListener("click",()=>{

        app.usuario.foto =
            "../assets/images/avatar-perfil.png";

        document.getElementById("fotoPerfil").src =
            app.usuario.foto;

        document.getElementById("avatarHeader").src =
            app.usuario.foto;

    });

}


/*=====================================================
    VISUALIZAR SENHA
=====================================================*/

function adicionarEventoVisualizarSenha(){

    document.querySelectorAll(".btn-visualizar")

    .forEach(botao=>{

        botao.addEventListener("click",()=>{

            const campo =

                document.getElementById(

                    botao.dataset.input

                );

            if(campo.type==="password"){

                campo.type="text";

                botao.textContent="👁";

            }else{

                campo.type="password";

                botao.textContent="👁";

            }

        });

    });

}


/*=====================================================
    SALVAR ALTERAÇÕES
=====================================================*/

function adicionarEventoSalvar(){

    const botao =
        document.getElementById("btnSalvar");

    if(!botao) return;

    botao.addEventListener("click",()=>{

        app.usuario.nome =
            document.getElementById("nome").value;

        app.usuario.email =
            document.getElementById("email").value;

        app.usuario.telefone =
            document.getElementById("telefone").value;

        app.usuario.cpf =
            document.getElementById("cpf").value;

        app.usuario.nascimento =
            document.getElementById("nascimento").value;

        document.getElementById("tituloFoto").textContent =
            app.usuario.nome;

        salvarUsuario();

        alert("Perfil atualizado com sucesso!");

    });

}


/*=====================================================
    CANCELAR ALTERAÇÕES
=====================================================*/

function adicionarEventoCancelar(){

    const botao =
        document.getElementById("btnCancelar");

    if(!botao) return;

    botao.addEventListener("click",()=>{

        carregarPerfil();

        document.getElementById("senhaAtual").value = "";

        document.getElementById("novaSenha").value = "";

        document.getElementById("confirmarSenha").value = "";

    });

}

/*=====================================================
    LOCAL STORAGE
=====================================================*/

function salvarUsuario(){

    localStorage.setItem(

        "usuarioPerfil",

        JSON.stringify(app.usuario)

    );

}


function carregarUsuario(){

    const dados =

        localStorage.getItem("usuarioPerfil");

    if(!dados) return;

    app.usuario =

        JSON.parse(dados);

}


/*=====================================================
    VALIDAÇÕES
=====================================================*/

function validarFormulario(){

    if(document.getElementById("nome").value.trim()===""){

        alert("Informe o nome.");

        return false;

    }

    if(document.getElementById("email").value.trim()===""){

        alert("Informe o e-mail.");

        return false;

    }

    return true;

}


function validarSenha(){

    const atual =

        document.getElementById("senhaAtual").value;

    const nova =

        document.getElementById("novaSenha").value;

    const confirmar =

        document.getElementById("confirmarSenha").value;

    if(

        atual==="" &&

        nova==="" &&

        confirmar===""

    ){

        return true;

    }

    if(nova.length < 6){

        alert(

            "A nova senha deve possuir pelo menos 6 caracteres."

        );

        return false;

    }

    if(nova !== confirmar){

        alert(

            "As senhas não conferem."

        );

        return false;

    }

    return true;

}


/*=====================================================
    LIMPAR SENHAS
=====================================================*/

function limparSenha(){

    document.getElementById("senhaAtual").value="";

    document.getElementById("novaSenha").value="";

    document.getElementById("confirmarSenha").value="";

}


/*=====================================================
    RESTAURAR DADOS
=====================================================*/

function restaurarFormulario(){

    carregarPerfil();

    limparSenha();

}


/*=====================================================
    UTILITÁRIOS
=====================================================*/

function obterValor(id){

    return document.getElementById(id).value.trim();

}


function definirValor(id,valor){

    document.getElementById(id).value = valor;

}


function mostrarMensagem(texto){

    alert(texto);

}


/*=====================================================
    ATUALIZAR PERFIL
=====================================================*/

function atualizarPerfil(){

    carregarFotoPerfil();

    carregarDadosContato();

}


/*=====================================================
    INICIALIZAÇÃO
=====================================================*/

function iniciarSistema(){

    carregarUsuario();

    carregarPagina();

}


/*=====================================================
    EXECUÇÃO
=====================================================*/

window.addEventListener(

    "load",

    ()=>{

        iniciarSistema();

    }

);


/*=====================================================
    OBSERVAÇÕES

    ✔ Todos os textos são carregados pelo JavaScript.

    ✔ Todas as imagens são carregadas pelo JavaScript.

    ✔ O HTML contém apenas a estrutura.

    ✔ Os campos do formulário são criados dinamicamente.

    ✔ O menu é criado dinamicamente.

    ✔ O footer é criado dinamicamente.

    ✔ O avatar pode ser alterado.

    ✔ Dados persistidos via LocalStorage.

    ✔ Estrutura preparada para futura integração com API.

=====================================================*/