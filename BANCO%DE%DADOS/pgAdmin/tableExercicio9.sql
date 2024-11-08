CREATE TABLE cliente (
  idcliente INTEGER NOT NULL,
  nomeCliente VARCHAR(100) NULL,
  emailCliente VARCHAR(200) NULL,
  telefone INTEGER NULL,
  PRIMARY KEY(idcliente)
);

CREATE TABLE fornecedor (
  idfornecedor INTEGER NOT NULL,
  nomeFornecedor VARCHAR(50) NULL,
  email VARCHAR(100) NULL,
  PRIMARY KEY(idfornecedor)
);

CREATE TABLE produto (
  idproduto INTEGER NOT NULL,
  fornecedor_idfornecedor INTEGER NOT NULL,
  nomeProduto VARCHAR(45) NULL,
  custo FLOAT NULL,
  valor FLOAT NULL,
  quantidade INTEGER NULL,
  PRIMARY KEY(idproduto)
);

CREATE TABLE telefone (
  fornecedor_idfornecedor INTEGER NOT NULL,
  telefones INTEGER NULL
);

CREATE TABLE venda (
  idvenda INTEGER NOT NULL,
  cliente_idcliente INTEGER NOT NULL,
  produto_idproduto INTEGER NOT NULL,
  produtoVenda VARCHAR(45) NULL,
  quantidadeVenda INTEGER NULL,
  dataVenda DATE NULL,
  horaVenda TIME NULL,
  PRIMARY KEY(idvenda)
);

