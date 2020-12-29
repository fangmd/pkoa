/**
 * @description 时间工具类
 */

import dayjs from 'dayjs'

/**
 * 时间戳创建 Date
 * @param time 时间戳
 */
export function genDate(time: any): Date {
  if (typeof time === 'string') {
    time = parseInt(time)
  }
  //   const d = dayjs(time)
  return new Date(time)
}

/**
 * 时间戳创建 Date, 并加几个月
 * @param time 
 * @param addMonth 
 */
export function genDateSubtractMonth(time: any, subtractMonth: number = 0): Date {
  const d = genDate(time)
  const dJS = dayjs(d)
  const t = dJS.startOf('month').subtract(subtractMonth, 'month').valueOf()
  return new Date(t)
}

/**
 *  本月开始 Date
 * @param time
 */
export function genMonthStart(time: any): Date {
  const d = genDate(time)
  const dJS = dayjs(d)
  const t = dJS.startOf('month').valueOf()
  return new Date(t)
}

/**
 * 本月结束 Date
 * @param time
 */
export function genMonthEnd(time: any): Date {
  const d = genDate(time)
  const dJS = dayjs(d)
  const t = dJS.endOf('month').valueOf()
  return new Date(t)
}
