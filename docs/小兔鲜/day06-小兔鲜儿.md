---
title: day06-小兔鲜儿
---



## 本地购物车

### 01-购物车分析

![image-20220324183534428](https://wuxiaohui-1254415986.cos.ap-nanjing.myqcloud.com/uPic/image-20220324183534428.png)



总结：

- 购物车的各种操作都会有两种状态的区分，但是不会在组件中去区分。
- 而是在封装在vuex中的actions中去区分，在组件上只需调用actions即可。
- 在actions中通过user信息去区分登录状态
  - 未登录，通过mutations修改vuex中的数据即可，vuex已经实现持久化，会同步保持在本地。
  - 已登录，通过api接口去服务端操作，响应成功后通过mutations修改vuex中的数据即可，它也会同步在本地。
- actions函数需要改成 async 函数，返回的是promise对象，才可以在组件判断是否操作成功



**注意：**

- 登录后，需要合并本地购物车到服务端。
- 退出后，清空vuex数据也会同步清空本地数据。



### 02-加入购物车

> 目的：完成商品详情的添加购物车操作，支持未登录状态。



大致步骤：

- 约定本地存储的信息内容
- 编写mutaions添加购物车逻辑
- 编写actions进行添加操作
- 在商品详情页实现添加逻辑



落地代码：

- vuex中的修改数据，获取数据 `src/store/modules/cart.js`

```js
  // 本地：id skuId name picture price nowPrice count attrsText selected stock isEffective
  // 线上：比上面多 isCollect 有用 discount 无用 两项项信息
  mutations: {
    insertCart (state, goods) {
      const sameIndex = state.list.findIndex(item => item.skuId === goods.skuId)
      // 逻辑：有相同的给goods累加数量，删除相同skuId的商品
      if (sameIndex >= 0) {
        goods.count = state.list[sameIndex].count + goods.count
        state.list.splice(sameIndex, 1)
      }
      state.list.unshift(goods)
    }
  },
  actions: {
    async insertCart (ctx, goods) {
      if (ctx.rootState.user.profile.token) {
        // 已登录 TODO

      } else {
        // 未登录
        ctx.commit('insertCart', goods)
      }
    }
  }
```

- 商品详情点击加入购物车 `src/views/goods/index.vue`

```js
    // sku改变时候触发
    const changeSku = (sku) => {
      if (sku.skuId) {
        goods.value.price = sku.price
        goods.value.oldPrice = sku.oldPrice
        goods.value.inventory = sku.inventory
        count.value = 1;
        currSku.value = sku
      } else {
        currSku.value = null
      }
    }
    // 选择的数量
    const count = ref(1)
    // 加入购物车逻辑
   const currSku = ref(null)
   const store = useStore()
   const insertCart = () => {
     if (!currSku.value) {
       return Message({text:'请选择商品规格'})
     }
     if (count.value > goods.inventory) {
       return Message({text:'库存不足'})
     }
     store.dispatch('cart/insertCart', {
       id: goods.value.id,
       skuId: currSku.value.skuId,
       name: goods.value.name,
       picture: goods.value.mainPictures[0],
       price: currSku.value.price,
       nowPrice: currSku.value.price,
       count: count.value,
       attrsText: currSku.value.specsText,
       selected: true,
       isEffective: true,
       stock: currSku.value.inventory
     }).then(() => {
       Message({text:'加入购物车成功', type:'success'})
     }).catch(() => {
        Message({ type: "error", text: "加入购物车失败" });
     });
   }
   return { goods, changeSku, count, insertCart }

```





### 03-头部购物车-基础布局

> 目的：在网站头部购物车图片处，鼠标经过展示购物车列表。

![image-20220324190837632](https://wuxiaohui-1254415986.cos.ap-nanjing.myqcloud.com/uPic/image-20220324190837632.png)

大致步骤：

- 提取头部购物车组件，完成基础布局。
- 通过getters返回，有效商品总数，和有效商品列表，有效商品总金额。
- 渲染组件。



落的代码：

- 新建组件 `src/components/app-header-cart.vue`

```vue
<template>
  <div class="cart">
    <a class="curr" href="#"> <i class="iconfont icon-cart"></i><em>2</em> </a>
  </div>
</template>
<script>
export default {
  name: 'AppHeaderCart'
}
</script>
<style scoped lang="less">
.cart {
  width: 50px;
  .curr {
    height: 32px;
    line-height: 32px;
    text-align: center;
    position: relative;
    display: block;
    .icon-cart {
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
</style>
```

- 使用组件，和**删除迁移过的代码** `src/components/app-header.vue`

```diff
      <div class="search">
        <i class="iconfont icon-search"></i>
        <input type="text" placeholder="搜一搜">
      </div>
+      <AppHeaderCart />
    </div>
  </header>
</template>

<script>
import AppHeaderNav from './app-header-nav'
+import AppHeaderCart from './app-header-cart'
export default {
  name: 'AppHeader',
+  components: { AppHeaderNav, AppHeaderCart }
}
</script>
```

- 基础布局和弹出效果  `src/components/app-header-cart.vue`

```vue
<template>
  <div class="cart">
    <a class="curr" href="javascript:;">
      <i class="iconfont icon-cart"></i><em>2</em>
    </a>
    <div class="layer">
      <div class="list">
        <div class="item" v-for="i in 4" :key="i">
          <RouterLink to="">
            <img src="https://yanxuan-item.nosdn.127.net/ead73130f3dbdb3cabe1c7b0f4fd3d28.png" alt="">
            <div class="center">
              <p class="name ellipsis-2">和手足干裂说拜拜 ingrams手足皲裂修复霜</p>
              <p class="attr ellipsis">颜色：修复绿瓶 容量：150ml</p>
            </div>
            <div class="right">
              <p class="price">&yen;45.00</p>
              <p class="count">x2</p>
            </div>
          </RouterLink>
          <i class="iconfont icon-close-new"></i>
        </div>
      </div>
      <div class="foot">
        <div class="total">
          <p>共 3 件商品</p>
          <p>&yen;135.00</p>
        </div>
        <XtxButton type="plain">去购物车结算</XtxButton>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'AppHeaderCart'
}
</script>
<style scoped lang="less">
.cart {
  width: 50px;
  position: relative;
  z-index: 600;
  .curr {
    height: 32px;
    line-height: 32px;
    text-align: center;
    position: relative;
    display: block;
    .icon-cart {
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
  &:hover {
    .layer {
      opacity: 1;
      transform: none
    }
  }
  .layer {
    opacity: 0;
    transition: all .4s .2s;
    transform: translateY(-200px) scale(1, 0);
    width: 400px;
    height: 400px;
    position: absolute;
    top: 50px;
    right: 0;
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
    background: #fff;
    border-radius: 4px;
    padding-top: 10px;
    &::before {
      content: "";
      position: absolute;
      right: 14px;
      top: -10px;
      width: 20px;
      height: 20px;
      background: #fff;
      transform: scale(0.6,1) rotate(45deg);
      box-shadow: -3px -3px 5px rgba(0,0,0,0.1);
    }
    .foot {
      position: absolute;
      left: 0;
      bottom: 0;
      height: 70px;
      width: 100%;
      padding: 10px;
      display: flex;
      justify-content: space-between;
      background: #f8f8f8;
      align-items: center;
      .total {
        padding-left: 10px;
        color: #999;
        p {
          &:last-child {
            font-size: 18px;
            color: var(--price-color);
          }
        }
      }
    }
  }
  .list {
    height: 310px;
    overflow: auto;
    padding: 0 10px;
    &::-webkit-scrollbar{
      width:10px;
      height:10px;
    }
    &::-webkit-scrollbar-track{
      background: #f8f8f8;
      border-radius: 2px;
    }
    &::-webkit-scrollbar-thumb{
      background: #eee;
      border-radius:10px;
    }
    &::-webkit-scrollbar-thumb:hover{
      background: #ccc;
    }
    .item {
      border-bottom: 1px solid #f5f5f5;
      padding: 10px 0;
      position: relative;
      i {
          position: absolute;
          bottom: 38px;
          right: 0;
          opacity: 0;
          color: #666;
          transition: all .5s;
      }
      &:hover {
        i {
          opacity: 1;
          cursor: pointer;
        }
      }
      a {
        display: flex;
        align-items: center;
        img {
          height: 80px;
          width: 80px;
        }
        .center {
          padding: 0 10px;
          width: 200px;
          .name {
            font-size: 16px;
          }
          .attr {
            color: #999;
            padding-top: 5px;
          }
        }
        .right {
          width: 100px;
          padding-right: 20px;
          text-align: center;
          .price {
            font-size: 16px;
            color: var(--price-color);
          }
          .count {
            color: #999;
            margin-top: 5px;
            font-size: 16px;
          }
        }
      }
    }
  }
}
</style>
```

- 使用getters得到有效商品列表和期种件数

```js
  getters: {
    // 有效商品列表
    validList (state) {
      return state.list.filter(item => item.stock > 0 && item.isEffective)
    },
    // 有效商品件数
    validTotal (state, getters) {
      return getters.validList.reduce((p, c) => p + c.count, 0)
    },
    // 有效商品总金额
    validAmount (state, getters) {
      return getters.validList.reduce((p, c) => p + c.nowPrice * 100 * c.count, 0) / 100
    },
  },
```

- 渲染头部购物车信息

```vue
<template>
  <div class="cart">
    <a class="curr" href="javascript:;">
      <i class="iconfont icon-cart"></i><em>{{$store.getters['cart/validTotal']}}</em>
    </a>
    <div class="layer">
      <div class="list">
        <div class="item" v-for="item in $store.getters['cart/validList']" :key="item.skuId">
          <RouterLink to="">
            <img :src="item.picture" alt="">
            <div class="center">
              <p class="name ellipsis-2">{{item.name}}</p>
              <p class="attr ellipsis">{{item.attrsText}}</p>
            </div>
            <div class="right">
              <p class="price">&yen;{{item.nowPrice}}</p>
              <p class="count">x{{item.count}}</p>
            </div>
          </RouterLink>
          <i class="iconfont icon-close-new"></i>
        </div>
      </div>
      <div class="foot">
        <div class="total">
          <p>共 {{$store.getters['cart/validTotal']}} 件商品</p>
          <p>&yen;{{$store.getters['cart/validAmount']}}</p>
        </div>
        <XtxButton type="plain">去购物车结算</XtxButton>
      </div>
    </div>
  </div>
</template>
```



### 04-头部购物车-商品列表

> 目的：根据本地存储的商品获取最新的库存价格和有效状态。



大致步骤：

- 定义获取最新信息的API
- 定义修改购物车商品信息的mutations
- 定义获取购物车列表信息的actions
- 在头部购物车组件初始化的时候更新列表信息



落的代码：

- 定义获取最新信息的API `src/api/cart.js`

```js
import request from '@/utils/request'

/**
 * 获取新的商品信息
 * @param {String} skuId - 商品SKUID
 * @returns Promise
 */
export const getNewCartGoods = (skuId) => {
  return request(`/goods/stock/${skuId}`, 'get')
}
```

- 定义修改购物车商品信息的mutations   `src/store/module/cart.js`

```js
     // 修改购物车商品
    updateCart (state, goods) {
      // goods中字段有可能不完整，goods有的信息才去修改。
      // 1. goods中必需又skuId，才能找到对应的商品信息
      const updateGoods = state.list.find(item => item.skuId === goods.skuId)
      for (const key in goods) {
        if (goods[key] !== null && goods[key] !== undefined && goods[key] !== '') {
          updateGoods[key] = goods[key]
        }
      }
    }
```

- 定义获取购物车列表信息的actions `src/store/module/cart.js`

```js
    // 获取购物车列表
    async findCartList (ctx) {
        if (ctx.rootState.user.profile.token) {
          // 登录 TODO
        } else {
          // 本地
          // Promise.all() 可以并列发送多个请求，等所有请求成功
          const promiseArr = ctx.state.list.map(item => {
            // 返回接口函数的调用
            return getNewCartGoods(item.skuId)
          })
          const results = await Promise.all(promiseArr);
          results.forEach((item, i) => {
            // list promiseArr results 三者顺一样
            ctx.commit("updateCart", {
              skuId: ctx.state.list[i].skuId,
              ...item.result,
            });
          });
        }
    },
```

- 再头部购物车组件初始化的时候更新列表信息 `src/components/app-header-cart.vue`

```js
  setup () {
    const store = useStore()
    store.dispatch('cart/findCartList')
  }
```





### 05-头部购物车-删除操作

> 目的：完成头部购物车删除操作，支持未登录状态。



大致步骤：

- 编写mutaions删除购物车商品逻辑
- 编写actions进行删除操作
- 在头部购物车进行删除逻辑



落的代码：

- vuex的mutations和actions代码 `src/store/module/cart.js`

```js
  mutations: {
    // ... 省略
    // 删除购物车商品
    deleteCart (state, skuId) {
      const index = state.list.findIndex(item => item.skuId === skuId)
      state.list.splice(index, 1)
    }
  },
```

```js
  actions: {
    // ... 省略
    // 删除购物车商品
    async deleteCart (ctx, skuId) {
        if (ctx.rootState.user.profile.token) {
          // 登录 TODO
        } else {
          // 本地
          ctx.commit('deleteCart', skuId)
          resolve()
        }
    },
```

- 头部组件实现删除逻辑 `src/components/app-header-cart.vue`

```diff
+ 绑定点击事件传入skuId
+<i @click="deleteCart(item.skuId)" class="iconfont icon-close-new"></i>
```

```js
import Message from "erabbit-ui/packages/components/Message";
import { useStore } from "vuex";
export default {
  name: "AppHeaderCart",
  setup() {
    const store = useStore();
    const deleteCart = (skuId) => {
      store
        .dispatch("cart/deleteCart", skuId)
        .then(() => {
          Message({ type: "success", text: "删除成功" });
        })
        .catch(() => {
          Message({ type: "error", text: "删除失败" });
        });
    };
    return { deleteCart };
  },
};
```

- 购物车不弹出的条件

```diff
+ 购物车无商品不显示弹出层,并且不是在购物车页面
+<div class="layer" v-if="$store.getters['cart/validTotal']&&$route.path!=='/cart'">
```





### 06-购物车页面-基础布局

> 目的：完成购物车组件基础布局和路由配置与跳转链接。

![image-20220324190958593](https://wuxiaohui-1254415986.cos.ap-nanjing.myqcloud.com/uPic/image-20220324190958593.png)

大致步骤：

- 完成头部组件，购物车图标，购物车结算按钮，点击跳转购物车路由。商品点击跳转详情的操作。
- 配置购物车路由和组件，完成基础布局。



落的代码：

- 跳转功能  `src/components/app-header-cart.vue`

```vue
    <RouterLink to="/cart" class="curr">
      <i class="iconfont icon-cart"></i><em>{{$store.getters['cart/validTotal']}}</em>
    </RouterLink>
```

```diff
        <div class="item" v-for="item in $store.getters['cart/validList']" :key="item.skuId">
+          <RouterLink :to="`/product/${item.id}`">
            <img :src="item.picture" alt="">
```

```vue
  <XtxButton type="plain" @click="$router.push('/cart')">去购物车结算</XtxButton>
```

- 组件与路由 `src/views/cart/index.vue`

```vue
<template>
  <div class="xtx-cart-page">
    <div class="container">
      <XtxBread>
        <XtxBreadItem to="/">首页</XtxBreadItem>
        <XtxBreadItem>购物车</XtxBreadItem>
      </XtxBread>
      <div class="cart">
        <table>
          <thead>
            <tr>
              <th width="120"><XtxCheckbox>全选</XtxCheckbox></th>
              <th width="400">商品信息</th>
              <th width="220">单价</th>
              <th width="180">数量</th>
              <th width="180">小计</th>
              <th width="140">操作</th>
            </tr>
          </thead>
          <!-- 有效商品 -->
          <tbody>
            <tr v-for="i in 3" :key="i">
              <td><XtxCheckbox /></td>
              <td>
                <div class="goods">
                  <RouterLink to="/"><img src="https://yanxuan-item.nosdn.127.net/13ab302f8f2c954d873f03be36f8fb03.png" alt=""></RouterLink>
                  <div>
                    <p class="name ellipsis">和手足干裂说拜拜 ingrams手足皲裂修复霜</p>
                    <p class="attr">颜色：黑色</p>
                  </div>
                </div>
              </td>
              <td class="tc">
                <p>&yen;200.00</p>
                <p>比加入时降价 <span class="red">&yen;20.00</span></p>
              </td>
              <td class="tc">
                <XtxNumbox />
              </td>
              <td class="tc"><p class="f16 red">&yen;200.00</p></td>
              <td class="tc">
                <p><a href="javascript:;">移入收藏夹</a></p>
                <p><a class="green" href="javascript:;">删除</a></p>
                <p><a href="javascript:;">找相似</a></p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- 操作栏 -->
      <div class="action">
        <div class="batch">
          <XtxCheckbox>全选</XtxCheckbox>
          <a href="javascript:;">删除商品</a>
        </div>
        <div class="total">
          共 7 件商品，已选择 2 件，商品合计：
          <span class="red">¥400</span>
          <XtxButton type="primary">下单结算</XtxButton>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'XtxCartPage',
}
</script>
<style scoped lang="less">
.tc {
  text-align: center;
  .xtx-numbox {
    margin: 0 auto;
    width: 120px;
  }
}
.red {
  color: var(--price-color);
}
.green {
  color: var(--xtx-color);
}
.f16 {
  font-size: 16px;
}
.goods {
  display: flex;
  align-items: center;
  img {
    width: 100px;
    height: 100px;
  }
  > div {
    width: 280px;
    font-size: 16px;
    padding-left: 10px;
    .attr {
      font-size: 14px;
      color: #999;
    }
  }
}
.action {
  display: flex;
  background: #fff;
  margin-top: 20px;
  height: 80px;
  align-items: center;
  font-size: 16px;
  justify-content: space-between;
  padding: 0 30px;
  .xtx-checkbox {
    color: #999;
  }
  .batch {
    a {
      margin-left: 20px;
    }
  }
  .red {
    font-size: 18px;
    margin-right: 20px;
    font-weight: bold;
  }
}
.tit {
  color: #666;
  font-size: 16px;
  font-weight: normal;
  line-height: 50px;
}
.xtx-cart-page {
  .cart {
    background: #fff;
    color: #666;
    table {
      border-spacing: 0;
      border-collapse: collapse;
      line-height: 24px;
      th,td{
        padding: 10px;
        border-bottom: 1px solid #f5f5f5;
        &:first-child {
          text-align: left;
          padding-left: 30px;
          color: #999;
        }
      }
      th {
        font-size: 16px;
        font-weight: normal;
        line-height: 50px;
      }
    }
  }
}
</style>
```



`router/index.js`

```js
const Cart = () => import("@/views/cart/index");
```

```diff
      { path: "/search", component: Search },
      { path: "/product/:id", component: Goods },
+      { path: "/cart", component: Cart },
```





### 07-购物车页面-v-model补充

> 目的：知道vue3中的v-model语法糖原理

大致步骤：

- 组件支持v-model
- 组件支持多个数据双向绑定 v-model:属性



具体代码：

- vue3组件支持v-model
  - Vue2 `v-model` 语法糖原理：`:value="数据"`   `@input="数据=$event"`
  - Vue3  `v-model` 语法糖原理：`:modelValue="数据"`   `@update:modelValue="数据=$event"`

父组件

```vue
<CartTest v-model="count" />
```

```js
  components: { CartTest },
  setup() {
    const count = ref(0);
    return { count };
  },
```

子组件

```vue
<template>
  <div>
    cart-test组件 计数器：{{ modelValue }}
    <button @click="updateCount">+1</button>
  </div>
</template>

<script>
export default {
  name: "CartTest",
  props: {
    modelValue: {
      type: Number,
    },
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    console.log(props.modelValue);
    const updateCount = () => {
      // 通知父组件，让父组件去修改
      emit("update:modelValue", props.modelValue + 1);
    };
    return { updateCount };
  },
};
</script>
```



- 组件支持多个数据双向绑定 v-model:属性
  - vue2中支持多个数据的双向绑定，使用 `v-model` 还可以使用 `.sync`
    - `:abc="数据"`  父子传值  `@update:abc="数据=$event"`   ===> `:abc.sync="数据"`
  - Vue3 移除了 `.sync`  全使用  `v-model:abc="数据"`







### 08-购物车页面-列表展示

> 目的：实现本地状态下的，购物车商品列表展示功能。



大致步骤：

- 准备有效商品列表数据。已选择商品列表数据。已选择商品件数数据。需要支付的金额数据。全选按钮的状态。
- 渲染模版



落的代码：

- 准备数据 `src/store/module/cart.js`

```js
    // ... getters 代码
    // 选中商品列表
    selectedList (state, getters) {
      return getters.validList.filter(item => item.selected)
    },
    // 选中商品件数
    selectedTotal (state, getters) {
      return getters.selectedList.reduce((p, c) => p + c.count, 0)
    },
    // 选中商品总金额
    selectedAmount (state, getters) {
      return getters.selectedList.reduce((p, c) => p + (c.nowPrice * 100 * c.count), 0) / 100
    },
    // 是否全选
    isCheckAll (state, getters) {
      return getters.validList.length === getters.selectedList.length && getters.selectedList.length !== 0
    }
```

- 渲染列表

```diff
      <div class="cart">
        <table>
          <thead>
            <tr>
+              <th width="120"><XtxCheckbox :modelValue="$store.getters['cart/isCheckAll']">全选</XtxCheckbox></th>
              <th width="400">商品信息</th>
              <th width="220">单价</th>
              <th width="180">数量</th>
              <th width="180">小计</th>
              <th width="140">操作</th>
            </tr>
          </thead>
          <!-- 有效商品 -->
          <tbody>
+            <tr v-for="item in $store.getters['cart/validList']" :key="item.skuId">
+              <td><XtxCheckbox :modelValue="item.selected" /></td>
              <td>
                <div class="goods">
+                  <RouterLink :to="`/product/${item.id}`">
+                    <img :src="item.picture" alt="">
                  </RouterLink>
                  <div>
+                    <p class="name ellipsis">{{item.name}}</p>
                    <!-- 选择规格组件 -->
+                    <p class="attr">{{item.attrsText}}</p>
                  </div>
                </div>
              </td>
              <td class="tc">
+                <p>&yen;{{item.nowPrice}}</p>
+                <p v-if="item.price-item.nowPrice>0">
                  比加入时降价
+                  <span class="red">&yen;{{item.price-item.nowPrice}}</span>
                </p>
              </td>
              <td class="tc">
+                <XtxNumbox :modelValue="item.count" />
              </td>
+              <td class="tc"><p class="f16 red">&yen;{{item.nowPrice*100*item.count/100}}</p></td>
              <td class="tc">
                <p><a href="javascript:;">移入收藏夹</a></p>
                <p><a class="green" href="javascript:;">删除</a></p>
                <p><a href="javascript:;">找相似</a></p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- 操作栏 -->
      <div class="action">
        <div class="batch">
+          <XtxCheckbox :modelValue="$store.getters['cart/isCheckAll']">全选</XtxCheckbox>
          <a href="javascript:;">删除商品</a>
        </div>
        <div class="total">
+          共 {{$store.getters['cart/validTotal']}} 件商品，已选择 {{$store.getters['cart/selectedTotal']}} 件，商品合计：
+          <span class="red">¥{{$store.getters['cart/selectedAmount']}}</span>
          <XtxButton type="primary">下单结算</XtxButton>
        </div>
      </div>
```



### 09-购物车页面-单选操作

> 目的：实现本地状态下的，选中商品操作。



大致步骤：

- 使用购物车商品修改信息的mutations（已实现）
- 定义购物车商品选中状态的actions
- 在购物车页面绑定单选的复选框change事件
- 在事件中调用actions的修改函数



落的代码：

- 定义修改购物车商品选中状态的mutations `src/store/module/cart.js`

```diff
    // 修改购物车商品
    updateCart (state, goods) {
      // goods中字段有可能不完整，goods有的信息才去修改。
      // 1. goods中必需又skuId，才能找到对应的商品信息
      const updateGoods = state.list.find(item => item.skuId === goods.skuId)
      for (const key in goods) {
        // 布尔类型 false 值需要使用
+       if (goods[key] !== null && goods[key] !== undefined && goods[key] !== '') {
          updateGoods[key] = goods[key]
        }
      }
    },
```

- 定义修改购物车商品的actions `src/store/module/cart.js`

```js
    // 修改购物车商品
    async updateCart (ctx, goods) {
      // goods 中：必须有skuId，其他想修改的属性 selected  count
        if (ctx.rootState.user.profile.token) {
          // 登录 TODO
        } else {
          // 本地
          ctx.commit('updateCart', goods)
        }
    },
```

- 在购物车页面绑定单选的复选框change事件并处理选中  `src/views/cart/index.vue`

```vue
<td><XtxCheckbox @change="$event=>checkOne(item.skuId,$event)" :modelValue="item.selected" /></td>
```

```js
import GoodRelevant from '@/views/goods/components/goods-relevant'
import { useStore } from 'vuex'
export default {
  name: 'XtxCartPage',
  components: { GoodRelevant },
  setup () {
    const store = useStore()
    // 单选
    const checkOne = (skuId, selected) => {
      store.dispatch('cart/updateCart', { skuId, selected })
    }
    return { checkOne }
  }
}
```



### 10-购物车页面-全选操作

> 目的：实现本地状态下的，全选商品操作。



大致步骤：

- 修改购物车所有有效商品选中状态的actions
- 在购物车页面修改调用actions的代码
- 在购物车页面绑定全选的复选框change事件
- 在事件中调用actions的修改函数



落的代码

- 修改购物车商品选中状态的actions让其支持全选 `src/store/module/cart.js`

```js
    // 做有效商品的全选&反选
    async checkAllCart (ctx, selected) {
        if (ctx.rootState.user.profile.token) {
          // 登录 TODO
        } else {
          // 本地
          // 1. 获取有效的商品列表，遍历的去调用修改mutations即可
          ctx.getters.validList.forEach(item => {
            ctx.commit('updateCart', { skuId: item.skuId, selected })
          })
        }
    },
```

- 在购物车页面修改调用actions的代码   `src/views/cart/index.vue`

```js
    // 全选
    const checkAll = (selected) => {
      store.dispatch('cart/checkAllCart', selected)
    }
    return { checkOne, checkAll }
```

- 在购物车页面绑定全选的复选框change事件并处理选中  `src/views/cart/index.vue`

```VUE
<!-- 两处都需要加 --> 
<XtxCheckbox @change="checkAll" :modelValue="$store.getters['cart/isCheckAll']">全选</XtxCheckbox>

```



### 11-购物车页面-删除操作

> 目的：实现本地状态下，购物车商品删除



大致步骤：

- 绑定`删除`点击事件指定处理函数，调用删除actions   
- 处理无商品展示界面



落的代码：

- 绑定`删除`点击事件指定处理函数，调用删除actions      `src/views/cart/index.vue`

```vue
<!-- 两处删除都绑定 -->
  <p><a @click="deleteCart(item.skuId)" class="green" href="javascript:;">删除</a></p>
```

```js
    // 删除
    const deleteCart = (skuId) => {
      store.dispatch('cart/deleteCart', skuId)
    }
    return { checkOne, checkAll, deleteCart }
```

- 处理无商品展示界面

组件 `src/views/cart/components/cart-none.vue`

```vue
<template>
  <div class="cart-none">
    <img src="@/assets/none.png" alt="" />
    <p>购物车内暂时没有商品</p>
    <div class="btn">
      <XtxButton type="primary" @click="$router.push('/')">继续逛逛</XtxButton>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CartNone'
}
</script>
<style scoped lang="less">
.cart-none {
  text-align: center;
  padding: 150px 0;
  background: #fff;
  img {
    width: 180px;
  }
  p {
    color: #999999;
    padding: 20px 0;
  }
}
</style>
```

使用 `src/views/cart/index.vue`

```diff
+import XtxConfirm from 'erabbit/packages/components/XtxConfirm'
import { useStore } from 'vuex'
export default {
  name: 'XtxCartPage',
+  components: { GoodRelevant, CartNone },
```

```vue
      <div class="cart" v-if="$store.getters['cart/validList'].length">
 
      </div>
      <!-- 操作栏 -->
      <div class="action" v-if="$store.getters['cart/validList'].length">

      </div>
      <CartNone v-else />
```





### 12-购物车页面-批量删除（作业）

> 目的：实现本地批量删除选中商品功能。



大致的步骤：

- 定义一个批量删除商品的actions支持批量操作
- 遍历选中商品，调用单个删除调用mutations函数即可
- 绑定批量删除点击事件指定处理函数，调用actions进行删除。



落地代码：

- 批量操作商品的actions支持 `src/store/module/cart.js`

```js
    // 批量删除选中商品
    async batchDeleteCart (ctx) {
        if (ctx.rootState.user.profile.token) {
          // 登录 TODO
        } else {
          // 本地
          // 1. 获取选中商品列表，进行遍历调用deleteCart mutataions函数
          ctx.getters.selectedList.forEach(item => {
            ctx.commit('deleteCart', item.skuId)
          })
        }
    },
```

- 绑定批量删除点击事件指定处理函数，调用actions进行删除。  `src/views/cart/index.vue`

```vue
<a @click="batchDeleteCart()" href="javascript:;">删除商品</a>
```

```js
    // 批量删除
    const batchDeleteCart = () => {
      Confirm({ text: '您确定从购物车删除选中的商品吗？' }).then(() => {
        store.dispatch('cart/batchDeleteCart')
      }).catch(e => {})
    }
    return { checkOne, checkAll, deleteCart, batchDeleteCart }
```





### 13-购物车页面-修改数量（作业）

> 目的：实现本地版本的修改商品数量。



大致的步骤：

- 绑定xtx-numbox组件的change事件指定处理函数
- 在函数种调用vuex的cart/updateCart函数修改数量



落的代码：

- 绑定xtx-numbox组件的change事件指定处理函数

```vue
<XtxNumbox :min="1" :max="item.stock" @change="$event=>changeCount(item.skuId,$event)" :modelValue="item.count" />
```

- 在函数种调用vuex的cart/updateCart函数修改数量

```js
    // 修改数量
    const changeCount = (skuId, count) => {
      store.dispatch('cart/updateCart', { skuId, count })
    }
    return { checkOne, checkAll, deleteCart, batchDeleteCart, changeCount }
```









