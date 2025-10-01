import { LoginCase } from "../use-cases/sesion/LoginCase";
export declare class LoginDependencyFactory {
    private readonly userRepository;
    private readonly encryptService;
    private readonly tokenService;
    private static instance;
    private constructor();
    static getInstance(): LoginDependencyFactory;
    loginCase(): LoginCase;
}
