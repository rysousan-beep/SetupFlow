/*==================================================
    CONFIGURAÇÃO DA APLICAÇÃO
==================================================*/

const app = {

    pagina: {
        titulo: "Monte seu Computador",
        subtitulo: "Selecione cada componente para montar um PC totalmente compatível."
    },

    header: {
        logo: "/assets/logo.n.png",
        usuario: "/assets/homem.png",
        titulo: "SetupFlow! Tech"
    },

    etapas: [

        {
            id: 1,
            nome: "Processador",
            descricao: "Escolha a CPU",
            icone: "/assets/cpu.png",
            concluido: false
        },

        {
            id: 2,
            nome: "Placa-Mãe",
            descricao: "Compatível com a CPU",
            icone: "/assets/placa-mae.jpg",
            concluido: false
        },

        {
            id: 3,
            nome: "Memória RAM",
            descricao: "DDR4 / DDR5",
            icone: "/assets/memoria.png",
            concluido: false
        },

        {
            id: 4,
            nome: "Placa de Vídeo",
            descricao: "GPU",
            icone: "/assets/rtx-5070.jpg",
            concluido: false
        },

        {
            id: 5,
            nome: "SSD",
            descricao: "Armazenamento",
            icone: "/assets/ssd.webp",
            concluido: false
        },

        {
            id: 6,
            nome: "Fonte",
            descricao: "Alimentação",
            icone: "/assets/fonte-msi.png",
            concluido: false
        },

        {
            id: 7,
            nome: "Gabinete",
            descricao: "Case",
            icone: "/assets/gabinete.png",
            concluido: false
        }

    ],

    produtos: [

        {
            id: 1,
            categoria: "Processador",
            marca: "AMD",
            nome: "Ryzen 7 7800X3D",
            preco: 2699.90,
            imagem: "/assets/amd.webp",
            socket: "AM5",
            estoque: true
        },

        {
            id: 2,
            categoria: "Processador",
            marca: "Intel",
            nome: "Core i7-14700K",
            preco: 2899.90,
            imagem: "/assets/intel.jpg",
            socket: "LGA1700",
            estoque: true
        },

        {
            id: 3,
            categoria: "Placa-Mãe",
            marca: "ASUS",
            nome: "ROG STRIX B650",
            preco: 1599.90,
            imagem: "/assets/b650.png",
            socket: "AM5",
            estoque: true
        },

        {
            id: 3,
            categoria: "Memória RAM",
            marca: "TMacrovip",
            nome: "MAX RGB DDR4 8GB 3200MHz XMP",
            preco: 1000.90,
            imagem: "/assets/ram.webp",
            socket: "ddr4",
            estoque: true
        },
    
    {
            id: 4,
            categoria: "Placa de video",
            marca: "vertus 2x",
            nome: "Rtx 5070 8GB",
            preco: 1899.90,
            imagem: "/assets/rtx-5070.jpg",
            socket: "ddr6",
            estoque: true
        }

   
    
    ],


    montagem: [],

    total: 0

};


/*==================================================
    INICIALIZAÇÃO
==================================================*/

document.addEventListener("DOMContentLoaded", () => {

    criarHeader();
    criarTituloPagina();
    criarMenuEtapas();

});


/*==================================================
    HEADER
==================================================*/

function criarHeader(){

    const header = document.getElementById("header");

    header.innerHTML = `

        <div class="header-logo">

            <img
                src="${app.header.logo}"
                alt="Logo"
            >

            <h2>${app.header.titulo}</h2>

        </div>

        <div class="header-search">

            <input
                id="campoPesquisa"
                type="text"
                placeholder="Pesquisar componentes..."
            >

        </div>

        <div class="header-logo">

            <img
                src="${app.header.usuario}"
                alt="Usuário"
                style="border-radius:50%;"
            >

        </div>

    `;

}


/*==================================================
    TÍTULO DA PÁGINA
==================================================*/

function criarTituloPagina(){

    const titulo = document.getElementById("titulo-pagina");

    titulo.innerHTML = `

        <div class="titulo-box">

            <h1>${app.pagina.titulo}</h1>

            <p>${app.pagina.subtitulo}</p>

        </div>

    `;

}


/*==================================================
    MENU LATERAL
==================================================*/

function criarMenuEtapas(){

    const menu = document.getElementById("menu-etapas");

    menu.innerHTML = "";

    app.etapas.forEach((etapa, indice)=>{

        menu.innerHTML += `

            <div
                class="etapa ${indice===0 ? 'ativa' : ''}"
                data-id="${etapa.id}"
            >

                <div class="etapa-numero">

                    ${etapa.id}

                </div>

                <div class="etapa-info">

                    <h4>${etapa.nome}</h4>

                    <span>${etapa.descricao}</span>

                </div>

            </div>

        `;

    });

}

/*==================================================
    BARRA DE PESQUISA
==================================================*/

function criarPesquisa(){

    const pesquisa = document.getElementById("pesquisa");

    pesquisa.innerHTML = `

        <input
            type="text"
            id="pesquisarProduto"
            placeholder="Pesquisar componente..."
        >

    `;

    document
        .getElementById("pesquisarProduto")
        .addEventListener("keyup", pesquisarProdutos);

}


/*==================================================
    ORDENAÇÃO
==================================================*/

function criarOrdenacao(){

    const ordenacao = document.getElementById("ordenacao");

    ordenacao.innerHTML = `

        <select id="ordenarProdutos">

            <option value="padrao">
                Ordenar por
            </option>

            <option value="menor">
                Menor preço
            </option>

            <option value="maior">
                Maior preço
            </option>

            <option value="marca">
                Marca
            </option>

        </select>

    `;

    document
        .getElementById("ordenarProdutos")
        .addEventListener("change", ordenarProdutos);

}


/*==================================================
    PESQUISA
==================================================*/

function pesquisarProdutos(){

    const texto = document
        .getElementById("pesquisarProduto")
        .value
        .toLowerCase();

    const resultado = app.produtos.filter(produto =>

        produto.nome.toLowerCase().includes(texto) ||
        produto.marca.toLowerCase().includes(texto) ||
        produto.categoria.toLowerCase().includes(texto)

    );

    criarProdutos(resultado);

}


/*==================================================
    ORDENAÇÃO
==================================================*/

function ordenarProdutos(){

    const tipo = document
        .getElementById("ordenarProdutos")
        .value;

    let lista = [...app.produtos];

    switch(tipo){

        case "menor":

            lista.sort((a,b)=>a.preco-b.preco);

        break;

        case "maior":

            lista.sort((a,b)=>b.preco-a.preco);

        break;

        case "marca":

            lista.sort((a,b)=>
                a.marca.localeCompare(b.marca)
            );

        break;

        default:

            lista = [...app.produtos];

    }

    criarProdutos(lista);

}


/*==================================================
    ALTERAR ETAPA
==================================================*/

function ativarEtapa(id){

    const etapas = document.querySelectorAll(".etapa");

    etapas.forEach(etapa=>{

        etapa.classList.remove("ativa");

        if(Number(etapa.dataset.id)===id){

            etapa.classList.add("ativa");

        }

    });

}


/*==================================================
    EVENTOS DO MENU
==================================================*/

function iniciarEventosMenu(){

    const etapas = document.querySelectorAll(".etapa");

    etapas.forEach(etapa=>{

        etapa.addEventListener("click",()=>{

            const id = Number(etapa.dataset.id);

            ativarEtapa(id);

            const categoria =
                app.etapas.find(item=>item.id===id).nome;

            const lista = app.produtos.filter(produto=>

                produto.categoria === categoria

            );

            criarProdutos(lista);

        });

    });

}


/*==================================================
    ATUALIZA MENU
==================================================*/

function atualizarMenu(){

    document
        .querySelectorAll(".etapa")
        .forEach((item,index)=>{

            item.classList.remove("concluida");

            if(app.etapas[index].concluido){

                item.classList.add("concluida");

            }

        });

}


/*==================================================
    CHAMADA INICIAL
==================================================*/

document.addEventListener("DOMContentLoaded",()=>{

    criarPesquisa();

    criarOrdenacao();

    iniciarEventosMenu();

    criarProdutos(
        app.produtos.filter(item=>
            item.categoria==="Processador"
        )
    );

});

/*==================================================
    RENDERIZAÇÃO DOS PRODUTOS
==================================================*/

function criarProdutos(listaProdutos = app.produtos){

    const produtos = document.getElementById("produtos");

    produtos.innerHTML = "";

    if(listaProdutos.length === 0){

        produtos.innerHTML = `

            <div class="sem-produtos">

                <h2>Nenhum produto encontrado.</h2>

            </div>

        `;

        return;

    }

    listaProdutos.forEach(produto => {

        const card = document.createElement("div");

        card.className = "card-produto";

        card.innerHTML = `

            <div class="status-compativel">

                Compatível

            </div>

            <button
                class="favorito"
                data-id="${produto.id}"
                title="Adicionar aos favoritos"
            >

                ❤

            </button>

            <div class="produto-imagem">

                <img
                    src="${produto.imagem}"
                    alt="${produto.nome}"
                >

            </div>

            <div class="produto-info">

                <span class="produto-marca">

                    ${produto.marca}

                </span>

                <h3 class="produto-nome">

                    ${produto.nome}

                </h3>

                <div class="tags">

                    <span class="tag">

                        ${produto.categoria}

                    </span>

                    <span class="tag">

                        ${produto.socket}

                    </span>

                </div>

                <div class="produto-preco">

                    <div class="valor">

                        <span class="valor-antigo">

                            ${(produto.preco * 1.10).toLocaleString("pt-BR",{
                                style:"currency",
                                currency:"BRL"
                            })}

                        </span>

                        <span class="valor-atual">

                            ${produto.preco.toLocaleString("pt-BR",{
                                style:"currency",
                                currency:"BRL"
                            })}

                        </span>

                    </div>

                    <button
                        class="btn-selecionar"
                        data-id="${produto.id}"
                    >

                        Selecionar

                    </button>

                </div>

            </div>

        `;

        produtos.appendChild(card);

    });

    iniciarEventosProdutos();

}


/*==================================================
    EVENTOS DOS BOTÕES
==================================================*/

function iniciarEventosProdutos(){

    document
        .querySelectorAll(".btn-selecionar")
        .forEach(botao=>{

            botao.addEventListener("click",()=>{

                const id = Number(botao.dataset.id);

                selecionarProduto(id);

            });

        });


    document
        .querySelectorAll(".favorito")
        .forEach(botao=>{

            botao.addEventListener("click",()=>{

                botao.classList.toggle("ativo");

            });

        });

}


/*==================================================
    SELECIONAR PRODUTO
==================================================*/

function selecionarProduto(id){

    const produto = app.produtos.find(item=>item.id===id);

    if(!produto){

        return;

    }

    const existe = app.montagem.find(item=>

        item.categoria === produto.categoria

    );

    if(existe){

        const indice = app.montagem.indexOf(existe);

        app.montagem[indice] = produto;

    }else{

        app.montagem.push(produto);

    }

    app.total = app.montagem.reduce((soma,item)=>{

        return soma + item.preco;

    },0);

    const etapa = app.etapas.find(item=>

        item.nome === produto.categoria

    );

    if(etapa){

        etapa.concluido = true;

    }

    atualizarMenu();

    atualizarResumo();

}


/*==================================================
    FAVORITOS
==================================================*/

function obterFavoritos(){

    return JSON.parse(

        localStorage.getItem("favoritos")

    ) || [];

}


function salvarFavoritos(lista){

    localStorage.setItem(

        "favoritos",

        JSON.stringify(lista)

    );

}


document.addEventListener("click",(evento)=>{

    if(!evento.target.classList.contains("favorito")){

        return;

    }

    const id = Number(

        evento.target.dataset.id

    );

    let favoritos = obterFavoritos();

    if(favoritos.includes(id)){

        favoritos = favoritos.filter(item=>item!==id);

        evento.target.classList.remove("ativo");

    }else{

        favoritos.push(id);

        evento.target.classList.add("ativo");

    }

    salvarFavoritos(favoritos);

});


/*==================================================
    CARREGA FAVORITOS
==================================================*/

function carregarFavoritos(){

    const favoritos = obterFavoritos();

    document
        .querySelectorAll(".favorito")
        .forEach(botao=>{

            const id = Number(botao.dataset.id);

            if(favoritos.includes(id)){

                botao.classList.add("ativo");

            }

        });

}


/*==================================================
    INICIALIZA CARDS
==================================================*/

document.addEventListener("DOMContentLoaded",()=>{

    criarProdutos(

        app.produtos.filter(produto=>

            produto.categoria==="Processador"

        )

    );

    carregarFavoritos();

});

/*==================================================
    RESUMO DA MONTAGEM
==================================================*/

function atualizarResumo(){

    criarTituloResumo();

    criarCompatibilidade();

    criarProdutosSelecionados();

    criarTotalCompra();

    criarAcoesResumo();

}


/*==================================================
    TÍTULO DO RESUMO
==================================================*/

function criarTituloResumo(){

    const titulo = document.getElementById("titulo-resumo");

    titulo.innerHTML = `

        <h2>Resumo da Montagem</h2>

        <p>

            ${app.montagem.length}
            componente(s) selecionado(s)

        </p>

    `;

}


/*==================================================
    COMPATIBILIDADE
==================================================*/

function criarCompatibilidade(){

    const area = document.getElementById("compatibilidade");

    let mensagem = "Todos os componentes são compatíveis.";

    let cor = "#19C37D";
    let icone = "✔";

    const cpu = app.montagem.find(item => item.categoria === "Processador");

    const placa = app.montagem.find(item => item.categoria === "Placa-Mãe");

    if(cpu && placa){

        if(cpu.socket !== placa.socket){

            mensagem = "Processador incompatível com a Placa-Mãe.";

            cor = "#FF5B5B";

            icone = "✖";

        }

    }

    area.innerHTML = `

        <div
            class="compatibilidade-status"
            style="color:${cor};"
        >

            <div style="
                font-size:30px;
                font-weight:bold;
            ">

                ${icone}

            </div>

            <div>

                <h3 style="color:${cor};">

                    Compatibilidade

                </h3>

                <p>

                    ${mensagem}

                </p>

            </div>

        </div>

    `;

}


/*==================================================
    PRODUTOS SELECIONADOS
==================================================*/

function criarProdutosSelecionados(){

    const area = document.getElementById("produtos-selecionados");

    area.innerHTML = "";

    if(app.montagem.length === 0){

        area.innerHTML = `

            <p class="lista-vazia">

                Nenhum componente selecionado.

            </p>

        `;

        return;

    }

    app.montagem.forEach(produto =>{

        area.innerHTML += `

            <div class="item-selecionado">

                <img
                    src="${produto.imagem}"
                    alt="${produto.nome}"
                >

                <div class="item-info">

                    <h4>

                        ${produto.nome}

                    </h4>

                    <p>

                        ${produto.marca}

                    </p>

                    <div class="item-preco">

                        ${produto.preco.toLocaleString(
                            "pt-BR",
                            {
                                style:"currency",
                                currency:"BRL"
                            }
                        )}

                    </div>

                </div>

            </div>

        `;

    });

}


/*==================================================
    TOTAL
==================================================*/

function criarTotalCompra(){

    const total = document.getElementById("total-compra");

    const subtotal = app.total;

    const frete = subtotal >= 500 ? 0 : 39.90;

    const valorFinal = subtotal + frete;

    total.innerHTML = `

        <div class="total-linha">

            <span>Subtotal</span>

            <span>

                ${subtotal.toLocaleString(
                    "pt-BR",
                    {
                        style:"currency",
                        currency:"BRL"
                    }
                )}

            </span>

        </div>

        <div class="total-linha">

            <span>Frete</span>

            <span>

                ${
                    frete === 0
                    ? "Grátis"
                    : frete.toLocaleString(
                        "pt-BR",
                        {
                            style:"currency",
                            currency:"BRL"
                        }
                    )
                }

            </span>

        </div>

        <div class="total-geral">

            <h2>Total</h2>

            <span>

                ${valorFinal.toLocaleString(
                    "pt-BR",
                    {
                        style:"currency",
                        currency:"BRL"
                    }
                )}

            </span>

        </div>

    `;

}


/*==================================================
    BOTÕES
==================================================*/

function criarAcoesResumo(){

    const area = document.getElementById("acoes-resumo");

    area.innerHTML = `

        <button
            class="btn-finalizar"
            id="btnFinalizar"
        >

            Finalizar Montagem

        </button>

        <button
            class="btn-limpar"
            id="btnLimpar"
        >

            Limpar Montagem

        </button>

    `;

    document
        .getElementById("btnFinalizar")
        .addEventListener("click", finalizarMontagem);

    document
        .getElementById("btnLimpar")
        .addEventListener("click", limparMontagem);

}


/*==================================================
    FINALIZAR
==================================================*/

function finalizarMontagem(){

    if(app.montagem.length === 0){

        alert("Selecione pelo menos um componente.");

        return;

    }

    localStorage.setItem(

        "montagemPC",

        JSON.stringify(app.montagem)

    );

    alert("Montagem salva com sucesso!");

}


/*==================================================
    LIMPAR
==================================================*/

function limparMontagem(){

    app.montagem = [];

    app.total = 0;

    app.etapas.forEach(etapa=>{

        etapa.concluido = false;

    });

    atualizarMenu();

    atualizarResumo();

}

/*==================================================
    PARTE 5
    LOCALSTORAGE, FILTROS, UTILITÁRIOS E EVENTOS
==================================================*/


/*==================================================
    CARREGA MONTAGEM SALVA
==================================================*/

function carregarMontagem(){

    const dados = localStorage.getItem("montagemPC");

    if(!dados){

        atualizarResumo();
        return;

    }

    app.montagem = JSON.parse(dados);

    app.total = app.montagem.reduce((total,produto)=>{

        return total + produto.preco;

    },0);

    app.montagem.forEach(produto=>{

        const etapa = app.etapas.find(item=>

            item.nome === produto.categoria

        );

        if(etapa){

            etapa.concluido = true;

        }

    });

    atualizarMenu();

    atualizarResumo();

}


/*==================================================
    SALVAR MONTAGEM
==================================================*/

function salvarMontagem(){

    localStorage.setItem(

        "montagemPC",

        JSON.stringify(app.montagem)

    );

}


/*==================================================
    LIMPAR FAVORITOS
==================================================*/

function limparFavoritos(){

    localStorage.removeItem("favoritos");

    document
        .querySelectorAll(".favorito")
        .forEach(botao=>{

            botao.classList.remove("ativo");

        });

}


/*==================================================
    RESETA TODA A APLICAÇÃO
==================================================*/

function resetarAplicacao(){

    app.montagem=[];

    app.total=0;

    app.etapas.forEach(etapa=>{

        etapa.concluido=false;

    });

    localStorage.removeItem("montagemPC");

    atualizarMenu();

    atualizarResumo();

    criarProdutos(

        app.produtos.filter(item=>

            item.categoria==="Processador"

        )

    );

}


/*==================================================
    ESTATÍSTICAS
==================================================*/

function atualizarEstatisticas(){

    const titulo=document.querySelector("#titulo-resumo p");

    if(!titulo){

        return;

    }

    titulo.innerHTML=`

        ${app.montagem.length}
        componente(s) selecionado(s)

    `;

}


/*==================================================
    EXPORTAR MONTAGEM
==================================================*/

function exportarMontagem(){

    if(app.montagem.length===0){

        alert("Nenhum componente selecionado.");

        return;

    }

    const texto=JSON.stringify(

        app.montagem,

        null,

        4

    );

    console.log(texto);

}


/*==================================================
    IMPORTAR MONTAGEM
==================================================*/

function importarMontagem(lista){

    if(!Array.isArray(lista)){

        return;

    }

    app.montagem=[...lista];

    app.total=app.montagem.reduce(

        (soma,item)=>soma+item.preco,

        0

    );

    atualizarResumo();

}


/*==================================================
    FILTRAR POR MARCA
==================================================*/

function filtrarMarca(marca){

    if(marca===""){

        criarProdutos(app.produtos);

        return;

    }

    const lista=app.produtos.filter(item=>

        item.marca===marca

    );

    criarProdutos(lista);

}


/*==================================================
    FILTRAR POR CATEGORIA
==================================================*/

function filtrarCategoria(categoria){

    const lista=app.produtos.filter(item=>

        item.categoria===categoria

    );

    criarProdutos(lista);

}


/*==================================================
    UTILITÁRIO
==================================================*/

function formatarMoeda(valor){

    return valor.toLocaleString(

        "pt-BR",

        {

            style:"currency",

            currency:"BRL"

        }

    );

}


/*==================================================
    EVENTOS GERAIS
==================================================*/

window.addEventListener("beforeunload",()=>{

    salvarMontagem();

});


window.addEventListener("load",()=>{

    carregarMontagem();

});


document.addEventListener("keydown",(evento)=>{

    if(evento.key==="Escape"){

        document

            .getElementById("campoPesquisa")

            ?.blur();

    }

});


/*==================================================
    OBSERVADOR
==================================================*/

const observer=new MutationObserver(()=>{

    atualizarEstatisticas();

});

observer.observe(

    document.getElementById("produtos-selecionados"),

    {

        childList:true,

        subtree:true

    }

);


/*==================================================
    FINALIZAÇÃO
==================================================*/

console.log(

    "%cSetupFlow! Tech",

    "color:#10C5F8;font-size:20px;font-weight:bold"

);

console.log(

    "Sistema de montagem inicializado."

);

console.log(

    "Versão 1.0"

);