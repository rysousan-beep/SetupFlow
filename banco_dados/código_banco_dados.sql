/*COMENTÁRIO DE 
VÁRIAS LINHAS*/

-- COMENTÁRIO DE 1 LINHA

-- CRIANDO O BANCO DE DADOS
CREATE DATABASE SetupFlow;

-- COMANDO PARA EXCLUIR BANCO DE DADOS
 DROP DATABASE setupflow;
 
-- INICIALIZAR O BANCO DE DADOS
 USE SetupFlow;
 
 -- CRIAR TABELAS QUE NÃO TEM CHAVE ESTRANGEIRA
 
 CREATE TABLE LOJISTA(
 idLojista int primary key auto_increment,
 nome varchar(200) not null,
 cpf mediumint (12) not null unique,
 cnpj mediumint (15) unique,
 emai varchar(120) not null,
 senha varchar(13) not null,
 telefone mediumint (14)
 );
 
 -- COMANDO PARA EXCLUIR UMA TABELA
 DROP TABLE forma_pagamneto;
 
 CREATE TABLE Endereco(
idEndereco int primary key auto_increment,
rua varchar(45) not null,
cep mediumint(11) not null,
bairro varchar(45) not null,
numero int,
complemento varchar(200),
tipo varchar(45)
);

CREATE TABLE Formas_pagamento(
idFormas_pagamento int primary key auto_increment,
nome varchar(45) not null,
link varchar(200),
ativo boolean
);

CREATE TABLE Categoria(
idCategoria int primary key auto_increment,
nome varchar(100) not null
);

CREATE TABLE Marca(
idMarca int primary key auto_increment,
nome varchar(100) not null,
logo longblob
);

CREATE TABLE Tamanho(
idTamanho int primary key auto_increment,
tamamho varchar(20)
);

CREATE TABLE Loja(
idLoja int primary key auto_increment,
nome varchar(50),
whatsapp varchar(50),
instagram varchar(50),
facebook varchar(50),
linkedin varchar(50),
telefone mediumint(14) not null,
email varchar(50) not null,
Endereco_idEndereco int,
Lojista_idLojista int,

FOREIGN KEY (Endereco_idEndereco)
REFERENCES Endereco (idEndereco),

FOREIGN KEY (Lojista_idLojista)
REFERENCES Lojista (idLojista)
);

CREATE TABLE Cliente(
idCliente int primary key auto_increment,
nome varchar(200) not null,
cpf mediumint(12) not null,
telefone mediumint(15) not null,
email varchar(120) not null,
senha varchar(13) not null,
data_nascimento date ,
Loja_idLoja int,
FOREIGN KEY (Loja_idLoja) REFERENCES Loja (idLoja)
);

CREATE TABLE Cores(
idCores int primary key auto_increment,
nome varchar (45) not null,
codigo_cor varchar (45) not null
);

CREATE TABLE produto_has_cores(
produto_idproduto int,
cores_idcores int,
FOREIGN KEY (produto_idproduto) REFERENCES produto (idproduto),
FOREIGN KEY (cores_idcores) REFERENCES cores (idcores)
);

CREATE TABLE cupom(
idcupom int primary key auto_increment,
nome varchar (45) not null,
data_validade date ,
quantidade int ,
desconto float ,
Loja_idLoja int,
FOREIGN KEY (Loja_idLoja) REFERENCES Loja (idLoja)
);

CREATE TABLE categoria_has_cupom(
categoria_idcategoria int,
cupom_idcupom int,
FOREIGN KEY (categoria_idcategoria) REFERENCES categoria (idcategoria),
FOREIGN KEY (cupom_idcupom) REFERENCES cupom (idcupom)
);

CREATE TABLE produto(
idproduto int primary key auto_increment,
nome varchar (100) not null,
descricao text (1000) not null,
codigo varchar (45),
preco_antigo float ,
preco_promocional float ,
quantidade_estoque int ,
ativo tinyint ,
loja_idloja int,
marca_idmarca int ,
categorias_idcategorias int,
FOREIGN KEY (loja_idloja) REFERENCES loja (idloja),
FOREIGN KEY (marca_idmarca) REFERENCES marca (idmarca),
FOREIGN KEY (categorias_idcategorias) REFERENCES categoria (idcategoria)
);

CREATE TABLE cupom_has_produto(
cupom_idcupom int ,
produto_idproduto int, 
FOREIGN KEY (cupom_idcupom ) REFERENCES cupom (idcupom),
FOREIGN KEY (produto_idproduto) REFERENCES produto (idproduto)
);

CREATE TABLE banner(
idbanner int primary key auto_increment,
imagem longblob ,
data_inicio date ,
data_final date ,
status_visibilidade tinyint,
loja_idloja int,
FOREIGN KEY (loja_idloja) REFERENCES loja (idloja)
);

CREATE TABLE banner_has_produto(
produto_idproduto int,
banner_idbanner int, 
FOREIGN KEY (produto_idproduto) REFERENCES produto (idproduto),
FOREIGN KEY (banner_idbanner) REFERENCES banner (idbanner)
);

CREATE TABLE carrinho(
idcarrinho int primary key auto_increment,
quantidade_produto int not null,
preco_total float ,
Cliente_idCliente int,
FOREIGN KEY (Cliente_idCliente) REFERENCES Cliente (idcliente)
);

CREATE TABLE produto_has_carrinho(
carrinho_idcarrinho int,
produto_idproduto int,
FOREIGN KEY (carrinho_idcarrinho) REFERENCES carrinho (idcarrinho),
FOREIGN KEY (produto_idproduto) REFERENCES  produto (idproduto)
);
CREATE TABLE promocao(
idpromocao int primary key auto_increment,
data_inicio date not null,
data_final date not null,
valor_promocional float not null,
nome varchar (45) not null,
banner_idbanner int,
FOREIGN KEY (banner_idbanner) REFERENCES banner (idbanner)
);

CREATE TABLE produto_has_promocao(
promocao_idpromocao int,
produto_idproduto int,
FOREIGN KEY (promocao_idpromocao) REFERENCES promocao (idpromocao),
FOREIGN KEY (produto_idproduto) REFERENCES produto (idproduto)
);

CREATE TABLE categorias_has_promocao(
promocao_idpromocao int,
categorias_idcategorias int, 
FOREIGN KEY (promocao_idpromocao)  REFERENCES promocao (idpromocao),
FOREIGN KEY (categorias_idcategorias) REFERENCES categoria (idcategoria)
);

CREATE TABLE pedidos(
idpedidos int primary key auto_increment,
data_pedidos date not null,
nota_fiscal longblob not null,
data_entrega date not null,
status_entrega varchar (45) not null,
status_pagamento varchar (45) not null,
codigo varchar (45) not null,
formas_pagamento_idformas_pagamento int,
endereco_idendereco int,
loja_idloja int,
Cliente_idCliente int,
FOREIGN KEY (formas_pagamento_idformas_pagamento) REFERENCES formas_pagamento (idformas_pagamento),
FOREIGN KEY (endereco_idendereco) REFERENCES endereco (idendereco),
FOREIGN KEY (loja_idloja) REFERENCES loja (idloja),
FOREIGN KEY (Cliente_idCliente)  REFERENCES cliente (idcliente)
);
 
CREATE TABLE frete(
idfrete int primary key auto_increment,
valor float not null,
tipo varchar (45) not null,
bairro varchar (45) not null,
entregar_full boolean ,
codigo_rastreio varchar (100) not null,
pedidos_endereco_idendereco int,
pedidos_idpedidos int,
pedidos_loja_idloja int,
pedidos_cliente_idcliente int,
FOREIGN KEY (pedidos_endereco_idendereco) REFERENCES pedidos (endereco_idendereco),
FOREIGN KEY (pedidos_idpedidos)  REFERENCES pedidos (idpedidos),
FOREIGN KEY (pedidos_loja_idloja) REFERENCES pedidos (loja_idloja),
FOREIGN KEY (pedidos_cliente_idcliente) REFERENCES pedidos (cliente_idcliente)
);

CREATE TABLE cartao_pagamento(
idcartao_pagamneto int primary key auto_increment,
numero int not null,
data_vencimento date not null,
cvc int not null,
cpf mediumint (11) not null,
nome_propietario varchar(200) not null,
nome_indentificacao varchar (45) not null,
bandeira VARCHAR (45) not null,
tipo varchar (45) not null,
ativo varchar (45) ,
Cliente_idCliente int,
FOREIGN KEY (Cliente_idCliente) REFERENCES cliente (idcliente)
);

CREATE TABLE avaliacao_produto(
idavaliacao_produto int primary key auto_increment,
data_ date not null,
nota float ,
descricao text (250) ,
produto_idproduto int,
FOREIGN KEY (produto_idproduto) REFERENCES produto (idproduto)
);

CREATE TABLE cupom_has_categorias(
categoria_idcategoria int,
cupom_idcupom int,
FOREIGN KEY (categoria_idcategoria) REFERENCES categoria (idcategoria),
FOREIGN KEY (cupom_idcupom) REFERENCES cupom (idcupom)
);

CREATE TABLE endereco_has_Cliente(
Cliente_idCliente int,
endereco_idendereco int,
FOREIGN KEY (Cliente_idCliente) REFERENCES cliente (idcliente),
FOREIGN KEY (endereco_idendereco )  REFERENCES endereco (idendereco)
);

CREATE TABLE imagem_produto(
idimagem_produto int primary key auto_increment,
arquivo longblob not null,
produto_idproduto int,
FOREIGN KEY (produto_idproduto) REFERENCES produto (idproduto)
);

 CREATE TABLE pedidos_has_produto(
 produto_idproduto int,
 pedidos_idpedidos int,
 FOREIGN KEY (produto_idproduto) REFERENCES produto (idproduto),
 FOREIGN KEY (pedidos_idpedidos) REFERENCES pedidos (idpedidos)
 );