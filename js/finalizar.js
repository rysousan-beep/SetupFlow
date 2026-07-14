/*==================================================
    CONFIGURAÇÃO DA APLICAÇÃO
==================================================*/

const app = {

    pagina:{

        titulo:"Pagamento",

        subtitulo:"Escolha a forma de pagamento para concluir seu pedido."

    },

    header:{

        logo:"/assets/logo.nv.png",

        avatar:"/assets/homem.png"

    },

    metodos:[

        {

            id:"pix",

            nome:"PIX",

            descricao:"Pagamento instantâneo com confirmação imediata.",

            icone:"/assets/pix.png"

        },

        {

            id:"credito",

            nome:"Cartão de Crédito",

            descricao:"Parcele sua compra em até 12x.",

            icone:"/assets/credito.png"

        },

        {

            id:"debito",

            nome:"Cartão de Débito",

            descricao:"Pagamento aprovado na hora.",

            icone:"/assets/debito.png"

        }

    ],

    resumo:{

        subtotal:1490.90,

        frete:25.00,

        desconto:100.00

    },

    metodoSelecionado:"pix"

};

/*==================================================
    INICIALIZAÇÃO
==================================================*/

document.addEventListener(

    "DOMContentLoaded",

    iniciarAplicacao

);

function iniciarAplicacao(){

    configurarPagina();

    carregarHeader();

    carregarMetodos();

    carregarFormulario();

    carregarResumo();

    carregarFooter();

}

/*==================================================
    CONFIGURAR PÁGINA
==================================================*/

function configurarPagina(){

    document.title = app.pagina.titulo;

    document.getElementById("pageTitle").textContent =
        app.pagina.titulo;

    document.getElementById("tituloPagina").textContent =
        app.pagina.titulo;

    document.getElementById("subtituloPagina").textContent =
        app.pagina.subtitulo;

    document.getElementById("tituloFormulario").textContent =
        "Dados do Pagamento";

    document.getElementById("descricaoFormulario").textContent =
        "Preencha as informações conforme o método escolhido.";

    document.getElementById("tituloResumo").textContent =
        "Resumo do Pedido";

    document.getElementById("descricaoResumo").textContent =
        "Confira os valores antes de finalizar a compra.";

}

/*==================================================
    HEADER
==================================================*/

function carregarHeader(){

    const header = document.getElementById("headerPrincipal");

    header.innerHTML = "";

    const container = document.createElement("div");

    container.className = "container";

    const logo = document.createElement("img");

    logo.src = app.header.logo;

    logo.alt = "Logo";

    logo.style.height = "50px";

    const avatar = document.createElement("img");

    avatar.src = app.header.avatar;

    avatar.alt = "Usuário";

    avatar.style.width = "45px";
    avatar.style.height = "45px";
    avatar.style.borderRadius = "50%";

    container.style.display = "flex";
    container.style.justifyContent = "space-between";
    container.style.alignItems = "center";

    container.appendChild(logo);

    container.appendChild(avatar);

    header.appendChild(container);

}

/*==================================================
    MÉTODOS DE PAGAMENTO
==================================================*/

function carregarMetodos(){

    const lista = document.getElementById("listaMetodos");

    lista.innerHTML = "";

    app.metodos.forEach(metodo=>{

        const card = document.createElement("div");

        card.className = "payment-card";

        if(metodo.id === app.metodoSelecionado){

            card.classList.add("active");

        }

        card.dataset.id = metodo.id;

        /*==============================
            ÍCONE
        ==============================*/

        const icone = document.createElement("div");

        icone.className = "payment-icon";

        const img = document.createElement("img");

        img.src = metodo.icone;

        img.alt = metodo.nome;

        icone.appendChild(img);

        /*==============================
            INFORMAÇÕES
        ==============================*/

        const info = document.createElement("div");

        info.className = "payment-info";

        const titulo = document.createElement("h3");

        titulo.textContent = metodo.nome;

        const descricao = document.createElement("p");

        descricao.textContent = metodo.descricao;

        info.appendChild(titulo);

        info.appendChild(descricao);

        card.appendChild(icone);

        card.appendChild(info);

        card.addEventListener("click",()=>{

            selecionarMetodo(metodo.id);

        });

        lista.appendChild(card);

    });

}

/*==================================================
    SELEÇÃO
==================================================*/

function selecionarMetodo(id){

    app.metodoSelecionado = id;

    carregarMetodos();

    carregarFormulario();

}

/*==================================================
    FORMULÁRIO
==================================================*/

function carregarFormulario(){

    const area = document.getElementById("camposFormulario");

    area.innerHTML = "";

    switch(app.metodoSelecionado){

        case "pix":

            criarFormularioPix(area);

            break;

        case "credito":

            criarFormularioCartao(area);

            break;

        case "debito":

            criarFormularioCartao(area);

            break;

    }

}

/*==================================================
    PIX
==================================================*/

function criarFormularioPix(area){

    const aviso = document.createElement("div");

    aviso.className = "form-group full";

    const texto = document.createElement("p");

    texto.textContent =
        "Após clicar em PAGAR será gerado um QR Code para pagamento via PIX.";

    aviso.appendChild(texto);

    area.appendChild(aviso);

}

/*==================================================
    CARTÃO
==================================================*/

function criarFormularioCartao(area){

    area.appendChild(

        criarCampo(

            "Nome impresso no cartão",

            "nomeCartao",

            "text",

            "Digite o nome"

        )

    );

    area.appendChild(

        criarCampo(

            "Número do cartão",

            "numeroCartao",

            "text",

            "0000 0000 0000 0000"

        )

    );

    area.appendChild(

        criarCampo(

            "Validade",

            "validade",

            "text",

            "MM/AA"

        )

    );

    area.appendChild(

        criarCampo(

            "CVV",

            "cvv",

            "password",

            "***"

        )

    );

    area.appendChild(

        criarCampo(

            "CPF do titular",

            "cpf",

            "text",

            "000.000.000-00"

        )

    );

}

/*==================================================
    CRIAR CAMPO
==================================================*/

function criarCampo(labelTexto,id,tipo,placeholder){

    const grupo = document.createElement("div");

    grupo.className = "form-group";

    const label = document.createElement("label");

    label.htmlFor = id;

    label.textContent = labelTexto;

    const input = document.createElement("input");

    input.type = tipo;

    input.id = id;

    input.name = id;

    input.placeholder = placeholder;

    input.autocomplete = "off";

    grupo.appendChild(label);

    grupo.appendChild(input);

    return grupo;

}

/*==================================================
    MÁSCARAS DOS CAMPOS
==================================================*/

document.addEventListener("input",(evento)=>{

    const campo = evento.target;

    switch(campo.id){

        case "numeroCartao":

            campo.value = mascaraCartao(campo.value);

            break;

        case "validade":

            campo.value = mascaraValidade(campo.value);

            break;

        case "cvv":

            campo.value = campo.value
                .replace(/\D/g,"")
                .substring(0,4);

            break;

        case "cpf":

            campo.value = mascaraCPF(campo.value);

            break;

    }

});

function mascaraCartao(valor){

    return valor
        .replace(/\D/g,"")
        .substring(0,16)
        .replace(/(\d{4})(?=\d)/g,"$1 ");

}

function mascaraValidade(valor){

    valor = valor.replace(/\D/g,"");

    if(valor.length > 4){

        valor = valor.substring(0,4);

    }

    if(valor.length >= 3){

        valor = valor.replace(/(\d{2})(\d+)/,"$1/$2");

    }

    return valor;

}

function mascaraCPF(valor){

    valor = valor.replace(/\D/g,"");

    valor = valor.substring(0,11);

    valor = valor.replace(/(\d{3})(\d)/,"$1.$2");

    valor = valor.replace(/(\d{3})(\d)/,"$1.$2");

    valor = valor.replace(/(\d{3})(\d{1,2})$/,"$1-$2");

    return valor;

}

/*==================================================
    BOTÕES
==================================================*/

document
.getElementById("btnVoltar")
.addEventListener("click",()=>{

    history.back();

});

document
.getElementById("formPagamento")
.addEventListener("submit",(evento)=>{

    evento.preventDefault();

    processarPagamento();

});

/*==================================================
    PROCESSAMENTO
==================================================*/

function processarPagamento(){

    if(!validarFormulario()){

        return;

    }

    mostrarLoading();

    setTimeout(()=>{

        esconderLoading();

        abrirModalConfirmacao();

    },2000);

}

/*==================================================
    VALIDAÇÃO
==================================================*/

function validarFormulario(){

    if(app.metodoSelecionado==="pix"){

        return true;

    }

    const nome = document.getElementById("nomeCartao");

    const numero = document.getElementById("numeroCartao");

    const validade = document.getElementById("validade");

    const cvv = document.getElementById("cvv");

    const cpf = document.getElementById("cpf");

    if(nome.value.trim().length < 5){

        mostrarToast("Informe o nome do titular.");

        nome.focus();

        return false;

    }

    if(numero.value.replace(/\D/g,"").length !==16){

        mostrarToast("Número do cartão inválido.");

        numero.focus();

        return false;

    }

    if(validade.value.length!==5){

        mostrarToast("Validade inválida.");

        validade.focus();

        return false;

    }

    if(cvv.value.length<3){

        mostrarToast("CVV inválido.");

        cvv.focus();

        return false;

    }

    if(cpf.value.replace(/\D/g,"").length!==11){

        mostrarToast("CPF inválido.");

        cpf.focus();

        return false;

    }

    return true;

}

/*==================================================
    MODAL
==================================================*/

function abrirModalConfirmacao(){

    const modal = document.getElementById("modal");

    const conteudo = document.getElementById("modalConteudo");

    conteudo.innerHTML = "";

    const titulo = document.createElement("h2");

    titulo.textContent = "Pagamento realizado!";

    const texto = document.createElement("p");

    texto.textContent =
        "Seu pedido foi processado com sucesso.";

    const botao = document.createElement("button");

    botao.id = "btnFecharModal";

    botao.textContent = "Continuar";

    botao.className = "btn-primary";

    botao.addEventListener("click",()=>{

        fecharModal();

        window.location.href = "../home.html";

    });

    conteudo.appendChild(titulo);

    conteudo.appendChild(texto);

    conteudo.appendChild(botao);

    modal.classList.remove("oculto");

}

function fecharModal(){

    document
        .getElementById("modal")
        .classList.add("oculto");

}

document
.getElementById("modal")
.addEventListener("click",(evento)=>{

    if(evento.target.id==="modal"){

        fecharModal();

    }

});

/*==================================================
    RESUMO DO PEDIDO
==================================================*/

function carregarResumo(){

    atualizarResumo();

}

function atualizarResumo(){

    calcularResumo();

    renderizarResumo();

}

/*==================================================
    CÁLCULO DOS VALORES
==================================================*/

function calcularResumo() {

    const carrinho = obterCarrinho();

    let subtotal = 0;

    if (carrinho.length > 0) {

        carrinho.forEach(item => {

            subtotal += Number(item.preco) * Number(item.quantidade);

        });

    } else {

        subtotal = app.resumo.subtotal;

    }

    app.resumo.subtotal = subtotal;

    app.resumo.frete = subtotal >= 500 ? 40 : 25;

    if (app.metodoSelecionado === "pix") {

        app.resumo.desconto = subtotal * 0.10;

    } else {

        app.resumo.desconto = 10;

    }

    app.resumo.total =
        app.resumo.subtotal +
        app.resumo.frete -
        app.resumo.desconto;

}

/*==================================================
    RENDERIZAÇÃO
==================================================*/

function renderizarResumo(){

    const area = document.getElementById("cardsResumo");

    area.innerHTML = "";

    criarCardResumo(

        area,

        "Subtotal",

        app.resumo.subtotal,

        "subtotal.png"

    );

    criarCardResumo(

        area,

        "Frete",

        app.resumo.frete,

        "frete.png"

    );

    criarCardResumo(

        area,

        "Desconto",

        app.resumo.desconto,

        "desconto.png",

        true

    );

    criarCardResumo(

        area,

        "Total",

        app.resumo.total,

        "total.png",

        false,

        true

    );

}

/*==================================================
    CARD
==================================================*/

function criarCardResumo(

    area,

    titulo,

    valor,

    icone,

    negativo = false,

    total = false

){

    const card = document.createElement("div");

    card.className = "summary-card fade";

    const icon = document.createElement("div");

    icon.className = "summary-icon";

    const img = document.createElement("img");

    img.src = "../assets/icons/" + icone;

    img.alt = titulo;

    icon.appendChild(img);

    const h3 = document.createElement("h3");

    h3.className = "summary-title";

    h3.textContent = titulo;

    const descricao = document.createElement("p");

    descricao.className = "summary-description";

    descricao.textContent = obterDescricaoResumo(titulo);

    const preco = document.createElement("div");

    preco.className = "summary-value";

    if(negativo){

        preco.classList.add("negative");

        preco.textContent = "-" + formatarMoeda(valor);

    }else{

        preco.textContent = formatarMoeda(valor);

    }

    if(total){

        preco.classList.add("total");

    }

    card.appendChild(icon);

    card.appendChild(h3);

    card.appendChild(descricao);

    card.appendChild(preco);

    area.appendChild(card);

}

/*==================================================
    DESCRIÇÕES
==================================================*/

function obterDescricaoResumo(titulo){

    switch(titulo){

        case "Subtotal":

            return "Valor dos produtos.";

        case "Frete":

            return "Entrega do pedido.";

        case "Desconto":

            return "Desconto aplicado.";

        case "Total":

            return "Valor final da compra.";

        default:

            return "";

    }

}

/*==================================================
    CARRINHO
==================================================*/

function obterCarrinho(){

    const dados = localStorage.getItem("carrinho");

    if(!dados){

        return [];

    }

    return JSON.parse(dados);

}

/*==================================================
    ATUALIZAÇÃO
==================================================*/

window.addEventListener("storage",()=>{

    atualizarResumo();

});

/*==================================================
    TOAST
==================================================*/

function mostrarToast(mensagem, tipo = "sucesso") {

    const toast = document.getElementById("toast");

    toast.textContent = mensagem;

    toast.className = "toast";

    if (tipo === "erro") {

        toast.style.background = "#E53935";

    } else {

        toast.style.background = "#4CAF50";

    }

    toast.classList.remove("oculto");

    toast.classList.add("ativo");

    clearTimeout(toast.timer);

    toast.timer = setTimeout(() => {

        toast.classList.remove("ativo");

        setTimeout(() => {

            toast.classList.add("oculto");

        }, 300);

    }, 3000);

}

/*==================================================
    LOADING
==================================================*/

function mostrarLoading() {

    document
        .getElementById("loading")
        .classList.remove("oculto");

}

function esconderLoading() {

    document
        .getElementById("loading")
        .classList.add("oculto");

}

/*==================================================
    FORMATAÇÃO DE MOEDA
==================================================*/

function formatarMoeda(valor) {

    return valor.toLocaleString("pt-BR", {

        style: "currency",

        currency: "BRL"

    });

}

/*==================================================
    FOOTER
==================================================*/

function carregarFooter() {

    const footer = document.getElementById("footerContainer");

    footer.innerHTML = "";

    const empresa = document.createElement("div");
    empresa.className = "footer-coluna";

    empresa.innerHTML = `
        <h3>SetupFlow</h3>
        <p>
            Equipamentos gamers, informática e tecnologia
            com qualidade e segurança.
        </p>
    `;

    const links = document.createElement("div");
    links.className = "footer-coluna";

    links.innerHTML = `
        <h3>Links</h3>
        <a href="home.html">Home</a>
        <a href="/produtos.html">Produtos</a>
        <a href="/favoritos.html">Favoritos</a>
        <a href="/perfil.html">Perfil</a>
    `;

    const contato = document.createElement("div");
    contato.className = "footer-coluna";

    contato.innerHTML = `
        <h3>Atendimento</h3>
        <p>Segunda a Sexta</p>
        <p>08:00 às 18:00</p>
        <p>suporte@setupflow.com</p>
    `;

    footer.appendChild(empresa);
    footer.appendChild(links);
    footer.appendChild(contato);

}

/*==================================================
    UTILITÁRIOS
==================================================*/

function limparFormulario() {

    const formulario = document.getElementById("formPagamento");

    if (formulario) {

        formulario.reset();

    }

}

function salvarUltimoMetodo() {

    localStorage.setItem(

        "metodoPagamento",

        app.metodoSelecionado

    );

}

function recuperarUltimoMetodo() {

    const metodo = localStorage.getItem("metodoPagamento");

    if (metodo) {

        app.metodoSelecionado = metodo;

    }

}

/*==================================================
    EVENTOS GLOBAIS
==================================================*/

window.addEventListener("online", () => {

    mostrarToast("Conexão com a internet restabelecida.");

});

window.addEventListener("offline", () => {

    mostrarToast(

        "Você está offline.",

        "erro"

    );

});

window.addEventListener("beforeunload", () => {

    salvarUltimoMetodo();

});

/*==================================================
    INICIALIZAÇÃO FINAL
==================================================*/

function iniciarSistema() {

    recuperarUltimoMetodo();

    configurarPagina();

    carregarHeader();

    carregarMetodos();

    carregarFormulario();

    carregarResumo();

    carregarFooter();

    esconderLoading();

}

document.addEventListener(

    "DOMContentLoaded",

    iniciarSistema

);

/*==================================================
    OBSERVAÇÕES

    ✔ Métodos de pagamento dinâmicos

    ✔ PIX

    ✔ Cartão de Crédito

    ✔ Cartão de Débito

    ✔ Formulário criado via JavaScript

    ✔ Máscaras dos campos

    ✔ Validação completa

    ✔ Resumo do pedido

    ✔ Total calculado automaticamente

    ✔ Frete grátis acima de R$ 500

    ✔ Desconto automático para PIX

    ✔ Modal de confirmação

    ✔ Toast

    ✔ Loading

    ✔ LocalStorage

    ✔ Responsivo

    ✔ Estrutura preparada para integração
      com API REST futuramente.

==================================================*/
