import { Prisma } from "@prisma/client";
import { UserEntity } from "../entities/user.entity";

export abstract class UsersAbstractRepository {
  abstract createUser(userEntity: UserEntity): Promise<Promise<UserEntity>>;
  abstract findAll(): Promise<Promise<UserEntity[]>>;
  abstract findOne(id: number): Promise<UserEntity>;
  abstract update(id: number, userEntity: Partial<UserEntity>): Promise<Promise<UserEntity>>;
  abstract remove(id: number): Promise<UserEntity>;
}