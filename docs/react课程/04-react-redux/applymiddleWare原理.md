---
title: 🌹拓展-applymiddleWare原理
---


```js
function applyMiddleware(...middlewares) { // 中间件数组
  return (createStore) => (reducer, preloadedState, enhancer) => {
    // applyMiddleware去注册仓库
    var store = createStore(reducer, preloadedState, enhancer)
    // 仓库的原生方法
    var dispatch = store.dispatch
    var chain = []

    var middlewareAPI = {
      getState: store.getState,
      dispatch: (action) => dispatch(action)
    }
    // [thunk, logger]
    chain = middlewares.map(middleware => middleware(middlewareAPI))
    dispatch = compose(...chain)(store.dispatch)
    return {
      ...store,
      dispatch
    }
  }
}
```

中间件调用

```js
const store = createStore(rootReducer, applyMiddleware(thunk, logger))
```

<img src="https://wuxiaohui-1254415986.cos.ap-nanjing.myqcloud.com/uPic/image-20220312192623699.png" alt="image-20220312192623699" style="zoom:50%;" />