
const PessoaFisicaRepository = require("../repository/PessoaFisicaRepository")

class PessoaFisicaService {
    constructor() {
        this.pessoaFisicaRepository = new PessoaFisicaRepository()
    }

    async getCpfById(id){
        try {
            if(!id){
                throw Error("Erro, falta de paramentros !")
            }
            const pessoaFisica = await this.pessoaFisicaRepository.getPessoaFisicaById(id)
            if(!pessoaFisica){
                throw Error("Erro, pessoa fisica nao encontradao para o id : " , id)
            }
            return pessoaFisica
        } catch (error) {
            throw error
            
        }
        
    }
    async setCpfById(id, cpf){
        try {
            if(!id){
                throw Error("Erro, falta de paramentros !")
            }
            const pessoaFisica = await this.pessoaFisicaRepository.update(id, {
                cpf: cpf
            })

            if(!pessoaFisica){
                throw Error("Erro, falha ao atualizar pessoa fisica para o id : " , id)
            }
            return pessoaFisica
        } catch (error) {
            throw error
            
        }
        
    }
   
}
module.exports = PessoaFisicaService


