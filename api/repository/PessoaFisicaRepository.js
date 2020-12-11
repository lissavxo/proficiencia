"use-strict";

const PessoaFisicaModel = require('../models/PessoaFisica')

class PessoaFisicaRepository {
  constructor(){
    this.pessoaFisicaModel = PessoaFisicaModel;
  }

  async createPessoaFisica(params){
    return await this.pessoaFisicaModel.create(params);
  }

  async getPessoaFisicaById(pessoaFisicaId){
    return await this.pessoaFisicaModel.findOne({_id: pessoaFisicaId})
  }
  async delete(id){
    return await this.pessoaFisicaModel.findByIdAndDelete({_id: id});

  }
  async update(pessoaFisicaId, params){
    return await this.pessoaFisicaModel.findByIdAndUpdate({_id: pessoaFisicaId}, params)
  }

  async listPessoaFisica(){
    return await this.pessoaFisicaModel.find()
  }

  
  
}

module.exports = PessoaFisicaRepository

