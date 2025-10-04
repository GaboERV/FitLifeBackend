import { Router } from 'express';
import { UserDependencyFactory } from '../Factory/UserDependencyFactory';
import { UserController } from '../controller/UserController';


const routerUser = Router();

// Obtener la factory singleton
const factory = UserDependencyFactory.getInstance();

// Crear el controlador con los casos de uso
const userController = new UserController(
    factory.createUserUseCase(),
    factory.deleteUserUseCase(),
    factory.updateUserUseCase(),
    factory.getUserUseCase()
);

// Definir las rutas
routerUser.post('/', userController.createUser);
routerUser.put('/:id', userController.updateUser);
routerUser.delete('/:id', userController.deleteUser);
routerUser.get('/:id', userController.getUserById)

export default routerUser;