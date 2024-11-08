CREATE TABLE composição (
  Predio_idPredio INTEGER NOT NULL,
  Sala_idSala INTEGER NOT NULL,
  PRIMARY KEY(Predio_idPredio, Sala_idSala)
);

CREATE TABLE Predio (
  idPredio INTEGER NOT NULL,
  nome VARCHAR(255) NOT NULL,
  PRIMARY KEY(idPredio)
);

CREATE TABLE Sala (
  idSala INTEGER NOT NULL,
  nome VARCHAR(255) NOT NULL,
  predio VARCHAR(255) NOT NULL,
  PRIMARY KEY(idSala)
);

