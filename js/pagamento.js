/*=====================================================
    DADOS DA APLICAÇÃO
=====================================================*/

const app = {

    pagina: {

        titulo: "Finalizar Pedido"

    },

       header: {

        logo: "/assets/logo.n.png",

        logoAlt: "Logo da Loja",

        titulo: "Finalizar Pedido",

        iconeHome: "/assets/casa.png",

        textoHome: "Home",

        linkHome: "../index.html"

    },

    formulario: {

        titulo: "Finalizar pedido",

        descricao: "Confirme os dados do pedido para concluir.",

        nome: {

            label: "Nome completo",

            placeholder: "Ex.: Maria Silva",

            ajuda: "Como deve aparecer no pedido"

        },

        telefone: {

            label: "Telefone/WhatsApp",

            placeholder: "(11) 99999-9999",

            ajuda: "Para contato em caso de atualização"

        },

        cep: {

            label: "CEP",

            placeholder: "00000-000",

            ajuda: "Usado para calcular o frete"

        },

        pagamento: {

            label: "Forma de pagamento",

            ajuda: "Selecione uma opção",

            opcoes: [

                "Escolha",

                "Pix",

                "Cartão de Crédito",

                "Cartão de Débito",

                "Boleto Bancário",

                "PayPal"

            ]

        },

        observacao: {

            label: "Observações do pedido",

            placeholder: "Ex.: entregar no período da manhã",

            ajuda: "Opcional"

        },

        cupom: {

            label: "Cupom de desconto",

            placeholder: "Ex.: BEMVINDO10",

            ajuda: "Se tiver"

        }

    },

    botoes: {

        voltar: "Voltar para produtos",

        finalizar: "Finalizar"

    },

    footer: {

        copyright:
            "© 2026 SetupFlow Tech",

        privacidade:
            "Privacidade • Segurança",

        link:
            "#"

    }

};


/*=====================================================
    INICIALIZAÇÃO
=====================================================*/

window.addEventListener("DOMContentLoaded", () => {

    carregarPagina();

});


/*=====================================================
    CARREGAR PÁGINA
=====================================================*/

function carregarPagina(){

    carregarTitulo();

    carregarHeader();

    carregarFormulario();

    carregarFooter();

    adicionarEventos();

}


/*=====================================================
    TÍTULO
=====================================================*/

function carregarTitulo(){

    document.title = app.pagina.titulo;

}


/*=====================================================
    HEADER
=====================================================*/

function carregarHeader(){

    document.getElementById("logo").src =
        app.header.logo;

    document.getElementById("logo").alt =
        app.header.logoAlt;

    document.getElementById("tituloPagina").textContent =
        app.header.titulo;

    document.getElementById("iconeHome").src =
        app.header.iconeHome;

    document.getElementById("textoHome").textContent =
        app.header.textoHome;

    document.getElementById("btnHome").href =
        app.header.linkHome;

}


/*=====================================================
    FORMULÁRIO
=====================================================*/

function carregarFormulario(){

    const form = app.formulario;

    document.getElementById("tituloFormulario").textContent =
        form.titulo;

    document.getElementById("descricaoFormulario").textContent =
        form.descricao;


    preencherCampo("Nome", form.nome);

    preencherCampo("Telefone", form.telefone);

    preencherCampo("Cep", form.cep);

    preencherCampo("Observacao", form.observacao);

    preencherCampo("Cupom", form.cupom);


    document.getElementById("labelPagamento").textContent =
        form.pagamento.label;

    document.getElementById("ajudaPagamento").textContent =
        form.pagamento.ajuda;


    const select =
        document.getElementById("pagamentoMetodo");

    form.pagamento.opcoes.forEach(opcao => {

        const option =
            document.createElement("option");

        option.value = opcao;

        option.textContent = opcao;

        select.appendChild(option);

    });


    document.getElementById("btnVoltar").textContent =
        app.botoes.voltar;

    document.getElementById("btnFinalizar").textContent =
        app.botoes.finalizar;

}


/*=====================================================
    PREENCHER CAMPOS
=====================================================*/

function preencherCampo(nomeCampo,dados){

    document.getElementById("label"+nomeCampo).textContent =
        dados.label;

    const input = document.getElementById(nomeCampo.toLowerCase());

    input.placeholder =
        dados.placeholder;

    document.getElementById("ajuda"+nomeCampo).textContent =
        dados.ajuda;

}


/*=====================================================
    FOOTER
=====================================================*/

function carregarFooter(){

    document.getElementById("copyright").textContent =
        app.footer.copyright;

    const link =
        document.getElementById("linkPrivacidade");

    link.textContent =
        app.footer.privacidade;

    link.href =
        app.footer.link;

}


/*=====================================================
    EVENTOS
=====================================================*/

function adicionarEventos(){

    document
    .getElementById("btnVoltar")
    .addEventListener("click", voltarProdutos);


    document
    .getElementById("formPagamento")
    .addEventListener("submit", finalizarPedido);

}


/*=====================================================
    VOLTAR
=====================================================*/

function voltarProdutos(){

    history.back();

}


/*=====================================================
    FINALIZAR PEDIDO
=====================================================*/

function finalizarPedido(event){

    event.preventDefault();


    const nome =
        document.getElementById("nome").value.trim();

    const telefone =
        document.getElementById("telefone").value.trim();

    const cep =
        document.getElementById("cep").value.trim();

    const pagamento =
        document.getElementById("pagamentoMetodo").value;


    if(nome === ""){

        alert("Informe seu nome.");

        return;

    }


    if(telefone === ""){

        alert("Informe seu telefone.");

        return;

    }


    if(cep === ""){

        alert("Informe o CEP.");

        return;

    }


    if(pagamento === "Escolha"){

        alert("Selecione a forma de pagamento.");

        return;

    }


    alert("Pedido finalizado com sucesso!");

}