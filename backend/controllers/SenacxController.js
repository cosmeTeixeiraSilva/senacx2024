import db from '../db/knex.js';

export const list_Quesitos = async (req, res) => {
    try {
        const idCompeticao = parseInt(req.params.idCompeticao);
        const dados = await db('quesitos').select('*').where('idComp', idCompeticao).orderBy('quesito');
        res.json(dados);
    } catch (error) {
        console.log("Tentando Logar no Banco deu erro....");
        res.status(500).json({ message: 'Erro ao buscar itens quando faz GET ', error });
    }
};

export const find_Competidor = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const dadosCompetidor = await db('usuarios').select().where('id', id).first();
        res.json(dadosCompetidor);
        console.log(dadosCompetidor);

    } catch (error) {

        console.log(`Tentando Localizar o competidor deu erro .... ${error}`);
        res.status(500).json({ message: 'Erro ao buscar Competidor quando faz GET ', error });

    }
};
export const carrega_Competicoes = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const competicoes = await db('inscricoes').select('*').innerJoin('competicao', 'inscricoes.idCompeticao', '=', 'competicao.id').where('inscricoes.idCompetidor', id).orderBy('nome');
        res.json(competicoes);
        console.log(competicoes);

    } catch (error) {

        console.log(`Tentando Localizar a Competicao deu erro .... ${error}`);
        res.status(500).json({ message: 'Erro ao buscar Competicao quando faz GET ', error });

    }
};
export const find_Competicao = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const dadosCompeticao = await db('competicao').select('*').where('id', id).orderBy('nome');
        res.json(dadosCompeticao);
        console.log(dadosCompeticao);

    } catch (error) {

        console.log(`Tentando Localizar a Competicao deu erro .... ${error}`);
        res.status(500).json({ message: 'Erro ao buscar Competicao quando faz GET ', error });

    }
};

export const list_competidores = async (req, res) => {
    try {
        const dados = await db('usuarios').select('*').where('nivel', 0).orderBy('nome');
        res.json(dados);
    } catch (error) {
        console.log("Tentando Logar no Banco deu erro....");
        res.status(500).json({ message: 'Erro ao buscar itens quando faz GET ', error });
    }
};

export const createItem = async (req, res) => {
    try {
        const { nome, email, celular } = req.body;
        console.log("Dados chegaram na API via POST:");
        console.log(req.body);
        await db('usuarios').insert({ nome, email, celular });
        res.status(201).json({ message: 'Item criado com sucesso' });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao criar item - POST', error });
    }
};
