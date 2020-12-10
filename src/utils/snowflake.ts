import SnowFlake from './snowflake-lib'

// const uid = new UniqueID({
//   returnNumber: true,
// });

// const ID = uid.getUniqueID();

// // 生成雪花id
// const getUniqueID = (): string | bigint => {
//   return uid.getUniqueID();
// };

// export default getUniqueID;

const idWorker = new SnowFlake(1n, 1n)

const getUniqueID = (): string | bigint => {
  return idWorker.nextId()
}

export default getUniqueID
