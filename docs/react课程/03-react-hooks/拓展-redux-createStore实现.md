---
title: 🌹拓展-create-store实现
---



#### createStore实现

```js
function createStore(reducer) {
  let currentState = undefined
  let subscribeList = []

  function dispatch(action) {
    currentState = reducer(currentState, action)
    subscribeList.forEach(c => c())
  }

  function subscribe(fn) {
    subscribeList.push(fn)
    return function unScribe() {
      subscribeList = subscribeList.filter(item => item !== fn)
    }
  }

  // 创建仓库的时候，进行一次数据的初始化
  dispatch({
    type: Math.random()
  })
  return {
    getState: () => currentState,
    dispatch,
    subscribe
  }
}
```

#### 初始化仓库

```js
const store = createStore(reducer)
```



