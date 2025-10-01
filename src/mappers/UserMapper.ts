import { User } from "../dominio/entities/User";
import { UserResponseDTO } from "../dto/user/UserReponse.dto";

export class UserMapper{
    static toDTO(user: User): UserResponseDTO{
        const UserDTO:UserResponseDTO = {
            id: user.id ?? 0,
            nombre: user.nombre,
            edad: user.edad,
            correo: user.correo,
            pesoKg: user.pesoKg,
            estaturaMetros: user.estaturaMetros
        }
        return UserDTO
    }
}