/*==================================================
    CONFIGURAÇÃO DA APLICAÇÃO
==================================================*/

const app = {

    pagina:{

        titulo:"Cadastrar Produto",

        subtitulo:"Cadastre novos produtos para a loja."

    },

    empresa:{

        nome:"SetupFlow",

        logo:"/ASSETS/logo.n.png"

    },

    usuario:{

        nome:"Administrador",

        avatar:"/ASSETS/homem.png"

    },

    menu:[

        {

            titulo:"Dashboard",

            icone:"📊",

            link:"dashboard.html"

        },

        {

            titulo:"Produtos",

            icone:"📦",

            link:"produtos.html"

        },

        {

            titulo:"Cadastrar Produto",

            icone:"➕",

            link:"cadastrar-produto.html",

            ativo:true

        },

       {

            titulo:"Pedidos",

            icone:"🛒",
 
            link:"pedidos.html"

        },

        {

            titulo:"Clientes",

            icone:"👥",

            link:"clientes.html"

        },

        {

            titulo:"Relatórios",

            icone:"📈",

            link:"relatorios.html"

        },

        {

            titulo:"Configurações",

            icone:"⚙️",

            link:"configuracoes.html"

        }

    ]

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

    carregarSidebar();

    carregarHeader();

    carregarBreadcrumb();

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

}

/*==================================================
    SIDEBAR
==================================================*/

function carregarSidebar(){

    const sidebar = document.getElementById("sidebar");

    sidebar.innerHTML = "";

    const logo = document.createElement("div");

    logo.className = "sidebar-logo";

    logo.innerHTML = `
        <img src="${app.empresa.logo}" alt="${app.empresa.nome}">
        <h2>${app.empresa.nome}</h2>
    `;

    sidebar.appendChild(logo);

    const menu = document.createElement("nav");

    menu.className = "sidebar-menu";

    app.menu.forEach(item=>{

        const link = document.createElement("a");

        link.className = "sidebar-item";

        link.href = item.link;

        if(item.ativo){

            link.classList.add("active");

        }

        link.innerHTML = `
            <i>${item.icone}</i>
            <span>${item.titulo}</span>
        `;

        menu.appendChild(link);

    });

    sidebar.appendChild(menu);

}

/*==================================================
    HEADER
==================================================*/

function carregarHeader(){

    const header = document.getElementById("header");

    header.innerHTML = "";

    const esquerda = document.createElement("div");

    esquerda.className = "header-left";

    const pesquisa = document.createElement("input");

    pesquisa.type = "search";

    pesquisa.placeholder = "Pesquisar...";

    pesquisa.className = "header-search";

    esquerda.appendChild(pesquisa);

    const direita = document.createElement("div");

    direita.className = "header-right";

    const nome = document.createElement("span");

    nome.textContent = app.usuario.nome;

    const avatar = document.createElement("img");

    avatar.src = app.usuario.avatar;

    avatar.alt = app.usuario.nome;

    avatar.className = "header-avatar";

    direita.appendChild(nome);

    direita.appendChild(avatar);

    header.appendChild(esquerda);

    header.appendChild(direita);

}

/*==================================================
    BREADCRUMB
==================================================*/

function carregarBreadcrumb(){

    const breadcrumb = document.getElementById("breadcrumb");

    breadcrumb.innerHTML = "";

    const inicio = document.createElement("span");

    inicio.textContent = "Dashboard";

    const separador = document.createElement("span");

    separador.textContent = "›";

    const pagina = document.createElement("span");

    pagina.textContent = app.pagina.titulo;

    breadcrumb.appendChild(inicio);

    breadcrumb.appendChild(separador);

    breadcrumb.appendChild(pagina);

}

/*==================================================
    FORMULÁRIO
==================================================*/

const imagensSelecionadas = [];

function carregarFormulario() {

    const formGrid = document.getElementById("formGrid");

    formGrid.innerHTML = "";

    const colunaEsquerda = document.createElement("div");
    colunaEsquerda.className = "form-coluna";

    colunaEsquerda.appendChild(
        criarCampo("Nome do Produto", "nome", "text", "Digite o nome do produto")
    );

    colunaEsquerda.appendChild(
        criarCampoTextarea(
            "Descrição",
            "descricao",
            "Descreva o produto"
        )
    );

    const gridMenor = document.createElement("div");
    gridMenor.className = "form-grid-small";

    gridMenor.appendChild(
        criarCampo("Preço", "preco", "text", "R$ 0,00")
    );

    gridMenor.appendChild(
        criarCampo("Estoque", "estoque", "number", "0")
    );

    gridMenor.appendChild(
        criarCampo("SKU", "sku", "text", "SKU001")
    );

    colunaEsquerda.appendChild(gridMenor);

    colunaEsquerda.appendChild(
        criarSelectCategoria()
    );

    const colunaDireita = document.createElement("div");
    colunaDireita.className = "form-coluna";

    formGrid.appendChild(colunaEsquerda);
    formGrid.appendChild(colunaDireita);

    criarUpload();

    criarSwitches();

    criarBotoes();

}

/*==================================================
    CAMPOS
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

    grupo.appendChild(label);

    grupo.appendChild(input);

    return grupo;

}

function criarCampoTextarea(labelTexto,id,placeholder){

    const grupo = document.createElement("div");

    grupo.className = "form-group";

    const label = document.createElement("label");

    label.textContent = labelTexto;

    const textarea = document.createElement("textarea");

    textarea.id = id;

    textarea.placeholder = placeholder;

    grupo.appendChild(label);

    grupo.appendChild(textarea);

    return grupo;

}

/*==================================================
    SELECT
==================================================*/

function criarSelectCategoria(){

    const grupo = document.createElement("div");

    grupo.className = "form-group";

    const label = document.createElement("label");

    label.textContent = "Categoria";

    const select = document.createElement("select");

    select.id = "categoria";

    const categorias = [

        "Selecione",

        "Processadores",

        "Placas de Vídeo",

        "Placas-Mãe",

        "Memórias",

        "SSD",

        "HD",

        "Fontes",

        "Gabinetes",

        "Monitores",

        "Periféricos"

    ];

    categorias.forEach(item=>{

        const option = document.createElement("option");

        option.value = item;

        option.textContent = item;

        select.appendChild(option);

    });

    grupo.appendChild(label);

    grupo.appendChild(select);

    return grupo;

}

/*==================================================
    UPLOAD
==================================================*/

function criarUpload(){

    const area = document.getElementById("uploadArea");

    area.innerHTML = "";

    const input = document.createElement("input");

    input.type = "file";

    input.id = "inputImagem";

    input.multiple = true;

    input.accept = "image/*";

    input.style.display = "none";

    const titulo = document.createElement("h3");

    titulo.className = "upload-title";

    titulo.textContent = "Adicionar imagens";

    const descricao = document.createElement("p");

    descricao.className = "upload-description";

    descricao.textContent =
        "Selecione até 4 imagens do produto.";

    const botao = document.createElement("button");

    botao.type = "button";

    botao.className = "upload-button";

    botao.textContent = "Escolher imagens";

    botao.addEventListener("click",()=>{

        input.click();

    });

    input.addEventListener("change",carregarImagens);

    area.appendChild(input);

    area.appendChild(titulo);

    area.appendChild(descricao);

    area.appendChild(botao);

}

/*==================================================
    IMAGENS
==================================================*/

function carregarImagens(evento){

    const arquivos = Array.from(evento.target.files);

    arquivos.forEach(arquivo=>{

        if(imagensSelecionadas.length >= 4){

            return;

        }

        const leitor = new FileReader();

        leitor.onload = function(e){

            imagensSelecionadas.push(e.target.result);

            atualizarGaleria();

        };

        leitor.readAsDataURL(arquivo);

    });

}

function atualizarGaleria(){

    const galeria = document.getElementById("galeriaImagens");

    galeria.innerHTML = "";

    imagensSelecionadas.forEach((imagem,index)=>{

        const card = document.createElement("div");

        card.className = "image-preview";

        const img = document.createElement("img");

        img.src = imagem;

        const remover = document.createElement("button");

        remover.type = "button";

        remover.className = "image-remove";

        remover.innerHTML = "&times;";

        remover.onclick = ()=>{

            imagensSelecionadas.splice(index,1);

            atualizarGaleria();

        };

        card.appendChild(img);

        card.appendChild(remover);

        galeria.appendChild(card);

    });

}

/*==================================================
    BOTÕES
==================================================*/

function criarBotoes(){

    const area = document.getElementById("acoesFormulario");

    area.innerHTML = "";

    const cancelar = document.createElement("button");

    cancelar.type = "reset";

    cancelar.className = "btn btn-cancelar";

    cancelar.textContent = "Cancelar";

    const salvar = document.createElement("button");

    salvar.type = "submit";

    salvar.className = "btn btn-salvar";

    salvar.textContent = "Salvar Produto";

    area.appendChild(cancelar);

    area.appendChild(salvar);

}

/*==================================================
    SWITCHES
==================================================*/

const configuracoesProduto = {

    ativo: true,

    destaque: false,

    freteGratis: false

};

function criarSwitches() {

    const area = document.getElementById("informacoesAdicionais");

    area.innerHTML = "";

    const grid = document.createElement("div");

    grid.className = "switch-grid";

    grid.appendChild(
        criarSwitch(
            "Produto Ativo",
            "ativo",
            configuracoesProduto.ativo
        )
    );

    grid.appendChild(
        criarSwitch(
            "Produto em Destaque",
            "destaque",
            configuracoesProduto.destaque
        )
    );

    grid.appendChild(
        criarSwitch(
            "Frete Grátis",
            "freteGratis",
            configuracoesProduto.freteGratis
        )
    );

    area.appendChild(grid);

}

function criarSwitch(titulo,id,valor){

    const item = document.createElement("div");

    item.className = "switch-item";

    const texto = document.createElement("span");

    texto.textContent = titulo;

    const label = document.createElement("label");

    label.className = "switch";

    const input = document.createElement("input");

    input.type = "checkbox";

    input.id = id;

    input.checked = valor;

    input.addEventListener("change",()=>{

        configuracoesProduto[id] = input.checked;

    });

    const slider = document.createElement("span");

    slider.className = "slider";

    label.appendChild(input);

    label.appendChild(slider);

    item.appendChild(texto);

    item.appendChild(label);

    return item;

}

/*==================================================
    MÁSCARA PREÇO
==================================================*/

document.addEventListener("input",(evento)=>{

    if(evento.target.id==="preco"){

        evento.target.value = mascaraMoeda(

            evento.target.value

        );

    }

});

function mascaraMoeda(valor){

    valor = valor.replace(/\D/g,"");

    valor = (Number(valor)/100).toFixed(2);

    valor = valor.replace(".",",");

    valor = valor.replace(

        /\B(?=(\d{3})+(?!\d))/g,

        "."

    );

    return "R$ " + valor;

}

/*==================================================
    ESTOQUE
==================================================*/

document.addEventListener("input",(evento)=>{

    if(evento.target.id==="estoque"){

        evento.target.value =

            evento.target.value.replace(/\D/g,"");

    }

});

/*==================================================
    VALIDAÇÃO
==================================================*/

function validarFormulario(){

    const nome =

        document.getElementById("nome");

    const descricao =

        document.getElementById("descricao");

    const preco =

        document.getElementById("preco");

    const estoque =

        document.getElementById("estoque");

    const sku =

        document.getElementById("sku");

    const categoria =

        document.getElementById("categoria");

    if(nome.value.trim().length < 3){

        mostrarToast(

            "Informe o nome do produto.",

            "erro"

        );

        nome.focus();

        return false;

    }

    if(descricao.value.trim().length < 15){

        mostrarToast(

            "Descrição muito curta.",

            "erro"

        );

        descricao.focus();

        return false;

    }

    if(preco.value === ""){

        mostrarToast(

            "Informe o preço.",

            "erro"

        );

        preco.focus();

        return false;

    }

    if(Number(estoque.value) <= 0){

        mostrarToast(

            "Estoque inválido.",

            "erro"

        );

        estoque.focus();

        return false;

    }

    if(sku.value.trim().length < 3){

        mostrarToast(

            "Informe um SKU válido.",

            "erro"

        );

        sku.focus();

        return false;

    }

    if(categoria.selectedIndex === 0){

        mostrarToast(

            "Selecione uma categoria.",

            "erro"

        );

        categoria.focus();

        return false;

    }

    if(imagensSelecionadas.length === 0){

        mostrarToast(

            "Adicione pelo menos uma imagem.",

            "erro"

        );

        return false;

    }

    return true;

}

/*==================================================
    EVENTOS
==================================================*/

document.addEventListener("submit",(evento)=>{

    if(evento.target.id !== "produtoForm"){

        return;

    }

    evento.preventDefault();

    if(validarFormulario()){

        cadastrarProduto();

    }

});

document.addEventListener("reset",(evento)=>{

    if(evento.target.id !== "produtoForm"){

        return;

    }

    imagensSelecionadas.length = 0;

    atualizarGaleria();

});

/*==================================================
    CADASTRO DO PRODUTO
==================================================*/

function cadastrarProduto(){

    mostrarLoading();

    setTimeout(()=>{

        const produto = montarObjetoProduto();

        salvarProduto(produto);

        esconderLoading();

        abrirModalSucesso(produto);

        mostrarToast(
            "Produto cadastrado com sucesso!",
            "sucesso"
        );

        limparFormulario();

    },1500);

}

/*==================================================
    OBJETO DO PRODUTO
==================================================*/

function montarObjetoProduto(){

    return{

        id:Date.now(),

        nome:document.getElementById("nome").value.trim(),

        descricao:document
            .getElementById("descricao")
            .value
            .trim(),

        categoria:document
            .getElementById("categoria")
            .value,

        preco:converterPreco(

            document
                .getElementById("preco")
                .value

        ),

        estoque:Number(

            document
                .getElementById("estoque")
                .value

        ),

        sku:document
            .getElementById("sku")
            .value
            .trim(),

        imagens:[...imagensSelecionadas],

        ativo:configuracoesProduto.ativo,

        destaque:configuracoesProduto.destaque,

        freteGratis:configuracoesProduto.freteGratis,

        dataCadastro:new Date().toISOString()

    };

}

/*==================================================
    LOCAL STORAGE
==================================================*/

function salvarProduto(produto){

    const lista = obterProdutos();

    lista.push(produto);

    localStorage.setItem(

        "produtos",

        JSON.stringify(lista)

    );

}

function obterProdutos(){

    const dados = localStorage.getItem("produtos");

    if(!dados){

        return [];

    }

    return JSON.parse(dados);

}

/*==================================================
    MODAL
==================================================*/

function abrirModalSucesso(produto){

    const modal = document.getElementById("modal");

    const conteudo = document.getElementById("modalConteudo");

    conteudo.innerHTML = "";

    const titulo = document.createElement("h2");

    titulo.textContent = "Produto cadastrado!";

    const texto = document.createElement("p");

    texto.innerHTML = `
        O produto <strong>${produto.nome}</strong>
        foi salvo com sucesso.
    `;

    const botao = document.createElement("button");

    botao.type = "button";

    botao.className = "btn btn-salvar";

    botao.textContent = "Fechar";

    botao.addEventListener("click",fecharModal);

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
    LIMPAR FORMULÁRIO
==================================================*/

function limparFormulario(){

    document
        .getElementById("produtoForm")
        .reset();

    imagensSelecionadas.length = 0;

    atualizarGaleria();

    configuracoesProduto.ativo = true;

    configuracoesProduto.destaque = false;

    configuracoesProduto.freteGratis = false;

    criarSwitches();

}

/*==================================================
    CONVERSÃO DO PREÇO
==================================================*/

function converterPreco(valor){

    return Number(

        valor
            .replace("R$","")
            .replace(/\./g,"")
            .replace(",",".")
            .trim()

    );

}

/*==================================================
    TOAST
==================================================*/

function mostrarToast(mensagem, tipo = "sucesso") {

    const toast = document.getElementById("toast");

    toast.textContent = mensagem;

    toast.className = "toast";

    toast.classList.add(tipo);

    toast.classList.add("ativo");

    clearTimeout(toast.timer);

    toast.timer = setTimeout(() => {

        toast.classList.remove("ativo");

        setTimeout(() => {

            toast.className = "toast oculto";

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
    FOOTER
==================================================*/

function carregarFooter() {

    const footer = document.getElementById("footer");

    footer.innerHTML = "";

    const esquerda = document.createElement("div");

    esquerda.className = "footer-left";

    esquerda.innerHTML = `
        <strong>${app.empresa.nome}</strong>
        <span>© ${new Date().getFullYear()} - Todos os direitos reservados.</span>
    `;

    const direita = document.createElement("div");

    direita.className = "footer-right";

    const links = [

        {
            texto:"Dashboard",
            href:"dashboard.html"
        },

        {
            texto:"Produtos",
            href:"produtos.html"
        },

        {
            texto:"Pedidos",
            href:"pedidos.html"
        },

        {
            texto:"Configurações",
            href:"configuracoes.html"
        }

    ];

    links.forEach(link=>{

        const a = document.createElement("a");

        a.href = link.href;

        a.textContent = link.texto;

        direita.appendChild(a);

    });

    footer.appendChild(esquerda);

    footer.appendChild(direita);

}

/*==================================================
    UTILITÁRIOS
==================================================*/

function formatarMoeda(valor){

    return valor.toLocaleString("pt-BR",{

        style:"currency",

        currency:"BRL"

    });

}

function gerarSKU(){

    return "SKU-" + Math.floor(

        Math.random()*1000000

    );

}

function preencherSkuAutomaticamente(){

    const campo = document.getElementById("sku");

    if(campo && campo.value.trim()===""){

        campo.value = gerarSKU();

    }

}

/*==================================================
    EVENTOS GLOBAIS
==================================================*/

window.addEventListener("online",()=>{

    mostrarToast(

        "Conexão restabelecida.",

        "sucesso"

    );

});

window.addEventListener("offline",()=>{

    mostrarToast(

        "Você está sem conexão com a internet.",

        "erro"

    );

});

window.addEventListener("beforeunload",()=>{

    localStorage.setItem(

        "ultimoCadastro",

        new Date().toISOString()

    );

});

/*==================================================
    INICIALIZAÇÃO FINAL
==================================================*/

function iniciarSistema(){

    configurarPagina();

    carregarSidebar();

    carregarHeader();

    carregarBreadcrumb();

    carregarFormulario();

    carregarFooter();

    preencherSkuAutomaticamente();

    esconderLoading();

}

document.addEventListener(

    "DOMContentLoaded",

    iniciarSistema

);

/*==================================================
    OBSERVAÇÕES

    ✔ Sidebar dinâmica

    ✔ Header dinâmico

    ✔ Breadcrumb

    ✔ Formulário criado via JavaScript

    ✔ Upload de imagens

    ✔ Preview da galeria

    ✔ Validação completa

    ✔ Cadastro de produtos

    ✔ LocalStorage

    ✔ Toast

    ✔ Modal

    ✔ Loading

    ✔ Footer dinâmico

    ✔ Responsivo

    ✔ Estrutura preparada para integração
      futura com API REST.

==================================================*/