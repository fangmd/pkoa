/**
 * MQ 测试队列, 需要 redis
 */

import { Queue } from 'bullmq'
import { Worker } from 'bullmq'
import Config from '../config'

const QUEUE_NAME = 'test_queue'

const testQueue = new Queue(QUEUE_NAME, {
  connection: {
    host: Config.redis.host,
    port: Config.redis.port,
  },
})

/**
 * 添加任务到队列
 */
export async function addJobs() {
  await testQueue.add('jobName', { foo: 'bar' })
}

const worker = new Worker(QUEUE_NAME, async (job) => {
  console.log(job.data)
})

worker.on('completed', (job) => {
  console.log(`${job.id} has completed!`)
})

worker.on('failed', (job, err) => {
  console.log(`${job.id} has failed with ${err.message}`)
})
