// ============================================================
// CADASTRO-PRODUTO.JS
// ============================================================
//
// Responsável por:
// - Capturar os IDs do HTML
// - Fazer requisições para a API
// - Cadastrar Produto
// - Cadastrar Marca
// - Cadastrar Categoria
// - Cadastrar Imagem do Produto
// - Carregar Marcas
// - Carregar Categorias
// - Carregar Produtos
// - Modal
// - Toast
// - Loading
//
// ============================================================


// ============================================================
// CONFIGURAÇÃO DA API
// ============================================================

const API_URL = "http://localhost:3000";


// ============================================================
// CAPTURA DOS ELEMENTOS DO HTML
// ============================================================


// -------------------------
// HEADER
// -------------------------

const pesquisa =
    document.getElementById("pesquisa");

const nomeUsuario =
    document.getElementById("nomeUsuario");

const avatarUsuario =
    document.getElementById("avatarUsuario");


// -------------------------
// PRODUTO
// -------------------------

const produtoNome =
    document.getElementById("produtoNome");

const produtoDescricao =
    document.getElementById("produtoDescricao");

const produtoCodigo =
    document.getElementById("produtoCodigo");

const produtoPrecoAntigo =
    document.getElementById("produtoPrecoAntigo");

const produtoPrecoPromo =
    document.getElementById("produtoPrecoPromo");

const produtoEstoque =
    document.getElementById("produtoEstoque");

const produtoMarca =
    document.getElementById("produtoMarca");

const produtoCategoria =
    document.getElementById("produtoCategoria");

const produtoStatus =
    document.getElementById("produtoStatus");

const btnProduto =
    document.getElementById("btnProduto");


// -------------------------
// MARCA
// -------------------------

const marcaNome =
    document.getElementById("marcaNome");

const marcaLogo =
    document.getElementById("marcaLogo");

const btnMarca =
    document.getElementById("btnMarca");


// -------------------------
// CATEGORIA
// -------------------------

const categoriaNome =
    document.getElementById("categoriaNome");

const btnCategoria =
    document.getElementById("btnCategoria");


// -------------------------
// IMAGEM DO PRODUTO
// -------------------------

const imagemProduto =
    document.getElementById("imagemProduto");

const imagemArquivo =
    document.getElementById("imagemArquivo");

const btnImagem =
    document.getElementById("btnImagem");


// -------------------------
// MODAL
// -------------------------

const modal =
    document.getElementById("modal");

const modalTitulo =
    document.getElementById("modalTitulo");

const modalTexto =
    document.getElementById("modalTexto");

const btnFecharModal =
    document.getElementById("btnFecharModal");


// -------------------------
// TOAST
// -------------------------

const toast =
    document.getElementById("toast");


// -------------------------
// LOADING
// -------------------------

const loading =
    document.getElementById("loading");


// ============================================================
// FUNÇÃO PARA MOSTRAR LOADING
// ============================================================

function mostrarLoading() {

    if (!loading) {
        return;
    }

    loading.classList.remove("oculto");

}


// ============================================================
// FUNÇÃO PARA ESCONDER LOADING
// ============================================================

function esconderLoading() {

    if (!loading) {
        return;
    }

    loading.classList.add("oculto");

}


// ============================================================
// FUNÇÃO TOAST
// ============================================================

function mostrarToast(mensagem, tipo = "sucesso") {

    if (!toast) {

        alert(mensagem);

        return;

    }


    toast.textContent = mensagem;

    toast.classList.remove("oculto");

    toast.classList.remove("sucesso");
    toast.classList.remove("erro");
    toast.classList.remove("aviso");

    toast.classList.add(tipo);


    setTimeout(() => {

        toast.classList.add("oculto");

    }, 4000);

}


// ============================================================
// FUNÇÃO PARA ABRIR MODAL
// ============================================================

function abrirModal(titulo, mensagem) {

    if (!modal) {
        return;
    }


    if (modalTitulo) {

        modalTitulo.textContent = titulo;

    }


    if (modalTexto) {

        modalTexto.textContent = mensagem;

    }


    modal.classList.remove("oculto");

}


// ============================================================
// FUNÇÃO PARA FECHAR MODAL
// ============================================================

function fecharModal() {

    if (!modal) {
        return;
    }


    modal.classList.add("oculto");

}


// ============================================================
// EVENTO FECHAR MODAL
// ============================================================

if (btnFecharModal) {

    btnFecharModal.addEventListener(
        "click",
        fecharModal
    );

}


// ============================================================
// FECHAR MODAL CLICANDO FORA
// ============================================================

if (modal) {

    modal.addEventListener(
        "click",
        function (event) {

            if (event.target === modal) {

                fecharModal();

            }

        }
    );

}


// ============================================================
// FUNÇÃO PADRÃO PARA REQUISIÇÕES GET
// ============================================================

async function buscarAPI(endpoint) {

    const resposta = await fetch(
        API_URL + endpoint
    );


    let dados;


    try {

        dados = await resposta.json();

    } catch (erro) {

        dados = {};

    }


    if (!resposta.ok) {

        throw new Error(
            dados.mensagem ||
            "Erro ao consultar a API."
        );

    }


    return dados;

}


// ============================================================
// CADASTRAR MARCA
// ============================================================

async function cadastrarMarca() {

    try {

        const nome =
            marcaNome.value.trim();


        // -------------------------
        // VALIDAÇÃO
        // -------------------------

        if (!nome) {

            mostrarToast(
                "Digite o nome da marca.",
                "erro"
            );

            marcaNome.focus();

            return;

        }


        const arquivo =
            marcaLogo.files[0];


        // -------------------------
        // FORMDATA
        // -------------------------

        const dados =
            new FormData();


        dados.append(
            "nome",
            nome
        );


        // O nome precisa ser "logo"
        // porque a rota utiliza:
        // upload.single("logo")

        if (arquivo) {

            dados.append(
                "logo",
                arquivo
            );

        }


        mostrarLoading();


        // -------------------------
        // REQUISIÇÃO
        // -------------------------

        const resposta =
            await fetch(
                API_URL + "/marcas",
                {
                    method: "POST",
                    body: dados
                }
            );


        let resultado;


        try {

            resultado =
                await resposta.json();

        } catch (erro) {

            resultado = {};

        }


        // -------------------------
        // ERRO
        // -------------------------

        if (!resposta.ok) {

            throw new Error(
                resultado.mensagem ||
                "Erro ao cadastrar marca."
            );

        }


        // -------------------------
        // SUCESSO
        // -------------------------

        mostrarToast(
            resultado.mensagem ||
            "Marca cadastrada com sucesso!",
            "sucesso"
        );


        // Limpa formulário

        marcaNome.value = "";

        marcaLogo.value = "";


        // Atualiza select

        await carregarMarcas();


    } catch (erro) {

        console.error(
            "Erro ao cadastrar marca:",
            erro
        );


        mostrarToast(
            erro.message ||
            "Erro ao cadastrar marca.",
            "erro"
        );


    } finally {

        esconderLoading();

    }

}


// ============================================================
// EVENTO DO BOTÃO MARCA
// ============================================================

if (btnMarca) {

    btnMarca.addEventListener(
        "click",
        cadastrarMarca
    );

}


// ============================================================
// CARREGAR MARCAS
// ============================================================

async function carregarMarcas() {

    try {

        const dados =
            await buscarAPI(
                "/marcas"
            );


        // Dependendo do seu controller,
        // pode retornar:
        //
        // { marcas: [...] }
        //
        // ou diretamente:
        //
        // [ ... ]

        let marcas;


        if (Array.isArray(dados)) {

            marcas = dados;

        } else {

            marcas =
                Array.isArray(dados.marcas)
                    ? dados.marcas
                    : [];

        }


        if (!produtoMarca) {
            return;
        }


        // Limpa select

        produtoMarca.innerHTML = "";


        // Opção padrão

        const opcao =
            document.createElement("option");

        opcao.value = "";

        opcao.textContent =
            "Selecione uma marca";

        produtoMarca.appendChild(
            opcao
        );


        // Adiciona marcas

        marcas.forEach(
            function (marca) {

                const option =
                    document.createElement("option");

                option.value =
                    marca.idMarca;

                option.textContent =
                    marca.nome;

                produtoMarca.appendChild(
                    option
                );

            }
        );


    } catch (erro) {

        console.error(
            "Erro ao carregar marcas:",
            erro
        );


        mostrarToast(
            "Não foi possível carregar as marcas.",
            "erro"
        );

    }

}


// ============================================================
// CADASTRAR CATEGORIA
// ============================================================

async function cadastrarCategoria() {

    try {

        const nome =
            categoriaNome.value.trim();


        // -------------------------
        // VALIDAÇÃO
        // -------------------------

        if (!nome) {

            mostrarToast(
                "Digite o nome da categoria.",
                "erro"
            );

            categoriaNome.focus();

            return;

        }


        mostrarLoading();


        // -------------------------
        // REQUISIÇÃO
        // -------------------------

        const resposta =
            await fetch(
                API_URL + "/categorias",
                {
                    method: "POST",

                    headers: {
                        "Content-Type":
                            "application/json"
                    },

                    body: JSON.stringify({

                        nome: nome

                    })

                }
            );


        let resultado;


        try {

            resultado =
                await resposta.json();

        } catch (erro) {

            resultado = {};

        }


        // -------------------------
        // ERRO
        // -------------------------

        if (!resposta.ok) {

            throw new Error(
                resultado.mensagem ||
                "Erro ao cadastrar categoria."
            );

        }


        // -------------------------
        // SUCESSO
        // -------------------------

        mostrarToast(
            resultado.mensagem ||
            "Categoria cadastrada com sucesso!",
            "sucesso"
        );


        // Limpa

        categoriaNome.value = "";


        // Atualiza select

        await carregarCategorias();


    } catch (erro) {

        console.error(
            "Erro ao cadastrar categoria:",
            erro
        );


        mostrarToast(
            erro.message ||
            "Erro ao cadastrar categoria.",
            "erro"
        );


    } finally {

        esconderLoading();

    }

}


// ============================================================
// EVENTO DO BOTÃO CATEGORIA
// ============================================================

if (btnCategoria) {

    btnCategoria.addEventListener(
        "click",
        cadastrarCategoria
    );

}


// ============================================================
// CARREGAR CATEGORIAS
// ============================================================

async function carregarCategorias() {

    try {

        const dados =
            await buscarAPI(
                "/categorias"
            );


        let categorias;


        // Seu controller retorna:
        //
        // {
        //    sucesso: true,
        //    categorias: [...]
        // }

        if (Array.isArray(dados)) {

            categorias = dados;

        } else {

            categorias =
                Array.isArray(dados.categorias)
                    ? dados.categorias
                    : [];

        }


        if (!produtoCategoria) {
            return;
        }


        // Limpa

        produtoCategoria.innerHTML = "";


        // Opção padrão

        const opcao =
            document.createElement("option");

        opcao.value = "";

        opcao.textContent =
            "Selecione uma categoria";

        produtoCategoria.appendChild(
            opcao
        );


        // Adiciona categorias

        categorias.forEach(
            function (categoria) {

                const option =
                    document.createElement("option");

                option.value =
                    categoria.idCategoria;

                option.textContent =
                    categoria.nome;

                produtoCategoria.appendChild(
                    option
                );

            }
        );


    } catch (erro) {

        console.error(
            "Erro ao carregar categorias:",
            erro
        );


        mostrarToast(
            "Não foi possível carregar as categorias.",
            "erro"
        );

    }

}


// ============================================================
// CADASTRAR PRODUTO
// ============================================================

async function cadastrarProduto() {

    try {

        // -------------------------
        // CAPTURA DOS DADOS
        // -------------------------

        const nome =
            produtoNome.value.trim();

        const descricao =
            produtoDescricao.value.trim();

        const codigo =
            produtoCodigo.value.trim();

        const precoAntigo =
            produtoPrecoAntigo.value;

        const precoPromo =
            produtoPrecoPromo.value;

        const estoque =
            produtoEstoque.value;

        const marca =
            produtoMarca.value;

        const categoria =
            produtoCategoria.value;

        const status =
            produtoStatus.value;


        // -------------------------
        // VALIDAÇÕES
        // -------------------------

        if (!nome) {

            mostrarToast(
                "Informe o nome do produto.",
                "erro"
            );

            produtoNome.focus();

            return;

        }


        if (!descricao) {

            mostrarToast(
                "Informe a descrição do produto.",
                "erro"
            );

            produtoDescricao.focus();

            return;

        }


        if (!codigo) {

            mostrarToast(
                "Informe o código do produto.",
                "erro"
            );

            produtoCodigo.focus();

            return;

        }


        if (!precoPromo) {

            mostrarToast(
                "Informe o preço de promoção.",
                "erro"
            );

            produtoPrecoPromo.focus();

            return;

        }


        if (!estoque) {

            mostrarToast(
                "Informe o estoque.",
                "erro"
            );

            produtoEstoque.focus();

            return;

        }


        if (!marca) {

            mostrarToast(
                "Selecione uma marca.",
                "erro"
            );

            produtoMarca.focus();

            return;

        }


        if (!categoria) {

            mostrarToast(
                "Selecione uma categoria.",
                "erro"
            );

            produtoCategoria.focus();

            return;

        }


        // -------------------------
        // OBJETO
        // -------------------------

        const produto = {

            nome: nome,

            descricao: descricao,

            codigo: codigo,

            precoAntigo:
                precoAntigo
                    ? Number(precoAntigo)
                    : 0,

            precoPromo:
                Number(precoPromo),

            estoque:
                Number(estoque),

            Marca_idMarca:
                Number(marca),

            Categoria_idCategoria:
                Number(categoria),

            status:
                status === "true"

        };


        console.log(
            "Produto enviado:",
            produto
        );


        mostrarLoading();


        // -------------------------
        // ENVIA
        // -------------------------

        const resposta =
            await fetch(
                API_URL + "/produtos",
                {
                    method: "POST",

                    headers: {
                        "Content-Type":
                            "application/json"
                    },

                    body:
                        JSON.stringify(produto)

                }
            );


        let resultado;


        try {

            resultado =
                await resposta.json();

        } catch (erro) {

            resultado = {};

        }


        // -------------------------
        // ERRO
        // -------------------------

        if (!resposta.ok) {

            throw new Error(
                resultado.mensagem ||
                "Erro ao cadastrar produto."
            );

        }


        // -------------------------
        // SUCESSO
        // -------------------------

        mostrarToast(
            resultado.mensagem ||
            "Produto cadastrado com sucesso!",
            "sucesso"
        );


        // Atualiza produtos

        await carregarProdutos();


        // Limpa formulário

        produtoNome.value = "";

        produtoDescricao.value = "";

        produtoCodigo.value = "";

        produtoPrecoAntigo.value = "";

        produtoPrecoPromo.value = "";

        produtoEstoque.value = "";

        produtoMarca.value = "";

        produtoCategoria.value = "";

        produtoStatus.value = "true";


    } catch (erro) {

        console.error(
            "Erro ao cadastrar produto:",
            erro
        );


        mostrarToast(
            erro.message ||
            "Erro ao cadastrar produto.",
            "erro"
        );


    } finally {

        esconderLoading();

    }

}


// ============================================================
// EVENTO DO BOTÃO PRODUTO
// ============================================================

if (btnProduto) {

    btnProduto.addEventListener(
        "click",
        cadastrarProduto
    );

}


// ============================================================
// CARREGAR PRODUTOS
// ============================================================

async function carregarProdutos() {

    try {

        const dados =
            await buscarAPI(
                "/produtos"
            );


        let produtos;


        if (Array.isArray(dados)) {

            produtos = dados;

        } else {

            produtos =
                Array.isArray(dados.produtos)
                    ? dados.produtos
                    : [];

        }


        if (!imagemProduto) {
            return;
        }


        // Limpa

        imagemProduto.innerHTML = "";


        // Opção padrão

        const opcao =
            document.createElement("option");

        opcao.value = "";

        opcao.textContent =
            "Selecione um produto";

        imagemProduto.appendChild(
            opcao
        );


        // Adiciona produtos

        produtos.forEach(
            function (produto) {

                const option =
                    document.createElement("option");

                option.value =
                    produto.idProduto;

                option.textContent =
                    produto.nome;

                imagemProduto.appendChild(
                    option
                );

            }
        );


    } catch (erro) {

        console.error(
            "Erro ao carregar produtos:",
            erro
        );


        mostrarToast(
            "Não foi possível carregar os produtos.",
            "erro"
        );

    }

}


// ============================================================
// CADASTRAR IMAGEM DO PRODUTO
// ============================================================

async function cadastrarImagem() {

    try {

        const produtoId =
            imagemProduto.value;

        const arquivo =
            imagemArquivo.files[0];


        // -------------------------
        // VALIDAÇÃO
        // -------------------------

        if (!produtoId) {

            mostrarToast(
                "Selecione um produto.",
                "erro"
            );

            imagemProduto.focus();

            return;

        }


        if (!arquivo) {

            mostrarToast(
                "Selecione uma imagem.",
                "erro"
            );

            imagemArquivo.focus();

            return;

        }


        // -------------------------
        // FORMDATA
        // -------------------------

        const dados =
            new FormData();


        dados.append(
            "produto",
            produtoId
        );


        dados.append(
            "imagem",
            arquivo
        );


        mostrarLoading();


        // -------------------------
        // ENVIA
        // -------------------------

        const resposta =
            await fetch(
                API_URL + "/imagens-produto",
                {
                    method: "POST",
                    body: dados
                }
            );


        let resultado;


        try {

            resultado =
                await resposta.json();

        } catch (erro) {

            resultado = {};

        }


        // -------------------------
        // ERRO
        // -------------------------

        if (!resposta.ok) {

            throw new Error(
                resultado.mensagem ||
                "Erro ao cadastrar imagem."
            );

        }


        // -------------------------
        // SUCESSO
        // -------------------------

        mostrarToast(
            resultado.mensagem ||
            "Imagem cadastrada com sucesso!",
            "sucesso"
        );


        // Limpa

        imagemProduto.value = "";

        imagemArquivo.value = "";


    } catch (erro) {

        console.error(
            "Erro ao cadastrar imagem:",
            erro
        );


        mostrarToast(
            erro.message ||
            "Erro ao cadastrar imagem.",
            "erro"
        );


    } finally {

        esconderLoading();

    }

}


// ============================================================
// EVENTO DO BOTÃO IMAGEM
// ============================================================

if (btnImagem) {

    btnImagem.addEventListener(
        "click",
        cadastrarImagem
    );

}


// ============================================================
// PESQUISA
// ============================================================

if (pesquisa) {

    pesquisa.addEventListener(
        "input",
        function () {

            const texto =
                pesquisa.value
                    .toLowerCase()
                    .trim();


            console.log(
                "Pesquisa:",
                texto
            );

        }
    );

}


// ============================================================
// INICIALIZAÇÃO
// ============================================================

async function iniciarPagina() {

    try {

        mostrarLoading();


        // Carrega os dados dos selects

        await Promise.all([

            carregarMarcas(),

            carregarCategorias(),

            carregarProdutos()

        ]);


    } catch (erro) {

        console.error(
            "Erro ao iniciar página:",
            erro
        );


    } finally {

        esconderLoading();

    }

}


// ============================================================
// INICIAR
// ============================================================

document.addEventListener(
    "DOMContentLoaded",
    iniciarPagina
);

//======================================================
// CADASTRAR IMAGEM DO PRODUTO
//======================================================

document.getElementById("btnImagem")
.addEventListener("click", function () {



    // capturar dados

    const produto =
        document.getElementById("imagemProduto").value;



    const arquivo =
        document.getElementById("imagemArquivo").files[0];




    // validar

    if (produto === "") {


        alert("Selecione o produto.");

        return;

    }



    if (!arquivo) {


        alert("Selecione uma imagem.");

        return;

    }




    // criar FormData

    const imagem = new FormData();



    imagem.append(
        "Produto_idProduto",
        produto
    );



    imagem.append(
        "imagem",
        arquivo
    );





    // enviar para servidor

    fetch(`${API}/imagens`, {


        method: "POST",


        body: imagem


    })


    .then(response => response.json())


    .then(data => {


        console.log(
            "Imagem cadastrada:",
            data
        );



        alert(
            "Imagem cadastrada com sucesso!"
        );



        document.getElementById(
            "imagemArquivo"
        ).value = "";



    })


    .catch(error => {


        console.error(
            "Erro ao cadastrar imagem:",
            error
        );


        alert(
            "Erro ao cadastrar imagem."
        );


    });



});





//======================================================
// CARREGAR PRODUTOS AO ABRIR A PÁGINA
//======================================================

document.addEventListener(
    "DOMContentLoaded",
    function () {


        listarProdutosImagem();


    }
);



//======================================================
// LISTAR MARCAS
//======================================================
 
function listarMarcas() {
 
    fetch(`${API}/marcas`)
        .then(response => response.json())
        .then(data => {
 
            const select = document.getElementById("produtoMarca");
 
            // limpar o select
            select.innerHTML = "";
 
            // opção inicial
            const opcaoInicial = document.createElement("option");
            opcaoInicial.value = "";
            opcaoInicial.textContent = "Selecione uma marca";
            select.appendChild(opcaoInicial);
 
            // adicionar as marcas
            data.forEach(marca => {
 
                const option = document.createElement("option");
 
                option.value = marca.idMarca;
                option.textContent = marca.nome;
 
                select.appendChild(option);
 
            });
 
        })
        .catch(error => {
 
            console.error("Erro ao listar marcas:", error);
 
        });
 
}

//======================================================
// LISTAR CATEGORIAS
//======================================================
 
function listarCategorias() {
 
    fetch(`${API}/categorias`)
        .then(response => response.json())
        .then(data => {
 
            const select = document.getElementById("produtoCategoria");
 
            // limpar o select
            select.innerHTML = "";
 
            // opção inicial
            const opcaoInicial = document.createElement("option");
            opcaoInicial.value = "";
            opcaoInicial.textContent = "Selecione uma categoria";
            select.appendChild(opcaoInicial);
 
            // adicionar as categorias
            data.forEach(categoria => {
 
                const option = document.createElement("option");
 
                option.value = categoria.idCategoria;
                option.textContent = categoria.nome;
 
                select.appendChild(option);
 
            });
 
        })
        .catch(error => {
 
            console.error("Erro ao listar categorias:", error);
 
        });
 
}
 
//======================================================
// CADASTRO MARCA
//======================================================

document.getElementById("btnMarca").addEventListener("click", function () {
    // Capturar os dados dos inputs
    const marcaNome = document.getElementById("marcaNome").value.trim();
    const inputLogo = document.getElementById("marcaLogo");
    const marcaLogo = inputLogo.files[0];

    // Validação dos campos obrigatórios
    if (marcaNome === "") {
        alert("Por favor, preencha o nome da marca.");
        return;
    }

    if (!marcaLogo) {
        alert("Por favor, selecione uma imagem de logo.");
        return;
    }

    // Usar FormData para enviar arquivos binários
    const formData = new FormData();
    formData.append("nome", marcaNome);
    formData.append("logo", marcaLogo); // O multer no backend capturará este campo

    // Enviar dados para o backend
    fetch("http://localhost:3000/marcas", {
        method: "POST",
        body: formData
    })
    .then(async response => {
        const data = await response.json();
        if (!response.ok) {
            throw new Error(data.message || "Erro no servidor");
        }
        return data;
    })
    .then(data => {
        console.log("Marca cadastrada:", data);
        alert("Marca cadastrada com sucesso!");
        
        // Limpar os campos após o envio
        document.getElementById("marcaNome").value = "";
        inputLogo.value = "";
    })
    .catch(error => {
        console.error("Erro ao cadastrar marca:", error);
        alert("Erro ao cadastrar marca: " + error.message);
    });
});



 
//======================================================
// CARREGAR DADOS NOS SELECTS
//======================================================
 
document.addEventListener("DOMContentLoaded", function () {
 
    listarMarcas();
    listarCores();
    listarTamanhos();
    listarCategorias();
 
});



//======================================================
// CADASTRO PRODUTO
//======================================================

document.getElementById("btnProduto").
addEventListener("click", function () {


    //==================================================
    // CAPTURAR DADOS DOS INPUTS
    //==================================================

    const nome =
        document.getElementById("produtoNome").value;


    const descricao =
        document.getElementById("produtoDescricao").value;


    const codigo =
        document.getElementById("produtoCodigo").value;


    const precoAntigo =
        document.getElementById("produtoPrecoAntigo").value;


    const precoPromo =
        document.getElementById("produtoPrecoPromo").value;


    const estoque =
        document.getElementById("produtoEstoque").value;



    //==================================================
    // CAPTURAR SELECTS
    //==================================================

    const marca =
        document.getElementById("produtoMarca").value;


    const cor =
        document.getElementById("produtoCor").value;


    const tamanho =
        document.getElementById("produtoTamanho").value;


    const categoria =
        document.getElementById("produtoCategoria").value;


    const status =
        document.getElementById("produtoStatus").value;



    //==================================================
    // VALIDAÇÃO
    //==================================================

    if (
        nome === "" ||
        codigo === "" ||
        precoAntigo === "" ||
        precoPromo === "" ||
        estoque === "" ||
        marca === "" ||
        cor === "" ||
        tamanho === "" ||
        categoria === ""
    ) {

        alert("Preencha todos os campos obrigatórios.");
        return;

    }



    //==================================================
    // CRIAR OBJETO PRODUTO
    //==================================================

    const produto = {


        nome: nome,

        descricao: descricao,

        codigo: codigo,

        precoAntigo: precoAntigo,

        precoPromo: precoPromo,

        estoque: estoque,

        status: status,


        Marca_idMarca: marca,

        Cores_idCores: cor,

        Tamanho_idTamanho: tamanho,

        Categoria_idCategoria: categoria


    };



    //==================================================
    // ENVIAR PARA O SERVIDOR
    //==================================================

    fetch("http://localhost:3000/produtos", {

        method: "POST",

        headers: {

            "Content-Type": "application/json"

        },

        body: JSON.stringify(produto)

    })


    .then(response => response.json())


    .then(data => {


        console.log("Produto cadastrado:", data);


        alert("Produto cadastrado com sucesso!");



        // limpar formulário

        document.getElementById("produtoNome").value = "";

        document.getElementById("produtoDescricao").value = "";

        document.getElementById("produtoCodigo").value = "";

        document.getElementById("produtoPrecoAntigo").value = "";

        document.getElementById("produtoPrecoPromo").value = "";

        document.getElementById("produtoEstoque").value = "";


    })


    .catch(error => {


        console.error("Erro ao cadastrar produto:", error);


        alert("Erro ao cadastrar produto.");


    });


});



//======================================================
// CADASTRAR IMAGEM DO PRODUTO
//======================================================

document.getElementById("btnImagem")
.addEventListener("click", function () {



    // capturar dados

    const produto =
        document.getElementById("imagemProduto").value;



    const arquivo =
        document.getElementById("imagemArquivo").files[0];




    // validar

    if (produto === "") {


        alert("Selecione o produto.");

        return;

    }



    if (!arquivo) {


        alert("Selecione uma imagem.");

        return;

    }




    // criar FormData

    const imagem = new FormData();



    imagem.append(
        "Produto_idProduto",
        produto
    );



    imagem.append(
        "imagem",
        arquivo
    );





    // enviar para servidor

    fetch(`${API}/imagens`, {


        method: "POST",


        body: imagem


    })


    .then(response => response.json())


    .then(data => {


        console.log(
            "Imagem cadastrada:",
            data
        );



        alert(
            "Imagem cadastrada com sucesso!"
        );



        document.getElementById(
            "imagemArquivo"
        ).value = "";



    })


    .catch(error => {


        console.error(
            "Erro ao cadastrar imagem:",
            error
        );


        alert(
            "Erro ao cadastrar imagem."
        );


    });



});





//======================================================
// CARREGAR PRODUTOS AO ABRIR A PÁGINA
//======================================================

document.addEventListener(
    "DOMContentLoaded",
    function () {


        listarProdutosImagem();


    }
);