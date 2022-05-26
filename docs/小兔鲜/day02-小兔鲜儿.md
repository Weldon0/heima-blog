---
title: day02-小兔鲜儿

---



## 项目起步



### 01-项目介绍

> 了解：项目背景以及一些开发物料



小兔鲜儿

- 电商发展十余年，是个成熟的模式，小兔鲜儿是B2C电商平台，综合品类平台
- 平台理念：（品质）新鲜、（价格）亲民、（物流）快捷
- 参考竞品：网易严选、京东

![image-20220316093936266](https://wuxiaohui-1254415986.cos.ap-nanjing.myqcloud.com/uPic/image-20220316093936266.png)



开发物料

- 接口文档 http://zhoushugang.gitee.io/erabbit-client-pc-document/api.html
- 参考网站 http://erabbit.itheima.net/#/



**目标**功能

- 首页，分类，搜索，商品详情，登录（第三方），购物车，收货地址，结算，支付（支付宝）
- 形成一个购买功能功能闭环



### 02-技术选型

> 了解：项目会使用到的一些库和技术解决方案



Vue全家桶：

- Vue3 前端框架
- Vue-router 前端路由
- Vuex 状态管理
- Vue-cli 脚手架

第三方库：

- axios 接口请求
- vuex-persistedstate  状态持久化
- @vueuse/core 组合API工具库
- dayjs 日期处理
- vee-validate 表单校验

自研组件库

- erabbit-ui  简版 https://www.npmjs.com/package/erabbit-ui
- 如果是UI风格高度定制，可以尝试独立一套组件UI
- 如果是后台，优先考虑使用现有组件库。



**总结：**

- 项目所有功能采用Composition API 编写，解决电商常见业务逻辑。





### 03-创建项目

> 掌握，使用vuecli创建vue3的项目

通过脚手架创建项目，保证脚手架是5.0版本，`npm i -g @vue/cli` 更新。

```bash
vue create erabbit-vue3
```

- 1）选择自定义创建方式

![image-20220317225143678](https://wuxiaohui-1254415986.cos.ap-nanjing.myqcloud.com/uPic/image-20220317225143678.png)

- 2）选择需要的插件和工具

![image-20220319090518296](https://wuxiaohui-1254415986.cos.ap-nanjing.myqcloud.com/uPic/image-20220319090518296-7651919.png)

- 3）选择 vue3 版本

![image-20220317225530390](https://wuxiaohui-1254415986.cos.ap-nanjing.myqcloud.com/uPic/image-20220317225530390.png)

- 4）选择 hash 路由模式

![image-20220317225658248](https://wuxiaohui-1254415986.cos.ap-nanjing.myqcloud.com/uPic/image-20220317225658248.png)

- 5）选择 less 预处理器

![image-20220317225941534](https://wuxiaohui-1254415986.cos.ap-nanjing.myqcloud.com/uPic/image-20220317225941534.png)

- 6）选择 Prettier 代码风格

![image-20220317230107786](https://wuxiaohui-1254415986.cos.ap-nanjing.myqcloud.com/uPic/image-20220317230107786-7529270.png)

- 7）选择 保存代码，提交代码，进行代码风格校验

![image-20220317230223121](https://wuxiaohui-1254415986.cos.ap-nanjing.myqcloud.com/uPic/image-20220317230223121-7529345.png)

- 8）选择 把工具的配置文件存放到自己对应的配置文件中

![image-20220317230329497](https://wuxiaohui-1254415986.cos.ap-nanjing.myqcloud.com/uPic/image-20220317230329497-7529411.png)

- 9）是否记录刚才的操作，不记录

![image-20220317230429012](https://wuxiaohui-1254415986.cos.ap-nanjing.myqcloud.com/uPic/image-20220317230429012-7529470.png)



安装成功：进入目录启动项目即可

![image-20220317230519492](https://wuxiaohui-1254415986.cos.ap-nanjing.myqcloud.com/uPic/image-20220317230519492.png)



**老师提交至远程仓库，每开发一个功能提交一次**



### 04-目录调整

> 了解生成的默认代码，按照功能调整目录

核心要点：

- 解读调整默认生成的代码
- 按照项目功能调整目录



具体内容：

1. 解读默认生成的代码

`src/router/index.js`  路由代码

```js
import { createRouter, createWebHashHistory } from "vue-router";

// 写路由规则
const routes = [];

// createRouter 创建路由实例 
const router = createRouter({
  // 路由模式：createWebHashHistory() 创建hash模式路由
  history: createWebHashHistory(),
  routes,
});

export default router;
```



`store/index.js` vuex的代码

```js
import { createStore } from "vuex";

// createStore 创建一个vuex仓库
export default createStore({
  // 状态
  state: {},
  // vuex的计算属性
  getters: {},
  // 修改数据
  mutations: {},
  // 异步操作
  actions: {},
  // 模块
  modules: {},
});
```

`main.js` 入口文件

```js
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// 创建app实例，使用store插件，使用router插件，挂载到app容器
createApp(App).use(store).use(router).mount("#app");
```



2. 调整项目目录 

assets 下的logo删除，components下组件删除，views下组件删除，App组件代码删除。

```bash
src
|-- assets
|-- components
|-- router
|-- store
|-- views
|-- App.vue
|-- main.js
```



**总结：**

- 怎么创建 router 实例？
  - createRouter()
- 怎么创建 store 仓库？
  - createStore()



### 05-拆分vuex模块

> 能够，定义 cart 模块，category模块 和 user 模块在vuex中

核心内容：

- 介绍我们有三个模块需要vuex来存储数据
- 分别定义这三个模块，合并到store的 `modules` 选项中



代码落地：

- 三个模块
  - cart 存储购物车，头部组件要使用，购物车页面要使用。
  - category 存储分类，头部组件要使用，首页需要使用分类。
  - user 模块，用户信息，token信息，几乎所有页面需要使用。
- 代码

`store/modules/cart.js`

```js
// 购物车状态
export default {
  namespaced: true,
  state() {
    return {
      // 购物车列表
      list: [],
    };
  },
};
```

`store/modules/category.js`

```js
// 分类模块
export default {
  namespaced: true,
  state() {
    return {
      // 分类列表
      list: [],
    };
  },
};
```

`store/modules/user.js`

```js
// 用户模块
export default {
  namespaced: true,
  state() {
    return {
      // 用户信息
      profile: {
        id: null,
        avatar: null,
        nickname: null,
        account: null,
        mobile: null,
        token: null,
      },
    };
  },
};
```

`store/index.js`

```js
import { createStore } from "vuex";

import cart from "./modules/cart";
import category from "./modules/category";
import user from "./modules/user";

export default createStore({
  modules: {
    cart,
    category,
    user,
  },
});
```



**总结：**

- 使用 modules 选项，关联三个vuex模块。



### 06-实现vuex持久化

> 掌握，为项目配置vuex数据持久化插件

核心内容：

- 理解 `user` 模块  `cart` 模块需要本地存储
- 在项目中使用 `vuex-persistedstate`  持久化 `cart` 模块 和 `user` 模块
- 测试 通过修改 user 模块的数据验证是否生效



具体落地：

- 为什么要本地存储 user 和 cart ？
  - user 信息保存登录token，刷新页面还需要存在
  - cart 信息在没有登录的时候要存储，存储在哪里本地
- 为什么要用户插件？
  - 如果不使用插件，操作了vuex还需要手动的去更新下本地存储，非常麻烦
- `vuex-persistedstate` 插件作用？
  - 在更新vuex数据的时候，插件会自动去更新本地存储，方便
- 使用步骤：



安装：

```bash
yarn add vuex-persistedstate
```

使用：`store/index.js`

```js
// 创建插件函数
import createPersistedstate from "vuex-persistedstate";

export default createStore({
  modules: {
    cart,
    category,
    user,
  },
  plugins: [
    // 使用插件
    createPersistedstate({
      // 本地存储key
      key: "erabbit-store",
      // 存储哪些modules
      paths: ["cart", "user"],
    }),
  ],
});
```

测试：

`store/modules/user.js`

```js
  mutations: {
    setProfile(state, payload) {
      // 保留原来数据，合并新数据
      state.profile = payload;
    },
  },
```

`App.vue`

```vue
<template>
  <div>App 组件</div>
  <div>nikename值：{{ $store.state.user.profile.nickname }}</div>
  <button @click="$store.commit('user/setProfile', { nickname: '测试2' })">
    改值
  </button>
</template>
```





### 07-request封装-axios配置

> 掌握，request的axios配置

核心要点：

- 创建一个axios实例，添加基础配置
- 请求头有token的时候携带token
- 剥离一层数据，响应401的时候拦截到登录



安装：

```bash
yarn add axios
```

代码落地：

`utils/request.js`

```js
import axios from "axios";
import store from "@/store";
import router from "@/router";

// 1. 创建axios和基本配置
const instance = axios.create({
  baseURL: "http://pcapi-xiaotuxian-front-devtest.itheima.net/",
  timeout: 5000,
});

// 2. 请求拦截器，携带token
instance.interceptors.request.use(
  (config) => {
    const { profile } = store.state.user;
    if (profile.token) {
      config.headers.Authorization = `Bearer ${profile.token}`;
    }
    return config;
  },
  (err) => Promise.reject(err)
);

// 3. 响应拦截器，取出内ret中的data，处理401错误
instance.interceptors.response.use(
  (ret) => ret.data,
  (err) => {
    if (err.response && err.response.status === 401) {
      // 清除用户信息
      store.commit("user/setProfile", {});
      // 跳转登录页
      router.push("/login");
    }
    return Promise.reject(err);
  }
);

```



**总结：**

- 创建axios实例，使用 `axios.create({...})`
- 拦截器和之前写一样，剥离一层数据是为了组件中使用方便。



### 08-request封装-工具函数

> 掌握，使用配置好的axios封装请求工具函数给api接口函数使用

核心要点：

- 回顾之前调用接口的套路
- 封装一个调用接口相对简洁的函数（便捷）导出给 api 层使用



主要内容：

- 回顾之前调用接口的套路

![image-20220318235157128](https://wuxiaohui-1254415986.cos.ap-nanjing.myqcloud.com/uPic/image-20220318235157128-7618720.png)

- 封装一个调用接口相对简洁的函数（便捷）导出给 api 层使用

```js
/**
 * 请求工具函数
 * @param {string} url 请求地址
 * @param {string} method 请求方式
 * @param {object} submitData 请求传参
 * @returns Promise
 */
const request = (url, method, submitData) => {
  return instance({
    url,
    method,
    // 1. get 请求 params 传参
    // 2. 其他请求使用 data 传参
    // 3. [js表达式] 是动态使用key
    // 4. toLowerCase() 处理大小写，程序健壮
    [method.toLowerCase() === "get" ? "params" : "data"]: submitData,
  });
};

export default request;
```



**总结：**

- 封装request工具函数的目的是提供复用，调用接口代码更简洁。



### 09-路由规则

> 理解，路由设计的依据，提前约定好路由规则



路由设计依据：

- （全部切换）首页 与 登录
- （部分切换）首页框架容器不变，内容变化
  - 首页内容
  - 分类内容
  - 商品内容
  - ...
- 会变化的地方就是路由出口，写 `router-view` 的 地方，根据嵌套关系分为 1 2 级路由。



约定路由规则：

| 路径          | 组件（功能）       | 嵌套级别 |
| ------------- | ------------------ | -------- |
| /             | 首页布局容器Layout | 1级      |
| /             | 首页               | 2级      |
| /category/:id​ | 分类               | 2级      |
| /search       | 搜索               | 2级      |
| /product/:id  | 商品详情           | 2级      |
| /login        | 登录               | 1级      |
| /cart         | 购物车             | 2级      |
| /checkout     | 填写订单           | 2级      |
| /pay          | 支付               | 2级      |
| /pay/result   | 支付结果           | 2级      |



**总结：**

- 路由规则约定好之后，可以按照路由去开发对应的页面。



## 首页开始



### 10-首页-路由与组件

> 编写：首页路由规则代码，和页面框架结构

大致步骤：

- App定义一级路由出口
- Layout布局容器，二级路由出口
- Home页面组件
- 配置路由规则



落地代码：

- 根组件下定义一级路由组件出口 `src/App.vue`

```vue
<template>
  <!-- 一级路由 -->
  <router-view></router-view>
</template>
```

- 一级路由布局容器 `src/views/Layout.vue`

```vue
<template>
  <nav>顶部通栏</nav>
  <header>头部</header>
  <main>
    <!-- 二级路由 -->
    <router-view></router-view>
  </main>
  <footer>底部</footer>
</template>

<script>
export default {
  name: 'xtx-layout'
}
</script>

<style scoped lang='less'></style>
```

- 二级路由首页组件 `src/views/home/index.vue`

```vue
<template>
  <div class='xtx-home-page'>
    首页
  </div>
</template>

<script>
export default {
  name: 'xtx-home-page'
}
</script>

<style scoped lang='less'></style>
```

- 配置路由规则 `src/router/index.js`

```diff
import { createRouter, createWebHashHistory } from 'vue-router'

+const Layout = () => import('@/views/Layout')
+const Home = () => import('@/views/home/index')

const routes = [
+  {
+    path: '/',
+    component: Layout,
+    children: [
+      { path: '/', component: Home }
+    ]
+  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
```



**总结：** 

- 配置首页的路由规则，由Layout和首页组件组成。





### 11-首页-小兔鲜组件库

> 知道，如何导入小兔鲜组件库

注意：这个UI组件库服务于小兔鲜项目，组件业务特性很明显，不是很通用。

安装：

```bash
yarn add erabbit-ui
```

图标：`public/index.html`

```html
<link rel="stylesheet" href="https://at.alicdn.com/t/font_2143783_iq6z4ey5vu.css">
```

![image-20220319160116137](https://wuxiaohui-1254415986.cos.ap-nanjing.myqcloud.com/uPic/image-20220319160116137.png)

全局使用：

```js
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import ErabbitUI from 'erabbit-ui'
import 'erabbit-ui/packages/theme/index.less'

// 创建一个vue应用，使用仓库vuex，使用路由，使用小兔鲜儿组件库，挂载到app容器
createApp(App).use(store).use(router).use(ErabbitUI).mount("#app");
```

测试：

```vue
<xtx-button type="plain">按钮</xtx-button>
```

文档：https://www.npmjs.com/package/erabbit-ui



### 12-首页-css变量

> 理解：css变量的作用和使用

核心要点：

- css变量定义
- css变量使用
- 介绍小兔鲜css变量



具体内容：

- css变量定义

```css
:root{
  --main-color: #4d4e53;
}  
```

为什么选择两根连词线（`--`）表示变量？因为`$foo`被 Sass 用掉了，`@foo`被 Less 用掉了。为了不产生冲突，官方的 CSS 变量就改用两根连词线了。

- css变量使用

```css
a {
  color: var(--main-color)
}
```

`var()`函数用于读取变量

- 介绍小兔鲜css变量

```css
:root {
  --xtx-color: #27ba9b;
  --help-color: #e26237;
  --suc-color: #1dc779;
  --warn-color: #ffb302;
  --price-color: #cf4444;
}
```

主题色，帮助色，成功色，警告色，价格色



### 13-首页-顶部通栏渲染

> 完成：顶部通栏

核心要点：

- 顶部通栏组件
- 动态展示通栏信息（登录|未登录）



落地代码：

- 顶部通栏组件

`src/styles/index.less`

```less
// 共用的样式
body {
  margin: 0;
}
```

在 `src/components/` 下新建 `app-topnav.vue` 组件

```vue
<template>
  <nav class="app-topnav">
    <div class="container">
      <ul>
        <li><a href="javascript:;"><i class="iconfont icon-user"></i>周杰伦</a></li>
        <li><a href="javascript:;">退出登录</a></li>
        <li><a href="javascript:;">请先登录</a></li>
        <li><a href="javascript:;">免费注册</a></li>
        <li><a href="javascript:;">我的订单</a></li>
        <li><a href="javascript:;">会员中心</a></li>
        <li><a href="javascript:;">帮助中心</a></li>
        <li><a href="javascript:;">关于我们</a></li>
        <li><a href="javascript:;"><i class="iconfont icon-phone"></i>手机版</a></li>
      </ul>
    </div>
  </nav>
</template>
<script>
export default {
  name: 'AppTopnav'
}
</script>
<style scoped lang="less">
.app-topnav {
  background: #333;
  ul {
    display: flex;
    height: 53px;
    justify-content: flex-end;
    align-items: center;
    li {
      a {
        padding: 0 15px;
        color: #cdcdcd;
        line-height: 1;
        display: inline-block;
        i {
          font-size: 14px;
          margin-right: 2px;
        }
        &:hover {
          color: var(--xtx-color);
        }
      }
      ~ li {
        a {
          border-left: 2px solid #666;
        }
      }
    }
  }
}
</style>
```

在 `src/views/Layout.vue` 中导入使用。

```diff
<template>
+  <AppTopnav/>
  <header>头部</header>
  <main>
    <!-- 二级路由 -->
    <router-view></router-view>
  </main>
  <footer>底部</footer>
</template>

<script>
+import AppTopnav from '@/components/app-topnav'
export default {
  name: 'XtxLayout',
+  components: { AppTopnav }
}
</script>

<style scoped lang='less'></style>
```

- 动态展示通栏信息（登录|未登录）

```vue
<script>
import { useStore } from 'vuex'
import { computed } from 'vue'    
export default {
  name: 'AppTopnav',
  setup () {
      const store = useStore()
      const profile = computed(()=>{
          return store.state.user.profile
      })
      return { profile }
  }
}
</script>
```

```vue
        <template v-if="profile.token">
          <li><a href="javascript:;"><i class="iconfont icon-user"></i>{{profile.account}}</a></li>
          <li><a href="javascript:;">退出登录</a></li>
        </template>
        <template v-else>
          <li><a href="javascript:;">请先登录</a></li>
          <li><a href="javascript:;">免费注册</a></li>
        </template>
```



**总结：** 

- 完成基础布局，根据用户信息动态展示导航菜单。



### 14-首页-头部和底部布局

> 完成：头部和底部布局，静态

核心要点：

- 头部组件
- 底部组件



落地代码：

- 头部组件

在 `src/components/` 下新建 `app-header.vue` 组件，基础布局如下：

```vue
<template>
  <header class='app-header'>
    <div class="container">
      <h1 class="logo"><RouterLink to="/">小兔鲜</RouterLink></h1>
      <ul class="navs">
        <li class="home"><RouterLink to="/">首页</RouterLink></li>
        <li><a href="#">美食</a></li>
        <li><a href="#">餐厨</a></li>
        <li><a href="#">艺术</a></li>
        <li><a href="#">电器</a></li>
        <li><a href="#">居家</a></li>
        <li><a href="#">洗护</a></li>
        <li><a href="#">孕婴</a></li>
        <li><a href="#">服装</a></li>
        <li><a href="#">杂货</a></li>
      </ul>
      <div class="search">
        <i class="iconfont icon-search"></i>
        <input type="text" placeholder="搜一搜">
      </div>
      <div class="cart">
        <a class="curr" href="#">
          <i class="iconfont icon-cart"></i><em>2</em>
        </a>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AppHeader'
}
</script>

<style scoped lang='less'>
.app-header {
  background: #fff;
  .container {
    display: flex;
    align-items: center;
  }
  .logo {
    width: 200px;
    a {
      display: block;
      height: 132px;
      width: 100%;
      text-indent: -9999px;
      background: url(../assets/logo.png) no-repeat center 18px / contain;
    }
  }
  .navs {
    width: 820px;
    display: flex;
    justify-content: space-around;
    padding-left: 40px;
    li {
      margin-right: 40px;
      width: 38px;
      text-align: center;
      a {
        font-size: 16px;
        line-height: 32px;
        height: 32px;
        display: inline-block;
      }
      &:hover {
        a {
          color: var(--xtx-color);
          border-bottom: 1px solid var(--xtx-color);
        }
      }
    }
  }
  .search {
    width: 170px;
    height: 32px;
    position: relative;
    border-bottom: 1px solid #e7e7e7;
    line-height: 32px;
    .icon-search {
      font-size: 18px;
      margin-left: 5px;
    }
    input {
      width: 140px;
      padding-left: 5px;
      color: #666;
    }
  }
  .cart {
    width: 50px;
    .curr {
      height: 32px;
      line-height: 32px;
      text-align: center;
      position: relative;
      display: block;
      .icon-cart{
        font-size: 22px;
      }
      em {
        font-style: normal;
        position: absolute;
        right: 0;
        top: 0;
        padding: 1px 6px;
        line-height: 1;
        background: var(--help-color);
        color: #fff;
        font-size: 12px;
        border-radius: 10px;
        font-family: Arial;
      }
    }
  }
}
</style>
```

在 `src/views/Layout.vue` 中导入使用

```diff
<template>
  <AppTopnav/>
+  <AppHeader/>
  <main>
    <!-- 二级路由 -->
    <router-view></router-view>
  </main>
  <footer>底部</footer>
</template>

<script>
import AppTopnav from '@/components/app-topnav'
+import AppHeader from '@/components/app-header'
export default {
  name: 'XtxLayout',
+  components: { AppTopnav, AppHeader }
}
</script>

<style scoped lang='less'></style>
```

- 底部组件

在 `src/components/` 下新建 `app-footer.vue` 组件，基础布局如下：

```vue
<template>
  <footer class="app-footer">
    <!-- 联系我们 -->
    <div class="contact">
      <div class="container">
        <dl>
          <dt>客户服务</dt>
          <dd><i class="iconfont icon-kefu"></i> 在线客服</dd>
          <dd><i class="iconfont icon-question"></i> 问题反馈</dd>
        </dl>
        <dl>
          <dt>关注我们</dt>
          <dd><i class="iconfont icon-weixin"></i> 公众号</dd>
          <dd><i class="iconfont icon-weibo"></i> 微博</dd>
        </dl>
        <dl>
          <dt>下载APP</dt>
          <dd class="qrcode"><img src="../assets/qrcode.jpg" /></dd>
          <dd class="download">
            <span>扫描二维码</span>
            <span>立马下载APP</span>
            <a href="javascript:;">下载页面</a>
          </dd>
        </dl>
        <dl>
          <dt>服务热线</dt>
          <dd class="hotline">400-0000-000 <small>周一至周日 8:00-18:00</small></dd>
        </dl>
      </div>
    </div>
    <!-- 其它 -->
    <div class="extra">
      <div class="container">
        <div class="slogan">
          <a href="javascript:;">
            <i class="iconfont icon-footer01"></i>
            <span>价格亲民</span>
          </a>
          <a href="javascript:;">
            <i class="iconfont icon-footer02"></i>
            <span>物流快捷</span>
          </a>
          <a href="javascript:;">
            <i class="iconfont icon-footer03"></i>
            <span>品质新鲜</span>
          </a>
        </div>
        <!-- 版权信息 -->
        <div class="copyright">
          <p>
            <a href="javascript:;">关于我们</a>
            <a href="javascript:;">帮助中心</a>
            <a href="javascript:;">售后服务</a>
            <a href="javascript:;">配送与验收</a>
            <a href="javascript:;">商务合作</a>
            <a href="javascript:;">搜索推荐</a>
            <a href="javascript:;">友情链接</a>
          </p>
          <p>CopyRight © 小兔鲜儿</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter'
}
</script>

<style scoped lang='less'>
.app-footer {
  overflow: hidden;
  background-color: #f5f5f5;
  padding-top: 20px;
  .contact {
    background: #fff;
    .container {
      padding: 60px 0 40px 25px;
      display: flex;
    }
    dl {
      height: 190px;
      text-align: center;
      padding: 0 72px;
      border-right: 1px solid #f2f2f2;
      color: #999;
      &:first-child {
        padding-left: 0;
      }
      &:last-child {
        border-right: none;
        padding-right: 0;
      }
    }
    dt {
      line-height: 1;
      font-size: 18px;
    }
    dd {
      margin: 36px 12px 0 0;
      float: left;
      width: 92px;
      height: 92px;
      padding-top: 10px;
      border: 1px solid #ededed;
      .iconfont {
        font-size: 36px;
        display: block;
        color: #666;
      }
      &:hover {
        .iconfont {
          color:  var(--xtx-color);
        }
      }
      &:last-child {
        margin-right: 0;
      }
    }
    .qrcode {
      width: 92px;
      height: 92px;
      padding: 7px;
      border: 1px solid #ededed;
    }
    .download {
      padding-top: 5px;
      font-size: 14px;
      width: auto;
      height: auto;
      border: none;
      span {
        display: block;
      }
      a {
        display: block;
        line-height: 1;
        padding: 10px 25px;
        margin-top: 5px;
        color: #fff;
        border-radius: 2px;
        background-color: var(--xtx-color);
      }
    }
    .hotline {
      padding-top: 20px;
      font-size: 22px;
      color: #666;
      width: auto;
      height: auto;
      border: none;
      small {
        display: block;
        font-size: 15px;
        color: #999;
      }
    }
  }
  .extra {
    background-color: #333;
  }
  .slogan {
    height: 178px;
    line-height: 58px;
    padding: 60px 100px;
    border-bottom: 1px solid #434343;
    display: flex;
    justify-content: space-between;
    a {
      height: 58px;
      line-height: 58px;
      color: #fff;
      font-size: 28px;
      i {
        font-size: 50px;
        vertical-align: middle;
        margin-right: 10px;
        font-weight: 100;
      }
      span {
        vertical-align: middle;
        text-shadow: 0 0 1px #333;
      }
    }
  }
  .copyright {
    height: 170px;
    padding-top: 40px;
    text-align: center;
    color: #999;
    font-size: 15px;
    p {
      line-height: 1;
      margin-bottom: 20px;
    }
    a {
      color: #999;
      line-height: 1;
      padding: 0 10px;
      border-right: 1px solid #999;
      &:last-child {
        border-right: none;
      }
    }
  }
}
</style>
```

在 `src/views/Layout.vue` 中导入使用。

```diff
<template>
  <AppTopnav/>
  <AppHeader/>
  <main class="app-body">
    <!-- 二级路由 -->
    <router-view></router-view>
  </main>
+  <AppFooter/>
</template>

<script>
import AppTopnav from '@/components/app-topnav'
import AppHeader from '@/components/app-header'
+import AppFooter from '@/components/app-footer'
export default {
  name: 'XtxLayout',
+  components: { AppTopnav, AppHeader, AppFooter }
}
</script>

<style scoped lang='less'>
+.app-body {
+  min-height: 600px;
+}
</style>
```



**总结：**

- 完成 头部组件 和 底部组件 基础布局



### 15-首页-头部导航抽离

> 完成：提取头部分类导航组件，提供给头部，和将来的吸顶头部使用



- 新建`src/components/app-header-nav.vue` 组件。

```vue
<template>
  <ul class="app-header-nav">
    <li class="home"><RouterLink to="/">首页</RouterLink></li>
    <li><a href="#">美食</a></li>
    <li><a href="#">餐厨</a></li>
    <li><a href="#">艺术</a></li>
    <li><a href="#">电器</a></li>
    <li><a href="#">居家</a></li>
    <li><a href="#">洗护</a></li>
    <li><a href="#">孕婴</a></li>
    <li><a href="#">服装</a></li>
    <li><a href="#">杂货</a></li>
  </ul>
</template>

<script>
export default {
  name: 'AppHeaderNav'
}
</script>

<style scoped lang='less'>
.app-header-nav {
  width: 820px;
  display: flex;
  padding-left: 40px;
  position: relative;
  z-index: 998;
  li {
    margin-right: 40px;
    width: 38px;
    text-align: center;
    a {
      font-size: 16px;
      line-height: 32px;
      height: 32px;
      display: inline-block;
    }
    &:hover {
      a {
          color: var(--xtx-color);
          border-bottom: 1px solid var(--xtx-color);
      }
    }
  }
}
</style>
```

- 在 `app-header.vue` 中使用组件。注意，删除结构和样式。

```diff
<template>
  <header class='app-header'>
    <div class="container">
      <h1 class="logo"><RouterLink to="/">小兔鲜</RouterLink></h1>
+      <AppHeaderNav />
      <div class="search">
        <i class="iconfont icon-search"></i>
        <input type="text" placeholder="搜一搜">
      </div>
      <div class="cart">
        <a class="curr" href="#">
          <i class="iconfont icon-cart"></i><em>2</em>
        </a>
      </div>
    </div>
  </header>
</template>

<script>
+import AppHeaderNav from './app-header-nav'
export default {
  name: 'AppHeader',
+  components: { AppHeaderNav }
}
</script>
```









