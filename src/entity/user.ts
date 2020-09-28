import { Column, Entity, PrimaryColumn } from "typeorm";
import { BaseEntity } from "./base-entity";

@Entity()
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
