import { CreateDateColumn, UpdateDateColumn } from "typeorm";

export class BaseEntity {
  @CreateDateColumn({ type: "int", name: "create_time" })
  createTime!: number;
  @UpdateDateColumn({ type: "int", name: "update_time" })
  updateTime!: number;
}
