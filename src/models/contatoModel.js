const db = require('../config/db');

const contatoModel = {
  async findAll() {
    const [rows] = await db.query('SELECT id, nome, numero, tipo, descricao, icone FROM contatos_emergencia ORDER BY nome ASC');
    return rows;
  },

  async findById(id) {
    const [rows] = await db.query('SELECT id, nome, numero, tipo, descricao, icone FROM contatos_emergencia WHERE id = ?', [id]);
    return rows[0] || null;
  }
};

module.exports = contatoModel;
