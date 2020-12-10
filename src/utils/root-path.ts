/**
 * 获取项目 root 路径
 * 使用:
 * import root from "./utils/root-path";
 * console.log(root());
 */
import path from 'path'

const root = function () {
  return path.dirname(require.main?.filename ?? '')
}

export default root
