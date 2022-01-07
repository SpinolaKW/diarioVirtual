import { getRepository } from "typeorm";
import { Diario } from '../entity/User';
import { Request, Response } from "express";

export const getUsers = async(request: Request, response: Response) => {         //GET
    const user = await getRepository(Diario).find()
    return response.json(user);
};

export const saveUser = async(request: Request, response: Response)=>{          //POST
    const user = await getRepository(Diario).save(request.body)
    return response.json(user);
};

export const getUser = async (request: Request, response: Response)=>{          //GET PELO ID
    const {id} = request.params
    const user = await getRepository(Diario).findOne(id)
    return response.json(user);
};

export const updateUser = async(request: Request, response: Response) => {      //UPDATE
    const {id} = request.params
    const user = await getRepository(Diario).update(id, request.body)

    if (user.affected == 1){
        const userUpdated = await getRepository(Diario).findOne(id)
        return response.json(userUpdated);
    }
    else{
        return response.status(404).json( {message: 'não encontrado!'} )
    }
};

export const deleteUser = async(request: Request, response: Response) => {     //DELETE
    const {id} = request.params
    const user = await getRepository(Diario).delete(id)

    if (user.affected == 1){
        return response.status(200).json( {message: "excluído com sucesso!"} );
    }
    else{
        return response.status(404).json( {message: 'não encontrado!'} )
    }
};



