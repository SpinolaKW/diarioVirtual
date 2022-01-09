import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import api from '../../services/api';
import moment from 'moment';
import { FiEdit, FiEye, FiTrash2 } from "react-icons/fi";

interface IDiario {
    cod_anot: number;
    titulo_anot: string;
    descricao: string;
    criado_em: Date;
    atualizado_em: Date;
}

const Diario: React.FC = () => {

    const [diario, setDiario] = useState<IDiario[]>([])

    useEffect(() => {
        carregaDiario()
    }, [])

    async function carregaDiario(){
        const response = await api.get('/diario')
        console.log(response);
        setDiario(response.data)
    }

    function formataData(date: Date){
        return moment(date).format('DD/MM/YYYY')
    }

    return(
        <div className='Container'>
            <br />
            <h1>Comece suas anotações agora: </h1>
            <hr />
            <Table striped bordered hover className= "text-center">
                <thead>
                    <tr>
                        <th>Anotação</th>
                        <th>Título</th>
                        <th>Descrição</th>
                        <th>Criado em</th>
                        <th>Atualizado em</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        diario.map(Diario => (
                            <tr key = {Diario.cod_anot}>
                                <td>{Diario.cod_anot}</td>
                                <td>{Diario.titulo_anot}</td>
                                <td>{Diario.descricao}</td>
                                <td>{formataData(Diario.criado_em)}</td>
                                <td>{formataData(Diario.atualizado_em)}</td>
                                <td>
                                    <Button size="sm" variant="warning"><FiEdit /></Button>{'  '}
                                    <Button size="sm" variant="primary"><FiEye /></Button>{'  '}
                                    <Button size="sm" variant="danger"><FiTrash2 /></Button>{'  '}
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </div>
    );
}

export default Diario;