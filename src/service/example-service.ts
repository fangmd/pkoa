/**
 * @description example service
 */

import { getRepository, Repository } from 'typeorm'
import { Example } from '../db/model'

export class ExampleService {
  private static repository(): Repository<Example> {
    return getRepository(Example)
  }

  public static async getHome(): Promise<Example | undefined> {
    return this.repository().findOne()
  }

  public static async addHomeCnt() {
    const data = await this.getHome()
    if (!data) {
      const e = new Example()
      e.id = '2'
      e.cnt = 0
      this.repository().save(e)
    } else {
      data.cnt++
      this.repository().save(data)
    }
  }
}
