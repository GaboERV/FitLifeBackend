import { Router } from 'express';
import { LoginDependencyFactory } from '../Factory/LoginDependencyFactory';
import { LoginController } from '../controller/LoginController';


const routerLogin = Router();

// Obtener la factory singleton
const factory = LoginDependencyFactory.getInstance();

// Crear el controlador con los casos de uso
const userController = new LoginController(
    factory.loginCase(),
);

// Definir las rutas
routerLogin.post('/login', userController.login);


export default routerLogin;