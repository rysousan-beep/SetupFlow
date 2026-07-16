/*==================================================
        BANCO DE DADOS SETUPFLOW
==================================================*/





/* CRIA BANCO */
CREATE DATABASE SetupFlow;


/* SELECIONA BANCO */
USE SetupFlow;



/*==================================================
        TABELAS SEM CHAVE ESTRANGEIRA
==================================================*/



/*==================================================
        LOJISTA
==================================================*/

CREATE TABLE Lojista(

    idLojista INT PRIMARY KEY AUTO_INCREMENT,

    nome VARCHAR(200) NOT NULL,

    cpf VARCHAR(14) NOT NULL UNIQUE,

    cnpj VARCHAR(18) UNIQUE,

    email VARCHAR(120) NOT NULL,

    senha VARCHAR(255) NOT NULL,

    telefone VARCHAR(20)

);



/*==================================================
        ENDERECO
==================================================*/

CREATE TABLE Endereco(

    idEndereco INT PRIMARY KEY AUTO_INCREMENT,

    rua VARCHAR(45) NOT NULL,

    cep VARCHAR(10) NOT NULL,

    bairro VARCHAR(45) NOT NULL,

    numero INT,

    complemento VARCHAR(200),

    tipo VARCHAR(45)

);



/*==================================================
        FORMAS DE PAGAMENTO
==================================================*/

CREATE TABLE Formas_pagamento(

    idFormas_pagamento INT PRIMARY KEY AUTO_INCREMENT,

    nome VARCHAR(45) NOT NULL,

    link VARCHAR(200),

    ativo BOOLEAN DEFAULT TRUE

);



/*==================================================
        CATEGORIA
==================================================*/

CREATE TABLE Categoria(

    idCategoria INT PRIMARY KEY AUTO_INCREMENT,

    nome VARCHAR(100) NOT NULL

);



/*==================================================
        MARCA
==================================================*/

CREATE TABLE Marca(

    idMarca INT PRIMARY KEY AUTO_INCREMENT,

    nome VARCHAR(100) NOT NULL,

    logo LONGBLOB

);



/*==================================================
        TAMANHO
==================================================*/

CREATE TABLE Tamanho(

    idTamanho INT PRIMARY KEY AUTO_INCREMENT,

    tamanho VARCHAR(20)

);



/*==================================================
        CORES
==================================================*/

CREATE TABLE Cores(

    idCores INT PRIMARY KEY AUTO_INCREMENT,

    nome VARCHAR(45) NOT NULL,

    codigo_cor VARCHAR(45) NOT NULL

);


/*==================================================
              LOJA
==================================================*/


CREATE TABLE Loja(

    idLoja INT PRIMARY KEY AUTO_INCREMENT,

    nome VARCHAR(50),

    whatsapp VARCHAR(50),

    instagram VARCHAR(50),

    facebook VARCHAR(50),

    linkedin VARCHAR(50),

    telefone VARCHAR(20) NOT NULL,

    email VARCHAR(120) NOT NULL,


    Endereco_idEndereco INT,

    Lojista_idLojista INT,


    FOREIGN KEY (Endereco_idEndereco)

    REFERENCES Endereco(idEndereco),


    FOREIGN KEY (Lojista_idLojista)

    REFERENCES Lojista(idLojista)

);



/*==================================================
              CLIENTE
==================================================*/


CREATE TABLE Cliente(

    idCliente INT PRIMARY KEY AUTO_INCREMENT,

    nome VARCHAR(200) NOT NULL,

    cpf VARCHAR(14) NOT NULL,

    telefone VARCHAR(20) NOT NULL,

    email VARCHAR(120) NOT NULL,

    senha VARCHAR(255) NOT NULL,

    data_nascimento DATE,


    Loja_idLoja INT,


    FOREIGN KEY (Loja_idLoja)

    REFERENCES Loja(idLoja)

);



/*==================================================
              PRODUTO
==================================================*/


CREATE TABLE Produto(

    idProduto INT PRIMARY KEY AUTO_INCREMENT,

    nome VARCHAR(100) NOT NULL,

    descricao TEXT NOT NULL,

    codigo VARCHAR(45),

    preco_antigo FLOAT,

    preco_promocional FLOAT,

    quantidade_estoque INT,

    ativo TINYINT DEFAULT 1,


    loja_idLoja INT,

    marca_idMarca INT,

    categoria_idCategoria INT,


    FOREIGN KEY (loja_idLoja)

    REFERENCES Loja(idLoja),


    FOREIGN KEY (marca_idMarca)

    REFERENCES Marca(idMarca),


    FOREIGN KEY (categoria_idCategoria)

    REFERENCES Categoria(idCategoria)

);



/*==================================================
              CUPOM
==================================================*/


CREATE TABLE Cupom(

    idCupom INT PRIMARY KEY AUTO_INCREMENT,

    nome VARCHAR(45) NOT NULL,

    data_validade DATE,

    quantidade INT,

    desconto FLOAT,


    Loja_idLoja INT,


    FOREIGN KEY (Loja_idLoja)

    REFERENCES Loja(idLoja)

);



/*==================================================
              BANNER
==================================================*/


CREATE TABLE Banner(

    idBanner INT PRIMARY KEY AUTO_INCREMENT,

    imagem LONGBLOB,

    data_inicio DATE,

    data_final DATE,

    status_visibilidade TINYINT,


    loja_idLoja INT,


    FOREIGN KEY (loja_idLoja)

    REFERENCES Loja(idLoja)

);



/*==================================================
              CARRINHO
==================================================*/


CREATE TABLE Carrinho(

    idCarrinho INT PRIMARY KEY AUTO_INCREMENT,

    quantidade_produto INT NOT NULL,

    preco_total FLOAT,


    Cliente_idCliente INT,


    FOREIGN KEY (Cliente_idCliente)

    REFERENCES Cliente(idCliente)

);

/*==================================================
              PROMOCAO
==================================================*/


CREATE TABLE Promocao(

    idPromocao INT PRIMARY KEY AUTO_INCREMENT,

    data_inicio DATE NOT NULL,

    data_final DATE NOT NULL,

    valor_promocional FLOAT NOT NULL,

    nome VARCHAR(45) NOT NULL,


    banner_idBanner INT,


    FOREIGN KEY (banner_idBanner)

    REFERENCES Banner(idBanner)

);




/*==================================================
              PEDIDOS
==================================================*/


CREATE TABLE Pedidos(

    idPedidos INT PRIMARY KEY AUTO_INCREMENT,

    data_pedidos DATE NOT NULL,

    nota_fiscal LONGBLOB,

    data_entrega DATE,

    status_entrega VARCHAR(45) NOT NULL,

    status_pagamento VARCHAR(45) NOT NULL,

    codigo VARCHAR(45) NOT NULL,


    formas_pagamento_idFormas_pagamento INT,

    endereco_idEndereco INT,

    loja_idLoja INT,

    Cliente_idCliente INT,


    FOREIGN KEY (formas_pagamento_idFormas_pagamento)

    REFERENCES Formas_pagamento(idFormas_pagamento),


    FOREIGN KEY (endereco_idEndereco)

    REFERENCES Endereco(idEndereco),


    FOREIGN KEY (loja_idLoja)

    REFERENCES Loja(idLoja),


    FOREIGN KEY (Cliente_idCliente)

    REFERENCES Cliente(idCliente)

);




/*==================================================
              FRETE
==================================================*/


CREATE TABLE Frete(

    idFrete INT PRIMARY KEY AUTO_INCREMENT,

    valor FLOAT NOT NULL,

    tipo VARCHAR(45) NOT NULL,

    bairro VARCHAR(45) NOT NULL,

    entregar_full BOOLEAN,

    codigo_rastreio VARCHAR(100) NOT NULL,


    pedidos_idPedidos INT,


    FOREIGN KEY (pedidos_idPedidos)

    REFERENCES Pedidos(idPedidos)

);




/*==================================================
              CARTAO PAGAMENTO
==================================================*/


CREATE TABLE Cartao_pagamento(

    idCartao_pagamento INT PRIMARY KEY AUTO_INCREMENT,

    numero VARCHAR(20) NOT NULL,

    data_vencimento DATE NOT NULL,

    cvc VARCHAR(5) NOT NULL,

    cpf VARCHAR(14) NOT NULL,

    nome_proprietario VARCHAR(200) NOT NULL,

    nome_identificacao VARCHAR(45) NOT NULL,

    bandeira VARCHAR(45) NOT NULL,

    tipo VARCHAR(45) NOT NULL,

    ativo BOOLEAN DEFAULT TRUE,


    Cliente_idCliente INT,


    FOREIGN KEY (Cliente_idCliente)

    REFERENCES Cliente(idCliente)

);




/*==================================================
              AVALIACAO PRODUTO
==================================================*/


CREATE TABLE Avaliacao_produto(

    idAvaliacao_produto INT PRIMARY KEY AUTO_INCREMENT,

    data_avaliacao DATE NOT NULL,

    nota FLOAT,

    descricao TEXT,


    produto_idProduto INT,


    FOREIGN KEY (produto_idProduto)

    REFERENCES Produto(idProduto)

);




/*==================================================
              IMAGEM PRODUTO
==================================================*/


CREATE TABLE Imagem_produto(

    idImagem_produto INT PRIMARY KEY AUTO_INCREMENT,

    arquivo LONGBLOB NOT NULL,


    produto_idProduto INT,


    FOREIGN KEY (produto_idProduto)

    REFERENCES Produto(idProduto)

);

/*==================================================
        TABELAS DE RELACIONAMENTO (N:N)
==================================================*/



/*==================================================
        PRODUTO HAS CORES
==================================================*/


CREATE TABLE Produto_has_Cores(

    Produto_idProduto INT,

    Cores_idCores INT,


    FOREIGN KEY (Produto_idProduto)

    REFERENCES Produto(idProduto),


    FOREIGN KEY (Cores_idCores)

    REFERENCES Cores(idCores)

);




/*==================================================
        PRODUTO HAS PROMOCAO
==================================================*/


CREATE TABLE Produto_has_Promocao(

    Promocao_idPromocao INT,

    Produto_idProduto INT,


    FOREIGN KEY (Promocao_idPromocao)

    REFERENCES Promocao(idPromocao),


    FOREIGN KEY (Produto_idProduto)

    REFERENCES Produto(idProduto)

);




/*==================================================
        CATEGORIA HAS PROMOCAO
==================================================*/


CREATE TABLE Categoria_has_Promocao(

    Promocao_idPromocao INT,

    Categoria_idCategoria INT,


    FOREIGN KEY (Promocao_idPromocao)

    REFERENCES Promocao(idPromocao),


    FOREIGN KEY (Categoria_idCategoria)

    REFERENCES Categoria(idCategoria)

);




/*==================================================
        CUPOM HAS PRODUTO
==================================================*/


CREATE TABLE Cupom_has_Produto(

    Cupom_idCupom INT,

    Produto_idProduto INT,


    FOREIGN KEY (Cupom_idCupom)

    REFERENCES Cupom(idCupom),


    FOREIGN KEY (Produto_idProduto)

    REFERENCES Produto(idProduto)

);




/*==================================================
        CUPOM HAS CATEGORIA
==================================================*/


CREATE TABLE Cupom_has_Categoria(

    Categoria_idCategoria INT,

    Cupom_idCupom INT,


    FOREIGN KEY (Categoria_idCategoria)

    REFERENCES Categoria(idCategoria),


    FOREIGN KEY (Cupom_idCupom)

    REFERENCES Cupom(idCupom)

);




/*==================================================
        BANNER HAS PRODUTO
==================================================*/


CREATE TABLE Banner_has_Produto(

    Produto_idProduto INT,

    Banner_idBanner INT,


    FOREIGN KEY (Produto_idProduto)

    REFERENCES Produto(idProduto),


    FOREIGN KEY (Banner_idBanner)

    REFERENCES Banner(idBanner)

);




/*==================================================
        PRODUTO HAS CARRINHO
==================================================*/


CREATE TABLE Produto_has_Carrinho(

    Carrinho_idCarrinho INT,

    Produto_idProduto INT,


    FOREIGN KEY (Carrinho_idCarrinho)

    REFERENCES Carrinho(idCarrinho),


    FOREIGN KEY (Produto_idProduto)

    REFERENCES Produto(idProduto)

);




/*==================================================
        PEDIDOS HAS PRODUTO
==================================================*/


CREATE TABLE Pedidos_has_Produto(

    Produto_idProduto INT,

    Pedidos_idPedidos INT,


    FOREIGN KEY (Produto_idProduto)

    REFERENCES Produto(idProduto),


    FOREIGN KEY (Pedidos_idPedidos)

    REFERENCES Pedidos(idPedidos)

);




/*==================================================
        ENDERECO HAS CLIENTE
==================================================*/


CREATE TABLE Endereco_has_Cliente(

    Cliente_idCliente INT,

    Endereco_idEndereco INT,


    FOREIGN KEY (Cliente_idCliente)

    REFERENCES Cliente(idCliente),


    FOREIGN KEY (Endereco_idEndereco)

    REFERENCES Endereco(idEndereco)

);




/*==================================================
                INSERTS DE TESTE
==================================================*/


/* ENDERECO */

INSERT INTO Endereco
(
rua,
cep,
bairro,
numero,
complemento,
tipo
)
VALUES
(
"Rodoviário",
"77827200",
"Rodoviário",
437,
"Ao lado do SENAC",
"Comercial"
);



/* LOJISTA */

INSERT INTO Lojista
(
nome,
cpf,
email,
senha,
telefone
)
VALUES
(
"João",
"09012209022",
"joao@gmail.com",
"123abc",
"63992129510"
);



/* LOJA */

INSERT INTO Loja
(
nome,
whatsapp,
telefone,
email,
Endereco_idEndereco,
Lojista_idLojista
)
VALUES
(
"SetupFlow",
"63992129510",
"63992129510",
"setupflow@gmail.com",
1,
1
);



/* CATEGORIA */

INSERT INTO Categoria(nome)
VALUES
("Eletrônicos");



/* MARCA */

INSERT INTO Marca(nome)
VALUES
("SetupFlow");



/* COR */

INSERT INTO Cores
(
nome,
codigo_cor
)
VALUES
(
"Preto",
"#000000"
);



/* PRODUTO */

INSERT INTO Produto
(
nome,
descricao,
codigo,
preco_antigo,
preco_promocional,
quantidade_estoque,
ativo,
loja_idLoja,
marca_idMarca,
categoria_idCategoria
)
VALUES
(
"Notebook Gamer",
"Notebook para jogos e trabalho",
"NB001",
5000,
4200,
10,
1,
1,
1,
1
);



/* FORMA PAGAMENTO */

INSERT INTO Formas_pagamento
(
nome,
ativo
)
VALUES
(
"PIX",
1
);



/*==================================================
        LISTAGEM
==================================================*/


SHOW TABLES;


SELECT * FROM Lojista;

SELECT * FROM Loja;

SELECT * FROM Produto;

SELECT * FROM Cliente;

SELECT * FROM Endereco;