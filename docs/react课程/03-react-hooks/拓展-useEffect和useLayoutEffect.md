---
title: 🌹拓展-useEffect和useLayoutEffect区别
---



### 区别

1. useLayoutEffect 相比 useEffect，通过同步执行状态更新可解决一些特性场景下的页面闪烁问题。
2. useEffect 可以满足百分之99的场景，而且 useLayoutEffect 会阻塞渲染，请谨慎使用。



1. 是否阻塞渲染
2. 执行时机。
3. 会不会触发二次渲染，引起页面闪动？
