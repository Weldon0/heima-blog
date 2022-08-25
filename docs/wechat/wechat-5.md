---
title: 🌹5、小程序第五天
---

#### 1. 今日目标

1. 能够知道如何安装和配置 `vant-weapp` 组件库
2. 能够知道如何使用 `MobX` 实现全局数据共享
3. 能够知道如何对小程序的  `API` 进行 `Promise` 化
4. 能够知道如何实现自定义 `tabBar` 的效果



#### 2. 使用 npm

##### 2.1 小程序对 npm 的支持和限制

##### 问题

- 小程序使用npm包有哪些限制？

目前，小程序中已经支持使用  npm 安装第三方包，从而来提高小程序的开发效率。但是，在小程序中使用 npm 包有如下 3 个限制：

1. 不支持依赖于  Node.js 内置库的包
2. 不支持依赖于浏览器内置对象的包
3. 不支持依赖于 C++ 插件的包



**总结：虽然  npm 上的包有千千万，但是能供小程序使用的包却“为数不多”**





##### 2.2 了解什么是 vant Weapp

1. `Vant` 是**有赞前端团队**开源的移动端组件库，于 2016 年开源，已持续维护 4 年时间。`Vant` 对内承载了有赞所有核心业务，对外服务十多万开发者，是业界主流的移动端组件库之一
2. 采用 `MIT` 开源许可协议，对商业使用比较友好
3. 扫描下方小程序二维码，体验组件库示例

<img src="https://wuxiaohui-1254415986.cos.ap-nanjing.myqcloud.com/2022/08/08/001--vant-weapp.jpg" style="zoom:80%;" />







##### 2.3 安装 Vant 组件库

##### 问题

- 如何安装Vant组件库？

在小程序项目中，安装  Vant 组件库主要分为如下几步

1. 通过 `npm` 安装

   ```shell
   npm init -y
   ```

   ```shell
   npm i @vant/weapp@1.3.3 -S --production
   ```

   使用--production会只安装dependences不会安装devDependences

2. 构建  `npm` 包功能

   - 建议先点击 `微信开发者工具` --> `详情` --> `本地设置`  --> `使用 npm 模块`
   - 然后点击 `微信开发者工具`  --> `菜单栏` --> `工具` --> `构建npm `
   - 提示 `构建成功，耗时 xxx 秒` 且控制台没有任何的错误，说明包构建成功，可以进行使用
     - 否则就需要把 `node_modules`、`miniprogram_npm` 删除
     - 删除以后，重新安装包，并点击 `工具` --> `构建npm `，进行重新构建

   

3. 修改 `app.json`

   - 将 `styles: v2` 进行移除，防止 `小程序本身的 UI 样式和 Vant 的组件样式库 冲突`



详细的操作地址：[安装 vant Weapp](https://youzan.github.io/vant-weapp/#/quickstart#an-zhuang)





##### 2.4 使用 Vant 组件

##### 问题

- 如何使用Vant组件库？

安装完  `Vant` 组件库之后，可以在  `app.json` 的  `usingComponents` 节点中引入需要的组件，即可在 `wxml` 中直接使用组件

<img src="https://wuxiaohui-1254415986.cos.ap-nanjing.myqcloud.com/2022/08/08/002--shi-yong-vant-zu-jian.jpg" style="zoom:88%;" />



```json
"usingComponents": {
  "van-button": "@vant/weapp/button/index"
}
```

```html
<van-button type="default">默认按钮</van-button>
<van-button type="primary">主要按钮</van-button>
<van-button type="info">信息按钮</van-button>
<van-button type="warning">警告按钮</van-button>
<van-button type="danger">危险按钮</van-button>
```





##### 2.5 定义和使用 CSS 变量

##### 问题

- 如何使用CSS变量？
- CSS变量的作用域是什么？

`Vant Weapp` 使用  `CSS` 变量来实现定制主题。 关于  `CSS` 变量的基本用法，请参考 `MDN` 文档

https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties





##### 2.6 使用 CSS 变量定制 Vant 的主题样式

##### 问题

- 如何定制Vant的样式？

在  `app.wxss` 中，写入  `CSS` 变量，即可对全局生效

<img src="https://wuxiaohui-1254415986.cos.ap-nanjing.myqcloud.com/2022/08/08/003--shi-yong-css-bian-liang-ding-zhi-vant-de-zhu.jpg" style="zoom:80%;" />



所有可用的颜色变量，请参考  Vant 官方提供的配置文件

https://github.com/youzan/vant-weapp/blob/dev/packages/common/style/var.less





##### 2.7 什么是小程序 API 的 Promise 化

1. 基于回调函数的异步 `API` 的缺点

   - 默认情况下，小程序官方提供的异步  API 都是基于回调函数实现的，例如，网络请求的  API 需要按照如下的方式调用

   - 这种代码的缺点是显而易见的, 容易造成回调地狱的问题，代码的可读性、维护性差！而我们就想将这种类型的代码使用 `API Promise` 化进行改造

     

     <img src="https://wuxiaohui-1254415986.cos.ap-nanjing.myqcloud.com/2022/08/08/004--yi-bu-api-de-que-dian.jpg" style="zoom:80%;" />

   
   
2. 什么是 `API Promise` 化

   - `API Promise` 化，指的是通过额外的配置，将官方提供的、基于回调函数的异步 `API` ，升级改造为基于 `Promise` 的异步 `API` ，从而提高代码的可读性、维护性，避免回调地狱的问题

   

   

   

##### 2.8 安装并构建 miniprogram-api-promise

1. 在小程序中，实现 `API Promise` 化主要依赖于 `miniprogram-api-promise` 这个第三方的  `npm` 包

   ```shell
   npm i --save miniprogram-api-promise@1.0.4
   ```

   

2. 下载完成，我们不能直接使用这个包，而是需要再次重新构建npm包

   - 建议在构建前先删除原有的 `miniprogram_npm`
   - 然后再点击工具，构建 `npm`





##### 2.9 三个步骤实现 API 的 Promise 化

<img src="https://wuxiaohui-1254415986.cos.ap-nanjing.myqcloud.com/2022/08/08/005--shi-xian-api-de-promise-hua.jpg" style="zoom:80%;" />



1. 在小程序入口文件中调用一次 `promisifyAll()`方法

   ```js
   import { promisifyAll } from 'miniprogram-api-promise'
   ```

   

2. 声明一个常量，为一个空对象

   ```js
   const wxp = wx.p = {}
   ```

   

3. 调用 `promisifyAll()`方法

   ```js
   promisifyAll(wx, wxp)
   ```

   

4. 上述代码是什么含义呢 ？
   - `promisifyAll` : 做的事就是将 `wx` 拥有的属性方法都 `copy` 并改造了一份给了 `wxp` 这个对象
   - 然而, `wxp` 只是当前 `js` 文件的一个常量，只能在当前文件使用
   - 因此：我们在 `wx` 上挂载一个属性 `p` 让他和 `wxp` 指向同一个空对象
   - 在其他页面或者组件就可以通过全局对象 `wx` 点出 `p` 来访问到 `wxp`
   - 此时 `wx.p` 发起异步的请求时，得到的是一个 `promise` 对象
   - 那么我们就可以使用  `async/await`  简化 `Promise` 语法





##### 2.10 调用 Promise 化之后的异步 API

<img src="https://wuxiaohui-1254415986.cos.ap-nanjing.myqcloud.com/2022/08/08/006--diao-yong-promise-hua-zhi-hou-de-yi-bu-api.jpg" style="zoom:80%;" />



```html
<van-button type="warning" bindtap="getInfo">警告按钮</van-button>
```

```js
async getInfo () {
  const { data: res } = await wx.p.request({
    url: 'https://www.escook.cn/api/get',
    method: 'GET',
    data: {
      name: 'zs',
      age: 19
    }
  })

  console.log(res)
}
```





#### 3. 全局数据共享

##### 3.1 什么是全局数据共享

1. `全局数据共享`，又叫做：`状态管理`，是为了解决`组件之间数据共享`的问题

2. 开发中常用的全局数据共享方案有： `Vuex` 、 `Redux` 、 `MobX` 等

   <img src="https://wuxiaohui-1254415986.cos.ap-nanjing.myqcloud.com/2022/08/08/007--quan-ju-shu-ju-gong-xiang.jpg" style="zoom:80%;" />







##### 3.2 小程序中的全局数据共享方案

1. 在小程序中，可使用  `mobx-miniprogram` 配合  `mobx-miniprogram-bindings` 实现全局数据共享。其中：
   - `mobx-miniprogram` 用来创建  `Store` 实例对象
   - `mobx-miniprogram-bindings` 用来把  `Store` 中的共享数据或方法，绑定到组件或页面中使用

<img src="https://wuxiaohui-1254415986.cos.ap-nanjing.myqcloud.com/2022/08/08/008--quan-ju-shu-ju-gong-xiang-fang-an.jpg" style="zoom:80%;" />







##### 3.3 安装并构建 Mobx 相关的包

在项目中运行如下的命令，安装  `MobX` 相关的包

```shell
npm install --save mobx-miniprogram@4.13.2 mobx-miniprogram-bindings@1.2.1 
```

注意： `MobX` 相关的包安装完毕之后，记得删除 `miniprogram_npm`目录后，重新构建 `npm` 





##### 3.4 创建 Store 实例对象

##### 问题

- 如何创建Store的实例对象？
- 如何定义全局共享的数据？

1. 在项目根目录下创建 `store` 文件夹，在文件夹中创建 `store.js` 文件
2. 在文件内部，导入 `mobx-miniprogram` 创建 `Store` 实例的包
3. 创建 `Store` 仓库，声明全局共享的数据，并导入



```js
import { observable } from 'mobx-miniprogram'

export const store = observable({
  numA: 1,
  numB: 2
})

```







##### 3.5 定义计算属性

##### 问题

- 如何定义计算属性？

1. 在计算属性的方法前，必须加 `get` 修饰符，代表 `sum` 的值是只读的，无法进行修改

2. 计算属性 `sum` 依赖于 `numA` 和 `numB` 的值，因此 `sum` 函数的返回值就是最终的值



<img src="https://wuxiaohui-1254415986.cos.ap-nanjing.myqcloud.com/2022/08/08/009--ding-yi-ji-suan-shu-xing.jpg" style="zoom:80%;" />



```js
import { observable } from 'mobx-miniprogram'

export const store = observable({
  // 数据字段
  numA: 1,
  numB: 2,

  // 计算属性
  get sum() {
    return this.numA + this.numB
  }
})

```



##### 3.6 定义 actions 方法

##### 问题

- 如何更新全局共享数据？

1. 导入 `action` 函数
2. `action` 函数，专门用来修改 `store` 中数据的值



<img src="https://wuxiaohui-1254415986.cos.ap-nanjing.myqcloud.com/2022/08/08/009--ding-yi-ji-suan-shu-xing.jpg" style="zoom:80%;" />



```js
import { observable, action } from 'mobx-miniprogram'

export const store = observable({
  // 数据字段
  numA: 1,
  numB: 2,

  // 计算属性
  get sum() {
    return this.numA + this.numB
  },

  // actions 方法，用来修改 store 中的数据
  updateNumA: action(function (step) {
    this.numA += step
  }),

  updateNumB: action(function (step) {
    this.numB += step
  })
})

```



##### 3.7 将 Store 中的成员绑定到页面上的实现思路

##### 问题

- 如何在页面中使用Store？

1. `createStoreBindings` 方法

   - 参数1： 绑定给谁：当前页面 `this`，当前页面的实例对象
   - 参数2： 对象 { `store(容器)`， `fields(数据)`， `actions(修改方法)` }
     - 映射容器的实例
     - 映射容器的数据字段
     - 映射容器修改的方法

   

2. destroyStoreBindings 方法

   - 对 `createStoreBindings` 方法的返回值，进行清理销毁的工作

   

<img src="https://wuxiaohui-1254415986.cos.ap-nanjing.myqcloud.com/2022/08/08/010--jiang-store-zhong-de-cheng-yuan-bang-ding-dao.jpg" style="zoom:80%;" />





##### 3.8 将 Store 中的成员绑定到页面上

```js
import { createStoreBindings } from 'mobx-miniprogram-bindings'
import { store } from '../../store/store'

Page({

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.storeBindings = createStoreBindings(this, {
      store,
      fields: ['numA', 'numB', 'sum'],
      actions: ['updateNumA']
    })
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    this.storeBindings.destroyStoreBindings()
  }
})
```



##### 3.9 在页面中使用 Store 的成员

<img src="https://wuxiaohui-1254415986.cos.ap-nanjing.myqcloud.com/2022/08/08/011--zai-ye-mian-zhong-shi-yong-store-de-cheng-yua.jpg" style="zoom:88%;" />



```html
<view>{{ numA }} + {{ numB }} = {{ sum }}</view>

<van-button type="warning" bindtap="btnHandler1" data-step="{{ 1 }}">
  numA + 1
</van-button>

<van-button type="primary" bindtap="btnHandler1" data-step="{{ -1 }}">
  numA -1
</van-button>

```

```js
btnHandler1 (e) {
  this.updateNumA(e.target.dataset.step)
}
```



##### 3.10 了解 Store 中成员绑定到组件上的实现思路

##### 问题

- 如何在组件中使用Store成员？

<img src="https://wuxiaohui-1254415986.cos.ap-nanjing.myqcloud.com/2022/08/08/012--cheng-yuan-bang-ding-dao-zu-jian-shang.jpg" style="zoom:90%;" />







##### 3.11 将 Store 中的成员绑定到组件上

```js
import { storeBindingsBehavior } from 'mobx-miniprogram-bindings'
import { store } from '../../store/store'

Component({
  // 通过 storeBindingsBehavior 来实现自动绑定
  behaviors: [storeBindingsBehavior],

  storeBindings: {
    store, // 指定要绑定的 Store
    // 指定要绑定的字段数据
    fields: {
      numA: () => store.numA, // 绑定字段的第 1 种方式
      numB: (store) => store.numB, // 绑定数据的第 2 个方式
      sum: 'sum' // 绑定数据的第 3 个方式
    },
    // 指定要绑定的方法
    actions: {
      updateNumA: 'updateNumA'
    }
  }
})

```



##### 3.12 在组件中使用 Store 中的成员

```html
<!--components/numbers/numbers.wxml-->
<view>{{ numA }} + {{ numB }} = {{ sum }}</view>

<van-button type="warning" bindtap="btnHandler1" data-step="{{ 1 }}">
  numA + 1
</van-button>

<van-button type="primary" bindtap="btnHandler1" data-step="{{ -1 }}">
  numA -1
</van-button>

```

```js
import { storeBindingsBehavior } from 'mobx-miniprogram-bindings'
import { store } from '../../store/store'

Component({
  // 通过 storeBindingsBehavior 来实现自动绑定
  behaviors: [storeBindingsBehavior],

  storeBindings: {
    store, // 指定要绑定的 Store
    // 指定要绑定的字段数据
    fields: {
      numA: () => store.numA, // 绑定字段的第 1 种方式
      numB: (store) => store.numB, // 绑定数据的第 2 个方式
      sum: 'sum' // 绑定数据的第 3 个方式
    },
    // 指定要绑定的方法
    actions: {
      updateNumA: 'updateNumA'
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    btnHandler1 (e) {
      this.updateNumA(e.target.dataset.step)
    }
  }
})

```





#### 4. 分包

##### 4.1 了解分包的概念和好处

##### 问题

- 什么是分包？有什么好处？

1. 什么是分包

   分包指的是把一个 `完整的小程序项目`，按照需求`划分为不同的子包`，在构建时打包成不同的分包，用户在使用时`按需进行加载`

   

2. 分包的好处

   - 可以优化小程序首次启动的下载时间
   - 在多团队共同开发时可以更好的解耦协作





##### 4.2 分包前后项目的构成

1. 分包前项目的构成

   分包前，小程序项目中 `所有的页面` 和 `资源` 都被打包到了一起，导致整个`项目体积过大`，影响小程序`首次启动的下载时间`

   <img src="https://wuxiaohui-1254415986.cos.ap-nanjing.myqcloud.com/2022/08/08/013--fen-bao-qian-xiang-mu-de-gou-cheng.jpg" style="zoom:80%;" />

   

2. 分包后项目的构成

   - 分包后，小程序项目由` 1 个主包` + `多个分包` 组成：

     - `主包`：一般只包含`项目的启动页面`或  `TabBar 页面`、以及所有分包都需要用到的一些`公共资源`

     - `分包`：只包含和当前分包有关的页面和私有资源

       

   <img src="https://wuxiaohui-1254415986.cos.ap-nanjing.myqcloud.com/2022/08/08/014--fen-bao-hou-xiang-mu-de-gou-cheng.jpg" style="zoom:80%;" />



##### 4.3 分包的加载规则

1. 在小程序启动时，默认会下载 `主包并启动主包内页面`
   - tabBar 页面需要放到主包中
2. 当用户进入分包内某个页面时，`客户端会把对应分包下载下来`，下载完成后再进行展示
   - 非  tabBar 页面可以按照功能的不同，划分为不同的分包之后，进行按需下载



##### 4.4 分包的体积限制

##### 问题

- 分包体积有什么限制？

1. 目前，小程序分包的大小有以下两个限制：
   - 整个小程序所有分包大小不超过  16M （主包 + 所有分包）
   - 单个分包/主包大小不能超过  2M



##### 4.5 了解如何配置分包

##### 问题

- 分包前应如何配置？

1. 更改项目的目录
2. 在 `app.json` 的 `subpackages` 节点中声明分包的结构



<img src="https://wuxiaohui-1254415986.cos.ap-nanjing.myqcloud.com/2022/08/08/015--fen-bao-pei-zhi-fang-fa.jpg" style="zoom:80%;" />







##### 4.6 演示在项目中如何配置分包

1. 配置好分包后会默认生成对应的目录



```json
{
  "pages": [
    "pages/home/home",
    "pages/message/message",
    "pages/contact/contact",
    "pages/shoplist/shoplist"
  ],
  "subPackages": [
    {
      "root": "pkgA",
      "pages": [
        "pages/cat/cat",
        "pages/dog/dog"
      ]
    },
    {
      "root": "pkgB",
      "pages": [
        "pages/apple/apple"
      ]
    }
  ]
  "sitemapLocation": "sitemap.json"
}
```



##### 4.7 设置分包的别名并查看分包体积

1. 给每个分包添加 `name` 属性即可设置别名
2. 在 `微信开发者工具 --> 基本信息 --> 本地代码` 中就可以查看分包的体积

```js
{
  "pages": [
    "pages/home/home",
    "pages/message/message",
    "pages/contact/contact",
    "pages/shoplist/shoplist"
  ],
  "subPackages": [
    {
      "root": "pkgA",
      "name": "A",
      "pages": [
        "pages/cat/cat",
        "pages/dog/dog"
      ]
    },
    {
      "root": "pkgB",
      "name": "B",
      "pages": [
        "pages/apple/apple"
      ]
    }
  ]
  "sitemapLocation": "sitemap.json"
}
```





##### 4.8 打包原则

1. 小程序会按  `subpackages` 的配置进行分包， `subpackages` 之外的目录将被打包到主包中
2. 主包也可以有自己的  `pages` （即最外层的 `pages` 字段）
3. `tabBar` 页面必须在主包内
4. 分包之间不能互相嵌套





##### 4.9 引用原则

1. 主包无法引用分包内的私有资源
2. 分包之间不能相互引用私有资源
3. 分包可以引用主包内的公共资源





##### 4.10 了解什么是独立分包以及它和普通分包的区别

1. 什么是独立分包

   - 独立分包本质上也是分包，只不过它比较特殊，可以独立于主包和其他分包而单独运行

   <img src="https://wuxiaohui-1254415986.cos.ap-nanjing.myqcloud.com/2022/08/08/016--du-li-fen-bao.jpg" style="zoom:80%;" />

   

2. 独立分包和普通分包的区别

   - 最主要的区别：`是否依赖于主包才能运行`
     - 普通分包必须依赖于主包才能运行
     - 独立分包可以在不下载主包的情况下，独立运行





##### 4.11 了解独立分包的应用场景

1. 开发者可以按需，将某些具有一定功能独立性的页面配置到独立分包中。原因如下

   - 当小程序从普通的分包页面启动时，需要首先下载主包
   - 而独立分包不依赖主包即可运行，可以很大程度上提升分包页面的启动速度

   

2. **注意：一个小程序中可以有多个独立分包**



##### 4.12 将普通分包改造成独立分包

##### 问题

- 独立分包如何配置？

1. 普通分包和独立分包的区别就是在 `subpackages` 数组中，是否配置了 `independent` 这个属性
   - 和普通分包对比, 独立分包就是在 subpackages 数组的某个元素中, 配置 independent 为true即可

<img src="https://wuxiaohui-1254415986.cos.ap-nanjing.myqcloud.com/2022/08/08/017---jiang-pu-tong-fen-bao-gai-zao-cheng-du-li-fe.jpg" style="zoom:80%;" />









##### 4.13 独立分包的引用原则

##### 问题

- 独立分包引用有什么限制？

1. 独立分包和普通分包以及主包之间，是`相互隔绝`的，`不能相互引用彼此的资源`！例如：
   - 主包`无法引用`独立分包内的私有资源
   - 独立分包之间，`不能相互引用`私有资源
   - 独立分包和普通分包之间，`不能相互引用`私有资源
   - `特别注意：`独立分包中不能引用主包内的公共资源



##### 4.14 介绍分包预下载的概念以及好处

1. 什么是分包预下载

   - 分包预下载是指在进入小程序的某个页面时，`由框架自动预下载可能需要的分包`，从而提升进入后续分包页面时的启动速度

   

2. 分包预下载的好处

   - 提升进入后续分包页面时的启动速度





##### 4.15 配置分包的预下载

1. 预下载分包的行为，会在进入指定的页面时触发。在 `app.json` 中，使用 `preloadRule` 节点定义分包的预下载规则



<img src="https://wuxiaohui-1254415986.cos.ap-nanjing.myqcloud.com/2022/08/08/018--pei-zhi-fen-bao-de-yu-xia-zai.jpg" style="zoom:80%;" />



```js
// 分包预下载的规则
"preloadRule": {
  // 触发分包预下载的页面路径
  "pages/contact/contact": {
    // network 表示在指定的网络模式下进行预下载
   // 可选值有： all(不限网络)和wifi(仅 wifi 模式下进行预下载)
   // 默认值为： wifi
    "network": "all",
     // packages 表示进入页面后， 预下载哪些分包
     // 可以通过root 或name 指定预下载哪些分包
    "packages": [
      "pkgA"
    ]
  }
}
```





##### 4.16 分包预下载的限制

1. 同一个分包中的页面享有共同的预下载大小限额 `2M`

<img src="https://wuxiaohui-1254415986.cos.ap-nanjing.myqcloud.com/2022/08/08/019--fen-bao-yu-xia-zai-de-xian-zhi.jpg" style="zoom:80%;" />









#### 5.  自定义 tabBar

##### 5.1 演示案例效果

##### 5.2 了解自定义 tabBar 的实现步骤

##### 5.3 在 app.json 中声明自定义 tabBar 的配置信息

##### 5.4 添加 tabBar 的代码文件

##### 5.5 基于 Vant 组件渲染出基本的自定义 tabBar 效果

##### 5.6 自定义 tabBar 的图标和文本

##### 5.7 循环渲染 tabBar 的 Item 项

##### 5.8 渲染并美化数字徽章的样式

##### 5.9 按需渲染数字徽章

##### 5.10 把 Store 中 sum 的值渲染为数字徽章

##### 5.11 实现 tabBar 页面的切换

##### 5.12 使用全局数据共享解决 tabBar 选中项不准备的问题

##### 5.13 修改 tabBar 选中项文本的颜色值





















