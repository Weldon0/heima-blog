---
title: 🌹 一、Vue生命周期
---



### 1.1 Vue生命周期都有哪些？

| 生命周期      | 执行时机                                                     |
| ------------- | ------------------------------------------------------------ |
| beforeCreate  | 在组件实例被创建之初、组件的属性⽣效之前被调用               |
| created       | 在组件实例已创建完毕。此时属性也已绑定，但真实DOM还未⽣成，$el 还不可⽤ |
| beforeMount   | 在组件挂载开始之前被调⽤。相关的 render 函数⾸次被调⽤       |
| mounted       | 在 el 被新建的 vm.$el 替换并挂载到实例上之后被调用           |
| beforeUpdate  | 在组件数据更新之前调⽤。发⽣在虚拟 DOM 打补丁之前            |
| update        | 在组件数据更新之后被调用                                     |
| activited     | 在组件被激活时调⽤（使用了 `<keep-alive>` 的情况下）         |
| deactivated   | 在组件被销毁时调⽤（使用了 `<keep-alive>` 的情况下）         |
| beforeDestory | 在组件销毁前调⽤                                             |
| destoryed     | 在组件销毁后调⽤                                             |

:::details 代码详情

```vue
class Vue{
	constructor( options ){
		options.beforeCreate.call(this)
		this.$data = options.data;
		
		options.created.call(this)
		options.beforeMount.call(this)

		this.$el = document.querySelector(options.el);
		options.mounted.call(this)
	}
}
```

```js
new Vue({
  el:"#app",
  data : {
  	str:'123'
  },
  beforeCreate(){
  	console.log('beforeCreate',this.$el , this.$data)
  },
  created(){
  	console.log('created',this.$el , this.$data)
  },
  beforeMount(){
  	console.log('beforeMount',this.$el , this.$data)
  },
  mounted(){
  	console.log('mounted',this.$el , this.$data)
  },
})
```



:::





### 1.3 一旦进入组件或者一旦进入页面，会执行哪些生命周期？

1. beforeCreate
2. created
3. beforeMount
4. mounted

### 1.4 如果使用了keep-alive会多出来俩个生命周期

1. activated
2. deactivated

### 1.5 如果使用了keep-alive第一次进入组件会执行5个生命周期

1. beforeCreate
2. created
3. beforeMount
4. mounted
5. activated

### 1.6 如果使用了keep-alive第二次或者第N次，每次都会执行一个生命周期

activated

### 1.7 父子组件嵌套执行生命周期的顺序

> 挂载阶段

1. 父beforeCreate
2. 父created 
3. 父beforeMount
   1. 子beforeCreate
   2. 子created
   3. 子beforeMount
   4. 子mounted
4. 父mounted



> 更新阶段

1. 父beforeUpdate
   1. 子beforeUpdate
   2. 子updated
2. 父updated



> 销毁阶段

1. 父beforeDestroy
   1. 子beforeDestroy
   2. 子destroyed
2. 父destroyed