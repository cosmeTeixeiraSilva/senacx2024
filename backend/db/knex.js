import knex from 'knex';
import { config as dotenvConfig } from 'dotenv';

dotenvConfig();  // Carregar as variáveis de ambiente do arquivo .env

const db = knex({
    client: 'mysql2',
    connection: {
        host: 'localhost',
        port: 3306,  // Adiciona a porta separada
        user:'root',
        password:'root',
        database: 'cis',
    },
    pool: { min: 2, max: 20 }, // Configuração de pool de conexões
    debug: true // Ativando o modo de debug
});

export default db;
