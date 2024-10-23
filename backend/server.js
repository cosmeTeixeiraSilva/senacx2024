import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
//Importando as Rotas
import routesIndex from './routes/index.js'; // Usando rotas para o Index
import routesUsuarios from './routes/users.js'; // Usando rotas para o Index
import routesSenacX from './routes/senacx.js'; // Usando rotas para o Index

import cors from 'cors';
const app = express();
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT'],
    allowedHeaders: ['Content-Type', 'Autorization']

}));
app.use(express.json());
app.use('/api/index', routesIndex);
app.use('/api/users', routesUsuarios);
app.use('/api/senacx', routesSenacX);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
