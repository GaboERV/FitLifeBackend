"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const LoginDependencyFactory_1 = require("../Factory/LoginDependencyFactory");
const LoginController_1 = require("../controller/LoginController");
const routerLogin = (0, express_1.Router)();
// Obtener la factory singleton
const factory = LoginDependencyFactory_1.LoginDependencyFactory.getInstance();
// Crear el controlador con los casos de uso
const userController = new LoginController_1.LoginController(factory.loginCase());
// Definir las rutas
routerLogin.post('/login', userController.login);
exports.default = routerLogin;
//# sourceMappingURL=LoginRoutes.js.map