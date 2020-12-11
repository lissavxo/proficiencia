
const ContaBancariaRepository = require("../repository/ContaBancariaRepository")

class ContaBancariaService {
    constructor() {
        this.contaBancariaRepository = new ContaBancariaRepository()
    }

    async getById(id){
        try {
            if(!id){
                throw Error("Erro, falta de paramentros !")
            }
            const conta = await this.contaBancariaRepository.getContaById(id)
            if(!conta){
                throw Error("Erro, pessoa fisica nao encontradao para o id : " , id)
            }
            return conta
        } catch (error) {
            throw error
            
        }
        
    }
    
    async setNome(id, nome){
        try {
            if(!id){
                throw Error("Erro, falta de paramentros !")
            }
            const contaBancaria = await this.contaBancariaRepository.update(id, {
                nome: nome
            })

            if(!contaBancaria){
                throw Error("Erro, falha ao atualizar pessoa fisica para o id : " , id)
            }
            return contaBancaria
        } catch (error) {
            throw error
            
        }
        
    }
   
}
module.exports = ContaBancariaService


