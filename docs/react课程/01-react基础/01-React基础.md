---
title: 1-react基础
---
# React课程安排

![image-20220106163357543](https://wuxiaohui-1254415986.cos.ap-nanjing.myqcloud.com/uPic/image-20220106163357543.png)

# 学习目标

+ 能够说出react是什么
+ 能够掌握react的基本用法
+ 能够使用react脚手架
+ 能够使用jsx语法

# React入门

## 概述

### 1. React介绍

> 了解react的历史背景和基本概念



 [React](https://reactjs.org/) 起源于 Facebook 的内部项目。因为该公司对市场上所有 JavaScript MVC 框架，都不满意，就决定自己写一套，用来架设 Instagram 的网站。做出来以后，发现这套东西很好用，就在2013年5月开源了。

 React 是最流行的前端框架之一。对比近两年 [Vue和Angular](https://npm-stat.com/charts.html?package=angular&package=react&package=vue&from=2019-10-01&to=2021-09-30) 的下载量，还有2021年开发者使用的web框架的 [比例](https://insights.stackoverflow.com/survey/2021#most-popular-technologies-webframe) ，可以看到 React 是前端工程师应该必备技能之一，现在很多大厂也在使用它。

![1633512060676](https://wuxiaohui-1254415986.cos.ap-nanjing.myqcloud.com/uPic/1633512060676.309fd8e2.png)

 React 是一个用于构建用户界面的 JavaScript 库。可以理解它只负责MVC中的视图层渲染，不直接提供数据模型和控制器功能。react-router 实现路由，redux 实现状态管理，可以使用它们来构建一个完整应用。

 React中文站，https://zh-hans.reactjs.org/

**总结：** React是Facebook开源的，现在它是最流行的前端框架大厂必备，React本身是一个构建UI的库，如果需要开发一个完整的web应用需要配合react-router，redux，...等。

### 2. React特点

> 了解react的三个核心特点

- 声明式

 React 使创建交互式 UI 变得轻而易举。为你应用的每一个状态设计简洁的视图，当数据变动时 React 能高效更新并渲染合适的组件。 以声明式编写 UI，可以让你的代码更加可靠，且方便调试。

![1633514795424](https://wuxiaohui-1254415986.cos.ap-nanjing.myqcloud.com/uPic/1633514795424.003396d4-20220216192733103.png)

- 组件化

  创建拥有各自状态的组件，再由这些组件构成更加复杂的 UI。 组件逻辑使用 JavaScript 编写而非模版，因此你可以轻松地在应用中传递数据，并使得状态与 DOM 分离。

![1633579096420](https://wuxiaohui-1254415986.cos.ap-nanjing.myqcloud.com/uPic/1633579096420.db143907.png)

- 一次学习，跨平台编写

  无论你现在正在使用什么技术栈，你都可以随时引入 React 来开发新特性，而不需要重写现有代码。 React 还可以使用 Node 进行服务器渲染，或使用 [React Native](https://reactnative.dev/) 开发原生移动应用。

![1633578566552](https://wuxiaohui-1254415986.cos.ap-nanjing.myqcloud.com/uPic/1633578566552.7b549f39.png)

**总结：** 声明式UI更清晰快捷，组件化开发更灵活，可支持SSR,SPA ,NativeApp,VR 多平台。

## 基本使用

### 3. React脚手架

> 掌握使用create-react-app脚手架创建项目

创建项目方式：

- 全局安装脚手架再使用命令创建项目
- 使用npx远程调用脚手架创建项目

方式1：

- 全局安装

```bash
# 全局安装脚手架
npm i create-react-app -g
```

- 创建项目

```bash
# project-name 项目名称
create-react-app project-name
```

方式2：

- npx安装，npm5.2+支持

```bash
# project-name 项目名称
npx create-react-app project-name
```

**推荐：** 使用**方式2**这样每次使用的最新脚手架创建项目，创建完毕使用 `npm start` 启动项目。

### 4. React基本使用

> 在create-react-app脚手架创建项目中，掌握使用react基本步骤

使用步骤：

- 导入 `react` `react-dom` 两个包
- 使用 `react` 创建react元素（虚拟DOM）
- 使用 `react-dom` 渲染react元素

落地代码：src内文件删除，创建`src/index.js`

- 导包

```js
// 负责创建react元素
import React from 'react'
// 负责把react元素渲染到页面
import ReactDom from 'react-dom'
```

- 创建react元素

```js
// 参数1：标签名称
// 参数2：属性集合  特殊 class==>className for==>htmlFor
// 参数3：标签内容
// <h1 id="myh1">hello react</h1>
const element = React.createElement('h1',{id:'el'},'Hello React')
```

- 渲染react元素

```js
// #root在public/index.html上
ReactDom.render(element, document.getElementById('root'))
```

**总结：** 使用 `react` 创建元素，使用 `react-dom` 渲染元素。



:::tip react18创建项目

```javascript
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```



:::

### 5. React创建元素练习

> 掌握使用react创建嵌套元素

练习题目：

- 使用react创建如下元素

```html
<div class="list">
  <h1>水果</h1>
  <ul>
    <li>苹果</li>
    <li>橘子</li>
  </ul>
</div>
```

落地代码：

```js
import React from 'react'
import ReactDOM from 'react-dom'

const element = React.createElement(
  'div',
  { className: 'list' },
  [
    React.createElement('h1', null, '水果'),
    React.createElement(
      'ul',
      null,
      [
        React.createElement('li', null, '苹果'),
        React.createElement('li', null, '橘子')
      ]
    ),
  ]
)


ReactDOM.render(element, document.getElementById('root'))
```

**总结：** 使用 `createElement` 创建元素非常麻烦、可读性差、不优雅，开发中推荐使用JSX来声明UI。

## jsx

### 6. JSX基本概念

> 知道JSX是什么，知道JSX的优点

概念：

- `JSX` 是 `JavaScript XML` 的简写，表示了在JavaScript中书写XML格式的代码。它是 `React` 的核心内容，它可以让我们在 `React` 中创建元素更加简单，更加直观，提高开发效率。

注意：

- `JSX` 是 `JavaScript` 的**语法扩展**，它无法在浏览器中直接使用，在 `create-react-app` 脚手架中内置了 `@babel/plugin-transform-react-jsx` 插件来解析它，成为 `JavaScript` 的标准语法。

演示：

- 我们可以在 babel 的网站，在线测试 [babeljs](https://www.babeljs.cn/) ，这个网站可以把 `JSX` 代码转换成 `JS` 代码

![1634544813507](https://wuxiaohui-1254415986.cos.ap-nanjing.myqcloud.com/uPic/1634544813507.3004ed1c.png)

**总结：**

- 什么是JSX？

  - `JS` 扩展语法，可以在 `JS` 中书写 `XML` 语法
- JSX的优点？
  - 可以更加 `简洁、直观、高效` 的声明UI界面

使用prettier插件格式化react代码

+ 安装插件

![image-20200907165515629](https://wuxiaohui-1254415986.cos.ap-nanjing.myqcloud.com/uPic/image-20200907165515629-1629115818044.png)

+ 添加prettier的配置

```js
// 保存到额时候用使用prettier进行格式化
"editor.formatOnSave": true,
// 不要有分号
"prettier.semi": false,
// 使用单引号
"prettier.singleQuote": true,
// 默认使用prittier作为格式化工具
"editor.defaultFormatter": "esbenp.prettier-vscode",
```



### 7. JSX基本使用

> 掌握JSX在React中的基本使用

基本使用

- 导入 `react-dom`
- 使用 `JSX` 创建元素
- 使用 `react-dom` 渲染

思考问题

- 需要导入 `react` 包吗？

落地代码：

```jsx
import ReactDom from 'react-dom'


const element = (
  <div id="box">
    <h1>JSX</h1>
    <ul>
      <li>tom</li>
      <li>jack</li>
      <li>tony</li>
    </ul>
  </div>
)


ReactDom.render(element, document.getElementById('root'))
```

上述代码运行成功，现在 `React17x` 可以不必导入，因为在 `babel` 转换的时候自动导入了创建React元素的依赖。但是如果你使用 `React16x` 那么你还需要手动导入 `React` ，如何验证？安装下低版本的React包即可。

**总结：**

- 导入 `react-dom` 使用 `JSX` 创建元素 使用 `react-dom` 渲染元素
- `17x` 版本的 `React` 不需要导入，如果将来遇见 `低版本` 是需要导入的。

**补充：**

- `vscode settings.json` 加上 在react中使用ement语法提示创建标签

```json
"emmet.includeLanguages": {
    "javascript": "javascriptreact"
}
```

### 8. JSX的注意事项

> 知道使用JSX的使用细节

使用细节：

- 特殊属性写法 `className` `htmlFor`
- 没有内容的节点可以使用 `单标签`
- 必需有根节点，可以使用 `<></>` 幽灵标签，其实是 `<React.Fragment></React.Fragment>` 简写
- 如果 `JSX` 有换行，最好使用 `()` 包裹

代码示例：

- 特殊属性

```jsx
// class ---> className    for ---> htmlFor  特殊属性
<div className="box">
  <label htmlFor="ck"></label>
  <input id="ck" type="checkbox" />
</div>
```

- 可单标签

```jsx
// <span className="icon-edit"></span> 没内容可以写成单标签形势
<span className="icon-edit" />
```

- 有根节点

```jsx
// 1. 使用 React.Fragment 代码片段
import React from 'react'
import ReactDom from 'react-dom'
const element = <React.Fragment>
  <div>header</div>
  <div>footer</div>
</React.Fragment>
ReactDom.render(element, document.getElementById('root'))
// 2. 使用<></>可以避免没必要的标签产生 简写 React.Fragment
import ReactDom from 'react-dom'
const element = <>
  <div>header</div>
  <div>footer</div>
</>
ReactDom.render(element, document.getElementById('root'))
```

- 用小括号

```jsx
// 有换行的时候最好使用()可以让标签对其，避免没必要的错误
const element = (
  <>
    <div>header</div>
    <div>footer</div>
  </>
)
```

**总结：**

- 那些特殊属性？
  - `className` `htmlFor`
- 什么时候使用单标签？
  - 没有内容的标签
- 必需又根标签，如果不想产生无用标签怎么办？
  - 使用 `<></>` 代码片段标签
- 建议多行用`()`包裹

### 9. JSX嵌入表达式

> 掌握在`JSX`中嵌入`JS`表达式，进行渲染

知识内容：在`JSX`中使用`{}`嵌入`JS`表达式

- 展示数据
- 进行运算
- 三元运算
- 使用函数
- 使用JSX
- 使用注释

演示代码：

```jsx
import React from 'react'
import ReactDom from 'react-dom'


// 数据
const data = {
  name: 'tom',
  age: 18
}


// 函数
const up = () => {
  return data.name.toUpperCase()
}


// jsx表达式
const list = (
  <ul>
    <li>jack</li>
    <li>tony</li>
  </ul>
)


const element = (
  <div>
    {/* 1. 使用数据  注释推荐快键键(ctrl+/)  */}
    <div>姓名：{data.name}</div>
    <div>年龄：{data.age}</div>
    {/* 2. 使用运算 */}
    <div>明年几岁：{data.age + 1}</div>
    {/* 3. 使用三元 */}
    <div>是否成年：{data.age > 16 ? '是' : '否'}</div>
    {/* 4. 使用函数 */}
    <div>姓名大写：{up()}</div>
    {/* 5. 使用JSX(jsx也是表达式) */}
    <div>朋友：{list}</div>
  </div>
)


ReactDom.render(element, document.getElementById('root'))
```

**总结：** 使用`{}`可以在`JSX`中使用表达式，注意不能使用语句。

### 10. JSX条件渲染

> 掌握在`JSX`中使用分支语句、三元运算、逻辑运算进行条件渲染

知识内容：

- 使用分支语句 `if/else` 完成条件渲染
- 使用 `三元运算符` 完成条件渲染
- 使用 `逻辑运算符` 完成条件渲染

演示代码：

1. `if/else` 条件渲染

```jsx
const loading = true


// 不能再JSX中写语句，但，可以充分利用JS能力
const getContent = () => {
  if ( loading ) {
    return <div>正在加载...</div>
  } else {
    return <div>数据加载完毕，这是显示数据</div>
  }
}


const element = <div>{getContent()}</div>
```

2. `三元运算符` 完成条件渲染

```jsx
const loading = true


const element = (
  <div>
    {loading ? <div>正在加载...</div> : <div>数据加载完毕，这是显示数据</div>}
  </div>
)
```

3. `逻辑运算` 完成条件渲染

```jsx
const loading = true


const element = (
  <div>
    {loading && <div>正在加载...</div>}
    {loading || <div>数据加载完毕，这是显示数据</div>}
  </div>
)
```

**总结：** `JSX` 条件渲染可以使用 `if/else` `三元运算` `逻辑运算` 来完成

### 11. JSX列表渲染

> 掌握在`JSX`中使用`Array.map()`来进行列表的渲染

知识内容：

- 可以渲染 `JSX` 数组
- 使用 `map` 渲染列表
- 直接在 `JSX` 中使用 `map` 渲染列表
- `key` 属性使用

演示代码：

1. 可以渲染 `JSX` 数组

```jsx
// 1. const list = ['tom', 'jack', 'tony'] 把数组转换成如下JSX数组
const list = [ <li>tom</li>, <li>jack</li>, <li>tony</li> ] 
// 2. 把JSX嵌入在UL标签中
const element = <ul>{list}</ul>
```

1. 使用 `map` 渲染列表

```jsx
// 1. 数据
const list = ['tom', 'jack', 'tony']
// 2. 转jsx数组
const lis = list.map(item => <li>{item}</li>)
// 3. 使用
const element = <ul>{lis}</ul>
```

2. 直接在 `JSX` 中使用 `map` 渲染列表

```jsx
// 1. 数据
const list = ['tom', 'jack', 'tony']
// 2. 使用 map调用其实也是js表达式
const element = <ul>{list.map(item => <li>{item}</li>)}</ul>
```

3. `key` 属性使用

```jsx
// Warning: Each child in a list should have a unique "key" prop.
// 1. 数据
const list = ['tom', 'jack', 'tony']
// 2. 使用
const element = <ul>{list.map(item => <li key={item}>{item}</li>)}</ul>
```

**总结：** 在`JSX`中一般使用 `map` 来遍历进行渲染，遍历的时候需要给子元素加上 `key={唯一标识}`

### 12. JSX列表渲染练习

> 巩固`JSX`中如何渲染列表

练习题目：

- 使用以下数据，渲染无序列表，显示姓名和是否成年

```js
const list = [
  { id: 100, name: 'tom', age: 15 },
  { id: 101, name: 'jack', age: 18 },
  { id: 102, name: 'tony', age: 20 }
]
```

![image-20220106222634601](https://wuxiaohui-1254415986.cos.ap-nanjing.myqcloud.com/uPic/image-20220106222634601.png)

落地代码：

```jsx
import ReactDom from 'react-dom'


// 1. 数据
const list = [
  { id: 100, name: 'tom', age: 15 },
  { id: 101, name: 'jack', age: 18 },
  { id: 102, name: 'tony', age: 20 }
]


// 2. 使用
const element = (
  <ul>
    {list.map(item => {
      return (
        <li key={item.id}>
          <p>姓名：{item.name}</p>
          <p>是否成年：{item.age > 16 ? '是' : '否'}</p>
        </li>
      )
    })}
  </ul>
)


ReactDom.render(element, document.getElementById('root'))
```

**总结：** 熟练掌握使用`map`进行遍历的写法

### 13. JSX样式-style方式

> 掌握使用style属性设置样式

知识内容：

- `style` 接受一个采用小驼峰命名属性的 `JavaScript` 对象，而不是 `CSS` 字符串
- `style` 中的 `key` 采用小驼峰命名是为了与 `JS` 访问 `DOM` 节点的属性保持一致
- `React` 会自动添加 ”px” 后缀到内联样式为数字的属性后，其他单位需要手动添加

演示代码：

- 需求：去掉上一个列表案例 `ul` 的点，加上背景样式，设置字体大小，给第一个 `p` 设置两倍字体大小

```js
import ReactDom from 'react-dom'


// 1. 数据
const list = [
  { id: 100, name: 'tom', age: 15 },
  { id: 101, name: 'jack', age: 18 },
  { id: 102, name: 'tony', age: 20 }
]


+// 2. 样式
const styleObject = {
  listStyle: 'none', 
  backgroundColor: 'pink', 
  fontSize: 20
}

// 3. 使用
const element = (
+  <ul style={styleObject} >
    {list.map(item => {
      return (
        <li key={item.id}>
+          <p style={{fontSize: '2em'}}>姓名：{item.name}</p>
          <p>是否成年：{item.age > 16 ? '是' : '否'}</p>
        </li>
      )
    })}
  </ul>
)


ReactDom.render(element, document.getElementById('root'))
```

**总结：**

- `style` 属性使用 `{}` 绑定样式对象，默认 `px` 单位可以省略使用数字，一般需要动态设置属性样式使用这种方式

**问题：**

- 在多数情况下，应使用 `className` 属性来引用外部 `CSS` 样式表中定义的 `class`

### 14. JSX样式-className方式

> 掌握使用 `className` 设置类名来使用样式

知识内容：

- `className` 设置类名，和 `class` 属性要求一样只能是字符串
- 如果需要根据数据设置类名，可以使用 `{}` 嵌入 `JS` 表达式实现

演示代码：

- 需求：在元素 `button`上根据 `isActive` 数据的值添加 `active` 类名

``` css
index.css
.button {
  width: 100px;
  height: 40px;
  border: 1px solid #eee;
  color: #999;
  border-radius: 4px;
  display: inline-block;
  text-align: center;
  line-height: 40px;
  box-shadow: 2px 2px 10px #ccc;
  cursor: pointer;
  user-select: none;
}


.button.active {
  background: #069;
  color: #fff;
  border-color: #069;
}


.button.block {
  display: block;
  width: 100%;
}
```
```js
index.js
import ReactDom from 'react-dom'
// 在src下新建index.css文件，导入进来即可
import './index.css'


const isActive = false


const element = (
  <span className={`button ${isActive?'active':''}`}>按钮</span>
)


ReactDom.render(element, document.getElementById('root'))
```

**总结：** 如果只是个别类名的变化使用 `className` 属性嵌入 `三元表达式` 即可完成

**思考：** 如果是多个类名的变化呢？

### 15. JSX样式-动态className

> 掌握在 `React` 中使用 `JS` 原生的能力处理多个类的动态绑定

知识内容：

- 在使用 `className` 的时候遇见多个类名动态绑定，可以模仿 `vue` 使用对象的方式
- `vue` 中绑定类名的时候使用 `{类名:布尔}` 用布尔值决定是否加上这个类名

演示代码：

- 需求：在元素 `button`上根据 `isActive` 数据的值添加 `active` 类名，`isBlock` 数据的值添加 `block` 类名

```jsx
import ReactDom from 'react-dom'
import './index.css'


// 数据
const isActive = false
const isBlock = false


// 类名对象
const classObject = {
  button: true,
  active: isActive,
  block: isBlock
}


// 转换成字符串
const className = Object.keys(classObject).filter(key=>classObject[key]).join(' ')


const element = (
  <span className={className}>按钮</span>
)


ReactDom.render(element, document.getElementById('root'))
```

**总结：** 使用 `JS` 原生的能力处理多个类名的动态绑定，当然这样的需求已经有 `classnames` 库给我们解决了

### 16. JSX样式-classnames库

> 掌握使用 `classnames` 库来完成 `className` 属性值的动态绑定

知识内容：

- 如何安装导入 `classnames` 库
- `classnames` 的 `API` 认识
- 使用 `classnames` 处理 `className` 属性值动态绑定

演示过程：

- 安装导入 `classnames` [文档](https://www.npmjs.com/package/classnames#usage-with-reactjs)
> 安装classnames包
::: code-tabs#shell
@tab npm安装
```bash
npm i classnames
```
@tab yarn安装
```bash
yarn add classnames
```
:::

```js{4,5}
import ReactDom from 'react-dom'
// 导入
import classNames from 'classnames'
import './index.css'


const element = (
  <span className="button">按钮</span>
)


ReactDom.render(element, document.getElementById('root'))
```

- 认识 `classnames` API

```js
// 1. 使用字符串
classNames('foo', 'bar') // foo bar
// 2. 使用对象
classNames({ foo: false, bar: true }) // foo bar
// 3. 使用数组
classNames(['foo', 'bar']) // foo bar
// 4. 混合使用
classNames('foo', { bar: true }) // foo bar
```

- 需求：在元素 `button`上根据 `isActive` 数据的值添加 `active` 类名，`isBlock` 数据的值添加 `block` 类名

```jsx
import ReactDom from 'react-dom'
// 1. 导入classnames
import classNames from 'classnames'
import './index.css'


// 2. 数据
const isActive = true
const isBlock = true


// 3. 产生类名
const className = classNames('button', {
  active: isActive,
  block: isBlock
})


const element = (
  <span className={className}>按钮</span>
)


ReactDom.render(element, document.getElementById('root'))
```

**总结：** 推荐以后开发项目中使用第三方的库来解决`className`的值绑定问题

# 今日总结

> 回顾当天主要知识内容

- 1.如何描述 `React` ？
  - `React` 使用一个构建用户界面的JavaScript库，有声明式UI、组件化、一次学习跨平台编写。
- 2.如何创建 `React` 项目？
  - 使用 `npx create-react-app 项目名称` 来创建
- 3.使用 `React` 的基本步骤？
  - 导入`react` `react-dom` ，然后使用 `createElement` 创建元素，最后使用`render`渲染
- 4.什么是JSX，它的特点是什么？
  - `JS` 扩展语法，可以在 `JS` 中书写 `XML` 语法，更加 `简洁、直观、高效` 的声明UI界面
- 5.在 `JSX` 中如何完成数据插入？
  - 使用 `JS` 表达式
- 6.在 `JSX` 中如何完成条件渲染？
  - 使用 `分支语句` `三元表达式` `逻辑运算` 等
- 7.在 `JSX` 中如何完成列表渲染？
  - 使用 `map` 在`JSX`中进行遍历
- 8.在 `JSX` 中如何完使用样式？
  - 使用 `style` 绑定css样式对象，使用 `className` 绑定类名字符串
- 9.在 `JSX` 中如何便捷的操作类名？
  - 使用 `classnames` 这个库

代码片段： 安装 `ES7 React/Redux/GraphQL/React-Native snippets vscode` 插件



# 作业

> 能够使用今日学习的知识完成一个优酷评论列表展示的案例

![image-20220107100819129](https://wuxiaohui-1254415986.cos.ap-nanjing.myqcloud.com/uPic/image-20220107100819129.png)

静态结构

```jsx
<div className="comments">
    <h3 className="comm-head">热门评论<sub>(5)</sub></h3>
    <ul className="comm-list">
      <li className="comm-item">
        <div className="avatar"></div>
        <div className="info">
          <p className="name vip">
            清风徐来 
            <img src="https://gw.alicdn.com/tfs/TB1c5JFbGSs3KVjSZPiXXcsiVXa-48-48.png" />
          </p>
          <p className="time">2012-12-12</p>
          <p>这里是评论的内容！！！这里是评论的内容！！！这里是评论的内容！！！</p>
        </div>
      </li>
    </ul>
  </div>
```

数据

```js
const comments = [
  { 
    id: 100, 
    name: '__RichMan', 
    avatar: 'https://r1.ykimg.com/051000005BB36AF28B6EE4050F0E3BA6',
    content: '这阵容我喜欢😍靳东&闫妮，就这俩名字，我就知道是良心剧集...锁了🔒',
    time: '2021/10/12 10:10:23',
    vip: true
  },
  { 
    id: 101, 
    name: '糖蜜甜筒颖', 
    avatar: 'https://image.9xsecndns.cn/image/uicon/712b2bbec5b58d6066aff202c9402abc3370674052733b.jpg',
    content: '突围神仙阵容 人民的名义第三部来了 靳东陈晓闫妮秦岚等众多优秀演员实力派 守护人民的财产 再现国家企业发展历程',
    time: '2021/09/23 15:12:44',
    vip: false
  },
    { 
    id: 102, 
    name: '大星的妈妈', 
    avatar: 'https://static.youku.com/lvip/img/avatar/310/6.png',
    content: '第一集看的有点费力，投入不了，闫妮不太适合啊，职场的人哪有那么多表情，一点职场的感觉都没有',
    time: '2021/07/01 00:30:51',
    vip: true
  }
]
```

