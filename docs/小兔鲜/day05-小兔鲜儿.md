---
title: day05-小兔鲜儿
---



## 商品详情

### 01-商品详情-组件基础

> 目标：完成路由配置和组件准备，渲染面包屑

大致步骤：

- 组件准备
- 路由配置
- 数据获取
- 面包屑渲染，加载中效果



具体代码：

- 组件基础 `views/goods/index.vue`

```vue
<template>
  <div class="xtx-goods-page">
    <div class="container">
      <XtxBread>
        <XtxBreadItem to="/">首页</XtxBreadItem>
        <XtxBreadItem to="/">类目</XtxBreadItem>
        <XtxBreadItem>商品名称</XtxBreadItem>
      </XtxBread>
    </div>
  </div>
</template>

<script>
export default {
  name: "xtx-goods-page",
};
</script>

<style lang="less" scoped>
.loading {
  height: 600px;
  border-top: 72px solid #f5f5f5;
  background: #fff url(../../assets/load.gif) no-repeat center / 80px 80px;
}
</style>  
```

- 路由规则 `router/index.js`

```js
const Goods = () => import("@/views/goods/index");
```

```diff
    children: [
      { path: "/", component: Home },
      { path: "/category/:id", component: Category },
      { path: "/search", component: Search },
+      { path: "/product/:id", component: Goods },
    ],
```

- 数据获取 

`api/goods.js`

```js
// 商品详情
export const getGoods = (id) => request("/goods", "get", { id });
```

`views/goods/index.vue`

```js
import { onMounted, ref } from "vue";
import { getGoods } from "@/api/goods";
import { onBeforeRouteUpdate, useRoute } from "vue-router";
export default {
  name: "xtx-goods-page",
  setup() {
    const route = useRoute();
    const goods = ref({});
    // 加载数据函数
    const loadData = async (id) => {
      const data = await getGoods(id);
      goods.value = data.result;
    };
    // 初始化加载
    onMounted(() => loadData(route.params.id));
    // 将来切换商品加载
    onBeforeRouteUpdate((to, from, next) => {
      loadData(to.params.id);
      next();
    });
    return { goods };
  },
};
```

- 面包屑渲染

```vue
 <div class="xtx-goods-page">
    <div v-if="loading" class="container">
      <div class="loading"></div>
    </div>
    <div v-else class="container">
      <XtxBread>
        <XtxBreadItem to="/">首页</XtxBreadItem>
        <XtxBreadItem :to="`/category/${goods.categories[1].id}`">
          {{ goods.categories[1].name }}
        </XtxBreadItem>
        <XtxBreadItem>{{ goods.name }}</XtxBreadItem>
      </XtxBread>
   </div>
</div>   
```



### 02-商品详情-商品信息区块

> 目标：完成商品图片，基本信息展示

大致步骤：

- 图片预览组件
- 销售统计组件
- 商品信息组件
- 商品组件使用以上两个组件
- 渲染，城市组件使用



落地代码：

- 销售统计组件 `goods/components/goods-sales.vue`

```vue
<template>
  <ul class="goods-sales">
    <li>
      <p>销量人气</p>
      <p>200+</p>
      <p><i class="iconfont icon-task-filling"></i>销量人气</p>
    </li>
    <li>
      <p>商品评价</p>
      <p>400+</p>
      <p><i class="iconfont icon-comment-filling"></i>查看评价</p>
    </li>
    <li>
      <p>收藏人气</p>
      <p>600+</p>
      <p><i class="iconfont icon-favorite-filling"></i>收藏商品</p>
    </li>
    <li>
      <p>品牌信息</p>
      <p>苏宁电器</p>
      <p><i class="iconfont icon-dynamic-filling"></i>品牌主页</p>
    </li>
  </ul>
</template>

<script>
export default {
  name: "GoodsSales",
};
</script>

<style scoped lang="less">
.goods-sales {
  display: flex;
  width: 400px;
  align-items: center;
  text-align: center;
  height: 140px;
  li {
    flex: 1;
    position: relative;
    ~ li::after {
      position: absolute;
      top: 10px;
      left: 0;
      height: 60px;
      border-left: 1px solid #e4e4e4;
      content: "";
    }
    p {
      &:first-child {
        color: #999;
      }
      &:nth-child(2) {
        color: var(--price-color);
        margin-top: 10px;
      }
      &:last-child {
        color: #666;
        margin-top: 10px;
        i {
          color: var(--xtx-color);
          font-size: 14px;
          margin-right: 2px;
        }
        &:hover {
          color: var(--xtx-color);
          cursor: pointer;
        }
      }
    }
  }
}
</style>
```

- 商品信息组件 `goods/components/goods-info.vue`

```vue
<template>
  <p class="g-name">2件装 粉釉花瓣心意点缀 点心盘*2 碟子盘子</p>
  <p class="g-desc">花瓣造型干净简约 多功能使用堆叠方便</p>
  <p class="g-price">
    <span>108.00</span>
    <span>199.00</span>
  </p>
  <div class="g-service">
    <dl>
      <dt>促销</dt>
      <dd>12月好物放送，App领券购买直降120元</dd>
    </dl>
    <dl>
      <dt>配送</dt>
      <dd>至 </dd>
    </dl>
    <dl>
      <dt>服务</dt>
      <dd>
        <span>无忧退货</span>
        <span>快速退款</span>
        <span>免费包邮</span>
        <a href="javascript:;">了解详情</a>
      </dd>
    </dl>
  </div>
</template>

<script>
export default {
  name: "GoodsInfo",
};
</script>

<style lang="less" scoped>
.g-name {
  font-size: 22px;
}
.g-desc {
  color: #999;
  margin-top: 10px;
}
.g-price {
  margin-top: 10px;
  span {
    &::before {
      content: "¥";
      font-size: 14px;
    }
    &:first-child {
      color: var(--price-color);
      margin-right: 10px;
      font-size: 22px;
    }
    &:last-child {
      color: #999;
      text-decoration: line-through;
      font-size: 16px;
    }
  }
}
.g-service {
  background: #f5f5f5;
  width: 500px;
  padding: 20px 10px 0 10px;
  margin-top: 10px;
  dl {
    padding-bottom: 20px;
    display: flex;
    align-items: center;
    dt {
      width: 50px;
      color: #999;
    }
    dd {
      color: #666;
      &:last-child {
        span {
          margin-right: 10px;
          &::before {
            content: "•";
            color: var(--xtx-color);
            margin-right: 2px;
          }
        }
        a {
          color: var(--xtx-color);
        }
      }
    }
  }
}
</style>
```

- 使用以上两个组件 `goods/index.vue`

```js
import GoodsSales from "./components/goods-sales.vue";
import GoodsInfo from "./components/goods-info.vue";
export default {
  name: "xtx-goods-page",
  components: { GoodsSales, GoodsInfo },
```



```diff
      <!-- 商品信息 -->
      <div class="goods-wrapper">
        <div class="media">
+          <XtxImageView :images="goods.mainPictures"></XtxImageView>
+          <GoodsSales />
        </div>
        <div class="spec">
+          <GoodsInfo :goods="goods" />
        </div>
      </div>
```

```less
.goods-wrapper {
  display: flex;
  background: #fff;
  padding: 40px;
  .media {
    width: 480px;
    margin-right: 40px;
  }
}
```

- 渲染，城市组件使用

```js
import { ref } from "vue";
export default {
  name: "GoodsInfo",
  props: {
    goods: {
      type: Object,
      default: () => ({}),
    },
  },
  setup() {
    // 城市组件默认地区
    const fullLocation = ref("北京 北京市 东城区");
    const change = (ret) => {
      // 选择地区后修改
      fullLocation.value = ret.fullLocation;
    };
    return { fullLocation, change };
  },
};
```

```vue
  <p class="g-name">{{ goods.name }}</p>
  <p class="g-desc">{{ goods.desc }}</p>
  <p class="g-price">
    <span>{{ goods.price }}</span>
    <span>{{ goods.oldPrice }}</span>
  </p>
```

```vue
<XtxCity :fullLocation="fullLocation" @change="change" />
```







### 03-商品详情-SKU说明

> 目标：理解电商SPU和SKU概念，测试SKU组件数据

大致步骤：

- 理解SPU和SKU概念
- 使用SKU组件
- 使用数量组件
- 使用按钮组件



落地代码：

- 理解SPU和SKU概念
  - SPU = Standard Product Unit （标准产品单位）如：  iphone13    Redmi 1A    iphone13 pro
  - SKU = Stock keeping Unit  (库存量单位)   如： iphone13(64G+金色)  iphone13(64G+银色) 

![image-20220323173301700](https://wuxiaohui-1254415986.cos.ap-nanjing.myqcloud.com/uPic/image-20220323173301700.png)

- 使用SKU组件

```vue
          <!-- sku组件 -->
          <XtxSku :goods="goods" @change="changeSku"></XtxSku>
```

```js
    // 选择SKU
    const changeSku = (sku) => {
      console.log(sku);
    };
    return { goods, loading, changeSku };
```

====== 打印sku如下

```js
{
    // sku的ID，现价，原价，库存，属性集合
    "skuId": "300485161",
    "price": "259.00",
    "oldPrice": "279.00",
    "inventory": 9857,
    "specsText": "颜色：白粉/紫 尺码：22"
}
```

- 使用数量组件

```vue
          <!-- 数量 -->
          <XtxNumbox :min="1" v-model="count" label="数量" />
```

```js
    // 数量
    const count = ref(1);
    return { goods, loading, changeSku, count };
```

- 使用按钮组件

```vue
          <!-- 按钮 -->
          <XtxButton type="primary" style="margin-top: 20px; margin-left: 60px">
            加入购物车
          </XtxButton>
```



**总结：**

- 加入购物车，去下订单，去支付用商品的SKUID





### 04-商品详情-商品底部区块

> 目标：展示商品详情，展示每日热榜

大致步骤：

- 底部组件准备和使用
- 渲染组件



落地代码：

- 准备底部组件 `goods/components/goods-footer.vue`

```vue
<template>
  <!-- 商品详情 -->
  <div class="goods-footer">
    <div class="left">
      <div class="goods-detail">
        <div class="head">商品详情</div>
        <div class="content">
          <img
            src="https://yanxuan-item.nosdn.127.net/38e2952b2ad8ce881860e0416b07d6ce.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
    <div class="right">
      <div class="goods-hot">
        <h3>每日热榜</h3>
        <GoodsItem v-for="item in 4" :key="item" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "GoodsFooter",
};
</script>
<style lang="less" scoped>
.goods-footer {
  display: flex;
  margin-top: 20px;
  .left {
    width: 940px;
    margin-right: 20px;
  }
  .right {
    width: 280px;
    min-height: 1000px;
  }
}
.goods-detail {
  background: #fff;
  .head {
    height: 70px;
    line-height: 70px;
    font-size: 18px;
    padding: 0 40px;
    border-bottom: 1px solid #f5f5f5;
  }
  .content {
    padding: 40px;
    img {
      width: 100%;
    }
  }
}
.goods-hot {
  h3 {
    height: 70px;
    background: var(--help-color);
    color: #fff;
    font-size: 18px;
    line-height: 70px;
    padding-left: 25px;
    margin-bottom: 10px;
    font-weight: normal;
  }
  ::v-deep .goods-item {
    background: #fff;
    width: 100%;
    margin-bottom: 10px;
    img {
      width: 200px;
      height: 200px;
    }
    p {
      margin: 0 10px;
    }
    &:hover {
      transform: none;
      box-shadow: none;
    }
  }
}
</style>

```

`goods/index.vue`

```diff
+      <!-- 商品底部 -->
+      <GoodsFooter :goods="goods" />
    </div>
  </div>
</template>
```

```diff
+import GoodsFooter from "./components/goods-footer.vue";
export default {
  name: "xtx-goods-page",
+  components: { GoodsSales, GoodsInfo, GoodsFooter },
```



- 渲染组件

```vue
<template>
  <!-- 商品详情 -->
  <div class="goods-footer">
    <div class="left">
      <div class="goods-detail">
        <div class="head">商品详情</div>
        <div class="content">
          <img v-for="(img, i) in goods.details.pictures" :src="img" :key="i" />
        </div>
      </div>
    </div>
    <div class="right">
      <div class="goods-hot">
        <h3>每日热榜</h3>
        <GoodsItem
          v-for="item in goods.hotByDay"
          :key="item.id"
          :goods="item"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "GoodsFooter",
  props: {
    goods: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>
```



**总结：**

- 商品的图片一般是分割开，拼在一起



## 登录模块

### 05-登录-组件基础

> 目标：配置路由和基准组件布局

大致步骤：

- 路由与组件
- 组件基础布局



具体代码：

**1）路由与组件**

组件：`src/views/login/index.vue`

```vue
<template>
  <div class="xtx-login-page">
    Login
  </div>
</template>
<script>
export default {
  name: 'xtx-login-page'
}
</script>
<style scoped lang="less"></style>
```

路由：`src/router/index.js` 一级路由规则

```diff
+const Login = () => import('@/views/login/index')
...
const routes = [
	...
+  { path: '/login', component: Login }
]
```

链接：`src/components/app-topnav.vue`

```vue
<li><RouterLink to="/login">请先登录</RouterLink></li>
```



**2）组件基础布局**

- 头部组件 `src/views/login/components/login-header.vue`

```vue
<template>
  <header class="login-header">
    <div class="container">
      <h1 class="logo"><RouterLink to="/">小兔鲜</RouterLink></h1>
      <h3 class="sub"><slot /></h3>
      <RouterLink class="entry" to="/">
        进入网站首页
        <i class="iconfont icon-angle-right"></i>
        <i class="iconfont icon-angle-right"></i>
      </RouterLink>
    </div>
  </header>
</template>

<script>
export default {
  name: 'LoginHeader'
}
</script>

<style scoped lang='less'>
.login-header {
  background: #fff;
  border-bottom: 1px solid #e4e4e4;
  .container {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
  }
  .logo {
    width: 200px;
    a {
      display: block;
      height: 132px;
      width: 100%;
      text-indent: -9999px;
      background: url(../../../assets/logo.png) no-repeat center 18px / contain;
    }
  }
  .sub {
    flex: 1;
    font-size: 24px;
    font-weight: normal;
    margin-bottom: 38px;
    margin-left: 20px;
    color: #666;
  }
  .entry {
    width: 120px;
    margin-bottom: 38px;
    font-size: 16px;
    i {
      font-size: 14px;
      color: var(--xtx-color);
      letter-spacing: -5px;
    }
  }
}
</style>
```

- 底部组件 `src/views/login/components/login-footer.vue`

```vue
<template>
  <footer class="login-footer">
    <div class='container'>
      <p>
        <a href="javascript:;">关于我们</a>
        <a href="javascript:;">帮助中心</a>
        <a href="javascript:;">售后服务</a>
        <a href="javascript:;">配送与验收</a>
        <a href="javascript:;">商务合作</a>
        <a href="javascript:;">搜索推荐</a>
        <a href="javascript:;">友情链接</a>
      </p>
      <p>CopyRight &copy; 小兔鲜儿</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'LoginFooter'
}
</script>

<style scoped lang='less'>
.login-footer {
  padding: 30px 0 50px;
  background: #fff;
  p {
    text-align: center;
    color: #999;
    padding-top: 20px;
    a {
      line-height: 1;
      padding:0 10px;
      color: #999;
      display: inline-block;
      ~ a {
        border-left: 1px solid #ccc;
      }
    }
  }
}
</style>
```

- 主体组件 `src/views/login/index.vue`

```vue
<template>
  <LoginHeader>欢迎登录</LoginHeader>
  <section class="login-section">
    <div class="wrapper">
      <nav>
        <a href="javascript:;" class="active">账户登录</a>
        <a href="javascript:;">扫码登录</a>
      </nav>
    </div>
  </section>
  <LoginFooter />
</template>

<script>
import LoginHeader from "./components/login-header";
import LoginFooter from "./components/login-footer";
export default {
  name: "xtx-login-page",
  components: {
    LoginHeader,
    LoginFooter,
  },
};
</script>

<style scoped lang="less">
.login-section {
  background: url(../../assets/login-bg.png) no-repeat center / cover;
  height: 488px;
  position: relative;
  .wrapper {
    width: 380px;
    background: #fff;
    min-height: 400px;
    position: absolute;
    left: 50%;
    top: 54px;
    transform: translate3d(100px, 0, 0);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    nav {
      height: 55px;
      border-bottom: 1px solid #f5f5f5;
      display: flex;
      padding: 0 40px;
      text-align: right;
      align-items: center;
      a {
        flex: 1;
        line-height: 1;
        display: inline-block;
        font-size: 18px;
        position: relative;
        &:first-child {
          border-right: 1px solid #f5f5f5;
          text-align: left;
        }
        &.active {
          color: var(--xtx-color);
          font-weight: bold;
        }
      }
    }
  }
}
</style>
```





### 06-登录-表单组件

> 目的：完成表单布局和帐号登录，短信登录切换。

**大致步骤：**

- 组件基础结构
- 使用组件
- 交互效果
  - 通过isMsgLogin切换短信登录
  - 通过form.isAgree绑定同意协议



**落的代码：**

**1）**定义组件 `src/views/login/component/login-form.vue`

```vue
<template>
  <div class="login-form">
    <div class="toggle">
      <a href="javascript:;">
        <i class="iconfont icon-user"></i> 使用账号登录
      </a>
      <a href="javascript:;">
        <i class="iconfont icon-msg"></i> 使用短信登录
      </a>
    </div>
    <div class="form">
      <div class="form-item">
        <div class="input">
          <i class="iconfont icon-user"></i>
          <input type="text" placeholder="请输入账号" />
        </div>
        <!-- <div class="error"><i class="iconfont icon-warning" />请输入手机号</div> -->
      </div>
      <div class="form-item">
        <div class="input">
          <i class="iconfont icon-lock"></i>
          <input type="password" placeholder="请输入密码" />
        </div>
      </div>
      <div class="form-item">
        <div class="input">
          <i class="iconfont icon-user"></i>
          <input type="text" placeholder="请输入手机号" />
        </div>
      </div>
      <div class="form-item">
        <div class="input">
          <i class="iconfont icon-code"></i>
          <input type="password" placeholder="请输入验证码" />
          <span class="code">发送验证码</span>
        </div>
      </div>
      <div class="form-item">
        <div class="agree">
          <XtxCheckbox />
          <span>我已同意</span>
          <a href="javascript:;">《隐私条款》</a>
          <span>和</span>
          <a href="javascript:;">《服务条款》</a>
        </div>
      </div>
      <a href="javascript:;" class="btn">登录</a>
    </div>
    <div class="action">
      <div class="url">
        <a href="javascript:;">忘记密码</a>
        <a href="javascript:;">免费注册</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "LoginForm",
};
</script>
<style lang="less" scoped>
// 账号容器
.login-form {
  .toggle {
    padding: 15px 40px;
    text-align: right;
    a {
      color: var(--xtx-color);
      i {
        font-size: 14px;
      }
    }
  }
  .form {
    padding: 0 40px;
    &-item {
      margin-bottom: 28px;
      .input {
        position: relative;
        height: 36px;
        > i {
          width: 34px;
          height: 34px;
          background: #cfcdcd;
          color: #fff;
          position: absolute;
          left: 1px;
          top: 1px;
          text-align: center;
          line-height: 34px;
          font-size: 18px;
        }
        input {
          padding-left: 44px;
          border: 1px solid #cfcdcd;
          height: 36px;
          line-height: 36px;
          width: 100%;
          &.error {
            border-color: var(--price-color);
          }
          &.active,
          &:focus {
            border-color: var(--xtx-color);
          }
        }
        .code {
          position: absolute;
          right: 1px;
          top: 1px;
          text-align: center;
          line-height: 34px;
          font-size: 14px;
          background: #f5f5f5;
          color: #666;
          width: 90px;
          height: 34px;
          cursor: pointer;
        }
      }
      > .error {
        position: absolute;
        font-size: 12px;
        line-height: 28px;
        color: var(--price-color);
        i {
          font-size: 14px;
          margin-right: 2px;
        }
      }
    }
    .agree {
      a {
        color: #069;
      }
    }
    .btn {
      display: block;
      width: 100%;
      height: 40px;
      color: #fff;
      text-align: center;
      line-height: 40px;
      background: var(--xtx-color);
      &.disabled {
        background: #cfcdcd;
      }
    }
  }
  .action {
    padding: 20px 40px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    .url {
      a {
        color: #999;
        margin-left: 10px;
      }
    }
  }
}
</style>
```

**2）**使用组件 `src/views/login/index.vue`

```diff
+<LoginForm v-if="activeName==='account'"></LoginForm>
+import LoginForm from './components/login-form'
import { ref } from 'vue'
export default {
  name: 'PageLogin',
  components: {
    LoginHeader,
    LoginFooter,
+    LoginForm
  },
```

**3）**交互效果

```vue
      <a @click="isMsgLogin = false" href="javascript:;" v-if="isMsgLogin">
        <i class="iconfont icon-user"></i> 使用账号登录
      </a>
      <a @click="isMsgLogin = true" href="javascript:;" v-else>
        <i class="iconfont icon-msg"></i> 使用短信登录
      </a>
```

```diff
+      <template v-if="!isMsgLogin">
        <div class="form-item">//...</div>
        <div class="form-item">//...</div>
      </template>
+      <template v-else>
        <div class="form-item">//...</div>
        <div class="form-item">//...</div>
      </template>
      
```

```vue
<XtxCheckbox v-model="form.isAgree" />
```

```js
import { reactive, ref } from 'vue'
export default {
  name: 'LoginForm',
  setup () {
    // 是否短信登录
    const isMsgLogin = ref(false)
    // 表单信息对象
    const form = reactive({
      isAgree: true
    })
    return { isMsgLogin, form }
  }
}
```





### 07-登录-表单校验

> 目的：表单校验，兜底校验

大致步骤：

- 知道 `vee-validate` 插件基本使用
- 使用 `vee-validate` 插件
  - 安装
  - 定义表单数据
  - 定义校验规则
  - 表单项校验
    - 1.使用 `Form` 组件添加校验规则
    - 2.使用 `Field `组件替换元素表单元素，双向数据绑定
    - 3.使用 `ErrorMessage` 组件显示错误提示
  - 切换表单重置表单和数据
  - 兜底校验



具体落地：

- 知道 `vee-validate` 插件基本使用

```js
// 1. 定义form表单数据对象
// 2. 定义form表单校验规则对象
// 3. from表单绑定校验规则对象
// 4. 表单元素field双向绑定form表单数据对象的属性，name属性指定校验规则
// 5. 错误组件显示错误提示
```

- 使用 `vee-validate` 插件

  - 安装

  ```bash
  yarn add vee-validate@4.0.3
  ```

  - 定义表单数据

  ```js
      // 表单信息对象
      const form = ref({
        isAgree: true,
        mobile: null,
        account: null,
        password: null,
        code: null,
      });
  ```

  

  - 定义校验规则  `utils/schema.js`

  ```js
  // 定义校验规则提供给vee-validate组件使用
  export default {
    // 校验account
    account(value) {
      // value是将来使用该规则的表单元素的值
      // 1. 必填
      // 2. 6-20个字符，需要以字母开头
      // 如何反馈校验成功还是失败，返回true才是成功，其他情况失败，返回失败原因。
      if (!value) return "请输入用户名";
      if (!/^[a-zA-Z]\w{5,19}$/.test(value)) return "字母开头且6-20个字符";
      return true;
    },
    password(value) {
      if (!value) return "请输入密码";
      if (!/^\w{6,24}$/.test(value)) return "密码是6-24个字符";
      return true;
    },
    mobile(value) {
      if (!value) return "请输入手机号";
      if (!/^1[3-9]\d{9}$/.test(value)) return "手机号格式错误";
      return true;
    },
    code(value) {
      if (!value) return "请输入验证码";
      if (!/^\d{6}$/.test(value)) return "验证码是6个数字";
      return true;
    },
    isAgree(value) {
      if (!value) return "请勾选同意用户协议";
      return true;
    },
  };
  ```

  - 使用 `Form` 组件添加校验规则

  ```js
  import { Form} from "vee-validate";
  ```

  ```js
  const { account, password, mobile, code, isAgree } = schema;
  const formSchema = { account, password, mobile, code, isAgree };
  return { isMsgLogin, form, formSchema };
  ```

  ```vue
  <Form :validation-schema="formSchema" autocomplete="off">
  ```

  - 使用 `Field `组件替换元素表单元素，双向数据绑定

  ```js
  import { Field } from "vee-validate";
  ```

  ```vue
                <Field
                  v-model="form.account"
                  name="account"
                  type="text"
                  placeholder="请输入账号"
                />
  ```

  ```vue
                <Field
                  v-model="form.password"
                  name="password"
                  type="password"
                  placeholder="请输入密码"
                />
  ```

  ```vue
                <Field
                  v-model="form.mobile"
                  name="mobile"
                  type="text"
                  placeholder="请输入手机号"
                />
  ```

  ```vue
                <Field
                  v-model="form.code"
                  name="code"
                  type="text"
                  placeholder="请输入验证码"
                />
  ```

  ```vue
  <!-- 自定组件：as XtxCheckbox 指定渲染的组件 -->
  <Field name="isAgree" as="XtxCheckbox" v-model="form.isAgree" />
  ```

  - 使用 `ErrorMessage` 组件显示错误提示

  ```vue
              <ErrorMessage name="account" v-slot="{ message }">
                <div class="error" v-if="message">
                  <i class="iconfont icon-warning" />{{ message }}
                </div>
              </ErrorMessage>
  ```

  ```vue
              <ErrorMessage name="password" v-slot="{ message }">
                <div class="error" v-if="message">
                  <i class="iconfont icon-warning" />{{ message }}
                </div>
              </ErrorMessage>
  ```

  ```vue
              <ErrorMessage name="mobile" v-slot="{ message }">
                <div class="error" v-if="message">
                  <i class="iconfont icon-warning" />{{ message }}
                </div>
              </ErrorMessage>
  ```

  ```vue
              <ErrorMessage name="code" v-slot="{ message }">
                <div class="error" v-if="message">
                  <i class="iconfont icon-warning" />{{ message }}
                </div>
              </ErrorMessage>
  ```

  ```vue
            <ErrorMessage name="isAgree" v-slot="{ message }">
              <div class="error" v-if="message">
                <i class="iconfont icon-warning" />{{ message }}
              </div>
            </ErrorMessage>
  ```

  - 切换表单重置表单和数据

  ```js
      const formCom = ref(null);
      watch(isMsgLogin, () => {
        form.value = {
          isAgree: true,
          mobile: null,
          account: null,
          password: null,
          code: null,
        };
        formCom.value.resetForm();
      });
  		// ...
  		return { isMsgLogin, form, formSchema, formCom };
  ```

  - 兜底校验

  ```js
      const submit = async () => {
        const valid = await formCom.value.validate();
        console.log(valid);
      }  
      // ...
  		return { isMsgLogin, form, formSchema, formCom, submit};
  ```

  ```vue
  <a @click="submit" href="javascript:;" class="btn">登录</a>
  ```

  



### 08-登录-账号登录

> 目的：使用账号密码登录

大致步骤：

- 定义账号登录API函数
- 判断校验通过，且是账号登录，发请求登录
  - 成功后，存入vuex和本地
  - 失败后，提示错误



落地代码：

- 定义账号登录API `api/user.js`

```js
import request from "@/utils/request";

// 账号密码登录
export const userAccountLogin = ({ account, password }) =>
  request("/login", "post", { account, password });
```

- 判断校验通过，且是账号登录，发请求登录

```js
import Message from 'erabbit-ui/packages/components/Message'
```

```js
    const store = useStore();
    const router = useRouter();
    const submit = async () => {
      const valid = await formCom.value.validate();
      console.log(valid);
      if (valid) {
        // 登录
        if (!isMsgLogin.value) {
          try {
            const data = await userAccountLogin(form.value);
            const { id, account, nickname, avatar, token, mobile } =
              data.result;
            store.commit("user/setProfile", {
              id,
              account,
              nickname,
              avatar,
              token,
              mobile,
            });
            router.push("/");
          } catch (e) {
            Message({
              type: "error",
              text: e.response.data.message || "登录失败",
            });
          }
        }
      }
    };
```

消息提示组件

```js
// type: warn 警告  error 错误  success 成功
Message({type: "",text: "提示文字"});
```



### 09-登录-退出登录

> 目的：退出登录，跳转页面

大致步骤：

- 绑定点击
- 清除用户信息，跳转登录



落地代码：

- 绑定点击

```vue
        <template v-if="profile.token">
          <li>
            <a href="javascript:;"><i class="iconfont icon-user"></i>
              {{profile.account}}
            </a>
          </li>
          <li><a @click="logout()" href="javascript:;">退出登录</a></li>
        </template>
```

- 清除用户信息，跳转登录

```diff
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
export default {
  name: 'AppTopnav',
  setup () {
    const store = useStore()
    const profile = computed(() => {
      return store.state.user.profile
    })
+    const router = userRouter()
+    const logout = () => {
+      store.commit('user/setUser',{})
+      router.push('/login')
+    }
+    return { profile, logout}
  }
}
```



### 10-登录-手机号登录（作业）

> 目的：使用手机号和验证码登录

大致步骤：

- 定义接口API函数（手机短信登录，获取短信验证码）
- 发送验证码
- 手机号短信登录 (验证码123456)



落地代码：

- 定义接口API函数（手机短信登录，获取短信验证码） `api/user.js`

```js
// 短信登录
export const userMobileLogin = ({ mobile, code }) => {
  return request("/login/code", "post", { mobile, code });
};

// 获取短信登录验证码
export const userMobileLoginMsg = (mobile) => {
  return request("/login/code", "get", { mobile });
};
```

- 发送验证码

```vue
              <span @click="send" class="code">
                {{ time > 0 ? `${time}秒后发送` : "发送验证码" }}
              </span>
```

```js
import { useIntervalFn } from "@vueuse/core";
```

```js
    // 倒计时
    const time = ref(0);
    const { pause, resume, isActive } = useIntervalFn(
      () => {
        time.value--;
        if (time.value <= 0) {
          pause();
        }
      },
      1000,
      false
    );
```

```js
    // 发短信
    const send = async () => {
      const valid = mobile(form.value.mobile);
      if (valid === true) {
        if (!isActive.value) {
          await userMobileLoginMsg(form.value.mobile);
          Message({ type: "success", text: "发送成功" });
          time.value = 60;
          resume();
        }
      } else {
        formCom.value.setFieldError("mobile", valid);
      }
    };
```

-  短信登录

```js
        // 账号登录
        try {
          let data = null;
          if (!isMsgLogin.value) {
            data = await userAccountLogin(form.value);
          } else {
            data = await userMobileLogin(form.value);
          }
```



