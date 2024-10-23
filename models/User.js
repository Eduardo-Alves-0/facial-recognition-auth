const mongoose = require('mongoose');

// Definindo o esquema do usuário
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// Criando o modelo do usuário
const User = mongoose.model('User', userSchema);

// Exportando o modelo
module.exports = User;
