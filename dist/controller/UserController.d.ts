import { Request, Response } from 'express';
import { CreateUserCase } from "../use-cases/User/CreateUserCase";
import { DeleteUserCase } from "../use-cases/User/DeleteUserCase";
import { UpdateUserCase } from "../use-cases/User/UpdateUserCase";
import { GetUserCase } from '../use-cases/User/GetUserCase';
export declare class UserController {
    private readonly createUserUseCase;
    private readonly deleteUserUseCase;
    private readonly updateUserUseCase;
    private readonly getUserUseCase;
    constructor(createUserUseCase: CreateUserCase, deleteUserUseCase: DeleteUserCase, updateUserUseCase: UpdateUserCase, getUserUseCase: GetUserCase);
    createUser: (req: Request, res: Response) => Promise<void>;
    updateUser: (req: Request, res: Response) => Promise<void>;
    deleteUser: (req: Request, res: Response) => Promise<void>;
    getUserById: (req: Request, res: Response) => Promise<void>;
}
