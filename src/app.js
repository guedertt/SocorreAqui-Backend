const express = require('express');
require('dotenv').config();

const contatosRoutes = require('./routes/contatosRoutes');

const app = express();

app.use(express.json());

app.use('/contatos', contatosRoutes);

app.get('/', (req, res) => {
  res.json({ success: true, message: 'API SocorreAqui - Back-end funcionando' });
});

app.use((req, res) => {
  res.status(404).json({ success: false, message: 'Rota não encontrada' });
});

module.exports = app;
