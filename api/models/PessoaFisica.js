const mongoose = require('mongoose');

// model
const pessoaFisicaSchema = new mongoose.Schema({
    
    cpf: { type: String, required: true},
    creationDate: { type: Date, default: () => new Date(), required: true },
    lastUpdateDate: { type: Date, default: () => new Date(), required: true }
},
{ collection: 'pessoa_fisica' }
);

module.exports = mongoose.model('pessoa_fisica', pessoaFisicaSchema);
