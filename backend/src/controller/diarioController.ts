import { getRepository } from "typeorm";
import { Diario } from "../entity/diario";
import { Request,Response } from "express";

export const getAnotacao = async(request: Request, response: Response) => 
{
    const diario = await getRepository(Diario).find()
    return response.json(diario);
};

export const salvarAnotacao = async(request: Request, response: Response) => 
{
    const anotacao = await getRepository(Diario).save(request.body)
    return response.json(anotacao);
};

export const getAnotacaoUm = async(request: Request, response: Response) => 
{
    const { cod_anot } = request.params
    const anotacao = await getRepository(Diario).findOne(cod_anot)
    return response.json(anotacao);
};

export const atualizaDiario = async(request: Request, response: Response) => 
{
    const { cod_anot } = request.params
    const anotacao = await getRepository(Diario).update(cod_anot, request.body)

    if (anotacao.affected == 1) {
        const anotacaoAtualizado = await getRepository(Diario).findOne(cod_anot)
        return response.json(anotacaoAtualizado);
    }
    else
    {
        return response.status(404).json({ mensagem: 'Nada Registrado!!' })
    }    
};

export const deletaDiario = async(request: Request, response: Response) => 
{
    const { cod_anot } = request.params
    const anotacao = await getRepository(Diario).delete(cod_anot)

    if (anotacao.affected == 1) 
    {
        return response.status(200).json( { mensagem: "Excluido com sucesso!" } )
    }
    else
    {
        return response.status(404).json( { mensagem: "Não encontrado, impossivel completar tarefa!!" } )
    }
};