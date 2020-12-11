"use-strict";

const ContaBancariaModel = require('../models/ContaBancaria')

class ContaBancariaRepository {
  constructor(){
    this.contaBancariaModel = ContaBancariaModel;
  }
  async delete(id){
    return await this.contaBancariaModel.findByIdAndDelete({_id: id});


  }
  async getByPFId(pessoaFisicaId){
    return await this.contaBancariaModel.findOne({pessoaFisicaId: pessoaFisicaId})
  }
  async createConta(params){
    return await this.contaBancariaModel.create(params);
  }

  async getContaById(contaId){
    return await this.contaBancariaModel.findOne({_id: contaId})
  }
  async update(contaId, params){
    return await this.contaBancariaModel.findByIdAndUpdate({_id: contaId}, params)
  }

  
}

module.exports = ContaBancariaRepository

