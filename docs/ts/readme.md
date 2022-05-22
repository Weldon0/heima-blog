
### Partial
> 所有参数变成可选参数
```js
interface Person {
  name: string;
  age: number;
  test: string;
}

// 所有参数变可选
const xiaoming: Partial<Person> = { name: "" };

// 把所有的类型都进行重写，并添加问号，表示可选
// keyof在遍历所有的key
type Partial<T> = {
  [P in keyof T]?: T[P];
};
```

### Omit

```js
// 指定过滤的参数，不能传，传了就报错
const xiaomi: Omit<Person, "name" | "age"> = { test: "a" };
```
1. Pick

> 从某个接口中挑选几个属性，组成新的类型

```js
type personOnlyName = Pick<Person, "name">;
// 传入的属性名必须要继承于泛型的key
// 把K里面的属性和类型重新组成新的类型
type Pick<T, K extends keyof T> = {
  [P in K]: T[P];
};
```

2. Exlude
> 过滤类型
>
> 判断T是否有继承于U的属性，如果有，返回never，如果没有，返回原类型
```js
type PersonKeys = keyof Person;
type age = Exclude<PersonKeys, "name">;
```
> 实现
```js
type Exclude<T, U> = T extends U ? never : T;
```

3. 实现Omit

```js
// 指定过滤的参数，不能传，传了就报错
const xiaomi: Omit<Person, "name" | "age"> = { test: "a" };
type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;
```

   