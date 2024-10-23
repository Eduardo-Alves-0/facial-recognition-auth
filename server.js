const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Image = require('./models/Image');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

// Conectar ao MongoDB
mongoose.connect('mongodb+srv://eduardo:03022005@sistemadesegurancafacia.i8xpo.mongodb.net/?retryWrites=true&w=majority&appName=SistemaDeSegurancaFacial')
  .then(() => console.log('MongoDB conectado!'))
  .catch(err => console.error('Erro ao conectar ao MongoDB:', err));

// Rota de exemplo
app.get('/', (req, res) => {
  res.send('Sistema de Autenticação com Reconhecimento Facial');
});

// Rota para salvar a imagem
app.post('/upload-image', async (req, res) => {
  const { userId, image } = req.body;

  // Criar uma nova instância do modelo de imagem
  const newImage = new Image({
    userId,
    image,
  });

  // Salva a imagem no banco de dados
  try {
    await newImage.save(); 
    res.status(201).send('Imagem salva com sucesso!');
  } catch (error) {
    res.status(400).send('Erro ao salvar a imagem: ' + error.message);
  }
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
