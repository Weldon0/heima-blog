---
title: 📚 03-TypeScript高级类型
---


## TypeScript 高级类型

TS 中的高级类型有很多，重点学习以下高级类型：

1. 泛型 和 keyof
2. 索引签名类型 和 索引查询类型
3. 映射类型

## 泛型

- **泛型是可以在保证类型安全前提下，让函数等与多种类型一起工作，从而实现复用**，常用于：函数、接口、class 中
- 需求：创建一个 id 函数，传入什么数据就返回该数据本身(也就是说，参数和返回值类型相同)

```ts
function id(value: number): number { return value }
```

- 比如，id(10) 调用以上函数就会直接返回 10 本身。但是，该函数只接收数值类型，无法用于其他类型
- 为了能让函数能够接受任意类型，可以将参数类型修改为 any。但是，这样就失去了 TS 的类型保护，类型不安全

```ts
function id(value: any): any { return value }
```

- **泛型在保证类型安全(不丢失类型信息)的同时，可以让函数等与多种不同的类型一起工作，灵活可复用**
- 实际上，在 C# 和 Java 等编程语言中，泛型都是用来实现可复用组件功能的主要工具之一

### 创建泛型函数

```ts
function id<Type>(value: Type): Type { return value }

function id<T>(value: T): T { return value }
```

- 解释:
  1. 语法：在函数名称的后面添加 `<>`(尖括号)，**尖括号中添加类型变量**，比如此处的 Type
  2. **类型变量 Type，是一种特殊类型的变量，它处理类型而不是值**
  3. **该类型变量相当于一个类型容器**，能够捕获用户提供的类型(具体是什么类型由用户调用该函数时指定)
  4. 因为 Type 是类型，因此可以将其作为函数参数和返回值的类型，表示参数和返回值具有相同的类型
  5. 类型变量 Type，可以是任意合法的变量名称

### 调用泛型函数

```ts
const num = id<number>(10)
const str = id<string>('a')
```

- 解释：
  1. 语法：在函数名称的后面添加 `<>`(尖括号)，**尖括号中指定具体的类型**，比如，此处的 number
  2. 当传入类型 number 后，这个类型就会被函数声明时指定的类型变量 Type 捕获到
  3. 此时，Type 的类型就是 number，所以，函数 id 参数和返回值的类型也都是 number

- 同样，如果传入类型 string，函数 id 参数和返回值的类型就都是 string
- 这样，通过泛型就做到了让 id 函数与多种不同的类型一起工作，**实现了复用的同时保证了类型安全**

### 简化泛型函数调用

```ts
// 省略 <number> 调用函数
let num = id(10)
let str = id('a')
```

- 解释:
  1. 在调用泛型函数时，**可以省略 `<类型>` 来简化泛型函数的调用**
  2. 此时，TS 内部会采用一种叫做**类型参数推断**的机制，来根据传入的实参自动推断出类型变量 Type 的类型
  3. 比如，传入实参 10，TS 会自动推断出变量 num 的类型 number，并作为 Type 的类型

- 推荐：使用这种简化的方式调用泛型函数，使代码更短，更易于阅读
- 说明：**当编译器无法推断类型或者推断的类型不准确时，就需要显式地传入类型参数**

### 泛型约束

- 默认情况下，泛型函数的类型变量 Type 可以代表多个类型，这导致无法访问任何属性
- 比如，id('a') 调用函数时获取参数的长度：

```ts
function id<Type>(value: Type): Type {
  console.log(value.length)
  return value
}

id('a')
```

- 解释：Type 可以代表任意类型，无法保证一定存在 length 属性，比如 number 类型就没有 length
- 此时，就需要**为泛型添加约束来`收缩类型`(缩窄类型取值范围)**
- 添加泛型约束收缩类型，主要有以下两种方式：1 指定更加具体的类型  2 添加约束

#### 指定更加具体的类型

比如，将类型修改为 `Type[]`(Type 类型的数组)，因为只要是数组就一定存在 length 属性，因此就可以访问了

```ts
function id<Type>(value: Type[]): Type[] {
  console.log(value.length)
  return value
}
```

#### 添加约束

```ts
// 创建一个接口
interface ILength { length: number }

// Type extends ILength 添加泛型约束
// 解释：表示传入的 类型 必须满足 ILength 接口的要求才行，也就是得有一个 number 类型的 length 属性
function id<Type extends ILength>(value: Type): Type {
  console.log(value.length)
  return value
}
```

- 解释:
  1. 创建描述约束的接口 ILength，该接口要求提供 length 属性
  2. 通过 `extends` 关键字使用该接口，为泛型(类型变量)添加约束
  3. 该约束表示：**传入的类型必须具有 length 属性**
- 注意:传入的实参(比如，数组)只要有 length 属性即可（类型兼容性)

### 多个类型变量

泛型的类型变量可以有多个，并且**类型变量之间还可以约束**(比如，第二个类型变量受第一个类型变量约束)
比如，创建一个函数来获取对象中属性的值：

```ts
function getProp<Type, Key extends keyof Type>(obj: Type, key: Key) {
  return obj[key]
}
let person = { name: 'jack', age: 18 }
getProp(person, 'name')
```

- 解释:
  1. 添加了第二个类型变量 Key，两个类型变量之间使用 `,` 逗号分隔。
  2. **keyof 关键字接收一个对象类型，生成其键名称(可能是字符串或数字)的联合类型**。
  3. 本示例中 `keyof Type` 实际上获取的是 person 对象所有键的联合类型，也就是：`'name' | 'age'`
  4. 类型变量 Key 受 Type 约束，可以理解为：Key 只能是 Type 所有键中的任意一个，或者说只能访问对象中存在的属性

```ts
// Type extends object 表示： Type 应该是一个对象类型，如果不是 对象 类型，就会报错
// 如果要用到 对象 类型，应该用 object ，而不是 Object
function getProperty<Type extends object, Key extends keyof Type>(obj: Type, key: Key) {
  return obj[key]
}
```

---

### 泛型接口

泛型接口：接口也可以配合泛型来使用，以增加其灵活性，增强其复用性

```ts
interface IdFunc<Type> {
  id: (value: Type) => Type
  ids: () => Type[]
}

let obj: IdFunc<number> = {
  id(value) { return value },
  ids() { return [1, 3, 5] }
}
```

- 解释:
  1. 在接口名称的后面添加 `<类型变量>`，那么，这个接口就变成了泛型接口。
  2. 接口的类型变量，对接口中所有其他成员可见，也就是**接口中所有成员都可以使用类型变量**。
  3. 使用泛型接口时，**需要显式指定具体的类型**(比如，此处的 `IdFunc<nunber>`)。
  4. 此时，id 方法的参数和返回值类型都是 number;ids 方法的返回值类型是 number[]。

#### JS 中的泛型接口

实际上，JS 中的数组在 TS 中就是一个泛型接口。

```ts
const strs = ['a', 'b', 'c']
// 鼠标放在 forEach 上查看类型
strs.forEach

const nums = [1, 3, 5]
// 鼠标放在 forEach 上查看类型
nums.forEach
```

![image-20210917002203414](https://wuxiaohui-1254415986.cos.ap-nanjing.myqcloud.com/2022/01/30/image20210917002203414.png)

- 解释:当我们在使用数组时，TS 会根据数组的不同类型，来自动将类型变量设置为相应的类型
- 技巧:可以通过 Ctrl + 鼠标左键(Mac：Command + 鼠标左键)来查看具体的类型信息

### 泛型工具类型

- 泛型工具类型:TS 内置了一些常用的工具类型，来简化 TS 中的一些常见操作
- 说明:它们都是基于泛型实现的(泛型适用于多种类型，更加通用)，并且是内置的，可以直接在代码中使用。 这些工具类型有很多，主要学习以下几个:

1. `Partial<Type>`
2. `Readonly<Type>`
3. `Pick<Type, Keys>`
4. `Omit<Type>`

#### Partial

- `Partial<Type>` 用来构造(创建)一个类型，将 Type 的所有属性设置为可选。

```ts
type Props =  {
  id: string
  children: number[]
}

type PartialProps = Partial<Props>
```

- 解释:构造出来的新类型 PartialProps 结构和 Props 相同，但所有属性都变为可选的。

#### Readonly

- `Readonly<Type>` 用来构造一个类型，将 Type 的所有属性都设置为 readonly(只读)。

```ts
type Props =  {
  id: string
  children: number[]
}

type ReadonlyProps = Readonly<Props>
```

- 解释:构造出来的新类型 ReadonlyProps 结构和 Props 相同，但所有属性都变为只读的。

```ts
let props: ReadonlyProps = { id: '1', children: [] }
// 错误演示
props.id = '2'
```

- 当我们想重新给 id 属性赋值时，就会报错:无法分配到 "id" ，因为它是只读属性。

#### Pick

- Pick<Type, Keys> 从 Type 中选择一组属性来构造新类型。

```ts
interface Props {
  id: string
  title: string
  children: number[]
}
type PickProps = Pick<Props, 'id' | 'title'>
```

- 解释:
  1. Pick 工具类型有两个类型变量:1 表示选择谁的属性 2 表示选择哪几个属性。 2. 其中第二个类型变量，如果只选择一个则只传入该属性名即可。
  2. 第二个类型变量传入的属性只能是第一个类型变量中存在的属性。
  3. 构造出来的新类型 PickProps，只有 id 和 title 两个属性类型。

#### Omit

Omit<K,T>类型让我们可以从另一个对象类型中剔除某些属性，并创建一个新的对象类型：

K：是对象类型名称，T：是剔除K类型中的属性名称

![image-20210917003456128](https://wuxiaohui-1254415986.cos.ap-nanjing.myqcloud.com/2022/01/30/image20210917003456128.png)









## 索引签名类型

绝大多数情况下，我们都可以在使用对象前就确定对象的结构，并为对象添加准确的类型。
使用场景:**当无法确定对象中有哪些属性**(或者说对象中可以出现任意多个属性)，此时，就用到**索引签名类型**了。

```ts
interface AnyObject {
  [key: string]: number
}
let obj: AnyObject = {
  a: 1,
  b: 2,
}
```

- 解释:
  1. 使用 `[key: string]` 来约束该接口中允许出现的属性名称。表示只要是 string 类型的属性名称，都可以出现在对象中。
  2. 这样，对象 obj 中就可以出现任意多个属性(比如，a、b 等)。
  3. `key 只是一个占位符`，可以换成任意合法的变量名称。
  4. 隐藏的前置知识:`JS 中对象({})的键是 string 类型的`。

### 数组索引类型签名

- 在 JS 中数组是一类特殊的对象，特殊在数组的键(索引)是数值类型
- 并且，数组也可以出现任意多个元素。所以，在数组对应的泛型接口中，也用到了索引签名类型。

```ts
interface MyArray<T> {
  [n: number]: T
}
let arr: MyArray<number> = [1, 3, 5]
```

- 解释:
    1. MyArray 接口模拟原生的数组接口，并使用 `[n: number]` 来作为索引签名类型。
  2. 该索引签名类型表示:只要是 number 类型的键(索引)都可以出现在数组中，或者说数组中可以有任意多个元素。
  3. 同时也符合数组索引是 number 类型这一前提。

## 映射类型

- 映射类型:**基于旧类型创建新类型(对象类型**)，减少重复、提升开发效率。
比如，类型 PropKeys 有 x/y/z，另一个类型 Type1 中也有 x/y/z，并且 Type1 中 x/y/z 的类型相同:

```ts
type PropKeys = 'x' | 'y' | 'z'
type Type1 = { x: number; y: number; z: number }
```

- 这样书写没错，但 x/y/z 重复书写了两次。像这种情况，就可以使用映射类型来进行简化。

```ts
type PropKeys = 'x' | 'y' | 'z'
type Type2 = { [Key in PropKeys]: number }
```

- 解释:
  1. 映射类型是基于索引签名类型的，所以，该语法类似于索引签名类型，也使用了 []。
  2. `Key in PropKeys` 表示 Key 可以是 PropKeys 联合类型中的任意一个，类似于 forin(let k in obj)。
  3. 使用映射类型创建的新对象类型 Type2 和类型 Type1 结构完全相同。
  4. 注意:**映射类型只能在类型别名中使用，不能在接口中使用**。

### 根据对象创建

映射类型除了根据联合类型创建新类型外，还可以根据对象类型来创建:

```ts
type Props = { a: number; b: string; c: boolean }
type Type3 = { [key in keyof Props]: number }
```

- 解释:
  1. 首先，先执行 `keyof Props` 获取到对象类型 Props 中所有键的联合类型即，'a' | 'b' | 'c'。
  2. 然后，`Key in ...` 就表示 Key 可以是 Props 中所有的键名称中的任意一个。

### 内置映射类型实现分析

- 实际上，前面讲到的**泛型工具类型**(比如，`Partial<Type>`)都是基于映射类型实现的。 
- 比如，`Partial<Type>` 的实现:

```ts
type Partial<T> = {
  [P in keyof T]?: T[P]
}

type Props = { a: number; b: string; c: boolean }
type PartialProps = Partial<Props>
```

- 解释:
  1. `keyof T` 即 keyof Props 表示获取 Props 的所有键，也就是:'a' | 'b' | 'c'。
  2. 在 [] 后面添加 `?`(问号)，表示将这些属性变为`可选`的，以此来实现 Partial 的功能。
  3. 冒号后面的 `T[P] 表示获取 T 中每个键对应的类型`。比如，如果是 'a' 则类型是 number;如果是 'b' 则类型是 string。
  4. 最终，新类型 PartialProps 和旧类型 Props 结构完全相同，只是让所有类型都变为可选了。

### 索引访问类型

- 刚刚用到的 `T[P]` 语法，在 TS 中叫做`索引访问类型`
- 作用:**用来查询属性的类型**。

```ts
type Props = { a: number; b: string; c: boolean }
type TypeA = Props['a']
```

- 解释:`Props['a']` 表示查询类型 Props 中属性 'a' 对应的类型 number。所以，TypeA 的类型为 number
- 注意:**[] 中的属性必须存在于被查询类型中**，否则就会报错。

#### 同时查询多个索引的类型

- 索引查询类型的其他使用方式:同时查询多个索引的类型

```ts
type Props = { a: number; b: string; c: boolean }

type TypeA = Props['a' | 'b'] // string | number
```

- 解释:使用字符串字面量的联合类型，获取属性 a 和 b 对应的类型，结果为: string | number。

```ts
type TypeA = Props[keyof Props] // string | number | boolean
```

- 解释:使用 keyof 操作符获取 Props 中所有键对应的类型，结果为: string | number | boolean。 

