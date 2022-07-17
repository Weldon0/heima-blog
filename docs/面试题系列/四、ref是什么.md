---
title: 🌹四、ref是什么
---

作用：

* 放到dom节点上 >> 获取原生dom
* 组件身上 >> 获取组件实例 >> 可以获取组件内部所有的方法和数据





```vue
<HelloWorld ref="helloWorld"/>
<input type="text" ref="input">

mounted() {
  console.log(this.$refs)
	this.$refs.helloWorld.getData()
},
```

![image-20220716194024789](https://wuxiaohui-1254415986.cos.ap-nanjing.myqcloud.com/uPic/image-20220716194024789.png)

