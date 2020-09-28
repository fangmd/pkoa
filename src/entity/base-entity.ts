import { CreateDateColumn, UpdateDateColumn } from "typeorm";

export class BaseEntity {
  @CreateDateColumn({ type: "timestamp", name: "create_time" })
  createTime!: Date;
  @UpdateDateColumn({ type: "timestamp", name: "update_time" })
  updateTime!: Date;
}
