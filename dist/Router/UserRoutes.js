"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserDependencyFactory_1 = require("../Factory/UserDependencyFactory");
const UserController_1 = require("../controller/UserController");
const routerUser = (0, express_1.Router)();
// Obtener la factory singleton
const factory = UserDependencyFactory_1.UserDependencyFactory.getInstance();
// Crear el controlador con los casos de uso
const userController = new UserController_1.UserController(factory.createUserUseCase(), factory.deleteUserUseCase(), factory.updateUserUseCase(), factory.getUserUseCase());
// Definir las rutas
routerUser.post('/', userController.createUser);
routerUser.put('/:id', userController.updateUser);
routerUser.delete('/:id', userController.deleteUser);
routerUser.get('/:id', userController.getUserById);
exports.default = routerUser;
//# sourceMappingURL=UserRoutes.js.map