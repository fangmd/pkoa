import { Column, Entity, PrimaryColumn, Unique } from "typeorm";
import { BaseEntity } from "./base-entity";

@Entity()
@Unique(['username'])
export class User extends BaseEntity {
  @PrimaryColumn()
  id!: string;
  @Column({
    length: 30,
  })
  username!: string;
  @Column()
  password!: string;
}
