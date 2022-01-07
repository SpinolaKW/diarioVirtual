import { Router, request, response, Request, Response } from 'express'

import { getAnotacao } from './controller/diarioController';
import { salvarAnotacao } from './controller/diarioController';
import { getAnotacaoUm } from './controller/diarioController';
import { atualizaDiario } from './controller/diarioController';
import { deletaDiario } from './controller/diarioController';

const rotas = Router()

rotas.get('/diario', getAnotacao)
rotas.post('/diarioSave', salvarAnotacao)
rotas.get('/diario/:cod_anot', getAnotacaoUm)
rotas.put('/diarioAtualizado/:cod_anot', atualizaDiario)
rotas.delete('/diarioDeletado/:cod_anot', deletaDiario)

export default rotas