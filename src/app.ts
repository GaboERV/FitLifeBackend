import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import routerLogin from './infrastructure/Router/LoginRoutes';
import routerUser from './infrastructure/Router/UserRoutes';
import routerAsignacionEjercicio from './infrastructure/Router/AsignacionEjercicioRouter';
import routerDiaEjercicio from './infrastructure/Router/DiaEjercicioRouter';
import routerPlan from './infrastructure/Router/PlanRouter';
import routerEjercicio from './infrastructure/Router/EjercicioRouter';
import { setupSwagger } from './Swagger';

const app = express();

setupSwagger(app)

app.use(cors())

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rutas
app.use('/users', routerUser);
app.use('/auth', routerLogin);
app.use('/asignacion-ejercicio', routerAsignacionEjercicio)
app.use('/dia', routerDiaEjercicio)
app.use('/plans', routerPlan)
app.use('/ejercicios', routerEjercicio)

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