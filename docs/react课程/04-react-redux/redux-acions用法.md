---
title: 🌹-redux-actions的用法
---



1. 创建action对象

   ```js
   import { createAction } from 'redux-actions';
   export const INCREMENT = 'increment'
   const increment = createAction(INCREMENT);
   let incrementObj = increment(); // { type:"increment"}
   let objincrement = increment(10); // {type:"increment",paylaod:10}
   ```

   

2. handleActions 生成 reducer 函数

   ```js
   import { handleActions as createReducer } from "redux-actions"
   ```

   ```js
   const initstate = {count:0}
   const reducer = createReducer({
       [INCREMENT]: (state, action) => ({
         counter: state.counter + action.payload
       }),
       [DECREMENT]: (state, action) => ({
         counter: state.counter - action.payload
       })
   }, initstate)
   ```

   
