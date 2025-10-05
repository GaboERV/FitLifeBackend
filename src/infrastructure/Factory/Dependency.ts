import { UserRepositoryORMPrisma } from "./../Repositories/UserRepositoryORMPrisma";
import { BcryptEncryptService } from "./../Services/BycryptService";
import { CorreoValidatorServiceManual } from "./../Services/CorreoValidatorServiceManual";
import { JwtTokenService } from "./../Services/JsonWebTokenService";
import prisma from "./../Prisma/Prisma";
import { PlanRepositoryORMPrisma } from "../Repositories/PlanRepositoryORMPrisma";
import { EjercicioRepositoryORM } from "../Repositories/EjercicioRepositoryORMPrisma";

// Instancias Singleton
export const userRepositorySingleton = new UserRepositoryORMPrisma(prisma);
export const planRepositorySingleton = new PlanRepositoryORMPrisma(prisma)
export const encryptServiceSingleton = new BcryptEncryptService(10);
export const emailValidatorSingleton = new CorreoValidatorServiceManual();
export const tokenServiceSingleton = new JwtTokenService();
export const ejercicioRepositorySingleton = new EjercicioRepositoryORM(prisma)