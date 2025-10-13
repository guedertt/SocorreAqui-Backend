
CREATE DATABASE IF NOT EXISTS socorreaqui;
USE socorreaqui;

CREATE TABLE contatos_emergencia (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  numero VARCHAR(20) NOT NULL,
  tipo VARCHAR(50),
  descricao VARCHAR(255),
  icone VARCHAR(100)
);


INSERT INTO contatos_emergencia (nome, numero, tipo, descricao, icone)
VALUES
('Polícia Militar', '190', 'Polícia', 'Atendimento policial emergencial', 'police-icon'),
('Bombeiros', '193', 'Bombeiro', 'Emergência de incêndio e salvamento', 'fire-icon'),
('SAMU', '192', 'Saúde', 'Serviço de Atendimento Móvel de Urgência', 'health-icon'),
('Defesa Civil', '199', 'Defesa Civil', 'Ajuda em desastres e suporte civil', 'defense-icon');
