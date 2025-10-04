import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import routerLogin from './infrastructure/Router/LoginRoutes';
import routerUser from './infrastructure/Router/UserRoutes';

const app = express();

app.use(cors())

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rutas
app.use('/user', routerUser);
app.use('/auth', routerLogin);

// Ruta de prueba
app.get('/health', (req, res) => {
    res.json({ status: 'OK', message: 'API funcionando correctamente' });
});

// Manejo de rutas no encontradas
app.use((req, res) => {
    res.status(404).json({ 
        success: false,
        error: 'Ruta no encontrada' 
    });
});

// Manejo de errores global
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.error('Error no manejado:', err);
    res.status(500).json({ 
        success: false,
        error: 'Error interno del servidor' 
    });
});

export default app;