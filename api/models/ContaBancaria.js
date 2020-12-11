
const mongoose = require('mongoose');

// model
const contaBancariaSchema = new mongoose.Schema({
    
    pessoaFisicaId: {type: mongoose.Schema.Types.ObjectId, ref: 'pessoa_fisica'},
    saldo: { type: Number, required: true},
    creationDate: { type: Date, default: () => new Date(), required: true },
    lastUpdateDate: { type: Date, default: () => new Date(), required: true }
},
{ collection: 'conta_bancaria' }
);

module.exports = mongoose.model('conta_bancaria', contaBancariaSchema);

