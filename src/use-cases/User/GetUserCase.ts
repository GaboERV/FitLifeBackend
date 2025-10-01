import { UserRepository } from "../../dominio/repositories/UserRepository";
import { UserResponseDTO } from "../../dto/user/UserReponse.dto";
import { UserMapper } from "../../mappers/UserMapper";

export class GetUserCase{
    constructor(
        private readonly userRepository:UserRepository
    ){}
    async execute(userId:number):Promise<UserResponseDTO>{
        const user = await this.userRepository.getUserById(userId)
        if (!user) throw new Error('Usuario no encontrado')
        return UserMapper.toDTO(user)
        
    }
}