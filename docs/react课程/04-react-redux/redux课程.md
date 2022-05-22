---
title: 📚01-react-redux使用
---



1. React-Redux介绍

**目标：** 能够说出为什么需要使用react-redux

**内容：**

- 问题：为什么要使用 React-Redux 绑定库?
- 回答：React 和 Redux 是两个独立的库，两者之间职责独立。因此，为了实现在 React 中使用 Redux 进行状态管理 ，就需要一种机制，将这两个独立的库关联在一起。这时候就用到 React-Redux 这个绑定库了。
- 作用：**为 React 接入 Redux，实现在 React 中使用 Redux 进行状态管理**。
- react-redux 库是 Redux 官方提供的 React 绑定库。

![img](https://wuxiaohui-1254415986.cos.ap-nanjing.myqcloud.com/uPic/react-redux.443f85c0.jpeg)

## React-Redux-基本使用

**目标**：使用react-redux库在react中使用redux管理状态

**内容**：

[react-redux 文档](https://react-redux.js.org/introduction/getting-started)

react-redux 的使用分为两大步：1 全局配置（只需要配置一次） 2 组件接入（获取状态或修改状态）

先看全局配置：

**步骤**：

1. 安装 react-redux：`yarn add react-redux`
2. 从 react-redux 中导入 Provider 组件
3. 导入创建好的 redux 仓库
4. 使用 Provider 包裹整个应用
5. 将导入的 store 设置为 Provider 的 store 属性值

**核心代码**：

src/index.js 中：

```js
// 导入 Provider 组件
import { Provider } from 'react-redux'
// 导入创建好的 store
import store from './store'


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
)
```

:::tip 如何控制台查看redux状态

1. 安装redux插件

2. 安装`redux-devtools-extension`插件

3. 配置插件

   ```js
   import {createStore, combineReducers} from "redux";
   import todoReducer from "@/Todo/store/reducers/todo";
   // 安装redux-devtools-extension的可视化工具。
   import { composeWithDevTools } from 'redux-devtools-extension'
   
   const rootReducers = combineReducers({
     todos: todoReducer
   })
   // 配置可视化工具
   const store = createStore(rootReducers, composeWithDevTools())
   
   export default store
   
   ```

   

:::

## React-Redux-获取状态useSelector

**目标**：能够使用 useSelector hook 获取redux中共享的状态

**内容**：

- `useSelector`：获取 Redux 提供的状态数据
- 参数：selector 函数，用于从 Redux 状态中筛选出需要的状态数据并返回
- 返回值：筛选出的状态

```js
import { useSelector } from 'react-redux'


// 计数器案例中，Redux 中的状态是数值，所以，可以直接返回 state 本身
const count = useSelector(state => state)


// 比如，Redux 中的状态是个对象，就可以：
const list = useSelector(state => state.list)
```

**核心代码**：

App.js 中：

```jsx
import { useSelector } from 'react-redux'


const App = () => {
  const count = useSelector(state => state)
  
  return (
  	<div>
    	<h1>计数器：{count}</h1>
      <button>数值增加</button>
			<button>数值减少</button>
    </div>
  )
}
```

## React-Redux-分发动作useDispatch

**目标**：能够使用 useDispatch hook 修改redux中共享的状态

**内容**：

- `useDispatch`：拿到 dispatch 函数，分发 action，修改 redux 中的状态数据
- 语法：

```js
import { useDispatch } from 'react-redux'


// 调用 useDispatch hook，拿到 dispatch 函数
const dispatch = useDispatch()


// 调用 dispatch 传入 action，来分发动作
dispatch( action )
```

**核心代码**

App.js 中：

```jsx
import { useDispatch } from 'react-redux'


const App = () => {
  const dispatch = useDispatch()
  
  return (
  	<div>
    	<h1>计数器：{count}</h1>
      {/* 调用 dispatch 分发 action */}
      <button onClick={() => dispatch(increment(2))}>数值增加</button>
			<button onClick={() => dispatch(decrement(5))}>数值减少</button>
    </div>
  )
}
```

## 理解 Redux 数据流

**目标**：能够说出redux数据流动过程

**内容**：![img](https://wuxiaohui-1254415986.cos.ap-nanjing.myqcloud.com/uPic/ReduxDataFlow.49fa8c39.gif)

**总结**：

- 任何一个组件都可以直接接入 Redux，也就是可以直接：1 修改 Redux 状态 2 接收 Redux 状态
- 并且，只要 Redux 中的状态改变了，所有接收该状态的组件都会收到通知，也就是可以获取到最新的 Redux 状态
- 这样的话，两个组件不管隔得多远，都可以**直接通讯**了

## Redux应用-代码结构

**目标**：能够组织redux的代码结构

**内容**：

在使用 Redux 进行项目开发时，不会将 action/reducer/store 都放在同一个文件中，而是会进行拆分

可以按照以下结构，来组织 Redux 的代码：

```html
/store        --- 在 src 目录中创建，用于存放 Redux 相关的代码
  /actions    --- 存放所有的 action
  /reducers   --- 存放所有的 reducer
  index.js    --- redux 的入口文件，用来创建 store
```

## Redux应用-ActionType的使用

**目标**：能够知道为什么要抽离 action type

**内容**：

- Action Type 指的是：action 对象中 type 属性的值

- Redux 项目中会多次使用 action type，比如，action 对象、reducer 函数、dispatch(action) 等

- 目标：**集中处理 action type，保持项目中 action type 的一致性**

- action type 的值采用：

  ```
  'domain/action'(功能/动作)形式
  ```

  ，进行分类处理，比如，

  - 计数器：`'counter/increment'` 表示 Counter 功能中的 increment 动作
  - 登录：`'login/getCode'` 表示登录获取验证码的动作
  - 个人资料：`'profile/get'` 表示获取个人资料

**步骤**：

1. 在 store 目录中创建 `actionTypes` 目录或者 `constants` 目录，集中处理
2. 创建**常量**来存储 action type，并导出
3. 将项目中用到 action type 的地方替换为这些常量，从而保持项目中 action type 的一致性

```js
// actionTypes 或 constants 目录：


const increment = 'counter/increment'
const decrement = 'counter/decrement'


export { increment, decrement }


// --


// 使用：


// actions/index.js
import * as types from '../acitonTypes'
const increment = payload => ({ type: types.increment, payload })
const decrement = payload => ({ type: types.decrement, payload })


// reducers/index.js
import * as types from '../acitonTypes'
const reducer = (state, action) => {
  switch (action.type) {
    case types.increment:
      return state + 1
    case types.decrement:
      return state - action.payload
    default:
      return state
  }
}
```

- *注：额外添加 Action Type 会让项目结构变复杂，此操作可省略。但，`domain/action` 命名方式强烈推荐！*

## Redux应用-Reducer的分离与合并

**目标**：能够合并redux的多个reducer为一个根reducer

**内容**：

- 随着项目功能变得越来越复杂，需要 Redux 管理的状态也会越来越多

- 此时，有两种方式来处理状态的更新：

  1. 使用一个 reducer：处理项目中所有状态的更新
  2. 使用多个 reducer：按照项目功能划分，每个功能使用一个 reducer 来处理该功能的状态更新

- 推荐：**使用多个 reducer（第二种方案）**，每个 reducer 处理的状态更单一，职责更明确

- 此时，项目中会有多个 reducer，但是 **store 只能接收一个 reducer**，因此，需要将多个 reducer 合并为一根 reducer，才能传递给 store

- 合并方式：使用 Redux 中的 `combineReducers` 函数

- 注意：

  合并后，Redux 的状态会变为一个对象，对象的结构与 combineReducers 函数的参数结构相同

  - 比如，此时 Redux 状态为：`{ a： aReducer 处理的状态, b： bReducer 处理的状态 }`

```js
import { combineReducers } from 'redux'


// 计数器案例，状态默认值为：0
const aReducer = (state = 0, action) => {}
// Todos 案例，状态默认值为：[]
const bReducer = (state = [], action) => {}


// 合并多个 reducer 为一个 根reducer
const rootReducer = combineReducers({
  a: aReducer,
  b: bReducer
})


// 创建 store 时，传入 根reducer
const store = createStore(rootReducer)


// 此时，合并后的 redux 状态： { a: 0, b: [] }
```

- 注意：虽然在使用

   

  ```
  combineReducers
  ```

   

  以后，整个 Redux 应用的状态变为了

  ```
  对象
  ```

  ，但是，对于每个 reducer 来说，每个 reducer 只负责整个状态中的某一个值

  - 也就是：**每个reducer只负责自己要处理的状态**
  - 举例：
    - 登录功能：`loginReducer` 处理的状态只应该是跟登录相关的状态
    - 个人资料：`profileReducer` 处理的状态只应该是跟个人资料相关的状态

- 合并 reducer 后，redux 处理方式：只要合并了 reducer，不管分发什么 action，所有的 reducer 都会执行一次。各个 reducer 在执行的时候，能处理这个 action 就处理，处理不了就直接返回上一次的状态。所以，我们分发的某一个 action 就只能被某一个 reducer 来处理，也就是最终只会修改这个 reducer 要处理的状态，最终的表现就是：分发了 action，只修改了 redux 中这个 action 对应的状态！

## Redux应用-redux管理哪些状态

**目标**：能够知道什么状态可以放在redux中管理

**内容**：

不同状态的处理方式：

1. 将所有的状态全部放到 redux 中，由 redux 管理
2. 只将某些状态数据放在 redux 中，其他数据可以放在组件中，比如：
   - 如果一个状态，只在某个组件中使用（比如，表单项的值），推荐：放在组件中
   - 需要放到 redux 中的状态：
     1. 在多个组件中都要使用的数据【涉及组件通讯】
     2. 通过 ajax 请求获取到的接口数据【涉及到请求相关逻辑代码放在哪的问题】

## 综合案例-todomvc

### 1. 案例结构搭建

**目标**：能够根据模板搭建案例结构

**内容**：使用准备好的模板内容，搭建项目，并分析案例的中组件的层级结构

```html
App
	TodoHeader
	TodoMain
		TodoItem
	TodoFooter
```

### 2. 配置Redux基本结构

**目标**：能够在todomvc案例中配置Redux

**步骤**：

1. 安装 redux：`yarn add redux`
2. 在 src 目录中创建 store 文件夹
3. 在 store 目录中创建 actions、reducers、actionTypes 目录以及 index.js 文件
4. 在 reducers 目录中新建 todos.js 和 index.js 文件
5. 在 todos.js 中创建一个基本的 reducer 并导出
6. 在 reducers/index.js 中创建根 reducer 并导出
7. 在 store/index.js 中，导入根 reducer 并创建 store 然后导出

**核心代码**：

store/reducers/todos.js 中：

```js
// 默认值：
const initialState = [
  {id: 1, title: '吃饭', isDone: true},
  {id: 2, title: '学习', isDone: false},
  {id: 3, title: '睡觉', isDone: true}
]


export const todos = (state = initialState, action) => {
  return state
}
```

store/reducers/index.js 中：

```js
import { combineReducers } from 'redux'


import { todos } from './todos'


const rootReducer = combineReducers({
  todos
})


export default rootReducer
```

store/index.js 中：

```js
import { createStore } from 'redux'
import rootReducer from './reducers'


const store = createStore(rootReducer)


export default store
```

### 3. 配置React-Redux

**目标**：能够在 todomvc 案例中配置 react-redux

**步骤**：

1. 安装 react-redux：`yarn add react-redux`
2. 在 src/index.js 中，导入 Provider 组件
3. 在 src/index.js 中，导入创建好的 store
4. 使用 Provider 包裹 App 组件，并设置其 store 属性

**核心代码**：

src/index.js 中：

```js
import { Provider } from 'react-redux'
import store from './store'
import App from './App'


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
)
```

<img src="https://wuxiaohui-1254415986.cos.ap-nanjing.myqcloud.com/uPic/image-20220311172152142.png" alt="image-20220311172152142" style="zoom:50%;" />

### 4. 渲染任务列表

**目标**：能够渲染任务列表

**步骤**：

1. 在 TodoMain 组件中导入 useSelector hook
2. 调用 useSelector 拿到 todos 状态，也就是任务列表数据
3. 遍历任务列表数据，将每个任务项数据传递给 TodoItem 组件
4. 在 TodoItem 组件中，拿到数据并渲染（暂时不考虑选中问题）

**核心代码**：

TodoMain.js 中：

```jsx
import { useSelector } from 'react-redux'


export const TodoMain = () => {
  const list = useSelector(state => state.todos)


  return (
    // ...
    <ul className="todo-list">
      {list.map(item => (
        <TodoItem key={item.id} {...item} />
      ))}
    </ul>
  )
}
```

TodoItem.js 中：

```jsx
import classNames from 'classnames'


export const TodoItem = ({ id, text, done }) => {
  return (
    // ...
    <li
      className={classNames({
        completed: done
      })}
    >
      <div className="view">
        <label>{text}</label>
      </div>
    </li>
  )
}
```

### 5. 渲染未完成任务数量

**目标**：能够渲染未完成任务数量

**分析说明**：

问题：实现该功能，是添加一个新的状态，还是用当前已有的状态？

回答：看一下要用到的这个数据，能不能直接根据现有的状态得到，如果能直接用现有的数据即可；否则，就要创建新的状态了

比如，现在要用的未完成任务数量，可以直接从 todos 任务列表数据中过滤得到，所以，直接用当前数据即可

**步骤**：

1. 在 TodoFooter 组件中导入 useSelector hook
2. 调用 useSelector 拿到 todos 状态，也就是任务列表数据
3. 根据任务列表数据，过滤出未完成任务并拿到其长度，然后渲染

**核心代码**：

TodoFooter.js 中：

```jsx
import { useSelector } from 'react-redux'


export const TodoFooter = () => {
	const leftCount = useSelector(
    state => state.todos.filter(item => !item.done).length
  )


  return (
		// ...
    <span className="todo-count">
      <strong>{leftCount}</strong> item left
    </span>
  )
}
```

### 6. 删除任务

**目标**：能够实现删除任务功能

**步骤**：

1. 给删除按钮绑定点击事件
2. 在点击事件中分发删除任务的 action
3. 创建 actionTypes/todos.js 文件，导出删除任务的 action type
4. 创建 actions/todos.js 文件，创建删除任务的 action
5. 在 reducers/todos.js 中，根据 action 类型删除任务

**核心代码**：

TodoItem.js 中：

```jsx
import { useDispatch } from 'react-redux'
import { delTodo } from '../store/actions/todos'


export const TodoItem = ({ id, text, done }) => {
  const dispatch = useDispatch()


  return (
    // ...
		<button className="destroy" onClick={() => dispatch(delTodo(id))}></button>
  )
}
```

actionTypes/todos.js 中：

```js
// 删除任务
export const DEL_TODO = 'todos/del'
```

actions/todos.js 中：

```js
// 导入创建好的 action type
import * as types from '../actionTypes/todos'


// 删除任务
export const delTodo = id => ({
  type: types.DEL_TODO,
  payload: id
})
```

reducers/todos.js 中：

```js
import * as types from '../actionTypes/todos'


export const todos = (state = initialState, action) => {
  switch (action.type) {
    // 处理删除任务
    case types.DEL_TODO:
      return state.filter(item => item.id !== action.payload)
    default:
      return state
  }
}
```

### 7. 切换任务完成状态

**目标**：能够实现切换任务完成状态

**步骤**：

1. 为 TodoItem 组件中的 checkbox 添加 checked 值为：props.done 并为其绑定 change 事件
2. 在 change 事件中分发切换任务完成状态的 action
3. 在 actionTypes/todos.js 中，创建切换任务的 action type 并导出
4. 在 actions/todos.js 文件，创建切换任务的 action 并导出
5. 在 reducers/todos.js 中，根据 action 类型切换任务完成状态

**核心代码**：

TodoItem.js 中：

```jsx
import { toggleTodo } from '../store/actions/todos'


export const TodoItem = ({ id, text, done }) => {
  return (
    // ...
    <input
      className="toggle"
      type="checkbox"
      checked={done}
      onChange={() => dispatch(toggleTodo(id))}
      />
  )
}
```

actionTypes/todos.js 中：

```js
// 切换任务
export const TOGGLE_TODO = 'todos/toggle'
```

actions/todos.js 中：

```js
export const toggleTodo = id => ({
  type: types.TOGGLE_TODO,
  payload: id
})
```

reducers/todos.js 中：

```js
export const todos = (state = initialState, action) => {
  switch (action.type) {
    // ...
    case types.TOGGLE_TODO:
      return state.map(item => {
        if (item.id === action.payload) {
          return {
            ...item,
            done: !item.done
          }
        }
        return item
      })
  }
}
```

### 8. 添加任务

**目标**：能够实现添加任务

**分析说明**：

问题：控制文本框的状态，应该放在 redux 中，还是放在组件中？

回答：组件中

**步骤**：

1. 在 TodoHeader 组件中通过受控组件获取文本框的值
2. 给 input 绑定 keyDown 事件，在事件处理程序中判断按键是不是回车
3. 如果不是，直接 return 不执行添加操作
4. 如果是，分发添加任务的 action
5. 分别添加添加任务的 action type 和 action
6. 在 todos 的 reducer 中，完成添加任务的状态更新
7. 对添加任务功能进行非空校验和清空文本框的操作

**核心代码**：

TodoHeader.js 中：

```jsx
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../store/actions/todos'


export const TodoHeader = () => {
  const dispatch = useDispatch()
  const [text, setText] = useState('')


  const onAddTodo = e => {
    if (e.keyCode !== 13) return
    if (text.trim() === '') return


    dispatch(addTodo(text))


    setText('')
  }


  return (
    <header className="header">
      <h1>todos</h1>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
        value={text}
        onChange={e => setText(e.target.value)}
        onKeyDown={onAddTodo}
      />
    </header>
  )
}
```

actionTypes/todos.js 中：

```js
// 添加任务
export const ADD_TODO = 'todos/add'
```

actions/todos.js 中：

```js
export const addTodo = text => ({
  type: types.ADD_TODO,
  payload: text
})
```

reducers/todos.js 中：

```js
export const todos = (state = initialState, action) => {
  switch (action.type) {
    // 添加
    case types.ADD_TODO:
      const id = state.length === 0 ? 1 : state[state.length - 1].id + 1
      return [
        ...state,
        {
          id,
          text: action.payload,
          done: false
        }
      ]
  }
}
```

### 9. 全选和反选

**目标**：能够实现全选功能

**分析说明**：

此处的全选功能，类似于前面 购物车案例 中的全选功能。购物车案例是通过*添加一个新的状态*（checkAll）来实现全选功能。但是，此处我们来进行一些优化：

问题：实现一个功能的时候，如何判断要不要添加一个新的状态？

回答：看该功能能不能直接通过现有的状态来实现，如果能就直接根据现有状态派生出一个数据，通过该数据来完成功能即可；否则，就得添加新状态了

比如，处理的全选按钮的选中状态可以直接从 todos 任务列表数据中得到：

```js
// 根据 todos 数据来得到全选按钮是否选中：
const checkAll = todos.every(item => item.done)
```

**步骤**：

1. 在 TodoMain 组件中，根据任务列表数据得到全选按钮是否选中的状态数据 checkAll
2. 将 checkAll 设置为全选复选框的 checked 属性值
3. 为复选框绑定 change 事件，在事件处理程序中分发全选的 action
4. 分别添加全选的 action type 和 action
5. 在 todos 的 reducer 中，根据全选按钮的选中状态切换每个任务项的选中状态

**核心代码**：

TodoMain.js 中：

```jsx
import { useDispatch } from 'react-redux'
import { toggleAll } from '../store/actions/todos'


export const TodoMain = () => {
  const list = useSelector(state => state.todos)
  const checkAll = list.every(item => item.done)
  const dispatch = useDispatch()


  return (
		// ...
    <input
      id="toggle-all"
      className="toggle-all"
      type="checkbox"
      checked={checkAll}
      onChange={e => dispatch(toggleAll(e.target.checked))}
    />
  )
}
```

actionTypes/todos.js 中：

```js
// 全选
export const TOGGLE_ALL = 'todos/toggleAll'
```

actions/todos.js 中：

```js
export const toggleAll = checked => ({
  type: types.TOGGLE_ALL,
  payload: checked
})
```

reducers/todos.js 中：

```js
export const todos = (state = initialState, action) => {
  switch (action.type) {
    // ...
    case types.TOGGLE_ALL:
      return state.map(item => ({ ...item, done: action.payload }))
  }
}
```

### 10. 清空已完成任务

**目标**：能够实现清空已完成的任务

**步骤**：

1. 在 TodoFooter 组件中，给清除已完成任务的按钮绑定点击事件
2. 在点击事件中分发清空已完成任务的 action
3. 在 actionTypes/todos.js 文件中，创建并导出清空已完成任务的 action type
4. 在 actions/todos.js 文件中，创建清空已完成任务的 action
5. 在 reducers/todos.js 中，根据 action 类型清空已完成任务

**核心代码**：

TodoFooter.js 中：

```jsx
import { useDispatch } from 'react-redux'
import { clearDone } from '../store/actions/todos'


export const TodoFooter = () => {
  const dispatch = useDispatch()


  return (
    // ...
    <button className="clear-completed" onClick={() => dispatch(clearDone())}>
    	Clear completed
    </button>
  )
}
```

actionTypes/todos.js 中：

```js
// 清空已完成
export const CLEAR_DONE = 'todos/clearDone'
```

actions/todos.js 中：

```js
export const clearDone = () => ({
  type: types.CLEAR_DONE
})
```

reducers/todos.js 中：

```js
export const todos = (state = initialState, action) => {
  switch (action.type) {
    // 清空已完成
    case types.CLEAR_DONE:
      return state.filter(item => !item.done)
  }
}
```

### 11. 双击修改任务-展示修改文本框

**目标**：能够实现双击修改任务功能

**分析说明**：

效果：双击哪个任务名称，就展示哪个任务的修改

因为需要控制文本框的展示或隐藏，所以，需要添加一个新的状态值来控制

并且，每个任务项都可以编辑，所以，需要为 TodoItem 组件添加该状态，即：每个任务项控制自己的编辑状态

**步骤**：

1. 为 TodoItem 组件添加状态 showEdit 值为 布尔值，用来表示是否展示编辑状态
2. 为任务项添加双击事件，将 showEdit 值设置为 true
3. 根据 showEdit 的值为任务项添加 editing 类名

**核心代码**：

TodoItem.js 中：

```jsx
import { useState } from 'react'
export const TodoItem = ({ id, text, done }) => {
  const [showEdit, setShowEdit] = useState(false)


  return (
    // 编辑时，添加类名：editing
    <li
      className={classNames({
        completed: done,
        editing: showEdit
      })}
    >
      <label onDoubleClick={() => setShowEdit(true)}>{text}</label>
    </li>
  )
}
```

### 12. 双击修改任务-自动获得焦点

**目标**：能够在展示编辑状态时让文本框自动获得焦点

**分析说明**：

文本框获得焦点是一个 DOM 操作，可以通过 `useRef` hook 来拿到文本框的 DOM 对象

要想让文本框获得焦点，必须要在文本框展示后来操作。而文本框的展示是通过一个状态 showEdit 来控制的，也就是必须在状态更新后来操作。

问题：使用 hooks 如何在某个状态更新后，来执行相应的逻辑？

回答：使用 `useEffect` hook 来监听 showEdit 状态的改变

**步骤**：

1. 在 TodoItem 组件中，使用 `useRef` hook 创建 ref 对象
2. 将 ref 设置为编辑任务文本框的 ref 属性
3. 监听 showEdit 状态的改变
4. 判断 showEdit 是否为 true，也就是是否为编辑状态
5. 如果是，就让文本框获得焦点

**核心代码**：

TodoItem.js 中：

```jsx
import { useRef } from 'react'


export const TodoItem = ({ id, text, done }) => {
  const inputRef = useRef(null)


  useEffect(() => {
    if (showEdit) {
      inputRef.current.focus()
    }
  }, [showEdit])


  return (
 		// ...
    <input
      className="edit"
      ref={inputRef}
    />
  )
}
```

### 13. 双击修改任务-失焦点隐藏编辑状态

**目标**：能够实现编辑文本框失去焦点时隐藏编辑状态

**步骤**：

1. 为编辑文本框绑定失焦点事件
2. 在失焦点事件中，将 showEdit 状态设置为 false

**核心代码**：

TodoItem.js 中：

```jsx
export const TodoItem = ({ id, text, done }) => {
  const onBlur = () => {
    setShowEdit(false)
  }


  return (
    // ...
    <input
      className="edit"
      onBlur={onBlur}
    />
  )
}
```

### 14. 双击修改任务-编辑文本框展示任务名称

**目标**：能够在编辑时的文本框中展示任务名称

**步骤**：

1. 添加状态用来控制文本框的值
2. 状态的默认值为：props.text
3. 为编辑文本框添加 change 事件来修改对应状态的值

**核心代码**：

TodoItem.js 中：

```jsx
export const TodoItem = ({ id, text, done }) => {
 	// 此处使用 props.text 作为状态默认值 
  const [todoName, setTodoName] = useState(text)
  
  return (
		// ...
    <input
      className="edit"
      value={todoName}
      onChange={e => setTodoName(e.target.value)}
		/>
  )
}
```

### 15. 双击修改任务-完成修改

**目标**：能够实现敲回车时保存任务名称

**步骤**：

1. 为编辑文本框绑定 keyDown 事件
2. 在 keyDown 事件中判断是否按下回车键，如果不是直接 return 不执行任何操作
3. 判断编辑时任务名称是否为空，如果是直接 return 不执行任何操作
4. 分发修改任务名称的 action，并将 showEdit 设置为 false 来隐藏编辑状态
5. 在 actionTypes/todos.js 文件中，创建并导出修改任务名称的 action type
6. 在 actions/todos.js 文件中，创建修改任务名称任务的 action
7. 在 reducers/todos.js 中，根据 action 类型修改任务名称
8. 同时处理失焦点时保存任务名称

**核心代码**：

TodoItem.js 中：

```jsx
import { updateTodo } from '../store/actions/todos'


export const TodoItem = ({ id, text, done }) => {
  const dispatch = useDispatch()


  const onUpdateTodo = e => {
    if (e.keyCode !== 13) return
    if (todoName.trim() === '') return


    dispatch(updateTodo(id, todoName))
    setShowEdit(false)
  }


  const onBlur = () => {
    if (todoName.trim() === '') return


    dispatch(updateTodo(id, todoName))
    setShowEdit(false)
  }


  return (
    // ...
    <input
      className="edit"
      onKeyDown={onUpdateTodo}
    />
  )
}
```

actionTypes/todos.js 中：

```js
// 修改任务名称
export const UPDATE_TODO = 'todos/updateTodo'
```

actions/todos.js 中：

```js
export const updateTodo = (id, text) => ({
  type: types.UPDATE_TODO,
  payload: {
    id,
    text
  }
})
```

reducers/todos.js 中：

```js
export const todos = (state = initialState, action) => {
  switch (action.type) {
    // 修改任务名称
    case types.UPDATE_TODO:
      return state.map(item => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            text: action.payload.text
          }
        }
        return item
      })
  }
}
```

### 16. 展示不同状态的任务列表-准备filter状态

**目标**：能够展示不同状态的任务列表

**分析说明**：

任务列表的展示有 3 种情况：1 展示所有任务 2 展示已完成任务 3 展示未完成任务

操作方式：点击底部 All、Active、Completed 按钮时，展示对应状态的任务列表

因为切换展示不同状态时，页面中的内容会发生改变，而我们知道：**只有状态更新后，页面才会改变（重新渲染）**

问题：能不能直接修改 redux 中存储的任务列表状态？比如，点击 Active 时，将任务列表数据修改为只包含未完成的任务列表数据

回答：不能，因为这样操作后，再想展示已完成任务列表数据就无法展示了（因为数据中已经没有已完成的数据了）

因为不能直接修改任务列表状态，所以，就必须要添加一个新的状态，来实现展示不同状态的任务列表

所以，在 Redux 中添加一个新的状态：filter 表示当前要展示什么状态的任务列表

```js
filter 的值可以是：'all' | 'active' | 'completed'
```

**步骤**：

1. 创建 reducers/filter.js 文件，用来处理展示不同状态的任务列表
2. 为 filter reducer 指定默认值为：'all' 表示默认展示所有任务列表数据
3. 将 filter reducer 合并到根 redcuer
4. 在 TodoFooter 组件中获取到 filter 状态
5. 根据 filter 状态来控制底部三个按钮的选中

**核心代码**：

reducers/filter.js 中：

```js
export const filter = (state = 'all', action) => {
  return state
}
```

reducers/index.js 中：

```js
import { filter } from './filter'


export const rootReducer = combineReducers({
  todos,
  filter
})
```

TodoFooter.js 中：

```jsx
import classNames from 'classnames'
import { useSelector } from 'react-redux'


const TodoFooter = () => {
  const filter = useSelector(state => state.filter)
  
  return (
    // ...
    <ul className="filters">
      <li>
        <a className={classNames({ selected: filter === 'all' })} href="#/">All</a>
      </li>
      <li>
        <a className={classNames({ selected: filter === 'active' })} href="#/">Active</a>
      </li>
      <li>
        <a className={classNames({ selected: filter === 'completed' })} href="#/">Completed</a>
      </li>
    </ul>
  )
}
```

### 17. 展示不同状态的任务列表-切换filter状态

**目标**：能够在点击底部按钮时切换filter的高亮状态

**步骤**：

1. 在 TodoFooter 组件中，给 3 个按钮绑定点击事件
2. 在点击事件分发切换 filter 状态的 action，并把自己当前的状态值传递给 action
3. 创建 actionTypes/filter.js 文件，创建切换filter状态的 action type 并导出
4. 创建 actions/filter.js 文件，创建切换filter状态的 action 并导出
5. 在 filter 的 reducer 中，处理切换 filter 状态的 action

**核心代码**：

TodoFooter.js 中：

```jsx
import { changeFilter } from '../store/actions/filter'


export const TodoFooter = () => {
  return (
    // ...
    <ul className="filters">
      <li>
        <a
          onClick={() => dispatch(changeFilter('all'))}
          href="#/"
        >
          All
        </a>
      </li>
      <li>
        <a
          onClick={() => dispatch(changeFilter('active'))}
          href="#/"
        >
          Active
        </a>
      </li>
      <li>
        <a
          onClick={() => dispatch(changeFilter('completed'))}
        href="#/"
          >
          Completed
        </a>
      </li>
    </ul>
  )
}
```

actionTypes/filter.js 中：

```js
// 切换 filter 状态
export const CHANGE_FILTER = 'filter/changeFilter'
```

actions/filter.js 中：

```js
import * as types from '../actionTypes/filter'


export const changeFilter = filter => ({
  type: types.CHANGE_FILTER,
  payload: filter
})
```

reducers/filter.js 中：

```js
import * as types from '../actionTypes/filter'


export const filter = (state = 'all', action) => {
  switch (action.type) {
    case types.CHANGE_FILTER:
      return action.payload
    default:
      return state
  }
}
```

### 18. 展示不同状态的任务列表-筛选数据

**目标**：能够从任务列表数据中筛选出对应状态的数据

**步骤**：

1. 在 TodoMain 组件中，根据 filter 状态来筛选数据

**核心代码**：

TodoMain.js 中：

```js
export const TodoMain = () => {
  const todos = useSelector(state => {
    // 根据任务状态，筛选出对应的任务列表数据
    if (state.filter === 'active') {
      return state.todos.filter(item => !item.done)
    } else if (state.filter === 'completed') {
      return state.todos.filter(item => item.done)
    } else {
      return state.todos
    }
  })
  
  // ...
}
```
