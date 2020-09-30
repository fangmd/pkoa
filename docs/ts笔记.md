[https://www.typescriptlang.org/docs/handbook/basic-types.html](https://www.typescriptlang.org/docs/handbook/basic-types.html)

# 基本数据类型

- boolean
- number
- bitint
- string
- Array
- Tuple
- Enum
- unknown
- any
- void
- null
- undefined
- never
- object: (除了 number, string, boolean, bigint, symbol, null, or undefined ) 其他的都是 object

> Number, String, Boolean, Symbol, or Object

1. unknown 和 any 的区别

any 类型表示 ts 不会去校验类型
ts 与 js 交互时常会使用 any
any 类型的变量可以访问其任意属性, unknown 不行

2. 类型转换

```ts
const strVal: unknown = "name";
let l = (strVal as string).length;
```

# Interfaces

interface, 约定对象里面应该包含哪些元素，元素应该是什么类型

支持：普通属性，可选属性, 只读属性

```
interface SquareConfig {
  color?: string;
  width?: number;
  readonly y: number;

}
```

1. readonly 与 const

readonly 用于对象属性，const 用于变量

## 函数接口

```ts
interface SearchFunc {
  (source: string, subString: string): boolean;
}
```

## Class 类型

```ts
interface ClockInterface {
  currentTime: Date;
}

class Clock implements ClockInterface {
  currentTime: Date = new Date();
  constructor(h: number, m: number) {}
}
```

# 函数 Functions

函数定义的两种方式：有名函数，匿名函数

```ts
function add(x, y) {
  return x + y;
}

let myAdd = function (x: number, y: number): number {
  return x + y;
};

// 可选参数
let myAddOptionParams = function (x: number, y?: number): number {
  if (y) {
    return x + y;
  }
  return x;
};

// 默认参数
let myAddDefaultParams = function (x: number, y = 2): number {
  if (y) {
    return x + y;
  }
  return x;
};

// 可变参数
let myAddDefaultParams = function (
  x: number,
  ...resetOfValues: number[]
): number {
  return x;
};
```


# Litaral Types

```ts
// So, TypeScript sets the type to be "Hello World" not string
const helloWorld = "Hello World";

// On the other hand, a let can change, and so the compiler declares it a string
let hiWorld = "Hi World";
```

Litaral Types: string, number, boolean


# Class

