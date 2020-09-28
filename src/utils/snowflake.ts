import UniqueID from "nodejs-snowflake";

const uid = new UniqueID({
  returnNumber: true,
});

const ID = uid.getUniqueID();

// 生成雪花id
const getUniqueID = (): string | bigint => {
  return uid.getUniqueID();
};

export default getUniqueID;
