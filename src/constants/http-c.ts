export default class HttpC {
  // success
  public static readonly SUCCESS = 2000

  // 用户 JWT 错误
  public static readonly AUTH_ERROR = 2001

  // 密码错误
  public static readonly PWD_ERROR = 2002

  // 用户不存在
  public static readonly USER_NOT_EXIST = 2003

  // 用户名已经存在
  public static readonly USER_NAME_IS_TAKEN = 2004

  // 参数错误
  public static readonly PARAMS_ERROR = 2005

  // 删除用户失败
  public static readonly DELETE_USER_FAIL = 2006
}
