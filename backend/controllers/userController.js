import db from '../db/knex.js';

export const list_Users = async (req, res) => {
    try {
        const dados = await db('Usuarios').select('*').orderBy('nome');
        //passando as msgs por variaveis
        res.status(200).json(dados)
        //res.status(200).json({message:'Conectado ao Banco de Dados',dados})
    } catch (error) {
        console.log(" Controller /list_Users Tentando Logar no Banco deu erro....");
        res.status(500).json({ message: 'Erro ao buscar itens quando faz GET ', error });
    }
};



export const find_User = async (req, res) => {

    try {
        //const dados = await db('users').select('*').where('id' = id);
        //res.json(dados);
        res.status(201).json({ message: 'Competidor Localizado' });

    } catch (error) {

        console.log("Tentando Logar no Banco deu erro....");
        res.status(500).json({ message: 'Erro ao buscar itens quando faz GET ', error });

    }
};

export const add_User = async (req, res) => {
    try {
        const { nome, email, celular } = req.body;
        console.log("Dados chegaram na API via POST:");
        console.log(req.body);
        const nivel = 0;
        await db('Usuarios').insert({ nome, email, celular,nivel });
        res.status(201).json({ message: 'Item criado com sucesso' });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao criar item - POST', error });
    }
};

export const delete_User = async (req, res) => {
    try {
        const { id } = req.params; // ID do usuário a ser deletado;
        console.log("Deletando Usuário....")

        // Exclui o usuário do banco de dados
        await db('usuarios')
            .where({ id })
            .del();

        // Retorna uma resposta de sucesso
        res.status(200).json({ message: 'Usuário excluído com sucesso.' });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao deletar Usuário', error });
    }
};

export const update_User = async (req, res) => {
    try {
        const { id } = req.params; // ID do usuário a ser deletado;
        const { nome, email, celular } = req.body; //Pegando os dados do Formulário via Post
        console.log(`Atualizando o Usuário....: ${id}`)
        // Atualiza o usuário no banco de dados
        const result = await db('usuarios')
            .where({ id })
            .update({ nome, email, celular });
        if (result) {
            console.log(result);
        } else {
            console.log('Nada Ocorreu....');

        }
        res.status(201).json({ message: `Usuário ${nome} atualizado com sucesso` });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao atualizar o Usuário', error });
    }
};
