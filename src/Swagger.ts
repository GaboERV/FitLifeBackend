// swagger.ts
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { Express } from 'express';

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Plan API',
            version: '1.0.0',
            description: 'API para gestión de planes de ejercicio',
        },
        servers: [
            {
                url: 'http://localhost:3000',
            },
        ],
    },
    apis: ['./src/infrastructure/Router/*.ts'], // Ruta a tus archivos de rutas
};

const specs = swaggerJsdoc(options);

export const setupSwagger = (app: Express) => {
    app.use('/api', swaggerUi.serve, swaggerUi.setup(specs));
};