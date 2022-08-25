# 自习中

## 任务

1. 面试题
2. 简历
3. 当天讲的面试题消化+总结
4. 回顾小程序当天内容







### spa页面 >> 单页面

html里面没有主体页面结构,前端请求到html之后，如果想要渲染界面，请求html内部的js文件，页面内容有可能通过ajax请求拿到的，所以还需要继续请求页面内容，再进行渲染

用户看到页面的时间变的更长 >> 白屏时间更长 >> 用户体验差



### ssr页面

前后端同构

第一次请求界面的时候，服务端渲染，服务端先跑一遍vue(服务端先运行一遍)，数据渲染成的界面（html）直接返回到浏览器，浏览器直接渲染

前端点击路由进行跳转的时候，前端渲染，通过前端的路由模式去进行渲染

总结：首次请求 >> 服务端渲染  后续页面跳转 >> 前端渲染



#### 优点：

1. seo支持比较友好

2. 用户白屏时间变短 >> 用户体验增强



#### ssr什么弊端？

1. 服务端要有node，服务端的vue运行的node环境里面的。双十一用户量太大了（前端没有任何影响的）后端出问题了（高并发）
2. 如果说你的node技术不好，高并发，服务随时崩掉。

## data为什么是一个函数不是一个对象？

1、 作用：防止组件之间数据污染

2、如果data是一个对象，可能会存在多个组件用了同一个数据 >> 没有办法做到组件之间数据隔离

3、为什么函数可以解决这个问题？

​	先进行了类型的判断，如果data是一个函数，执行data函数，获取数据结果（确保产出一个全新的对象赋值给data）

```js
export default {
  data() {
    return {
      name: '黑马'
    }
  }
}
```



```js
function initData (vm: Component) {
  // vm.$options.data 传入组件的data数据
  let data = vm.$options.data
  // 先进行了类型的判断，如果data是一个函数，执行data函数，获取数据结果（确保产出一个全新的对象赋值给data）
  // 如果是一个对象，直接赋值
  // 如果不存在直接给一个空对象
  data = vm._data = typeof data === 'function'
    ? data()
    : data || {}
    ...
}
```



## 发布订阅模式和观察者模式

**观察者模式**:是由具体目标调度，比如当事件触发，Dep 就会去调用观察者的方法，所以观察者模式的订阅者与发布者之间是存在依赖的。

1. 观察者
2. 被观察者

**发布/订阅**模式: 由统一事件中心调度中心调用，因此发布者和订阅者不需要知道对方的存在。（有独立的事件中心）

1. 发布者
2. 订阅者
3. 事件中心



## data里面的对象新添加属性，界面会不会更新

1. 不会更新

2. 为什么不更新

   1. 因为vue实例化的时候，把所有data里面的数据进行了递归的Object.defineProperty/劫持数组方法，新添加的属性没有劫持到的，所以不是响应式的

      怎么解决 vm.$set()可以处理成响应式的

   2. **设置某一个已经存在的属性为一个对象的时候，对象里面的属性是不是响应式的**

      1. **是响应式的**

      2. 因为给已经存在的属性设置值的时候会触发set，把新传入的数据继续调用响应式处理方法，处理成响应式
   
         ```js
         
           // 进行响应式处理的
           walk(data) {
             //   遍历所有属性
           //  判断data是否为对象
             if (!data || typeof data !== 'object') return;
             Object.keys(data).forEach(key => {
               this.defineReactive(data, key, data[key]);
             })
           //  2、遍历data对象的所有属性
           }
         
         defineReactive(obj, key, val) {
             const that = this;
             // 手机依赖并且发送通知
             const dep = new Dep();
             // 如果传入的数据还是一个对象，则会把传入的对象转化成响应式数据
             this.walk(val);
             Object.defineProperty(obj, key, {
               enumerable: true,
               configurable: true,
               get() {
                 Dep.target && dep.addSub(Dep.target);
                 return val;
               },
               set(newVal) {
                 if (newVal === val) return;
                 // 新赋值的对象也要是一个响应式对象
                 that.walk(newVal)
                 val = newVal;
                 dep.notify();
               }
             })
           }
         ```
   
         

* 事件流
  * 捕获阶段
  * 冒泡阶段
  * 目标阶段
  * 点击了一个button按钮
    * 先从根节点向内进行捕获阶段
    * 捕获到目标阶段进行事件触发，冒泡阶段

1. 项目：业务点，用尽一切力量让别人知道你的项目是干什么的？

   1. 什么类型的？B端 C端

   2. 里面有哪些功能模块

   3. 团队怎么划分这些模块的

   4. 你自己主要负责什么模块

      1. 没有确定的模块，按照需求来的，所有模块都有可能参与（维护的项目）
      2. 固定负责多少个模块，这些模块是什么功能，页面大概是什么样的（0-1的项目）

   5. 谁用的，解决了什么问题，相关的哪些项目？

   6. 技术栈 vue2+vueRouter+vuex 导出excel(前端导出) vue-element-admin

   7. 权限管理

      1. 为什么需要权限管理

      2. 怎么配置权限管理的

      3. 技术解决方案

      4. 动态路由

      5. 静态路由




## Vue.use(VueRouter)做了什么事情？

> use做了什么事情？传入是一个对象、调用对象install方法 如果是一个函数，直接执行函数，把Vue作为参数传入

1. vue的原型上挂载$router、$route
2. 注册了两个组件router-view、router-link
3. 其他的初始化事件





两套接口

www.baidu.com

www.google.com



```js
promise.race([baidu, google]).then(res => {

​	// 使用比较快的服务器的数据

});


```



## slot

插槽解决了什么问题

结合项目去说



Keep-alive

内置组件，组件缓存功能的

keep-alive配合router-view缓存路由 







什么样的场景下面用到了slot

封装了一通用组件，但是组件内部的部分结构不确定，使用插槽进行动态传入 



map结构的key可以是一个对象

类似于对象



generator





没有key 的时候同级按照次序进行比较 深度优先，同层比较

// 为什么封装组件？



// c端，所有的功能和ui都考虑封装组件，借助一些第三方功能组件？设计公司对c端的网站ui要求很高，第三方ui库基本不满足需求

// b端（后台管理系统），第三方ui库进行二次封装，提高业务开发效率

// FormBuilder, SearchBuilder, WithPagination,

// 省市区选择，地图组件（第三方api内部继承，暴露一个组件）

// 所有相同的配置，全部由组件内部集成



v-for key的作用，唯一标识/index 区别？

domdiff的详细过程

template编译成render函数，render函数执行返回的结果就是虚拟dom

Promise.all Promise.race

vue数组

Objecet.definePero



自我介绍



1. 姓名

2. 工作经验

3. 技术栈 vue vant element-ui ecarts vuex 小程序

4. 项目经验

   

技术点

1. vue3
2. React
3. 卷



你要问公司什么问题？

* 技术栈
* 项目类型 pc段的还是移动端的
* 团队规模（前端团队有多少人）
* 做什么业务？产品思维



* 外包/甲方 >> hr前期沟通的时候就需要知道了

* 五险一金 >> hr终面的时候再问

* 上班时间 >> 咱们公司这边上班时间是什么样的？推荐最终面试的时候

* 期望薪资 >> 上班时间

  



1. 公司问你加班怎么看？
   1. 不是特别看好没有效率的加班
   2. 如果确实是因为自己的原因，需要完成项目进度，这个可以接受的。
   3. 企业文化
2. 技术有高有低，你感觉怎么样？
   1. 









