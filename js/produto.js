// CRIANDO VÁRIAVEIS
/* nome das váriaveis não pode ter:
-acento
-espaço
-simbolos
-não pode começar com números 
-não deve ser escrito com a primeira letra maiúsculo
*/

// variaveis que alteram de valor 
const preco_promocional = 299.99;
const preco_antigo = 499.99;
const quantidade = 10;
const favorito = false;
const desconto = "-15%";

// variaveis que são constantes/ não alteram de valor
const nomeProduto = "mouse razer";
let avaliacoes=5;
const img_miniaturas =
  [
    "/assets/foto-2.png",
    "/assets/foto-3.png",
    "/assets/foto-4.png",
    "/assets/foto-5.png"
  ];
const img_principal = "/assets/mouse.png";
const descricao = "o mouse razer v3 HyperSpeed Sem Fio,  e o melhor do mercado tanto para jogos e trabalhar";
let frete;
// botoes e arquivos
let btn_add_carrinho;
let btn_comprar;
let btn_add_quantidade;
let btn_remover_quantidade;
let btn_calcular_frete;

// CÓDIGO PARA PREENCHER AS IMAGENS NO HTML

const lateral = document.getElementById("img-lateral");

// LENDO A QUANTIDADE DE IMAGENS CADASTRADAS E CRIANDO AS TANGS IMG

/* ForEach: percorre uma lista de itens até o final
- ele percorre o primeiro, se ver que tem outro, ele lé o outro 
- quando chega  no último ele para de ler o finaliza a execusão
- img_miniatura é chamado pq e ele que  contém a lista de imagens
- depois o ForEach é chamado para ler a lista 
- e dentro do ForEach passamos o tipo de documento lido (imagem)
*/

img_miniaturas.forEach(imagem => {
  //CRIANDO UMA VÁRIAVEL PARA RECONHECER O ID DA IMAGEM LATERAL
  const img = document.createElement("img");
  //criando o codígo que mostra as imagens no site
  img.src = imagem; //ele joga o caminho da imagem na tag img
  img.classList.add("img-lateral");//jogar a tag criada na div

  /* criando o código que substitui a imagem principal pela miniatura cliacada */
  img.addEventListener("click", () => {
    document.getElementById("imagem-maior").src = imagem;
  });// ver se a pessoa clicou na imagem

  lateral.appendChild(img);

});// fechar o ForEach

// preencher a imagem principal
document.getElementById("imagem-maior").src = img_principal;

//----------------------------------PREENCHER DADOS DO PRODUTO--------------------------------------------//
 
document.getElementById("nome-produto").textContent = nomeProduto;
document.getElementById("valor-avaliacao").textContent = avaliacoes;
document.getElementById("preco-antigo").textContent = preco_antigo;
document.getElementById("preco-promocional").textContent = preco_promocional;
document.getElementById("desconto").textContent = desconto;
//--------------------------------CORES DO PRODUTO--------------------------------------------------------//

/*
//ELE VAI LER QUANTAS CORES O PRODUTO TEM E
// VAI CRIAR BOTÕES PARA AS CORES
const listaCores = document.getElementById("cores");
Cores.forEach(cores => { // percorrer as cores cadastradas
   const botao = document.createElement("button");
   //criar um botão para cada cor que ele encontrar
   botao.textContent(cores);
   listaCores.appendChild(botao);
});
 
//-------------------------------TAMANHO DO PRODUTO-----------------------------------------------------//

//ELE VAI LER QUANTAS TAMANHOS O PRODUTO TEM E
// VAI CRIAR BOTÕES PARA OS TAMANHOS
const listatamanhos = document.getElementById("tamanhos");
Cores.forEach(cores => { // percorrer as cores cadastradas
   const botao = document.createElement("button");
   //criar um botão para cada cor que ele encontrar
   botao.textContent(tamanhos);
   listaTamanhos.appendChild(botao);
   });
*/
   //----------------------- QUANTIDADE DE PRODUTO-------------------------------//
/* O LIMITE DE QUANTIDADE VAI SER IGUAL A QUANTIDADE DE PRODUTOS QUE O LOJISTA CAASTROU NO ESTOQUE.
QUANDO O CLIENTE CLICAR NO BOTÃO = A QUANTIDADE COMPRADAD AUMENTA DE 1 EM 1.
QUANDO ELE CLICAR NO BOTAO DE - A QUANTIDADE COMPRADA DIMINIUI DE 1 EM 1 
INICIALMENTE O VALOR DA QUANTIDADE APARECE COMO 1. */

let quantidade_inicial = 1;//criar a quantidade inicial.
// chamar os botões e passar o id do HTML dentro deles
btn_add_quantidade = document.getElementById("aumentar");
btn_remover_quantidade = document.getElementById("diminuir");
const numero = document.getElementById("numero-quantidade");

// passando o valor inicial a tag html
numero.textContent = quantidade_inicial;

// criando o código de aumentar a quantidade de 1 em 1
btn_add_quantidade.addEventListener("click", () => {
  // se quantidade for memor que estoque
  if (quantidade_inicial < quantidade) {
   quantidade_inicial++;//aumentar de 1 em 1
    numero.textContent = quantidade_inicial;
  } else {
       alert("você atingiu o limite do estoque");
  }

});
 
// criando o código de diminuir a quantidade de 1 em 1
btn_remover_quantidade.addEventListener("click", () => {
  if (quantidade_inicial > 0) {
    quantidade_inicial--;//aumentar de 1 em 1
    numero.textContent = quantidade_inicial;
  }
});

