---
title: 🌹五、scoped原理是什么？
---

1. 作用：让样式只在当前组件生效，不影响其他组件
2. 原理：给当前组件节点添加自定义属性(hash值)，css 根据属性选择器添加样式



![image-20220716194604535](https://wuxiaohui-1254415986.cos.ap-nanjing.myqcloud.com/uPic/image-20220716194604535.png)

![image-20220716194621801](https://wuxiaohui-1254415986.cos.ap-nanjing.myqcloud.com/uPic/image-20220716194621801.png)