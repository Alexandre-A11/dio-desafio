-- Active: 1656430386048@@127.0.0.1@3306@dio_db
CREATE TABLE pessoas (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(70) NOT NULL,
    nascimento DATE
);

INSERT INTO pessoas (nome, nascimento) VALUES ('Karen', "1992-09-01");
INSERT INTO pessoas (nome, nascimento) VALUES ('Lucas', "1996-03-01");
INSERT INTO pessoas (nome, nascimento) VALUES ('Fernanda', '1996-06-01');

SELECT * FROM pessoas;
SELECT nome FROM pessoas;
UPDATE pessoas  SET nome="Karen K." WHERE id=1;
UPDATE pessoas  SET nome="Lucas R." WHERE nome="Lucas";
DELETE FROM pessoas WHERE id=2;
-- Informações deletadas são irrecuperáveis.
-- Recomendável usar Select para confirmar informações antes de deleta-las. 
INSERT INTO pessoas (nome, nascimento) VALUES ('Lucas', "1996-03-01");
SELECT * FROM pessoas ORDER BY nome;
SELECT * FROM pessoas ORDER BY nome DESC;
ALTER TABLE pessoas ADD sexo VARCHAR(1) NOT NULL AFTER nascimento;
UPDATE pessoas SET sexo="F" WHERE id!=4;
UPDATE pessoas SET sexo="M" WHERE id=4;
SELECT COUNT(id), sexo FROM pessoas GROUP BY sexo;