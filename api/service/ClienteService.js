
const ClienteRepository = require("../repository/ClienteRepository")

class ClienteService {
    constructor() {
        this.clienteRepository = new ClienteRepository()
    }

    async getById(id){
        try {
            if(!id){
                throw Error("Erro, falta de paramentros !")
            }
            const pessoaFisica = await this.clienteRepository.getClienteById(id)
            if(!pessoaFisica){
                throw Error("Erro, pessoa fisica nao encontradao para o id : " , id)
            }
            return pessoaFisica
        } catch (error) {
            throw error
            
        }
        
    }
    async getByName(name){
        try {
            if(!id){
                throw Error("Erro, falta de paramentros !")
            }
            const cliente = await this.clienteRepository.getByName(name)
            if(!cliente){
                throw Error("Erro, pessoa fisica nao encontradao para o id : " , id)
            }
            return cliente
        } catch (error) {
            throw error
            
        }
        
    }
    async setNomeById(id, nome){
        try {
            if(!id){
                throw Error("Erro, falta de paramentros !")
            }
            const cliente = await this.clienteRepository.update(id, {
                nome: nome
            })

            if(!cliente){
                throw Error("Erro, falha ao atualizar pessoa fisica para o id : " , id)
            }
            return cliente
        } catch (error) {
            throw error
            
        }
        
    }
   
}
module.exports = ClienteService


