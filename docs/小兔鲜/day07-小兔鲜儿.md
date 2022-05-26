---
title: day07-小兔鲜儿
---



## 线上购物车





### 01-登录后-合并购物车

>    目的：登录后需要把本地购物车合并，且清空本地购物车。

大致步骤：

- 编写合并购物车的API接口函数
- 编写设置购物车数据的mutations目的是清空购物车
- 编写合并购物车的actions函数，实现合并后清空本地
- 在登录完成后调用合并购物车函数



落地代码：

- 编写合并购物车的API接口函数 `src/api/cart.js`

```js
/**
 * 合并本地购物车
 * @param {Array<object>} cartList - 本地购物车数组
 * @param {String} item.skuId - 商品SKUID
 * @param {Boolean} item.selected - 是否选中
 * @param {Integer} item.count - 数量
 */
export const mergeLocalCart = (cartList) => {
  return request('/member/cart/merge', 'post', cartList)
}
```

- 编写设置购物车数据的mutations目的是清空购物车  `src/store/module/cart.js`

```js
    // 设置购物车列表
    setCartList (state, list) {
      state.list = list
    }
```

- 编写合并购物车的actions函数，实现合并后清空本地  `src/store/module/cart.js`

```js
// 购物车状态
import { mergeCart } from '@/api/cart'
```

```js
    // 合并本地购物车
    async mergeLocalCart (ctx) {
      // 存储token后调用合并API接口函数进行购物合并
      const cartList = ctx.getters.validList.map(({ skuId, selected, count }) => {
        return { skuId, selected, count }
      })
      await mergeLocalCart(cartList)
      // 合并成功将本地购物车删除
      ctx.commit('setCartList', [])
    },
```

- 在登录完成（绑定成功，完善信息成功）后调用合并购物车函数 

`login/components/login-form.vue`

```js
  // 登录成功后，合并购物车操作
  await store.dispatch('cart/mergeLocalCart')
	// 跳转前
```





### 02-登录后-商品列表

> 目标：实现登陆后获取购物车商品列表。



大致步骤：

- 编写获取商品列表的API接口函数
- 在actions原有预留TODO位置获取列表
- 退出登录需要清空购物车



落地代码：

- 编写获取商品列表的API接口函数  `src/api/cart.js`

```js
/**
 * 获取登录后的购物车列表
 * @returns Promise
 */
export const getCartList = () => {
  return request('/member/cart', 'get')
}
```

- 在actions原有预留TODO位置获取列表   `src/store/module/cart.js`

```js
    // 获取购物车列表
    async getCartList (ctx) {
        if (ctx.rootState.user.profile.token) {
          const data = await getCartList()
          ctx.commit('setCartList', data.result)
        }
```

- 退出登录需要清空购物车 `src/components/app-navbar.vue`

```diff
    // 退出登录
    // 1. 清空本地存储信息和vuex的用户信息
    // 2. 跳转登录
    const router = useRouter()
    const logout = () => {
      store.commit('user/setUser', {})
      // 清空购物车
+      store.commit('cart/setCartList', [])
      router.push('/login')
    }
```





### 03-登录后-加入购物车

> 目标：实现登陆后加入购物车。



大致步骤：

- 编写加入购物车的API接口函数 
- 在actions原有预留TODO位置加入购物车



落地代码：

- 编写加入购物车的API接口函数 `src/api/cart.js`

```js
/**
 * 加入购物车
 * @param {String} skuId - 商品SKUID
 * @param {Integer} count - 商品数量
 * @returns Promise
 */
export const insertCart = ({ skuId, count }) => {
  return request('/member/cart', 'post', { skuId, count })
}
```

- 在actions原有预留TODO位置加入购物车  `src/store/module/cart.js`

```js
    // 加入购物车
    async insertCart (ctx, goods) {
      if (ctx.rootState.user.profile.token) {
        await insertCart(goods);
        await ctx.dispatch("getCartList");
      }
```





###  04-登录后-删除操作&批量删除

> 目标：实现登陆后删除购物车商品操作（批量删除，清空无效）



大致步骤：

- 编写删除购物车商品的API接口函数 
- 在actions原有预留TODO位置删除购物车商品



落地代码：

- 编写删除购物车商品的API接口函数 `src/api/cart.js`

```js
/**
 * 删除商品（支持批量删除）
 * @param {Array<string>} ids - skuId集合
 * @returns Promise
 */
export const deleteCart = (ids) => {
  return request('/member/cart', 'delete', {ids})
}

```

- 在actions原有预留TODO位置删除购物车商品   `src/store/module/cart.js`

```js
    // 删除购物车商品
    async deleteCart (ctx, skuId) {
        if (ctx.rootState.user.profile.token) {
         await deleteCart([skuId])
         await ctx.dispatch("getCartList");
        }
```

```js
// 批量删除选中商品
async batchDeleteCart (ctx) {
    if (ctx.rootState.user.profile.token) {
      // 得到需要删除的商品列表（失效，选中）的skuId集合
      const ids = ctx.getters.selectedList.map(item => item.skuId)
      await deleteCart(ids)
      await ctx.dispatch("getCartList");
    }
```



### 05-登录后-选中状态&修改数量

> 目的：实现登录后的选中操作。



大致步骤：

- 编写修改购物车商品的API接口函数
- 在actions原有预留TODO位置修改购物车商品



落地代码：

- 编写修改购物车商品的API接口函数   `src/api/cart.js` 

```js
/**
 * 修改购物车商品的状态和数量
 * @param {String} goods.skuId - 商品sku
 * @param {Boolean} goods.selected - 选中状态
 * @param {Integer} goods.count - 商品数量
 * @returns Promise
 */
export const updateCart = (goods) => {
  return request('/member/cart/' + goods.skuId, 'put', goods)
}

```

- 在actions原有预留TODO位置修改购物车商品  `src/store/module/cart.js`

```js
    // 修改购物车商品
    async updateCart (ctx, goods) {
        if (ctx.rootState.user.profile.token) {
          await updateCart(goods);
          await ctx.dispatch("getCartList");
        } 
```



### 06-登录后-全选反选

> 目标：完成有效商品的全选与反选功能



大概步骤：

- 准备全选与反选的API接口函数
- 去完善actions，全选与反选的中的 登录 TODO 的地方

落的代码：

`src/api/cart.js`

```js
/**
 * 全选反选
 * @param {Boolean} selected - 选中状态
 * @param {Array<string>} ids - 有效商品skuId集合
 * @returns Promise
 */
export const checkAllCart = ({ selected, ids }) => {
  return request('/member/cart/selected', 'put', { selected, ids })
}
```

`src/store/modules/cart.js`

```js
    // 做有效商品的全选&反选
    async checkAllCart (ctx, selected) {
        if (ctx.rootState.user.profile.token) {
          // 登录 TODO
          const ids = ctx.getters.validList.map(item => item.skuId)
          await checkAllCart({ selected, ids })
          await ctx.dispatch("getCartList");
        }
```





 ### 07-下单结算

> 目的：去结算，未登录给确认框提示。



大致需求：

- 绑定下单结算按钮指定处理函数
- 函数中：
  - 判断是否选中有效商品。
  - 判断是否登录，未登录给确认框提示
- user/xxx 的路由地址需要登录，所以做路由拦截。
- 登录后回跳结算页面





落的代码：

- 下单结束点击后逻辑 `src/views/cart/index.vue`

```js
import Message from 'erabbit-ui/packages/components/Message'
```

```js
    // 跳转结算页面
    const router = useRouter()
    const goCheckout = () => {
      // 1. 判断是否选择有效商品
      // 2. 判断是否已经登录，未登录 弹窗提示
      // 3. 进行跳转 （需要做访问权限控制）
      if (store.getters['cart/selectedTotal'] === 0) return Message({ text: '至少选中一件商品才能结算' })
      if (!store.state.user.profile.token) {
        Confirm({ text: '下单结算需要登录，您是否去登录？' }).then(() => {
          // 点击确认
          router.push('/user/checkout')
        }).catch(e => {})
      } else {
         router.push('/user/checkout')
      }
    }
  return { checkOne, checkAll, deleteCart, batchDeleteCart, changeCount, updateCartSku, goCheckout }  
```

```vue
<XtxButton type="primary" @click="goCheckout()">下单结算</XtxButton>
```

- 路由拦截 `src/router/index.js`

```js
import store from '@/store'
```

```js
// 前置导航守卫
router.beforeEach((to, from, next) => {
  // 用户信息
  const { token } = store.state.user.profile
  // 跳转去user开头的地址却没有登录
  if (to.path.startsWith('/user') && !token) {
    next({ path: '/login', query: { redirectUrl: to.fullPath } })
  }
  next()
})
```

- 登录后回跳 `login/components/login-form.vue`

```diff
+   const route = useRoute();
    const submit = async () => {
      const valid = await formCom.value.validate();
      if (valid) {
        // 账号登录
        try {
          let data = null;
          if (!isMsgLogin.value) {
            data = await userAccountLogin(form.value);
          } else {
            data = await userMobileLogin(form.value);
          }
          const { id, account, nickname, avatar, token, mobile } = data.result;
          store.commit("user/setProfile", {
            id,
            account,
            nickname,
            avatar,
            token,
            mobile,
          });
+          router.push(route.query.redirectUrl || "/");
```





## 订单结算

### 08-结算-组件基础

> 目的：配置路由和组件，完成组件基础布局

落的代码：

1. 定义组件基础解构和配置路由

`src/views/checkout/index.vue`  定义组件

```vue
<template>
  <div class="xtx-checkout-page">
    <div class="container">
      <XtxBread>
        <XtxBreadItem to="/">首页</XtxBreadItem>
        <XtxBreadItem to="/cart">购物车</XtxBreadItem>
        <XtxBreadItem >填写订单</XtxBreadItem>
      </XtxBread>
      <div class="wrapper">
        <!-- 收货地址 -->
        <!-- 商品信息 -->
        <!-- 配送时间 -->
        <!-- 支付方式 -->
        <!-- 金额明细 -->
        <!-- 提交订单 -->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'XtxCheckoutPage'
}
</script>
<style scoped lang="less">
.xtx-checkout-page {
  .wrapper {
    background: #fff;
  }
}
</style>
```

`src/router/index.js`  配置路由

```js
const Checkout = () => import('@/views/checkout/index')
```

```diff
      { path: '/cart', component: Cart },
+     { path: '/user/checkout', component: Checkout }
```

2. 完成页面布局效果

```vue
<template>
  <div class="xtx-checkout-page">
    <div class="container">
      <XtxBread>
        <XtxBreadItem to="/">首页</XtxBreadItem>
        <XtxBreadItem to="/cart">购物车</XtxBreadItem>
        <XtxBreadItem >填写订单</XtxBreadItem>
      </XtxBread>
      <div class="wrapper">
        <!-- 收货地址 -->
        <h3 class="box-title">收货地址</h3>
        <div class="box-body">
          <div class="address">
            <div class="text">
              <!-- <div class="none">您需要先添加收货地址才可提交订单。</div> -->
              <ul>
                <li><span>收<i/>货<i/>人：</span>朱超</li>
                <li><span>联系方式：</span>132****2222</li>
                <li><span>收货地址：</span>海南省三亚市解放路108号物质大厦1003室</li>
              </ul>
              <a href="javascript:;">修改地址</a>
            </div>
            <div class="action">
              <XtxButton class="btn">切换地址</XtxButton>
              <XtxButton class="btn">添加地址</XtxButton>
            </div>
          </div>
        </div>
        <!-- 商品信息 -->
        <h3 class="box-title">商品信息</h3>
        <div class="box-body">
          <table class="goods">
            <thead>
              <tr>
                <th width="520">商品信息</th>
                <th width="170">单价</th>
                <th width="170">数量</th>
                <th width="170">小计</th>
                <th width="170">实付</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="i in 4" :key="i">
                <td>
                  <a href="javascript:;" class="info">
                    <img src="https://yanxuan-item.nosdn.127.net/cd9b2550cde8bdf98c9d083d807474ce.png" alt="">
                    <div class="right">
                      <p>轻巧多用锅雪平锅 麦饭石不粘小奶锅煮锅</p>
                      <p>颜色：白色 尺寸：10cm 产地：日本</p>
                    </div>
                  </a>
                </td>
                <td>&yen;100.00</td>
                <td>2</td>
                <td>&yen;200.00</td>
                <td>&yen;200.00</td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- 配送时间 -->
        <h3 class="box-title">配送时间</h3>
        <div class="box-body">
          <a class="my-btn active" href="javascript:;">不限送货时间：周一至周日</a>
          <a class="my-btn" href="javascript:;">工作日送货：周一至周五</a>
          <a class="my-btn" href="javascript:;">双休日、假日送货：周六至周日</a>
        </div>
        <!-- 支付方式 -->
         <h3 class="box-title">支付方式</h3>
        <div class="box-body">
          <a class="my-btn active" href="javascript:;">在线支付</a>
          <a class="my-btn" href="javascript:;">货到付款</a>
          <span style="color:#999">货到付款需付5元手续费</span>
        </div>
        <!-- 金额明细 -->
        <h3 class="box-title">金额明细</h3>
        <div class="box-body">
          <div class="total">
            <dl><dt>商品件数：</dt><dd>5件</dd></dl>
            <dl><dt>商品总价：</dt><dd>¥5697.00</dd></dl>
            <dl><dt>运<i></i>费：</dt><dd>¥0.00</dd></dl>
            <dl><dt>应付总额：</dt><dd class="price">¥5697.00</dd></dl>
          </div>
        </div>
        <!-- 提交订单 -->
        <div class="submit">
          <XtxButton type="primary">提交订单</XtxButton>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'XtxCheckoutPage'
}
</script>
<style scoped lang="less">
.xtx-checkout-page {
  .wrapper {
    background: #fff;
    padding: 0 20px;
    .box-title {
      font-size: 16px;
      font-weight: normal;
      padding-left: 10px;
      line-height: 70px;
      border-bottom: 1px solid #f5f5f5;
    }
    .box-body {
      padding: 20px 0;
    }
  }
}
.address {
  border: 1px solid #f5f5f5;
  display: flex;
  align-items: center;
  .text {
    flex: 1;
    min-height: 90px;
    display: flex;
    align-items: center;
    .none {
      line-height: 90px;
      color: #999;
      text-align: center;
      width: 100%;  
    }
    > ul {
      flex: 1;
      padding: 20px;
      li {
        line-height: 30px;
        span {
          color: #999;
          margin-right: 5px;
          > i {
            width: 0.5em;
            display: inline-block;
          }
        }
      }
    }
    > a {
      color: var(--xtx-color);
      width: 160px;
      text-align: center;
      height: 90px;
      line-height: 90px;
      border-right: 1px solid #f5f5f5;
    }
  }
  .action {
    width: 420px;
    text-align: center;
    .btn {
      width: 140px;
      height: 46px;
      line-height: 44px;
      font-size: 14px;
      &:first-child {
        margin-right: 10px;
      }
    }
  }
}
.goods {
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  .info {
    display: flex;
    text-align: left;
    img {
      width: 70px;
      height: 70px;
      margin-right: 20px;
    }
    .right {
      line-height: 24px;
      p {
        &:last-child {
          color: #999;
        }
      }
    }
  }
  tr {
    th {
      background: #f5f5f5;
      font-weight: normal;
    }
    td,th {
      text-align: center;
      padding: 20px;
      border-bottom: 1px solid #f5f5f5;
      &:first-child {
        border-left: 1px solid #f5f5f5;
      }
      &:last-child {
        border-right: 1px solid #f5f5f5;
      }
    }
  }
}
.my-btn {
  width: 228px;
  height: 50px;
  border: 1px solid #e4e4e4;
  text-align: center;
  line-height: 48px;
  margin-right: 25px;
  color: #666666;
  display: inline-block;
  &.active,&:hover {
    border-color: var(--xtx-color);
  }
}
.total {
  dl {
    display: flex;
    justify-content: flex-end;
    line-height: 50px;
    dt {
      i {
        display: inline-block;
        width: 2em;
      }
    }
    dd {
      width: 240px;
      text-align: right;
      padding-right: 70px;
      &.price {
        font-size: 20px;
        color: var(--price-color);
      }
    }
  }
}
.submit {
  text-align: right;
  padding: 60px;
  border-top: 1px solid #f5f5f5;
}
</style>
```





### 09-结算-页面渲染

> 目的：分离收货地址组件，渲染页面默认内容。



大致步骤：

- 定义获结算信息API接口
- 渲染结算组件



落的代码：

1. 定义获结算信息API接口 `src/api/order.js`  

```js
import request from '@/utils/request'

// 获取结算信息
export const getCheckoutInfo = () => request('/member/order/pre', 'get')
```



2. 获取结算信息  `src/views/checkout/index.vue`

```js
import { getCheckoutInfo } from "@/api/order";
import { ref, onMounted } from "vue";
export default {
  name: "XtxCheckoutPage",
  setup() {
    const info = ref(null);
    onMounted(async () => {
      const data = await getCheckoutInfo();
      info.value = data.result;
    });
    return { info };
  },
};
```

3. 计算默认地址  `src/views/checkout/index.vue`

```js
// 默认地址
    const defAddr = computed(() => {
      if (info.value && info.value.userAddresses) {
        const defaultAddress = info.value.userAddresses.find(
          (item) => item.isDefault === 0
        );
        return defaultAddress ? defaultAddress : info.value.userAddresses[0];
      }
      return null;
    });

    return { info, defAddr };
```

4. 渲染页面  `src/views/checkout/index.vue`

```vue
<div class="wrapper" v-if="info">
```

```vue
           <div class="text" v-if="defAddr">
              <ul>
                <li>
                  <span>收<i />货<i />人：</span>
                  {{ defAddr.receiver }}
                </li>
                <li>
                  <span>联系方式：</span>
                  {{ defAddr.contact }}
                </li>
                <li>
                  <span>收货地址：</span>
                  {{ defAddr.fullLocation + defAddr.address }}
                </li>
              </ul>
              <a href="javascript:;">修改地址</a>
            </div>
            <div class="text" v-else>
              <div class="none">您需要先添加收货地址才可提交订单。</div>
            </div>
```

```vue
          <tbody>
              <tr v-for="item in info.goods" :key="item.skuId">
                <td>
                  <a href="javascript:;" class="info">
                    <img :src="item.picture" />
                    <div class="right">
                      <p>{{ item.name }}</p>
                      <p>{{ item.attrsText }}</p>
                    </div>
                  </a>
                </td>
                <td>&yen;{{ item.price }}</td>
                <td>{{ item.count }}</td>
                <td>&yen;{{ item.totalPrice }}</td>
                <td>&yen;{{ item.totalPayPrice }}</td>
              </tr>
            </tbody>
```

```vue
          <div class="total">
            <dl>
              <dt>商品件数：</dt>
              <dd>{{ info.summary.goodsCount }}件</dd>
            </dl>
            <dl>
              <dt>商品总价：</dt>
              <dd>¥{{ info.summary.totalPrice.toFixed(2) }}</dd>
            </dl>
            <dl>
              <dt>运<i></i>费：</dt>
              <dd>¥{{ info.summary.postFee.toFixed(2) }}</dd>
            </dl>
            <dl>
              <dt>应付总额：</dt>
              <dd class="price">
                ¥{{ info.summary.totalPayPrice.toFixed(2) }}
              </dd>
            </dl>
          </div>
```





### 10-结算-收货地址-对话框

> 目的：准备好对话框组件，准备里面的表单

大致步骤：

- 准备对话框组件，知道使用方式
- 使用对话框组件
- 绘制表单



具体代码：

- 创建地址编辑组件 `checkout/components/address-edit.vue`

```vue
<template>
  <XtxDialog title="添加收货地址" v-model:visible="dialogVisible">
    <div class="address-edit">表单</div>
    <template #footer>
      <XtxButton type="gray" style="margin-right: 20px">取消</XtxButton>
      <XtxButton type="primary">确认</XtxButton>
    </template>
  </XtxDialog>
</template>
<script>
import { ref } from "vue";
export default {
  name: "AddressEdit",
  setup() {
    const dialogVisible = ref(false);
    // 打开函数
    const open = () => {
      dialogVisible.value = true;
    };
    return { dialogVisible, open };
  },
};
</script>
<style scoped lang="less">
.address-edit {
}
</style>
```

- 使用地址编辑组件 `checkout/index.vue`

```js
    const dialog = ref(null);
    const openDialog = () => {
      dialog.value.open();
    };

    return { info, defAddr, openDialog, dialog };
```

```vue
            <div class="action">
              <XtxButton class="btn">切换地址</XtxButton>
              <XtxButton @click="openDialog()" class="btn">
                添加地址
              </XtxButton>
            </div>
```

```vue
    </div>
    <AddressEdit ref="dialog" />
  </div>
</template>
```

- 准备表单  `checkout/components/address-edit.vue`

```vue
      <div class="xtx-form">
        <div class="xtx-form-item">
          <div class="label"><i class="red">*</i>收货人：</div>
          <div class="field">
            <input class="input" placeholder="请输入收货人" />
          </div>
        </div>
        <div class="xtx-form-item">
          <div class="label"><i class="red">*</i>手机号：</div>
          <div class="field">
            <input class="input" placeholder="请输入手机号" />
          </div>
        </div>
        <div class="xtx-form-item">
          <div class="label"><i class="red">*</i>地区：</div>
          <div class="field">
            <XtxCity placeholder="请选择所在地区" />
          </div>
        </div>
        <div class="xtx-form-item">
          <div class="label"><i class="red">*</i>详细地址：</div>
          <div class="field">
            <input class="input" placeholder="请输入详细地址" />
          </div>
        </div>
        <div class="xtx-form-item">
          <div class="label">邮政编码：</div>
          <div class="field">
            <input class="input" placeholder="请输入邮政编码" />
          </div>
        </div>
        <div class="xtx-form-item">
          <div class="label">地址标签：</div>
          <div class="field">
            <input class="input" placeholder="请输入地址标签，逗号分隔" />
          </div>
        </div>
      </div>
```

```less
.xtx-dialog {
  :deep(.wrapper) {
    max-height: 100%;
    overflow-y: auto;
    width: 780px;
    .body {
      font-size: 14px;
    }
  }
}
.address-edit {
  .red {
    color: var(--price-color);
    position: relative;
    top: 2px;
    margin-right: 2px;
  }
  .xtx-form {
    padding: 0;
    input {
      outline: none;
      &::placeholder {
        color: #ccc;
      }
    }
  }
  .xtx-city {
    width: 320px;
    :deep(.select) {
      height: 50px;
      line-height: 48px;
      display: flex;
      padding: 0 10px;
      justify-content: space-between;
      .placeholder {
        color: #ccc;
      }
      i {
        color: #ccc;
        font-size: 18px;
      }
      .value {
        font-size: 14px;
      }
    }
    :deep(.option) {
      top: 49px;
    }
  }
}
```





### 11-结算-收货地址-添加地址

> 目的：完成收货地址的添加操作

大致步骤：

- 定义接口API函数，添加API 和 查询API
- 准备表单数据对象，绑定输入框和城市组件
- 进行提交，成功后通知父组件，失败后错误提示
- 父组件更新列表数据



落地代码：

- 定义接口API函数，添加API 和 查询API `api/order.js`

```js
// 添加收货地址
export const insertAddress = (data) => request("/member/address", "post", data);

// 查询收货地址
export const getAddress = () => request("/member/address", "get");
```

- 准备表单数据对象，绑定输入框和城市组件 `checkout/components/address-edit.vue`

```js
    // 表单数据对象
    const form = ref({});
    // 选择地区
    const changeCity = (ret) => {
      for (const key in ret) {
        form.value[key] = ret[key];
      }
    };
```

```diff
        <div class="xtx-form-item">
          <div class="label"><i class="red">*</i>收货人：</div>
          <div class="field">
            <input
+              v-model="form.receiver"
              class="input"
              placeholder="请输入收货人"
            />
          </div>
        </div>
        <div class="xtx-form-item">
          <div class="label"><i class="red">*</i>手机号：</div>
          <div class="field">
            <input
+              v-model="form.contact"
              class="input"
              placeholder="请输入手机号"
            />
          </div>
        </div>
        <div class="xtx-form-item">
          <div class="label"><i class="red">*</i>地区：</div>
          <div class="field">
            <XtxCity
+              :fullLocation="form.fullLocation"
+              @change="changeCity"
              placeholder="请选择所在地区"
            />
          </div>
        </div>
        <div class="xtx-form-item">
          <div class="label"><i class="red">*</i>详细地址：</div>
          <div class="field">
            <input
+              v-model="form.address"
              class="input"
              placeholder="请输入详细地址"
            />
          </div>
        </div>
        <div class="xtx-form-item">
          <div class="label">邮政编码：</div>
          <div class="field">
            <input
+              v-model="form.postalCode"
              class="input"
              placeholder="请输入邮政编码"
            />
          </div>
        </div>
        <div class="xtx-form-item">
          <div class="label">地址标签：</div>
          <div class="field">
            <input
+              v-model="form.addressTags"
              class="input"
              placeholder="请输入地址标签，逗号分隔"
            />
          </div>
        </div>
```

- 进行提交，成功后通知父组件，失败后错误提示 `checkout/components/address-edit.vue`

```vue
    <template #footer>
      <XtxButton
        @click="dialogVisible = false"
        type="gray"
        style="margin-right: 20px"
      >
        取消
      </XtxButton>
      <XtxButton @click="submit" type="primary">确认</XtxButton>
    </template>
```

```js
import { insertAddress } from "@/api/order";
import Message from "erabbit-ui/packages/components/Message";
```

```js
    // 提交
    const submit = async () => {
      try {
        // 必填：不是默认地址
        form.value.isDefault = 1;
        await insertAddress(form.value);
        emit("on-success");
        dialogVisible.value = false;
      } catch (e) {
        Message({ type: "error", text: e.response.data.message || "添加失败" });
      }
    };
```

- 父组件更新列表数据 `checkout/index.vue`

```js
import { getAddress } from "@/api/order";
```

```vue
    <AddressEdit ref="dialog" @on-success="success" />
```

```js
    // 添加或修改成功===>更新收货地址列表
    const success = async () => {
      const data = await getAddress();
      info.value.userAddresses = data.result;
    };

    return { info, defAddr, openDialog, dialog, success };
```





### 12-结算-收货地址-选择地址

> 目标：完成收货地址选择操作

大致步骤：

- 准备选择地址对话框和样式
- 控制对话框显示隐藏
- 渲染地址列表
- 完成选中效果，再次打开清除效果
- 记录确认选择的地址，显示确认选的地址



落地代码：`checkout/index.vue`

- 准备选择地址对话框和样式

```vue
    <XtxDialog title="选择收货地址">
      <div class="text item">
        <ul>
          <li>
            <span>收<i />货<i />人：</span> 周杰伦
          </li>
          <li><span>联系方式：</span>13211122311</li>
          <li><span>收货地址：</span>台湾省台北市淡水县九江路1008号</li>
        </ul>
      </div>
      <template #footer>
        <XtxButton type="gray" style="margin-right: 20px"> 取消 </XtxButton>
        <XtxButton type="primary"> 确认 </XtxButton>
      </template>
    </XtxDialog>
```

```less
.xtx-dialog {
  :deep(.wrapper) {
    max-height: 100%;
    overflow-y: auto;
    .body {
      font-size: 14px;
    }
  }
  .text {
    flex: 1;
    min-height: 90px;
    display: flex;
    align-items: center;
    &.item {
      border: 1px solid #f5f5f5;
      margin-bottom: 10px;
      cursor: pointer;
      &.active,
      &:hover {
        border-color: var(--xtx-color);
        background: lighten(#3eaf7c, 50%);
      }
      > ul {
        padding: 10px;
        font-size: 14px;
        line-height: 30px;
        i {
          width: 0.5em;
          display: inline-block;
        }
      }
    }
  }
}
```

- 控制对话框显示隐藏

```js
    const visibleDialog = ref(false);
    const openSelectDialog = () => {
      visibleDialog.value = true;
    };

		// return { visibleDialog, openSelectDialog,}
```

```vue
<XtxDialog title="选择收货地址" v-model:visible="visibleDialog"
```

```vue
        <XtxButton
          @click="visibleDialog = false"
          type="gray"
          style="margin-right: 20px"
        >
          取消
        </XtxButton>
```

- 渲染地址列表

```vue
<XtxDialog title="选择收货地址" v-model:visible="visibleDialog" v-if="info">
```

```vue
      <div
        class="text item"
        v-for="item in info.userAddresses"
        :key="item.id"
      >
        <ul>
          <li>
            <span>收<i />货<i />人：</span>{{ item.receiver }}
          </li>
          <li><span>联系方式：</span>{{ item.contact }}</li>
          <li><span>收货地址：</span>{{ item.fullLocation + item.address }}</li>
        </ul>
      </div>
```

- 完成选中效果果，再次打开清除效果

```js
const selectedId = ref(null);

// return { selectedId }
```

```diff
      <div
        class="text item"
        v-for="item in info.userAddresses"
        :key="item.id"
+        :class="{ active: item.id === selectedId }"
+        @click="selectedId = item.id"
      >
```

```diff
    const openSelectDialog = () => {
+      selectedId.value = null;
      visibleDialog.value = true;
    };
```

- 记录确认选择的地址ID，显示确认选的地址

```js
    const confirmId = ref(null);
    const confirm = () => {
      confirmId.value = selectedId.value
      visibleDialog.value = false;
    };
    // return { confirm }
```

```diff
   // 默认地址
    const defAddr = computed(() => {
+      // 有选中地址优先取
+      if (confirmId.value) {
+        return info.value.userAddresses.find(
+          (item) => item.id === confirmId.value
+        );
+      }
      if (info.value && info.value.userAddresses) {
        const defaultAddress = info.value.userAddresses.find(
          (item) => item.isDefault === 0
        );
        return defaultAddress ? defaultAddress : defaultAddress[0];
      }
      return null;
    });
```





### 13-结算-收货地址-修改地址（作业）

> 目的：完成修改收货地址操作

大致步骤：

- 打开对话框区分修改和添加操作
- 定义接口API，修改地址API
- 合并修改操作



落地代码：

- 打开对话框区分修改和添加操作 

`checkout/index.vue`

```diff
    // 打开对话框
    const dialog = ref(null);
+    const openDialog = (addr) => {
+      dialog.value.open(addr);
    };
```

`checkout/components/address-edit.vue`

```vue
  <XtxDialog
    :title="`${form.id ? '修改' : '添加'}收货地址`"
    v-model:visible="dialogVisible"
  >
```

```diff
    // 打开函数
+    const open = (addr) => {
+      form.value = { ...addr };
      dialogVisible.value = true;
    };
```

- 定义接口API，修改地址AP

`api/order.js`

```js
// 修改收货地址
export const updateAddress = (data) =>
  request(`/member/address/${data.id}`, "put", data);
```

- 合并修改操作

`checkout/components/address-edit.vue`

```diff
const submit = async () => {
+      if (form.value.id) {
+        try {
+          await updateAddress(form.value);
+          emit("on-success");
+          dialogVisible.value = false;
+        } catch (e) {
+          Message({
+            type: "error",
+            text: e.response.data.message || "修改失败",
+          });
+        }
+      } else {
        try {
          // 必填：不是默认地址
          form.value.isDefault = 0;
          await insertAddress(form.value);
          emit("on-success");
          dialogVisible.value = false;
        } catch (e) {
          Message({
            type: "error",
            text: e.response.data.message || "添加失败",
          });
        }
+      }
    };
```











