CREATE TABLE guiche (
  idguiche INTEGER NOT NULL,
  praca_idpraca INTEGER NOT NULL,
  numero INTEGER NULL,
  PRIMARY KEY(idguiche)
);

CREATE TABLE praca (
  idpraca INTEGER NOT NULL,
  sentido VARCHAR(45) NULL,
  PRIMARY KEY(idpraca)
);

CREATE TABLE valor (
  idvalor INTEGER NOT NULL,
  praca_idpraca INTEGER NOT NULL,
  caminhao FLOAT NULL,
  carro FLOAT NULL,
  moto FLOAT NULL,
  PRIMARY KEY(idvalor)
);

CREATE TABLE veiculo (
  placa INTEGER NOT NULL,
  praca_idpraca INTEGER NOT NULL,
  marca VARCHAR(50) NULL,
  modelo VARCHAR(50) NULL,
  cor VARCHAR(30) NULL,
  PRIMARY KEY(placa)
);