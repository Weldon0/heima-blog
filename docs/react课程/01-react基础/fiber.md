---
title: fiber
---

名词解释：

#### fiberRootNode:整个应用的根节点 比如#root

#### rootFiber：组件树的根节点 App 组件


:::tip 23
你好
:::



#### 首次渲染没有rootFiber和FiberRootNode

1.首次执行ReactDOM.render时候创建FiberRootNode&rootFiber,并做current指向`fiberRootNode.current = rootFiber;`

<img src="https://wuxiaohui-1254415986.cos.ap-nanjing.myqcloud.com/uPic/image-20220228201811645.png" alt="image-20220228201811645" style="zoom:50%;" />

2. 首次渲染时候的界面没有挂载任何的dom，即FiberRoot的current节点指向的rootFiber没有任何子fiber节点
3. 开始进入render阶段，根据组件返回的jsx依次去构建Fiber节点并链接在一起，构成fiber🌲，称之为workInProgress🌲
   1. 构建workInProgress🌲的时候会尝试复用currentFiber🌲
   2. 首次渲染的时候只有rootFiber存在对应的currentFiber,即rootFiber.alternate

<img src="https://wuxiaohui-1254415986.cos.ap-nanjing.myqcloud.com/uPic/image-20220228225015045.png" alt="image-20220228225015045" style="zoom: 50%;" />