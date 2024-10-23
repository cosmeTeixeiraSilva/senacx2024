import db from '../db/knex.js';

export const getItems = async (req, res) => {
  try {
    const dados = await db('usuarios').select('*');
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
    await db('usuarios').insert({ nome, email,celular });
    res.status(201).json({ message: 'Item criado com sucesso' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar item - POST', error });
  }
};
