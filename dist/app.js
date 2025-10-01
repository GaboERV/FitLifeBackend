"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const LoginRoutes_1 = __importDefault(require("./Router/LoginRoutes"));
const UserRoutes_1 = __importDefault(require("./Router/UserRoutes"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
// Middlewares
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// Rutas
app.use('/user', UserRoutes_1.default);
app.use('/auth', LoginRoutes_1.default);
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
app.use((err, req, res, next) => {
    console.error('Error no manejado:', err);
    res.status(500).json({
        success: false,
        error: 'Error interno del servidor'
    });
});
exports.default = app;
//# sourceMappingURL=app.js.map