"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDependencyFactory = void 0;
const connection_1 = __importDefault(require("../infrastructure/Repositories/connection"));
const UserRepositoryMySQL_1 = require("../infrastructure/Repositories/UserRepositoryMySQL");
const BycryptService_1 = require("../infrastructure/Services/BycryptService");
const CorreoValidatorServiceManual_1 = require("../infrastructure/Services/CorreoValidatorServiceManual");
const CreateUserCase_1 = require("../use-cases/User/CreateUserCase");
const DeleteUserCase_1 = require("../use-cases/User/DeleteUserCase");
const GetUserCase_1 = require("../use-cases/User/GetUserCase");
const UpdateUserCase_1 = require("../use-cases/User/UpdateUserCase");
class UserDependencyFactory {
    constructor(userRepository, encryptService, emailValidator) {
        this.userRepository = userRepository;
        this.encryptService = encryptService;
        this.emailValidator = emailValidator;
    }
    static getInstance() {
        if (!UserDependencyFactory.instance) {
            UserDependencyFactory.instance = new UserDependencyFactory(new UserRepositoryMySQL_1.UserRepositoryMySQL(connection_1.default), new BycryptService_1.BcryptEncryptService(10), new CorreoValidatorServiceManual_1.CorreoValidatorServiceManual());
        }
        return UserDependencyFactory.instance;
    }
    getUserUseCase() {
        return new GetUserCase_1.GetUserCase(this.userRepository);
    }
    createUserUseCase() {
        return new CreateUserCase_1.CreateUserCase(this.emailValidator, this.userRepository);
    }
    deleteUserUseCase() {
        return new DeleteUserCase_1.DeleteUserCase(this.encryptService, this.userRepository);
    }
    updateUserUseCase() {
        return new UpdateUserCase_1.UpdateUserCase(this.userRepository, this.emailValidator, this.encryptService);
    }
}
exports.UserDependencyFactory = UserDependencyFactory;
//# sourceMappingURL=UserDependencyFactory.js.map