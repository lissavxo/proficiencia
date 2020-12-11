
const mongoose = require('mongoose');

// model
const clienteSchema = new mongoose.Schema({
    
    pessoaFisicaId: {type: mongoose.Schema.Types.ObjectId, ref: 'pessoa_fisica'},
    nome: { type: String, required: true},
    creationDate: { type: Date, default: () => new Date(), required: true },
    lastUpdateDate: { type: Date, default: () => new Date(), required: true }
},
{ collection: 'cliente' }
);

module.exports = mongoose.model('cliente', clienteSchema);

