import express from 'express';
import { list_Quesitos,find_Competidor, carrega_Competicoes,find_Competicao, list_competidores } from '../controllers/SenacxController.js';
const router = express.Router();

router.get('/listquesitos/:idCompeticao', list_Quesitos);
router.get('/carregacompetidores', list_competidores);
router.get('/findcompetidor/:id', find_Competidor);
router.get('/findcompeticao/:id', find_Competicao);
router.get('/carregacompeticoes/:id', carrega_Competicoes);

export default router;