"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginDependencyFactory = void 0;
const connection_1 = __importDefault(require("../infrastructure/Repositories/connection"));
const UserRepositoryMySQL_1 = require("../infrastructure/Repositories/UserRepositoryMySQL");
const BycryptService_1 = require("../infrastructure/Services/BycryptService");
const JsonWebTokenService_1 = require("../infrastructure/Services/JsonWebTokenService");
const LoginCase_1 = require("../use-cases/sesion/LoginCase");
class LoginDependencyFactory {
    constructor(userRepository, encryptService, tokenService) {
        this.userRepository = userRepository;
        this.encryptService = encryptService;
        this.tokenService = tokenService;
    }
    static getInstance() {
        if (!LoginDependencyFactory.instance) {
            LoginDependencyFactory.instance = new LoginDependencyFactory(new UserRepositoryMySQL_1.UserRepositoryMySQL(connection_1.default), new BycryptService_1.BcryptEncryptService(10), new JsonWebTokenService_1.JwtTokenService());
        }
        return LoginDependencyFactory.instance;
    }
    loginCase() {
        return new LoginCase_1.LoginCase(this.userRepository, this.encryptService, this.tokenService);
    }
}
exports.LoginDependencyFactory = LoginDependencyFactory;
//# sourceMappingURL=LoginDependencyFactory.js.map