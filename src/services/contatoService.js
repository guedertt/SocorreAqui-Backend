const contatoModel = require('../models/contatoModel');

const contatoService = {
  async getAllContatos() {
    const contatos = await contatoModel.findAll();
    return contatos;
  },

  async getContatoById(id) {
    const contato = await contatoModel.findById(id);
    return contato;
  }
};

module.exports = contatoService;
