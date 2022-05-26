---
title: day08-小兔鲜儿
---





## 进行支付

### 01-提交订单

> 目标：提交订单，生成订单，跳转支付页面

大致步骤：

- 定义API函数
- 确认需要提交字段
- 组件内绑定事件进行提交
  - 判断是否有收货地址
  - 进行提交
  - 成功，跳转支付页面
  - 失败，错误提示



落地代码：

- 定义API函数

```js
// 创建订单
export const createOrder = (data) => request("/member/order", "post", data);

```

- 组件内绑定事件进行提交

```js
import { createOrder } from "@/api/order";
```

```js
    // 创建订单
    const router = useRouter();
    const submitOrder = async () => {
      if (!defAddr.value.id) return Message({ text: "请选择收货地址" });
      try {
        const data = await createOrder({
          goods: info.value.goods.map(({ skuId, count }) => ({ skuId, count })),
          addressId: defAddr.value.id,
          // 以下是默认信息
          deliveryTimeType: 1,
          payType: 1,
          payChannel: 1,
          buyerMessage: "",
        });
        router.push(`/user/pay?id=${data.result.id}`);
      } catch (e) {
        Message({
          type: "error",
          text: e.response.data.message || "确认订单失败",
        });
      }
    };
		
		// return { createOrder }
```

```vue
        <!-- 提交订单 -->
        <div class="submit">
          <XtxButton @click="submitOrder" type="primary">提交订单</XtxButton>
        </div>
```





### 02-支付-组件基础

> 目标：配置路由和组件，完成基础信息渲染

大致步骤：

- 配置路由信息和组件
- 定义API，完成基础信息渲染



落地代码：

- 配置路由信息和组件 

`views/pay/index.vue`

```vue
<template>
  <div class="xtx-pay-page">
    <div class="container">
      <XtxBread>
        <XtxBreadItem to="/">首页</XtxBreadItem>
        <XtxBreadItem to="/cart">购物车</XtxBreadItem>
        <XtxBreadItem>支付订单</XtxBreadItem>
      </XtxBread>
      <!-- 付款信息 -->
      <div class="pay-info">
        <span class="icon iconfont icon-queren2"></span>
        <div class="tip">
          <p>订单提交成功！请尽快完成支付。</p>
          <p>支付还剩 <span>24分59秒</span>, 超时后将取消订单</p>
        </div>
        <div class="amount">
          <span>应付总额：</span>
          <span>¥5673.00</span>
        </div>
      </div>
      <!-- 付款方式 -->
      <div class="pay-type">
        <p class="head">选择以下支付方式付款</p>
        <div class="item">
          <p>支付平台</p>
          <a class="btn wx" href="javascript:;"></a>
          <a class="btn alipay" href="javascript:;"></a>
        </div>
        <div class="item">
          <p>支付方式</p>
          <a class="btn" href="javascript:;">招商银行</a>
          <a class="btn" href="javascript:;">工商银行</a>
          <a class="btn" href="javascript:;">建设银行</a>
          <a class="btn" href="javascript:;">农业银行</a>
          <a class="btn" href="javascript:;">交通银行</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "XtxPayPage",
};
</script>
<style scoped lang="less">
.pay-info {
  background: #fff;
  display: flex;
  align-items: center;
  height: 240px;
  padding: 0 80px;
  .icon {
    font-size: 80px;
    color: #1dc779;
  }
  .tip {
    padding-left: 10px;
    flex: 1;
    p {
      &:first-child {
        font-size: 20px;
        margin-bottom: 5px;
      }
      &:last-child {
        color: #999;
        font-size: 16px;
      }
    }
  }
  .amount {
    span {
      &:first-child {
        font-size: 16px;
        color: #999;
      }
      &:last-child {
        color: var(--price-color);
        font-size: 20px;
      }
    }
  }
}
.pay-type {
  margin-top: 20px;
  background-color: #fff;
  padding-bottom: 70px;
  p {
    line-height: 70px;
    height: 70px;
    padding-left: 30px;
    font-size: 16px;
    &.head {
      border-bottom: 1px solid #f5f5f5;
    }
  }
  .btn {
    width: 150px;
    height: 50px;
    border: 1px solid #e4e4e4;
    text-align: center;
    line-height: 48px;
    margin-left: 30px;
    color: #666666;
    display: inline-block;
    &.active,
    &:hover {
      border-color: var(--xtx-color);
    }
    &.alipay {
      background: url(https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7b6b02396368c9314528c0bbd85a2e06.png)
        no-repeat center / contain;
    }
    &.wx {
      background: url(https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c66f98cff8649bd5ba722c2e8067c6ca.jpg)
        no-repeat center / contain;
    }
  }
}
</style>
```

`router/index.js`

```js
const Pay = () => import("@/views/pay/index");
```

```diff
      { path: "/cart", component: Cart },
      { path: "/user/checkout", component: Checkout },
+      { path: "/user/pay", component: Pay },
```

- 定义API

```js
// 订单详情
export const getOrderInfo = (id) => request(`/member/order/${id}`, "get");
```

- 完成基础信息渲染

`views/pay/index.vue`

```js
import { onMounted, ref } from "vue";
import { getOrderInfo } from "@/api/order";
import { useRoute } from "vue-router";
export default {
  name: "XtxPayPage",
  setup() {
    const route = useRoute();
    const order = ref(null);
    onMounted(async () => {
      const data = await getOrderInfo(route.query.id);
      order.value = data.result;
    });
    return { order };
  },
};
```

```vue
      <!-- 付款信息 -->
      <div class="pay-info">
        <span class="icon iconfont icon-queren2"></span>
        <div class="tip">
          <p>订单提交成功！请尽快完成支付。</p>
          <p v-if="order.countdown > 0">
            支付还剩 <span>24分59秒</span>, 超时后将取消订单
          </p>
          <p v-else>订单已经超时</p>
        </div>
        <div class="amount">
          <span>应付总额：</span>
          <span>¥{{ order.payMoney }}</span>
        </div>
      </div>
```





### 03-支付-倒计时

> 目标：完成支付倒计时设置

大致步骤：

- 使用 useIntervalFn 进行倒计时
- 组件初始化开启
- 基于 dayjs 定义格式化时间的函数



落地代码：

- 使用 useIntervalFn 进行倒计时

```js
import { useIntervalFn } from "@vueuse/core";
import { onMounted, onUnmounted, ref } from "vue";
```

```js
    // 倒计时操作
    const { resume, pause } = useIntervalFn(
      () => {
        order.value.countdown--;
        if (order.value.countdown <= 0) {
          pause();
        }
      },
      1000,
      {
        immediate: false,
      }
    );
    onUnmounted(() => pause());
```

- 组件初始化开启

```diff
    onMounted(async () => {
      const data = await getOrderInfo(route.query.id);
      order.value = data.result;
+      // 开启倒计时
+      resume();
    });
```

- 基于 dayjs 定义格式化时间的函数 `yarn add dayjs`

```js
import dayjs from "dayjs";
```

```js
    // 格式化时间
    const formatTime = (time) => {
      return dayjs.unix(time).format("mm分ss秒");
    };          

    return { order, formatTime };
```

```vue
          <p v-if="order.countdown > 0">
            支付还剩 <span>{{ formatTime(order.countdown) }}</span>
            , 超时后将取消订单
          </p>
```





### 04-支付-后端流程

> 目标：知道小兔鲜儿支付流程

![image-20220326193702228](https://wuxiaohui-1254415986.cos.ap-nanjing.myqcloud.com/uPic/image-20220326193702228.png)



支付流程：

- PC端点击支付按钮，A标签设置新开页，按照后台支付地址携带：`订单ID`和`回跳地址`
- 后台服务跳转支付宝支付页面，支付成功后台回跳后台，后台重定向到PC端支付结果页
- PC端支付结果页面，根据回跳地址上的订单ID，查询订单的支付状态，展示支付结果



回跳地址：

```
# 当前的前端服务地址

http://localhost:8080/#/user/pay/result
```



测试账号：

- 如果使用扫码支付需要下载 `沙箱支付宝` ，开放平台扫码下载（仅支持安卓）。

```js
// 买家账号 jfjbwb4477@sandbox.com
// 登录密码 111111
// 支付密码 111111
```



### 05-支付-跳转支付

> 目标：支付打开新页，当前页打开提示框。

大致步骤：

- 和 `request.js `共用后台服务器地址
- 拼接地址给 支付宝 A链接使用
- 跳转的同时当前页打开等待对话窗口



具体代码：

- 和 `request.js `共用后台服务器地址

`utils/request.js`

```diff
+export const baseURL = "http://pcapi-xiaotuxian-front-devtest.itheima.net/";
const instance = axios.create({
+  baseURL,
  timeout: 5000,
});
```

- 拼接地址给 支付宝 A链接使用

```js
import { computed } from "vue";
```

```js
    const payUrl = computed(() => {
      const redirectUrl = encodeURIComponent(
        "http://localhost:8080/#/user/pay/result"
      );
      return `${baseURL}pay/aliPay?orderId=${order.value.id}&redirect=${redirectUrl}`;
    });

    return { order, formatTime, payUrl };
```

```vue
<a class="btn alipay" target="_blank" :href="payUrl"></a>
```

- 跳转的同时当前页打开等待对话窗口

```vue
    <XtxDialog title="正在支付..." v-model:visible="visibleDialog">
      <div class="pay-wait">
        <img src="@/assets/load.gif" alt="" />
        <div v-if="order">
          <p>如果支付成功：</p>
          <a href="javascript:;"> 查看订单详情> </a>
          <p>如果支付失败：</p>
          <a href="javascript:;">查看相关疑问></a>
        </div>
      </div>
    </XtxDialog>
```

```less
.pay-wait {
  display: flex;
  justify-content: space-around;
  p {
    margin-top: 30px;
    font-size: 14px;
  }
  a {
    color: var(--xtx-color);
  }
}
```

```diff
          <a
+            @click="visibleDialog = true"
            class="btn alipay"
            target="_blank"
            :href="payUrl"
          ></a>
```

```js
    const visibleDialog = ref(false);
    return { order, formatTime, payUrl, visibleDialog };
```




### 06-支付-结果展示

> 目标：配置路由和组件，展示支付结果

大致步骤：

- 路由与组件
- 渲染页面



落地代码：

- 路由与组件

`views/pay/result.vue`

```vue
<template>
  <div class="xtx-pay-result-page">
    <div class="container">
      <XtxBread>
        <XtxBreadItem to="/">首页</XtxBreadItem>
        <XtxBreadItem to="/cart">购物车</XtxBreadItem>
        <XtxBreadItem>支付结果</XtxBreadItem>
      </XtxBread>
      <!-- 支付结果 -->
      <div class="pay-result">
        <span v-if="$route.query.payResult" class="iconfont icon-queren2 green">
        </span>
        <span v-else class="iconfont icon-shanchu red"></span>
        <p class="tit">
          订单支付{{ $route.query.payResult ? "成功" : "失败" }}
        </p>
        <p class="tip">我们将尽快为您发货，收货期间请保持手机畅通</p>
        <p>支付方式：<span>微信支付</span></p>
        <p>
          支付金额：<span class="red">¥{{ order?.payMoney }}</span>
        </p>
        <div class="btn">
          <XtxButton type="primary" style="margin-right: 20px">
            查看订单
          </XtxButton>
          <XtxButton type="gray">进入首页</XtxButton>
        </div>
        <p class="alert">
          <span class="iconfont icon-tip"></span>
          温馨提示：小兔鲜儿不会以订单异常、系统升级为由要求您点击任何网址链接进行退款操作，保护资产、谨慎操作。
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import { onMounted, ref } from "vue";
import { getOrderInfo } from "@/api/order";
import { useRoute } from "vue-router";
export default {
  name: "XtxPayResultPage",
  setup() {
    const route = useRoute();
    const order = ref(null);
    onMounted(async () => {
      const data = await getOrderInfo(route.query.orderId);
      order.value = data.result;
    });
    return { order };
  },
};
</script>
<style scoped lang="less">
.pay-result {
  padding: 100px 0;
  background: #fff;
  text-align: center;
  > .iconfont {
    font-size: 100px;
  }
  .green {
    color: #1dc779;
  }
  .red {
    color: var(--price-color);
  }
  .tit {
    font-size: 24px;
  }
  .tip {
    color: #999;
  }
  p {
    line-height: 40px;
    font-size: 16px;
  }
  .btn {
    margin-top: 50px;
  }
  .alert {
    font-size: 12px;
    color: #999;
    margin-top: 50px;
  }
}
</style>
```

`router/index.js`

```js
const PayResult = () => import("@/views/pay/result");
```

```diff
      { path: "/user/checkout", component: Checkout },
      { path: "/user/pay", component: Pay },
+      { path: "/user/pay/result", component: PayResult },
```

- 渲染组件

```vue
       <span v-if="$route.query.payResult" class="iconfont icon-queren2 green">
        </span>
        <span v-else class="iconfont icon-shanchu red"></span>
        <p class="tit">
          订单支付{{ $route.query.payResult ? "成功" : "失败" }}
        </p>
        <p class="tip">我们将尽快为您发货，收货期间请保持手机畅通</p>
        <p>支付方式：<span>微信支付</span></p>
        <p>
          支付金额：<span class="red">¥{{ order?.payMoney }}</span>
        </p>
```

```js
import { onMounted, ref } from "vue";
import { getOrderInfo } from "@/api/order";
import { useRoute } from "vue-router";
export default {
  name: "XtxPayResultPage",
  setup() {
    const route = useRoute();
    const order = ref(null);
    onMounted(async () => {
      const data = await getOrderInfo(route.query.orderId);
      order.value = data.result;
    });
    return { order };
  },
};
```





## 一些扩展



### 07-vue2使用组合API

> 目标：在vue2项目中使用compositionAPI

大致步骤：

- 安装 `@vue/composition-api`
- 注册插件
- 使用组合API



落地代码：

- 安装

```bash
yarn add @vue/composition-api
```

- 注册插件

```js
import VueCompositionAPI from '@vue/composition-api'
Vue.use(VueCompositionAPI)
```

- 使用组合API

```diff
<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
+    {{count}} <button @click="count++">+1</button>
  </div>
</template>

<script>
+import { ref } from '@vue/composition-api'
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
+  setup() {
+    const count = ref(0)
+    return { count}
+  }
}
</script>
```



### 08-vite脚手架

> 目标：了解vite是什么，使用vite创建vue项目

vite是什么：[官方文档](https://cn.vitejs.dev/)

- 它是一个更加轻量（热更新速度快，打包构建速度快）的vue项目脚手架工具。
- 相对于vue-cli它默认安装的插件非常少，随着开发过程依赖增多，需要自己额外配置。
- **所以：** 在单纯学习vue3语法会使用它，后面做项目的时候我们还是使用vue-cli



vite基本使用：

- 创建项目 `npm init vite-app 项目名称` 或者 `yarn create vite-app 项目名称`
- 安装依赖 `npm i` 或者 `yarn`
- 启动项目 `npm run dev` 或者 `yarn dev`



**总结：** vite是什么？

- 基于ES6模块化的脚手架，热更新和打包速度很快。



### 09-vue3简易状态共享

> 目标：通过响应式状态模块，实现简易状态共享

- 状态模块

```js
import { reactive } from "vue";

export default reactive({
  count: 0
})
```

- A组件

```vue
<template>
  <h1>HelloWorld {{store.count}}</h1>
</template>

<script>
import store from "../store";
export default {
  name: "HelloWorld",
  setup() {
    return { store };
  },
};
</script>
```

- B组件

```vue
<template>
  <div>Counter组件 {{store.count}} <button @click="store.count++">+1</button></div>
</template>

<script>
import store from "../store";
export default {
  name: "Counter",
  setup() {
    return { store };
  },
};
</script>
```



注意：

- 这种方式对应大型应用不友好，且不支持SSR (server side render)



### 10-pinia体验

> 目的：体验一下pinia状态管理

https://pinia.vuejs.org/

1）安装pinia插件

```bash
yarn add pinia 
```

2）注册pinia插件  `main.js`

```js
import { createPinia } from 'pinia'
createApp(App).use(createPinia()).mount('#app')
```

3）创建store

`store/counter.js`

```js
import { defineStore } from "pinia";

export default defineStore("counter", {
  // 状态
  state() {
    return {
      count: 0,
    };
  },
  // mutations + actions 函数，可以执行异步和同步操作
  actions: {
    increment() {
      this.count++;
    },
  },
  // 计算属性
  getters: {
    doubleCount() {
      return this.count * 2;
    },
  },
});

```

4）组件使用 `app.vue`

```vue
<template>
  <div>
    <p>{{store.count}}</p>
    <p>{{store.doubleCount}}</p>
    <button @click="store.increment">+1</button>
  </div>
</template>

<script>
import useCounterStore from './store/counter'
export default {
  name: 'App',
  setup () {
    const store = useCounterStore()
    return { store }
  }
}
</script>
```



总结：

- pinia是趋势还可以，vue3 + TS + pinia 组合开发是不错的选择。



### 11-前端mock

> 目的：体验前端mock接口数据

http://mockjs.com/

1）安装

```bash
yarn add axios mockjs
```

2）发送请求 `App.vue`

```js
import axios from "axios";
export default {
  name: "App",
  setup() {
    axios
      .get("/list")
      .then((data) => {
        console.log(data);
      })
      .catch((e) => {
        console.log(e);
      });
  },
};
```

3）mock数据 `mock/index.js`

```js
import Mock from "mockjs";

Mock.mock("/list", () => {
  const list = [];
  for (let i = 0; i < 10; i++) {
    list.push({
      id: Mock.mock('@id'),
      name: Mock.mock('@cname'),
      age: Mock.mock('@integer(20,30)'),
      city: Mock.mock('@city(true)'),
      picture: Mock.mock('@image')
    });
  }
  return {
    message: "获取数据成功",
    result: list,
  };
});
```

4）使用mock `main.js`

```js
import './mock'
```



总结：

- 前期开发后台接口没更上，可以先mock数据，开发完毕注释导入的mock文件即可。



### 12-steup异步写法

> steup使用async后，组件的用法

https://v3.cn.vuejs.org/guide/migration/suspense.html#%E4%BB%8B%E7%BB%8D

开发小兔鲜的时候：

- setup 函数不能是异步函数，因为写成异步之后使用方式会变。
- 原因：
  - 如果你在setup中使用 await 阻塞程序，是有耗时的
  - setup返回的数据，是组件渲染模板的时候需要使用的
  - 相对于阻塞了组件的初始化

steup异步之后组件：

组件：

```vue
<template>
  <table>
    <tr>
      <th>ID</th>
      <th>姓名</th>
      <th>年龄</th>
      <th>籍贯</th>
      <th>头像</th>
    </tr>
    <tr v-for="item in list" :key="item.id">
      <td>{{item.id}}</td>
      <td>{{item.name}}</td>
      <td>{{item.age}}</td>
      <td>{{item.city}}</td>
      <td>{{item.avatar}}</td>
    </tr>
  </table>
</template>

<script>
import { ref } from 'vue'
import axios from 'axios'
export default {
  name: 'User',
  async setup () {
    const list = ref([])
    const ret = await axios.get('/list')
    list.value = ret.data.result
    return { list }
  }
}
</script>

<style>

</style>
```

使用

```vue
<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <Suspense>
    <template #default >
      <User />
    </template>
    <template #fallback >
      <div>正在加载...</div>
    </template>
  </Suspense>
</template>

<script>
import User from './components/User.vue'
export default {
  name: "App",
  components: {User}
};
</script>

```









