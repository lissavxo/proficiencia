"use-strict";
 const PessoaFisicaRepository = require("../../repository/PessoaFisicaRepository");
 const ClienteRepository = require("../../repository/ClienteRepository");
 const ContaBancariaRepository = require("../../repository/ContaBancariaRepository");

 const pessoaFisicaRepository = new PessoaFisicaRepository()
 const clienteRepository = new ClienteRepository()
 const contaBancariaRepository = new ContaBancariaRepository()
 const functions =  {

    async update(req, res) {
        const { id } = req.params;
        const params = req.body;
        try{

            const response = await clienteRepository.update(id, params)
            if(!response){
                return res.json({ Erro: "Erro ao atualizar pessoa fisica" })
            }
            return res.json(response)
        } catch (error) {
            return res.json(error)

        }
    },
    async delete(req, res){

        try{
            const {id} = req.params
        
            await pessoaFisicaRepository.delete(id)
            
            const contato = await clienteRepository.getByPFId(id)
            if(!contato){
                return res.json({ Erro: "Erro ao deletar contato para pessoa fisica" })
            }
            console.log(contato)

            await clienteRepository.delete(contato._id)

            const conta =  await contaBancariaRepository.getByPFId(id)
            console.log(conta)
            if(!conta){
                return res.json({ Erro: "Erro ao deletar conta para pessoa fisica" })
            }
            await contaBancariaRepository.delete(conta._id)
            return res.json({
                message: "Success"
            })
        } catch (error) {
            return res.json({message:error.message})

        }
    },
    async create(req, res) {

        const {
            cpf,
            nome
        } = req.body;

        try{

            const response = await pessoaFisicaRepository.createPessoaFisica({cpf:cpf})
            
            if(!response){
                return res.json({ Erro: "Erro ao criar pessoa fisica" })
            }
            const contato  = await clienteRepository.createCliente({
                pessoaFisicaId: response._id,
                nome: nome,
            })
            if(!contato){
                return res.json({ Erro: "Erro ao criar contato para pessoa fisica" })
            }
            const conta =  await contaBancariaRepository.createConta({
                pessoaFisicaId: response._id,
                saldo:"0"
            })
            if(!conta){
                return res.json({ Erro: "Erro ao criar conta para pessoa fisica" })
            }
            return res.json({
                contato,
                conta
            })
        } catch (error) {
            return res.json(error)

        }
    },
    async getPessoaFisicaById(req, res) {
        const { id } = req.params
        
        try{

            const response = await pessoaFisicaRepository.getPessoaFisicaById(id)
            if(!response){
                return res.json({ Erro: "Erro ao achar pessoa fisica" })
            }
            return res.json(response)
        } catch (error) {
            return res.json(error)

        }
    },

    async listPessoaFisica(req, res){

        try{

            const response = await pessoaFisicaRepository.listPessoaFisica()
            if(!response){
                return res.json({ Erro: "Erro ao achar pessoa fisica" })
            }
            return res.json(response)
        } catch (error) {
            return res.json(error)

        }
    },
    async listClienteEPessoaFisica(req, res){
       
        try{

            const response = await clienteRepository.listClientesWithCpf()
            if(!response){
                return res.json({ Erro: "Erro ao achar pessoa fisica" })
            }
            return res.json(response)
        } catch (error) {
            return res.json(error)

        }
    }    
}

module.exports = functions
