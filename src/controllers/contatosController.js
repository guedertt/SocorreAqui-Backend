const contatoService = require('../services/contatoService');

const contatosController = {
  async listAll(req, res) {
    try {
      const contatos = await contatoService.getAllContatos();
      return res.status(200).json({ success: true, data: contatos });
    } catch (err) {
      console.error('Erro listAll contatos:', err);
      return res.status(500).json({ success: false, message: 'Erro no servidor' });
    }
  },

  async getOne(req, res) {
    try {
      const id = parseInt(req.params.id, 10);
      if (isNaN(id)) return res.status(400).json({ success: false, message: 'ID inválido' });

      const contato = await contatoService.getContatoById(id);
      if (!contato) return res.status(404).json({ success: false, message: 'Contato não encontrado' });

      return res.status(200).json({ success: true, data: contato });
    } catch (err) {
      console.error('Erro getOne contato:', err);
      return res.status(500).json({ success: false, message: 'Erro no servidor' });
    }
  }
};

module.exports = contatosController;
