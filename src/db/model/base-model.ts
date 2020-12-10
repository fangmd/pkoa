import { CreateDateColumn, UpdateDateColumn } from 'typeorm'

/// 数据库表接口公共字段
export default class BaseModel {
  @CreateDateColumn({ type: 'timestamp', name: 'create_time' })
  createTime!: Date
  @UpdateDateColumn({ type: 'timestamp', name: 'update_time' })
  updateTime!: Date
}
