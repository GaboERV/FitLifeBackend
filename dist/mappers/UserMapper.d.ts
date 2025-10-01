import { User } from "../dominio/entities/User";
import { UserResponseDTO } from "../dto/user/UserReponse.dto";
export declare class UserMapper {
    static toDTO(user: User): UserResponseDTO;
}
