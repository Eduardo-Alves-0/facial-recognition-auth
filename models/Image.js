const mongoose = require('mongoose');

// Definindo o esquema de imagem
const imageSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Referência ao modelo de usuário
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

// Criando o modelo de imagem
const Image = mongoose.model('Image', imageSchema);

// Exportando o modelo
module.exports = Image;
