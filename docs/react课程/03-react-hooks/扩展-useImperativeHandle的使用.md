---
title: 🌹扩展-useImperativeHandle的使用
---

### useImperativeHandle的作用

:::tip 概念

1. useImperativeHandle 可以让你在使用 ref 时自定义暴露给父组件的实例值。

2. 在大多数情况下，应当避免使用 ref 这样的命令式代码。

3. useImperativeHandle 应当与 forwardRef 一起使用

:::

### 使用方法

```js
import React, {Component, forwardRef, useImperativeHandle, useRef} from 'react';

function Child(props, ref) {
  const intpu1Ref = useRef()
  const inputRef2 = useRef()
  const inputRef3 = useRef()
  const getBody = () => {
    return {
      value1: intpu1Ref.current.value,
      value2: inputRef2.current.value,
      value3: inputRef3.current.value
    }
  }

  useImperativeHandle(
    ref,
    () => {
      return {
        getBody,
      }
    },
    [],
  );

  return <div>
    <input type="text" name={'username'} ref={intpu1Ref}/>
    <input type="text" name={'password'} ref={inputRef2}/>
    <input type="text" name={'code'} ref={inputRef3}/>
  </div>
}

// 如果函数组件添加ref，子组件必须要使用forwardRef
// 子组件的接收：第一个参数是props  第二参数是ref
const RefChild = forwardRef(Child)
const MyComponent = () => {
  // 父组件里面调用子组件的fn方法

  const inputRef = useRef(null);

  const logChild = () => {
    console.log(inputRef.current.getBody())
  }
  return (
    <div>
      452423
      <hr/>
      <RefChild ref={inputRef}/>
      <hr/>
      <button onClick={logChild}>点击(调用子组件submit方法)</button>
    </div>
  );
};

export default MyComponent;

```

