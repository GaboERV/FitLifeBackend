import { Request, Response } from "express";
import { LoginCase } from "../use-cases/sesion/LoginCase";
export declare class LoginController {
    private readonly loginCase;
    constructor(loginCase: LoginCase);
    login: (req: Request, res: Response) => Promise<void>;
}
