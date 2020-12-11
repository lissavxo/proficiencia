"use-strict";

const ClienteModel = require('../models/Cliente')

class ClienteRepository {
  constructor(){
    this.clienteModel = ClienteModel;
  }

  async createCliente(params){
    return await this.clienteModel.create(params);
  }

  async getClienteById(clienteId){
    return await this.clienteModel.findOne({_id: clienteId})
  }
  async getByName(name){
    return await this.clienteModel.findOne({name: name})
  }
  async getByPFId(pessoaFisicaId){
    return await this.clienteModel.findOne({pessoaFisicaId: pessoaFisicaId})
  }
  async delete(id){
    return await this.clienteModel.findByIdAndDelete({_id: id});

  }

  async update(clienteId, params){
    return await this.clienteModel.findByIdAndUpdate({_id: clienteId}, params)
  }
  
  
  async listClientesWithCpf(){
    return await this.clienteModel.aggregate([
      {
          '$lookup': {
              'from': 'pessoa_fisica', 
              'localField': 'pessoaFisicaId', 
              'foreignField': '_id', 
              'as': 'cpf'
          }
      }, {
          '$project': {
              'creationDate': 0, 
              'lastUpdateDate': 0, 
              '__v': 0
          }
      }
  ])
  }
  
}

module.exports = ClienteRepository

