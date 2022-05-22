---
title: 02-hooks的基本使用
---



## hooks基础使用

### 1. hooks-介绍

> 能够说出 React Hooks 是什么？

**大致步骤：**

- hooks 解释
- hooks 作用
- 有了 hooks 之后组件开发模式

**具体内容：**

1. hooks 解释
   - `Hooks`：钩子、钓钩、钩住 ，`Hooks` 是 **React v16.8** 中的新增功能
2. hooks 作用
   - 为**函数组件**提供状态、生命周期等原本 class 组件中提供的 React 功能
   - 可以理解为通过 Hooks 为函数组件钩入 class 组件的特性
   - 注意：**Hooks 只能在函数组件中使用**，自此，函数组件成为 React 的新宠儿
3. React v16.8 版本前后，组件开发模式的对比：
   - React v16.8 以前： class 组件(提供状态) + 函数组件(展示内容)
   - React v16.8 及其以后：
     1. class 组件(提供状态) + 函数组件(展示内容)
     2. Hooks(提供状态) + 函数组件(展示内容)
     3. 混用以上两种方式：部分功能用 class 组件，部分功能用 Hooks+函数组件

**总结**：

- 虽然有了 Hooks，但 React 官方并没有计划从 React 库中移除 class
- 有了 Hooks 以后，不能再把**函数组件**称为~~无状态组件~~了，因为 Hooks 为函数组件提供了状态

### 2. hooks-解决的问题

> 能够说出为什么要有 Hooks 以及 Hooks 能解决什么问题

**大致步骤：**

- 组件的状态逻辑复用问题
- class 组件自身的问题

**具体内容：**

1. 组件的状态逻辑复用问题
   - 在 Hooks 之前，组件的状态逻辑复用经历了：mixins（混入）、HOCs（高阶组件）、render-props 等模式
   - （早已废弃）mixins 的问题：1 数据来源不清晰 2 命名冲突
   - HOCs、render-props 的问题：重构组件结构，导致组件形成 JSX 嵌套地狱问题
2. class 组件自身的问题
   - 选择：函数组件和 class 组件之间的区别以及使用哪种组件更合适
   - 需要理解 class 中的 this 是如何工作的
   - 相互关联且需要对照修改的代码被拆分到不同生命周期函数中
   - 相比于函数组件来说，不利于代码压缩和优化，也不利于 TS 的类型推导

**总结**：

- 正是由于 React 原来存在的这些问题，才有了 Hooks 来解决这些问题

### 3. hooks-渐进策略

> 能够理解在 react 中什么场景应该使用 hooks

**大致步骤：**

- 什么是渐进式策略？
- 在 hooks 中开发会使用那些知识？

**具体内容：**

1. 什么是渐进式策略（项目开发场景）[文档](https://zh-hans.reactjs.org/docs/hooks-intro.html)
   - 不推荐直接使用 Hooks 大规模重构现有组件
   - 推荐：新功能用 Hooks，复杂功能实现不了的，也可以继续用 class
   - 找一个功能简单、非核心功能的组件开始使用 hooks
2. 在 hooks 中开发会使用那些知识？
   - class 组件相关的 API 在 hooks 中不可用
     - class 自身语法，比如，constructor、static 等
     - 钩子函数，`componentDidMount`、`componentDidUpdate`、`componentWillUnmount`
     - `this` 相关的用法
   - 原来学习的 React 内容还是要用的
     - JSX：`{}`、`onClick={handleClick}`、条件渲染、列表渲染、样式处理等
     - 组件：函数组件、组件通讯
     - React 开发理念：`单向数据流`、`状态提升` 等
     - 解决问题的思路、技巧、常见错误的分析等

**总结**：

1. react 没有计划从 React 中移除 class
2. react 将继续为 class 组件提供支持
3. 可以在项目中同时使用 hooks 和 class

### 4. useState-基本使用

> 能够使用`useState`为函数组件提供状态

**大致步骤：**

- `useState` 作用？
- `useState` 语法？
- `useState` 使用步骤？
- `useState` 写法正确姿势

**具体内容：**

1. `useState` 作用

- 为函数组件提供状态
- 它是一个 hook，就是一个特殊的函数，让你在函数组件中获取状态等 React 特性。
- 名称上看 hook 都以`use`开头`useXxx`

1. `useState` 语法

```jsx
// 参数：状态初始值(数值、字符串、数组，对象)
// 返回值：stateArray 是一个数组
const stateArray = useState(0);
// 索引 0 表示：状态值（state）
const state = stateArray[0];
// 索引 1 表示：修改状态的函数（setState）
const setState = stateArray[1];
```

1. ```
   useState
   ```

    

   使用步骤

   1. 导入 `useState` hook
   2. 调用 `useState` 函数，并传入状态的初始值
   3. 从 `useState` 函数的返回值中，拿到状态和修改状态的函数
   4. 在 JSX 中展示状态
   5. 在按钮的点击事件中调用修改状态的函数，来更新状态

```jsx
import { useState } from 'react';


const Count = () => {
  // stateArray 是一个数组
  const stateArray = useState(0);
  const state = stateArray[0];
  const setState = stateArray[1];


  return (
    <div>
      {/* 展示状态值 */}
      <h1>状态为：{state}</h1>
      {/* 点击按钮，让状态值 +1 */}
      <button onClick={() => setState(state + 1)}>+1</button>
    </div>
  );
};
```

1. ```
   useState
   ```

    

   写法正确姿势

   - 数据函数需要符合业务语义，修改状态的函数名称以 set 开头，后面跟上状态的名称。

```jsx
import { useState } from 'react';


const Count = () => {
  // 解构：
  const [count, setCount] = useState(0);


  return (
    <div>
      <h1>计数器：{state}</h1>
      <button onClick={() => setState(state + 1)}>+1</button>
    </div>
  );
};
```

**总结：**

- 给

   

  ```
  useState
  ```

   

  提供初始化值，返回数组。

  - 数组[0] 状态数据
  - 数组[1] 修改状态函数

- 参考写法：`const [count, setCount] = useState(0)`

### 5. useState-读取和修改状态

> 能够在函数组件中获取和修改状态

**大致步骤：**

- 读取状态
- 修改状态

**具体内容：**

1. 读取状态
   - 读取状态：`useState` 提供的状态，是函数内部的局部变量，可以在函数内的任意位置使

```jsx
const UserCom = () => {
  const [user, setUser] = useState({ name: 'jack', age: 18 });
  return (
    <div>
      <p>姓名：{user.name}</p>
      <p>年龄：{user.age}</p>
    </div>
  );
};
```

1. 修改状态
   - `setCount(newValue)` 是一个函数，参数表示：**新的状态值**
   - 调用该函数后，将**使用新的状态值`替换`旧值**
   - 修改状态后，因为状态发生了改变，所以该组件会重新渲染

```jsx
const UserCom = () => {
  const [user, setUser] = useState({ name: 'jack', age: 18 });
  const onAgeAdd = () => {
    setUser({
      ...user,
      age: user.age + 1,
    });
  };
  return (
    <div>
      <p>姓名：{user.name}</p>
      <p>年龄：{user.age}</p>
      <button onClick={onAgeAdd}>年龄+1</button>
    </div>
  );
};
```

**总结：**

- 修改状态的时候，一定要**使用新的状态替换旧的状态**

### 6. useState-组件更新过程

> 能够说出使用功能`useState`之后，组件的更新过程

**大致步骤：**

- 组件初始化时候的事情
- setState 后发生的事情

**具体内容：**

1. 组件初始化时候的事情
   1. 从头开始执行该组件中的代码逻辑
   2. 调用 `useState(0)` 将传入的参数作为状态初始值，即：0
   3. 渲染组件，此时，获取到的状态 count 值为： 0
2. setState 后发生的事情
   1. 点击按钮，调用 `setCount(count + 1)` 修改状态，因为状态发生改变，所以，该组件会重新渲染
   2. 组件重新渲染时，会再次执行该组件中的代码逻辑
   3. 再次调用 `useState(0)`，此时 **React 内部会拿到最新的状态值而非初始值**，比如，该案例中最新的状态值为 1
   4. 再次渲染组件，此时，获取到的状态 count 值为：1

```jsx
import { useState } from 'react';
const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>计数器：{count}</h1>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  );
};
```

**总结：**

- **useState 的初始值(参数)只会在组件第一次渲染时生效**，以后的每次渲染，useState 获取到都是最新的状态值。

### 7. useState-使用原则

> 定义多个状态的原则，hook 函数书写位置原则

**大致步骤：**

- 定义多个状态的原则
- hook 函数书写位置原则

**具体内容：**

1. 定义多个状态的原则
   - 调用 `useState` Hook 多次即可，每调用一次 useState Hook 可以提供一个状态
   - `useState Hook` 多次调用返回的 [state, setState]，相互之间，互不影响
   - 尽量按照业务来定义数据，不要全部定义在一起，因为是替换，不是合并
2. hook 函数书写位置原则
   - **React Hooks 只能直接出现在 函数组件 中**
   - **React Hooks 不能嵌套在 if/for/其他函数 中**
   - 原理：React 是按照 Hooks 的调用顺序来识别每一个 Hook，如果每次调用的顺序不同，导致 React 无法知道是哪一个 Hook
3. 可以通过开发者工具进行查看组件的 hooks：![img](https://wuxiaohui-1254415986.cos.ap-nanjing.myqcloud.com/uPic/01.053a5fe6.png)

**总结：**

- 只能在函数组件中使用，不能嵌套在 `分支循环语句` 中，react 存储 hooks 状态按顺序存储。

### 8. useEffect-副作用

> 能够说出什么是副作用

**大致步骤：**

- `side effect` 副作用专业解释
- 通过生活例子，理解副作用
- 使用函数组件常见的副作用

**具体内容：**

1. `side effect` 副作用专业解释
   - 在计算机科学中，如果一个函数或其他操作修改了其局部环境之外的状态变量值，那么它就被称为有副作用
   - 在函数组件中：职责就行根据状态渲染 UI，其他的事情都是副作用
2. 通过生活例子，理解副作用
   - 999 感冒灵，主作用：用于感冒引起的头痛，发热，鼻塞，流涕，咽痛等
   - 副作用：可见困倦、嗜睡、口渴、虚弱感
3. 使用函数组件常见的副作用
   - 对于 React 组件来说，**主作用就是根据数据（state/props）渲染 UI**，除此之外都是副作用（比如，手动修改 DOM）
   - 常见的副作用（side effect）：数据（Ajax）请求、手动修改 DOM、localStorage、console.log 操作等
   - 当你想要在函数组件中，**处理副作用（side effect）时**，就要使用 **useEffect** Hook 了

**总结：**

- 对于 react 组件来说，除了渲染 UI 之外的其他操作，都可以称之为副作用

### 9. useEffect-基本使用

> 能够在函数组件中操作 DOM（处理副作用）

**大致步骤：**

- 语法介绍
- 随堂练习

**具体内容：**

1. 语法介绍
   - 参数：回调函数（称为 **effect**），就是**在该函数中写副作用代码**
   - 执行时机：该 effect 会在组件第一次渲染以及每次组件更新后执行
   - 相当于 componentDidMount + componentDidUpdate

```jsx
useEffect(() => {
  // 书写副作用代码
});
```

1. 随堂练习
   - count 更新的时候显示到标题

```jsx
import { useEffect } from 'react';


const Counter = () => {
  const [count, setCount] = useState(0);


  useEffect(() => {
    document.title = `当前已点击 ${count} 次`;
  });


  return (
    <div>
      <h1>计数器：{count}</h1>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  );
};
```

**总结：**

- 在函数组件处理副作用 `useEffect(()=>{})` 组件初始化，更新的时候执行

### 10. useEffect-依赖项

> 能够设置 useEffect 的依赖只在 某个状态 变化时执行相应的 effect

**大致步骤：**

- 默认使用 useEffect 的问题
- useEffect 依赖项的使用

**具体内容：**

1. 默认使用 useEffect 的问题
   - `useEffect(()=>{})` 只要状态发生更新 useEffect 的 effect 回调就会执行
   - 如果组件中有另外一个状态，另一个状态更新时，刚刚的 effect 回调也会执行
2. useEffect 依赖项的使用
   - 跳过不必要的执行，只在 count 变化时，才执行相应的 effect
   - `useEffect(()=>{},[依赖项])` 依赖项的值变化才会执行 effect

```jsx
import { useEffect } from 'react';


const Counter = () => {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    document.title = `当前已点击 ${count} 次`;
  }, [count]);


  return (
    <div>
      <h1>计数器：{count}</h1>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(!loading)}>切换 loading</button>
    </div>
  );
};
```

**总结：**

- `useEffect(()=>{},[依赖项])` 依赖项可以指定某些状态变化再去执行副作用

### 11. useEffect-不要对依赖项撒谎

> 能够理解不正确使用依赖项的后果

**大致步骤：**

- 不要对依赖项撒谎

**具体内容：**

- useEffect 完全指南：https://overreacted.io/zh-hans/a-complete-guide-to-useeffect/
- useEffect 回调函数（effect）中用到的数据（比如，count）就是依赖数据，就应该出现在依赖项数组中
- 如果 useEffect 回调函数中用到了某个数据，但是，没有出现在依赖项数组中，就会导致一些 Bug 出现
- 所以，不要对 useEffect 的依赖撒谎

```jsx
const App = () => {
  const [count, setCount] = useState(0);


  // 错误演示：
  useEffect(() => {
    document.title = '点击了' + count + '次';
  }, []);


  return (
    <div>
      <h1>计数器：{count}</h1>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  );
};
```

**总结：**

- 副作用中使用的状态，需要写在依赖项中

### 12. useEffect-依赖是一个空数组

> 能够设置 useEffect 的依赖，让组件只有在第一次渲染后会执行

**大致步骤：**

- 知道 useEffect 的依赖是一个空数组何时执行
- 一般在这样的 effect 中做些什么事

**具体内容：**

1. useEffect 的第二个参数，还可以是一个

   空数组（[]）

   1. 表示只在组件第一次渲染后执行 effect
   2. 该 effect 只会在组件第一次渲染后执行，因此可以执行像事件绑定等只需要执行一次的操作。
   3. 相当于 class 组件的 componentDidMount 钩子函数的作用

```jsx
useEffect(() => {
  const handleResize = () => {};
  window.addEventListener('resize', handleResize);
}, []);
```

**注意：**

- 跟 useState Hook 一样，一个组件中也可以调用 useEffect Hook 多次
- 推荐：**一个 useEffect 只处理一个功能，有多个功能时，使用多次 useEffect**

### 13. useEffect-清除副作用

> 能够在组件卸载的时候清除副作用

**具体内容：**

- effect 的**返回值**是可选的，可省略。也可以返回一个**清理函数**，用来执行事件解绑等清理操作
- 清理函数的执行时机：
  - **清理函数**会在组件卸载时以及下一次副作用回调函数调用的时候执行，用于清除上一次的副作用。
  - 如果依赖项为空数组，那么会在组件卸载时会执行。相当于组件的`componetWillUnmount`

```jsx
useEffect(() => {
  const handleResize = () => {};
  window.addEventListener('resize', handleResize);


  // 这个返回的函数，会在该组件卸载时来执行
  // 因此，可以去执行一些清理操作，比如，解绑 window 的事件、清理定时器 等
  return () => window.removeEventListener('resize', handleResize);
}, []);
```

### 14. useEffect-使用总结

> 能够说出 useEffect 的 4 种使用使用方式

**具体内容：**

```jsx
// 1
// 触发时机：1 第一次渲染会执行 2 每次组件重新渲染都会再次执行
// componentDidMount + ComponentDidUpdate
useEffect(() => {});


// 2（使用频率最高）
// 触发时机：只在组件第一次渲染时执行
// componentDidMount
useEffect(() => {}, []);


// 3（使用频率最高）
// 触发时机：1 第一次渲染会执行 2 当 count 变化时会再次执行
// componentDidMount + componentDidUpdate（判断 count 有没有改变）
useEffect(() => {}, [count]);


// 4
useEffect(() => {
  // 返回值函数的执行时机：组件卸载时
  // 在返回的函数中，清理工作
  return () => {
    // 相当于 componentWillUnmount
  };
}, []);


useEffect(() => {
  // 返回值函数的执行时机：1 组件卸载时 2 count 变化时
  // 在返回的函数中，清理工作
  return () => {};
}, [count]);
```

### 15. 购物车项目初始化

![img](https://wuxiaohui-1254415986.cos.ap-nanjing.myqcloud.com/uPic/02.a943b573.png)

> 能够使用 React 脚手架创建项目并根据模板搭建页面结构

**分析说明**：

- 注意：React 脚手架默认支持 `sass`，但是需要自己手动安装 `sass` 依赖包（用来解析 sass 语法）
- 安装命令：`yarn add sass`

**步骤**：

1. 清理项目目录
2. 根据模板搭建基本页面结构
3. 安装解析 sass 的包：`yarn add sass`，重启项目
4. 安装 bootstrap：`yarn add bootstrap@4.5.0`，并导入 bootstrap 样式文件

**核心代码**：

index.js 中：

```jsx
// 导入 bootstrap 样式文件：
import 'bootstrap/dist/css/bootstrap.css';
```

### 16. 封装 CartHeader 组件

> 能够封装购物车的 CartHeader 组件

**步骤**：

1. 新建 components/CartHeader/index.js 文件
2. 在该文件中，通过函数组件创建 CartHeader 组件
3. 通过 children 属性，接收传递过来的标题
4. 在 App 组件中导入 CartHeader 组件并渲染

**核心代码**：

src/components/CartHeader/index.js 中：

```jsx
import './index.scss';


// 按需导出
export const CartHeader = ({ children }) => {
  return <div className="cart-header">{children}</div>;
};
```

src/components/CartHeader/index.scss 中：

```scss
.cart-header {
  z-index: 999;
  height: 45px;
  line-height: 45px;
  text-align: center;
  background-color: #1d7bff;
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
}
```

App.js 中：

```jsx
// 按需导入组件
import { CartHeader } from './components/CartHeader';


const App = () => {
  return (
    <div>
      <CartHeader>购物车</CartHeader>
    </div>
  );
};
```

### 17. 封装 CartFooter 组件

> 能够封装购物车的 CartFooter 组件

![image-20211021180953961](https://wuxiaohui-1254415986.cos.ap-nanjing.myqcloud.com/uPic/image-20211021180953961.png)

**步骤**

1. 创建 CartFooter 组件
2. 创建 CartFooter 组件的样式文件
3. 在 App 组件中渲染

**核心代码：**

src/components/CartFooter/index.js 中：

```jsx
import './index.scss';
export const cartFooter = () => {
  return (
    <div className="cart-footer">
      <div className="custom-control custom-checkbox">
        <input
          type="checkbox"
          className="custom-control-input"
          id="footerCheck"
        />
        <label className="custom-control-label" htmlFor="footerCheck">
          全选
        </label>
      </div>
      <div>
        <span>合计:</span>
        <span className="price">¥ 100</span>
      </div>
      <button type="button" className="footer-btn btn btn-primary">
        结算 (0)
      </button>
    </div>
  );
};
```

src/components/CartFooter/index.scss 中：

```scss
.cart-footer {
  z-index: 999;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 50px;
  border-top: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  background: #fff;


  .price {
    color: red;
    font-weight: bold;
    font-size: 15px;
  }
  .footer-btn {
    min-width: 80px;
    height: 30px;
    line-height: 24px;
    border-radius: 25px;
    padding: 0;
  }
}
```

App.js 中：

```jsx
import { CartFooter } from './components/CartFooter';


const App = () => {
  return (
    <div>
      <CartFooter />
    </div>
  );
};
```

### 18. 封装 GoodsItem 组件

> 能够封装 GoodsItems 组件

**步骤**：

1. 创建 GoodsItem 组件
2. 提供 GoodsItem 组件的样式文件
3. 在 App 组件中渲染该组件
4. 为 App 组件添加样式，进行样式调整

**核心代码**：

src/components/GoodsItem/index.js 中：

```jsx
import './index.scss';
export const GoodsItem = () => {
  return (
    <div className="cart-goods-item">
      <div className="left">
        <div className="custom-control custom-checkbox">
          <input type="checkbox" className="custom-control-input" id="input" />
          <label className="custom-control-label" htmlFor="input">
            <img
              src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
              alt=""
            />
          </label>
        </div>
      </div>
      <div className="right">
        <div className="top">商品名称</div>
        <div className="bottom">
          <span className="price">¥ 商品价格</span>
          <span>counter组件</span>
        </div>
      </div>
    </div>
  );
};
```

src/components/GoodsItem/index.scss 中：

```scss
.cart-goods-item {
  display: flex;
  padding: 10px;
  border-bottom: 1px solid #ccc;
  .left {
    img {
      width: 120px;
      height: 120px;
      margin-right: 8px;
      border-radius: 10px;
    }
    .custom-control-label::before,
    .custom-control-label::after {
      top: 50px;
    }
  }
  .right {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .bottom {
      display: flex;
      justify-content: space-between;
      padding: 5px 0;
      .price {
        color: red;
        font-weight: bold;
      }
    }
  }
}
```

App.js 中：

```jsx
import { GoodsItem } from './components/GoodsItem';


export default function App() {
  return (
    <div className="app">
      <CartHeader>购物车</CartHeader>
      <CartItem />
      <CartItem />
      <CartItem />
      <CartFooter />
    </div>
  );
}
```

App.scss 中：

```scss
.app {
  padding-top: 45px;
  padding-bottom: 50px;
}
```

### 19. 商品列表渲染

> 能够完成商品列表的数据渲染

**步骤：**

1. 将购物车数据的 json 拷贝到项目的根目录中
2. 使用 json-server 提供一个数据接口：`npx json-server ./data.json --port 8888`
3. 安装 axios：`yarn add axios`
4. 在 App 中创建商品列表的状态
5. 渲染页面时，在 App 组件中通过 axios 发送请求获取数据
6. 拿到接口返回的数据，更新到状态中，并渲染列表

**核心代码**：

```
data.json
{
  "goodsList": [
    {
      "id": 1,
      "goods_name": "班俏BANQIAO超火ins潮卫衣女士2020秋季新款韩版宽松慵懒风薄款外套带帽上衣",
      "goods_img": "https://www.escook.cn/vuebase/pics/1.png",
      "goods_price": 108,
      "goods_count": 1,
      "goods_state": true
    },
    {
      "id": 2,
      "goods_name": "嘉叶希连帽卫衣女春秋薄款2020新款宽松bf韩版字母印花中长款外套ins潮",
      "goods_img": "https://www.escook.cn/vuebase/pics/2.png",
      "goods_price": 129,
      "goods_count": 1,
      "goods_state": true
    },
    {
      "id": 3,
      "goods_name": "思蜜怡2020休闲运动套装女春秋季新款时尚大码宽松长袖卫衣两件套",
      "goods_img": "https://www.escook.cn/vuebase/pics/3.png",
      "goods_price": 198,
      "goods_count": 1,
      "goods_state": false
    },
    {
      "id": 4,
      "goods_name": "思蜜怡卫衣女加绒加厚2020秋冬装新款韩版宽松上衣连帽中长款外套",
      "goods_img": "https://www.escook.cn/vuebase/pics/4.png",
      "goods_price": 99,
      "goods_count": 1,
      "goods_state": false
    },
    {
      "id": 5,
      "goods_name": "幂凝早秋季卫衣女春秋装韩版宽松中长款假两件上衣薄款ins盐系外套潮",
      "goods_img": "https://www.escook.cn/vuebase/pics/5.png",
      "goods_price": 156,
      "goods_count": 1,
      "goods_state": true
    },
    {
      "id": 6,
      "goods_name": "ME&CITY女装冬季新款针织抽绳休闲连帽卫衣女",
      "goods_img": "https://www.escook.cn/vuebase/pics/6.png",
      "goods_price": 142.8,
      "goods_count": 1,
      "goods_state": true
    },
    {
      "id": 7,
      "goods_name": "幂凝假两件女士卫衣秋冬女装2020年新款韩版宽松春秋季薄款ins潮外套",
      "goods_img": "https://www.escook.cn/vuebase/pics/7.png",
      "goods_price": 219,
      "goods_count": 2,
      "goods_state": true
    },
    {
      "id": 8,
      "goods_name": "依魅人2020休闲运动衣套装女秋季新款秋季韩版宽松卫衣 时尚两件套",
      "goods_img": "https://www.escook.cn/vuebase/pics/8.png",
      "goods_price": 178,
      "goods_count": 1,
      "goods_state": true
    },
    {
      "id": 9,
      "goods_name": "芷臻(zhizhen)加厚卫衣2020春秋季女长袖韩版宽松短款加绒春秋装连帽开衫外套冬",
      "goods_img": "https://www.escook.cn/vuebase/pics/9.png",
      "goods_price": 128,
      "goods_count": 1,
      "goods_state": false
    },
    {
      "id": 10,
      "goods_name": "Semir森马卫衣女冬装2019新款可爱甜美大撞色小清新连帽薄绒女士套头衫",
      "goods_img": "https://www.escook.cn/vuebase/pics/10.png",
      "goods_price": 153,
      "goods_count": 1,
      "goods_state": false
    }
  ]
}
```

App.js 中：

```jsx
import axios from 'axios';
import { useEffect, useState } from 'react';


const http = axios.create({
  baseURL: 'http://localhost:8888',
});


export default function App() {
  const [goodsList, setGoodsList] = useState([]);


  useEffect(() => {
    const loadData = async () => {
      const res = await htpp.get('/goodsList');
      setGoodsList(res.data);
    };
    loadData();
  }, []);


  return (
    <div className="app">
      {/* 商品列表项 */}
      {goodsList.map((item) => (
        <GoodsItem key={item.id} {...item} />
      ))}
    </div>
  );
}
```

GoodsItem/index.js 中：

```jsx
export const GoodsItem = ({
  goods_count,
  goods_img,
  goods_name,
  goods_price,
  goods_state,
  id,
}) => {
  return (
    <div className="my-goods-item">
      <div className="left">
        <div className="custom-control custom-checkbox">
          <input
            type="checkbox"
            className="custom-control-input"
            id={`input-${id}`}
          />
          <label className="custom-control-label" htmlFor={`input-${id}`}>
            <img src={goods_img} alt="" />
          </label>
        </div>
      </div>
      <div className="right">
        <div className="top">{goods_name}</div>
        <div className="bottom">
          <span className="price">¥ {goods_price}</span>
          <span>counter组件</span>
        </div>
      </div>
    </div>
  );
};
```

### 20. 商品选中功能

> 能够完成商品的选中切换功能

**分析说明**：对于 checkbox 表单项来说，在使用受控组件获取值的时候，需要指定 `checked` 属性

**步骤：**

1. 在 GoodsItem 组件中通过传递过来的选中状态值作为复选框的 checked 值
2. 将 id 和 修改后的选中状态值回传给父组件
3. 父组件中准备一个用于修改修改选中状态的回调函数
4. 回调函数中，根据接收到的数据修改本地商品列表数据
5. 回调函数中，更新接口中的选中状态数据

**核心代码**

GoodsItem/index.js 中：

```jsx
<input
  type="checkbox"
  className="custom-control-input"
  checked={goods_state}
  onChange={(e) => changeState(id, e.target.checked)}
/>
```

App.js 中：

```jsx
const changeGoodsState = async (id, goods_state) => {
  setGoodsList(
    goodsList.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          goods_state,
        };
      }
      return item;
    }),
  );


  await http.patch(`/goodsList/${id}`, {
    goods_state,
  });
};


// ...
<GoodsItem changeGoodsState={changeGoodsState} />;
```

### 21. 商品全选功能

> 能够完成商品全选切换功能

**分析说明**：

全选按钮是否选中，分为 3 种情况：

1. 进入页面时，判断所有商品是否都选中，如果都选中了，让全选按钮也选中；否则，不选中
2. 切换全选按钮的选中状态，商品的选中状态会随之切换
3. 切换商品的选中状态，全选按钮的选中状态会随之切换

因此，GoodsItem 和 CartFooter 组件都需要操作全选按钮的选中状态。所以，应该将 全选按钮的选中状态 提升到父组件 App 中（状态提升）

接下来，按照上面的 3 种情况，来实现该功能。

情况 1：进入页面控制全选按钮的选中状态

**步骤**：

1. 在 App 父组件中添加控制全选按钮选中状态 checkAll
2. 将 checkAll 传递给子组件 CartFooter
3. 在 CartFooter 中通过 props 接收到 checkAll
4. 将 checkAll 作为全选按钮的 checked 属性值
5. 为全选按钮提供 change 事件，并调用 changeCheckAll 回调，将全选按钮的选中状态回传给父组件
6. 在 App 中提供 changeCheckAll 回调函数，更新状态，并将该函数传递给 CartFooter 子组件

**核心代码：**

App.js 中：

```jsx
export default function App() {
  const [checkAll, setCheckAll] = useState(false);


  useEffect(() => {
    const loadData = async () => {
      const res = await http.get('/goodsList');
      const list = res.data;
      setGoodsList(list);


      setCheckAll(list.every((item) => item.goods_state));
    };
    loadData();
  }, []);


  const changeCheckAll = (checkAll) => {
    setCheckAll(checkAll);
  };


  return (
    // ...
    <CartFooter checkAll={checkAll} changeCheckAll={changeCheckAll} />
  );
}
```

CartFooter.js 中：

```jsx
export const CartFooter = ({ checkAll, changeCheckAll }) => {
  return (
    <div className="my-footer">
      <div className="custom-control custom-checkbox">
        <input
          type="checkbox"
          className="custom-control-input"
          id="footerCheck"
          checked={checkAll}
          onChange={(e) => changeCheckAll(e.target.checked)}
        />
        <label className="custom-control-label" htmlFor="footerCheck">
          全选
        </label>
      </div>
      <div>
        <span>合计:</span>
        <span className="price">¥ 100</span>
      </div>
      <button type="button" className="footer-btn btn btn-primary">
        结算 (0)
      </button>
    </div>
  );
};
```

情况 2：切换全选按钮的选中状态，控制商品的选中状态

**分析说明**：

- 注意：`json-server` 提供的接口，无法批量更新数据，只能自己遍历所有数据，分别修改每个商品的选中状态
- 问题：如果要循环发送请求，更新数据，最好在启动 json-server 时，去掉 `--watch` 命令。否则，可能会出现请求失败失败的情况
- 原因：`--watch` 命令会监视 json 文件的变化，如果数据变化了 json-server 或重新读取 json 文件中的数据并重启 json-server。
  - 如果正好在重启过程中发送了请求，这个请求就可能无法链接到接口，导致请求失败

**步骤**：

1. 根据全选按钮的选中状态，修改本地商品数据的选中状态
2. 遍历所有商品，分别发送请求，修改每个商品的选中状态

**核心代码**：

App.js 中：

```jsx
const changeCheckAll = (checkAll) => {
  setCheckAll(checkAll);


  // 本地数据状态修改
  setGoodsList(
    goodsList.map((item) => {
      return {
        ...item,
        goods_state: checkAll,
      };
    }),
  );


  // 接口数据状态修改
  goodsList.forEach((item) =>
    http.patch(`/goodsList/${item.id}`, {
      goods_state: checkAll,
    }),
  );
};
```

情况 3：切换商品的选中状态，控制全选按钮的选中状态

**核心代码**：

App.js 中：

```js
const changeGoodsState = async (id, goods_state) => {
  // 拿到要跟新的 goodsList 值
  const newGoodsList = goodsList.map((item) => {
    if (item.id === id) {
      return {
        ...item,
        goods_state,
      };
    }
    return item;
  });
  setGoodsList(newGoodsList);
  // 注意：此处遍历的是 newGoodsList
  setCheckAll(newGoodsList.every((item) => item.goods_state));


  // ...
};
```

### 22. 展示结算数量与总价

> 能够展示结算数量和总价格

**步骤：**

1. 在 App 组件中计算总数量和总价格
2. 传递给子组件来展示

**核心代码**：

App.js 中：

```jsx
const totalCount = goodsList.reduce((count, item) => {
  if (item.goods_state) {
    return count + item.goods_count;
  }
  return count;
}, 0);


const totalPrice = goodsList.reduce((count, item) => {
  if (item.goods_state) {
    return count + item.goods_count * item.goods_price;
  }
  return count;
}, 0);


return <CartFooter totalCount={totalCount} totalPrice={totalPrice} />;
```

CartFooter.js 中：

```jsx
export const CartFooter = ({ totalCount, totalPrice }) => {
  return (
    <div className="my-footer">
      // ...
      <div>
        <span>合计:</span>
        <span className="price">¥ {totalPrice}</span>
      </div>
      <button type="button" className="footer-btn btn btn-primary">
        结算 ({totalCount})
      </button>
    </div>
  );
};
```

### 23. 今日总结

1. hooks 出现的意义？
   - 为函数组件提供类组件才有的状态和生命周期
   - 便于组件业务代码进行逻辑复用，规避类组件有的 this 问题，业务代码分散
2. hooks 的渐进策略？
   - 新功能新项目采用 hooks，不是完全丢弃类组件
3. useState 的使用？
   - `const [data,setData] = useState(初始数据)`
4. useState 的更新过程？
   - 初始化数据执行一次，每次组件执行后去最新的状态
5. useState 的使用原则？
   - 只能在函数组件调用，不能嵌套在 分支循环 语句中
6. useEffect 的使用？
   - `useEffect(()=>{})` 初始化，更新的时候执行
   - `useEffect(()=>{},[data])` 初始化，data 更新的时候执行
   - `useEffect(()=>{},[])` 初始化时候执行
   - `useEffect(()=>{ //... return ()=>{} },[])` 清除副作用
7. 综合案例
   - 理解到 hooks 可以分块组件业务
