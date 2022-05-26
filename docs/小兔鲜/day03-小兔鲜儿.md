---
title: day03-小兔鲜儿
---



## 首页模块



### 01-首页-商品分类渲染

> 实现：商品分类渲染，数据存储在vuex中。



基本步骤：

- 在API目录定义接口函数
- 在vuex中的category模块，定义修改分类列表函数，定义获取数据函数。
- 在Layout组件获取调用actions获取数据，在头部导航组件渲染即可。
- 优化：定义一个常量数据和后台保持一致（约定好9大分类）
  - 这样不请求后台就能展示一级分类，不至于白屏。



落地代码：

- 定义API函数 `src/api/home.js`

```js
import request from "@/utils/request";
// 获取分类导航含推荐商品
export const getCategory = () => request("/home/category/head", "get");
```

- vuex在category模块，提供修改和获取的函数。 `src/store/modules/category.js`

```js
// 商品分类vuex模块
import { getCategory } from "@/api/home";
export default {
  namespaced: true,
  state() {
    return {
      // 分类列表
      list: [],
    };
  },
  mutations: {
    // 修改列表
    setList(state, payload) {
      state.list = payload;
    },
  },
  actions: {
    // 获取列表
    async getList({ commit }) {
      const data = await getCategory();
      commit("setList", data.result);
    },
  },
};
```

- 获取数据在 `src/views/Layout.vue` 初始化的时候

```diff
+import { useStore } from "vuex";
export default {
  name: "XtxLayout",
  components: { AppTopnav, AppHeader, AppFooter },
+  setup() {
+    const store = useStore();
+    store.dispatch("category/getList");
+  },
};
```

- 在头部导航组件渲染 `src/compotents/app-header-nav.vue`

```vue
<template>
  <ul class="app-header-nav">
    <li class="home"><RouterLink to="/">首页</RouterLink></li>
    <li v-for="item in $store.state.category.list" :key="item.name">
      <RouterLink :to="`category/${item.id}`">{{
        item.name
      }}</RouterLink>
    </li>
  </ul>
</template>
```

- 优化，处理白屏

`api/constants.js`

```js
export const topCategory = [
  "居家",
  "美食",
  "服饰",
  "母婴",
  "个护",
  "严选",
  "数码",
  "运动",
  "杂货",
];
```

`store/modules/category.js`

```diff
// 商品分类vuex模块
+import { topCategory } from "@/api/constants";
import { getCategory } from "@/api/home";
export default {
  namespaced: true,
  state() {
    return {
      // 分类列表
+      list: topCategory.map((item) => ({ name: item })),
    };
  },
```

`app-header-nav.vue`

```vue
    <li v-for="item in $store.state.category.list" :key="item.name">
      <RouterLink v-if="item.id" :to="`/category/${item.id}`">
        {{ item.name }}
      </RouterLink>
      <a v-else href="javascript:;">{{ item.name }}</a>
    </li>
```



**总结：**

- request ====>  api  ====>  vuex(action) ====> 组件，数据请求逻辑。



### 02-首页-头部吸顶效果

> 目标：头部吸顶组件准备，吸顶效果实现

实现步骤：

- 准备好静态组件，Layout使用组件
- 理解吸顶效果的样式实现
- 监听滚动事件，卷曲高度大于78px滑入，否则隐藏



具体代码：

- 新建 `src/components/app-header-sticky.vue` 组件完成布局

```vue
<template>
  <div class="app-header-sticky">
    <div class="container">
      <RouterLink class="logo" to="/" />
      <AppHeaderNav />
      <div class="right">
        <RouterLink to="/" >品牌</RouterLink>
        <RouterLink to="/" >专题</RouterLink>
      </div>
    </div>
  </div>
</template>

<script>
import AppHeaderNav from './app-header-nav'
export default {
  name: 'AppHeaderSticky',
  components: { AppHeaderNav }
}
</script>

<style scoped lang='less'>
.app-header-sticky {
  width: 100%;
  height: 80px;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999;
  background-color: #fff;
  border-bottom: 1px solid #e4e4e4;
  .container {
    display: flex;
    align-items: center;
  }
  .logo {
    width: 200px;
    height: 80px;
    background: url(../assets/logo.png) no-repeat  right 2px;
    background-size: 160px auto;
  }
  .right {
    width: 220px;
    display: flex;
    text-align: center;
    padding-left: 40px;
    border-left: 2px solid var(--xtx-color);
    a {
      width: 38px;
      margin-right: 40px;
      font-size: 16px;
      line-height: 1;
      &:hover {
        color: var(--xtx-color);
      }
    }
  }
}
</style>
```

- 准备滑入效果的样式，添加show就滑入

```diff
.app-header-sticky {
  width: 100%;
  height: 80px;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999;
  background-color: #fff;
  border-bottom: 1px solid #e4e4e4;
+  transform: translateY(-100%);
+  opacity: 0;
+  &.show {
+    transition: all 0.3s linear;
+    transform: none;
+    opacity: 1;
+  }
```

- 组件渲染后，监听滚动距离超过78px显示，否则隐藏

```js
import { onMounted, onUnmounted, ref } from "vue";
import AppHeaderNav from "./app-header-nav";
export default {
  name: "AppHeaderSticky",
  components: { AppHeaderNav },
  setup() {
    const y = ref(0);
    const toggle = () => {
      y.value = document.documentElement.scrollTop;
    };
    onMounted(() => {
      window.addEventListener("scroll", toggle);
    });
    // 组件销毁需要注销事件
    onUnmounted(() => {
      window.removeEventListener("scroll", toggle);
    });
    return { y };
  },
};
```

```vue
<!-- 滑入滑出 --> 
<div class="app-header-sticky" :class="{show:y>=78}">
```



**总结：**

- 实现吸顶效果，监听滚动距离去操作JS的代码挺多考虑的也挺多，如果有库就好了。



### 03-首页-头部吸顶vueuse实现

> 使用@vuesue/core库的API实现监听滚动距离，实现头部吸顶效果

大致过程：

- 了解vueuse这个库作用
- 使用vueuse改造吸顶代码



主要内容：

- vueuse介绍
  - 作者：Anthony Fu ，是 vue vite 的团队成员
  - 200+ 工具函数 （hook函数）
  - 主要是把JS的一些API返回的信息转换成响应式数据，提高开发效率
  - https://vueuse.org/
- 使用vueuse改造吸顶代码

```bash
yarn add @vueuse/core
```

```diff
+import { useWindowScroll } from "@vueuse/core";
import AppHeaderNav from "./app-header-nav";
export default {
  name: "AppHeaderSticky",
  components: { AppHeaderNav },
  setup() {
+    const { y } = useWindowScroll();
    return { y };
  },
};
```



**总结：**

- 今后浏览器信息相关，或者一些工具函数，可以先考虑下 @vueuse/core 是否提供



### 04-首页-左侧分类布局

> 目标：完成左侧分类布局和样式调整

大致步骤：

- 准备首页分类组件
- 使用组件
- 主体内容样式调整



落地代码：

- 准备组件：`src/views/home/components/home-category.vue`

```vue
<template>
  <div class="home-category">
    <ul class="menu">
      <li v-for="i in 10" :key="i">
        <RouterLink to="/">居家</RouterLink>
        <a href="javascript:;">洗漱</a>
        <a href="javascript:;">清洁</a>
        <!-- 弹层 -->
        <div class="layer">
          <h4>分类推荐 <small>根据您的购买或浏览记录推荐</small></h4>
          <ul>
            <li v-for="i in 9" :key="i">
              <RouterLink to="/">
                <img
                  src="https://yanxuan-item.nosdn.127.net/5a115da8f2f6489d8c71925de69fe7b8.png"
                  alt=""
                />
                <div class="info">
                  <p class="name ellipsis-2">
                    【定金购】严选零食大礼包（12件）
                  </p>
                  <p class="desc ellipsis">超值组合装，满足馋嘴欲</p>
                  <p class="price"><i>¥</i>100.00</p>
                </div>
              </RouterLink>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomeCategory",
};
</script>

<style scoped lang="less">
.home-category {
  width: 250px;
  height: 500px;
  background: rgba(0, 0, 0, 0.8);
  position: relative;
  z-index: 99;
  .menu {
    > li {
      padding-left: 40px;
      height: 50px;
      line-height: 50px;
      &:hover {
        background: var(--xtx-color);
      }
      .layer {
        width: 990px;
        height: 500px;
        background: rgba(255, 255, 255, 0.8);
        position: absolute;
        left: 250px;
        top: 0;
        display: none;
        padding: 0 15px;
        h4 {
          font-size: 20px;
          font-weight: normal;
          line-height: 80px;
          small {
            font-size: 16px;
            color: #666;
          }
        }
        ul {
          display: flex;
          flex-wrap: wrap;
          li {
            width: 310px;
            height: 120px;
            margin-right: 15px;
            margin-bottom: 15px;
            border: 1px solid #eee;
            border-radius: 4px;
            background: #fff;
            &:nth-child(3n) {
              margin-right: 0;
            }
            a {
              display: flex;
              width: 100%;
              height: 100%;
              align-items: center;
              padding: 10px;
              &:hover {
                background: #e3f9f4;
              }
              img {
                width: 95px;
                height: 95px;
              }
              .info {
                padding-left: 10px;
                line-height: 24px;
                width: 190px;
                .name {
                  font-size: 16px;
                  color: #666;
                }
                .desc {
                  color: #999;
                }
                .price {
                  font-size: 22px;
                  color: var(--price-color);
                  i {
                    font-size: 16px;
                  }
                }
              }
            }
          }
        }
      }
      &:hover {
        .layer {
          display: block;
        }
      }
      a {
        margin-right: 4px;
        color: #fff;
        &:first-child {
          font-size: 16px;
        }
      }
    }
  }
}
</style>
```

- 使用组件 `src/views/home/index.vue`

```vue
<template>
  <div class="xtx-home-page">
    <div class="home-entry">
      <div class="container">
        <!-- 左侧分类 -->
        <HomeCategory />
      </div>
    </div>
  </div>
</template>

<script>
import HomeCategory from "./components/home-category";
export default {
  name: "XtxHomePage",
  components: { HomeCategory },
};
</script>

```

- 内容主体设置灰色

`Layout.vue`

```vue
  <main class="app-body">
    <!-- 二级路由 -->
    <router-view></router-view>
  </main>
```

`styles/index.less`

```css
.app-body {
  background-color: #f5f5f5;
  min-height: 600px;
}
```





### 05-首页-左侧分类渲染

> 目的：基于vuex数据通过计算属性得到要求数据进行渲染

大致步骤：

- 定义计算属性获取符合要求的数据，子分类2个即可。
- 使用数据进行渲染



落地代码：

 `scr/views/home/components/home-category.vue`

- 准备数据

```js
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  name: "HomeCategory",
  setup() {
    const store = useStore();
    const categoryList = computed(() => {
      const list = store.state.category.list.map((item) => {
        // 保留子分类的前两项
        const { id, name, children, goods } = item;
        return { id, name, children: children && children.slice(0, 2), goods };
      });
      return list;
    });
    return { categoryList };
  },
};
```

- 渲染组件

```vue
<template>
  <div class="home-category">
    <ul class="menu">
      <li v-for="item in categoryList" :key="item.name">
        <RouterLink :to="item.id ? `/category/${item.id}` : '/'">
          {{ item.name }}
        </RouterLink>
        <a href="javascript:;" v-for="sub in item.children" :key="sub.id">
          {{ sub.name }}
        </a>
        <!-- 弹层 -->
        <div class="layer">
          <h4>分类推荐 <small>根据您的购买或浏览记录推荐</small></h4>
          <ul>
            <li v-for="pro in item.goods" :key="pro.id">
              <RouterLink :to="`/product/${pro.id}`">
                <img :src="pro.picture" />
                <div class="info">
                  <p class="name ellipsis-2">{{ pro.name }}</p>
                  <p class="desc ellipsis">{{ pro.desc }}</p>
                  <p class="price"><i>¥</i>{{ pro.price }}</p>
                </div>
              </RouterLink>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>
```



### 06-首页-左侧分类品牌

> 目的：给左侧分类添加品牌数据并且展示

大致步骤：

- 定义品牌数据，给计算属性添加品牌
- 定义API函数，组件渲染后获取设置给品牌列表
- 准备结构和样式
- 通过数据渲染



落地代码：

- 定义品牌数据，给计算属性添加品牌   `scr/views/home/components/home-category.vue`

```js
import { reactive } from "vue";
```

```js
    // 品牌数据
    const brand = reactive({
      name: "品牌",
      children: [{ name: "品牌推荐" }],
      brands: [],
    });
```

```diff
      const list = store.state.category.list.map((item) => {
        // 保留子分类的前两项
        const { id, name, children, goods } = item;
        return { id, name, children: children && children.slice(0, 2), goods };
      });
+      // 添加品牌数据
+      list.push(brand);
      return list;
```

- 定义API函数，组件渲染后获取设置给品牌列表

`src/api/home.js`

```js
// 获取品牌数据
export const getBrand = (limit) => request("/home/brand", "get", { limit });
```

 `scr/views/home/components/home-category.vue`

```js
    onMounted(async () => {
      const data = await getBrand(6);
      brand.brands = data.result;
    });
```

- 准备结构和样式

```vue
<ul>
  <li class="brand" v-for="i in 6" :key="i">
    <RouterLink to="/">
      <img src="http://zhoushugang.gitee.io/erabbit-client-pc-static/uploads/brand_goods_1.jpg" alt="">
      <div class="info">
        <p class="place"><i class="iconfont icon-dingwei"></i>北京</p>
        <p class="name ellipsis">DW</p>
        <p class="desc ellipsis-2">DW品牌闪购</p>
      </div>
    </RouterLink>
  </li>
</ul>
```

```less
      li.brand {
        height: 180px;
        a {
          align-items: flex-start;
          img {
            width: 120px;
            height: 160px;
          }
          .info {
            p {
              margin-top: 8px;
            }
            .place {
              color: #999;
            }
          }
        }
      }
```

- 渲染品牌列表

```diff
        <!-- 弹层 -->
        <div class="layer">
          <h4>
+            {{ item.brands ? "品牌" : "分类" }}推荐
            <small>根据您的购买或浏览记录推荐</small>
          </h4>
+          <ul v-if="item.brands">
+            <li class="brand" v-for="bra in item.brands" :key="bra.id">
+              <RouterLink to="/">
+                <img :src="bra.picture" />
+                <div class="info">
+                  <p class="place">
+                    <i class="iconfont icon-dingwei"></i>{{ bra.place }}
+                  </p>
+                  <p class="name ellipsis">{{ bra.name }}</p>
+                  <p class="desc ellipsis-2">{{ bra.desc }}</p>
+                </div>
+              </RouterLink>
+            </li>
+          </ul>
+          <ul v-else>
            <li v-for="pro in item.goods" :key="pro.id">
              <RouterLink :to="`/product/${pro.id}`">
                <img :src="pro.picture" />
                <div class="info">
                  <p class="name ellipsis-2">{{ pro.name }}</p>
                  <p class="desc ellipsis">{{ pro.desc }}</p>
                  <p class="price"><i>¥</i>{{ pro.price }}</p>
                </div>
              </RouterLink>
            </li>
          </ul>
        </div>
```



**总结：**

- 计算属性依赖响应式数据，数据改变计算属性才改变。



### 07-首页-左侧分类骨架

> 目的：在加载过程使用骨架降低用户等待焦虑

大致步骤：

- 理解加载过程中使用骨架提高体验
- 知道 `XtxSkeleton` 组件基本使用
- 使用 `XtxSkeleton` 组件，添加动画



具体代码：

- 理解加载过程中使用骨架提高体验

![image-20220320135120913](https://wuxiaohui-1254415986.cos.ap-nanjing.myqcloud.com/uPic/image-20220320135120913-7755483.png)

- 知道 `XtxSkeleton` 组件基本使用

| 名称            | 类型    | 默认值  |
| --------------- | ------- | ------- |
| bg 背景         | String  | #efefef |
| width 宽        | String  | 100px   |
| height 高       | String  | 100px   |
| animated 闪动画 | Boolean | false   |

- 使用 `XtxSkeleton` 组件，添加动画

```vue
        <a href="javascript:;" v-for="sub in item.children" :key="sub.id">
          {{ sub.name }}
        </a>
        <template v-if="!item.children">
          <XtxSkeleton width="70px" height="18px" bg="rgba(255,255,255,0.2)" />
          <XtxSkeleton width="40px" height="18px" bg="rgba(255,255,255,0.2)" />
        </template>
        <!-- 弹层 -->
```

```less
.xtx-skeleton {
  animation: fade 1.5s linear infinite alternate;
  margin-right: 6px;
}
@keyframes fade {
  from {
    opacity: 0.2;
  }
  to {
    opacity: 1;
  }
}
```



**总结：**

- 骨架效果也是提高用户体验的方式之一



### 08-首页-轮播图

> 目标：使用轮播图组件完成首页轮播图功能

大致步骤：

- 知道 `XtxCarousel` 组件基本使用
- 使用 `XtxCarousel` 组件，样式覆盖
- 定义API，获取数据给轮播图



落地代码：

- 知道 `XtxCarousel` 组件基本使用

| 名称               | 类型                              | 默认值   |
| ------------------ | --------------------------------- | -------- |
| sliders 轮播图数据 | Array `[{imgUrl:'图片地址'},...]` | []       |
| autoPlay 自动播放  | Boolean                           | false    |
| duration  间隔时间 | Number                            | 3000毫秒 |

- 使用 `XtxCarousel` 组件，样式覆盖

```diff
        <!-- 左侧分类 -->
        <HomeCategory />
+        <div class="home-banner">
+          <!-- 轮播图 -->
+          <XtxCarousel :sliders="[]"></XtxCarousel>
+        </div>
```

```vue
<style lang="less" scoped>
.home-banner {
  width: 1240px;
  height: 500px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 98;
  .xtx-carousel {
    width: 100%;
    height: 100%;
    :deep(.carousel-btn.prev) {
      left: 270px;
    }
    :deep(.carousel-indicator) {
      padding-left: 250px;
    }
  }
}
</style>
```

- 定义API，获取数据给轮播图

`api/home.js`

```js
// 获取轮播图数据
export const getSliders = () => request("/home/banner", "get");
```

`home/index.vue`

```js
import { onMounted, ref } from "vue";
import HomeCategory from "./components/home-category";
import { getSliders } from "@/api/home";
export default {
  name: "XtxHomePage",
  components: { HomeCategory },
  setup() {
    // 获取轮播图数据
    const sliders = ref([]);
    onMounted(async () => {
      const data = await getSliders();
      sliders.value = data.result;
    });
    return { sliders };
  },
};
```

```vue
<XtxCarousel :sliders="sliders" autoPlay></XtxCarousel>
```



### 09-首页-面板组件

> 目的：提取首页面板组件进行复用

封装思路：

- 头部：标题和副标题由props传入，右侧内容通过#right插槽传入
- 主体：通过默认插槽传入

![image-20220320144743371](https://wuxiaohui-1254415986.cos.ap-nanjing.myqcloud.com/uPic/image-20220320144743371.png)

落地代码：

`home/components/home-panel`

```vue
<template>
  <div class="home-panel">
    <div class="container">
      <div class="head">
        <h3>
          {{ title }}<small>{{ subTitle }}</small>
        </h3>
        <slot name="right" />
      </div>
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePanel",
  props: {
    title: {
      type: String,
      default: "",
    },
    subTitle: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped lang="less">
.home-panel {
  background-color: #fff;
  .head {
    padding: 40px 0;
    display: flex;
    align-items: flex-end;
    h3 {
      flex: 1;
      font-size: 32px;
      font-weight: normal;
      margin-left: 6px;
      height: 35px;
      line-height: 35px;
      small {
        font-size: 16px;
        color: #999;
        margin-left: 20px;
      }
    }
  }
}
</style>
```



**总结：**

- 通过匿名，具名插槽提高组件结构复用




### 09-首页-新鲜好物

> 目标：新鲜好物板块布局和渲染

大致步骤：

- 布局样式
- 数据渲染



具体代码：

- 布局样式 

准备组件`home/components/home-new.vue`

```vue
<template>
  <HomePanel title="新鲜好物" sub-title="新鲜出炉 品质靠谱">
    <template #right><XtxMore style="line-height: 22px" /></template>
    <!-- 面板内容 -->
    <div class="home-new">
      <ul class="goods-list">
        <li v-for="item in 4" :key="item">
          <RouterLink to="/">
            <img
              src="https://yanxuan-item.nosdn.127.net/b011048adc2bf3952c72e741e47d1419.jpg"
              alt=""
            />
            <p class="name ellipsis">电动红酒醒酒器分酒器取酒器</p>
            <p class="price">&yen;169.00</p>
          </RouterLink>
        </li>
      </ul>
    </div>
  </HomePanel>
</template>
<script>
import HomePanel from "./home-panel";
export default {
  name: "HomeNew",
  components: { HomePanel },
};
</script>
<style scoped lang="less">
.home-new {
  position: relative;
  height: 426px;
}
.goods-list {
  display: flex;
  justify-content: space-between;
  height: 406px;
  li {
    width: 306px;
    height: 406px;
    background: #f0f9f4;
    transition: all 0.5s;
    &:hover {
      transform: translate3d(0, -3px, 0);
      box-shadow: 0 3px 8px rgb(0 0 0 / 20%);
    }
    img {
      width: 306px;
      height: 306px;
    }
    p {
      font-size: 22px;
      padding: 12px 30px 0 30px;
      text-align: center;
    }
    .price {
      color: var(--price-color);
    }
  }
}
</style>
```

使用组件 `home/index.vue`

```diff
+import HomeNew from "./components/home-new";

+  components: { HomeCategory, HomeNew },
```

```vue
    <!-- 新鲜好物 -->
    <HomeNew />
```



- 数据渲染

`api/home.js`

```js
// 获取新鲜好物数据
export const getNewGoods = () => request("/home/new", "get");
```

`home/components/home-new.vue`

```js
import { onMounted, ref } from "vue";
import HomePanel from "./home-panel";
import { getNewGoods } from "@/api/home";
export default {
  name: "HomeNew",
  components: { HomePanel },
  setup() {
    const list = ref(0);
    onMounted(async () => {
      const data = await getNewGoods();
      list.value = data.result;
    });
    return { list };
  },
};
```

```vue
        <li v-for="item in list" :key="item.id">
          <RouterLink to="/">
            <img :src="item.picture" />
            <p class="name ellipsis">{{ item.name }}</p>
            <p class="price">&yen;{{ item.price }}</p>
          </RouterLink>
        </li>
```





### 10-首页-人气推荐

> 目标：人气推荐板块布局和渲染

大致步骤：

- 布局样式
- 数据渲染



落地代码：

- 布局样式 

准备组件 `home/components/home-hot.vue`

```vue
<template>
  <HomePanel title="人气推荐" sub-title="人气推荐 不容错过">
    <!-- 面板内容 -->
    <div class="home-hot">
      <ul class="goods-list">
        <li v-for="item in 4" :key="item">
          <RouterLink to="/">
            <img src="https://yjy-oss-files.oss-cn-zhangjiakou.aliyuncs.com/tuxian/popular_1.jpg" />
            <p class="name ellipsis">特惠推荐</p>
            <p class="desc">它们最实惠</p>
          </RouterLink>
        </li>
      </ul>
    </div>
  </HomePanel>
</template>
<script>
import HomePanel from "./home-panel";
export default {
  name: "HomeNew",
  components: { HomePanel }
};
</script>
<style scoped lang="less">
.home-hot {
  position: relative;
  height: 426px;
}
.goods-list {
  display: flex;
  justify-content: space-between;
  height: 406px;
  li {
    width: 306px;
    height: 406px;
    transition: all 0.5s;
    &:hover {
      transform: translate3d(0, -3px, 0);
      box-shadow: 0 3px 8px rgb(0 0 0 / 20%);
    }
    img {
      width: 306px;
      height: 306px;
    }
    p {
      font-size: 22px;
      padding: 12px 30px 0 30px;
      text-align: center;
    }
    .desc {
      color: #999;
      font-size: 18px;
    }
  }
}
</style>
```

使用组件 `home/index.vue`

```diff
+import HomeNew from "./components/home-hot";

+  components: { HomeCategory, HomeNew, HomeHot },
```

```vue
    <!-- 人气推荐 -->
    <HomeHot />
```



- 数据渲染

`api/home.js`

```js
// 获取人气推荐数据
export const getHot = () => request("/home/hot", "get");
```

`home/components/home-hot.vue`

```js
import { onMounted, ref } from "vue";
import HomePanel from "./home-panel";
import { getHot } from "@/api/home";
export default {
  name: "HomeNew",
  components: { HomePanel },
  setup() {
    const list = ref(0);
    onMounted(async () => {
      const data = await getHot();
      list.value = data.result;
    });
    return { list };
  },
};
```

```vue
        <li v-for="item in list" :key="item.id">
          <RouterLink to="/">
            <img :src="item.picture" />
            <p class="name ellipsis">{{ item.title }}</p>
            <p class="desc">{{ item.alt }}</p>
          </RouterLink>
        </li>
```



### 11-首页-补充vue动画

>目标：知道vue中如何使用动画，知道Transition组件使用。



在vue中，显示隐藏，创建移除，一个元素或者一个组件的时候，可以通过transition实现动画。

![image-20220320183625162](https://wuxiaohui-1254415986.cos.ap-nanjing.myqcloud.com/uPic/image-20220320183625162.png)

6个状态对应6个类名：

- 进入（显示，创建）
  - v-enter-from 进入前 （vue2.0 v-enter）
  - v-enter-active 进入中
  - v-enter-to 进入后
- 离开（隐藏，移除）
  - v-leave-from 离开前 （vue2.0 v-leave）
  - v-leave-active 离开中
  - v-leave-to 离开后

多个transition使用不同动画，可以添加nam属性，name属性的值替换v即可。



如果元素或组件离开，完成一个淡入淡出效果：

```vue
<transition name="fade">
  <p v-if="show">100</p>
</transition>
```

 ```css
 .fade-enter-from {
     opacity: 0
 }
 .fade-enter-active {
     transition: all 2s;
 }
 .fade-enter-to {
     opcaity: 1
 }
 .fade-leave-from {
     opacity: 1
 }
 .fade-leave-active {
     transition: all 2s;
 }
 .fade-leave-to {
     opcaity: 0
 }
 ```





### 12-首页-骨架动画效果

> 使用transition组件添加骨架动画效果

大致步骤：

- 定义一个骨架组件
- 在 新鲜好物  人气推荐 分别使用
- 使用 transition 组件，动画名称 fade 在UI组件库中



落地代码：

- 定义一个骨架组件

```vue
<template>
  <div class="home-skeleton">
    <div class="item" v-for="i in 4" :key="i" :style="{ backgroundColor: bg }">
      <XtxSkeleton bg="#e4e4e4" width="306px" height="306px" animated />
      <XtxSkeleton bg="#e4e4e4" width="160px" height="24px" animated />
      <XtxSkeleton bg="#e4e4e4" width="120px" height="24px" animated />
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeSkeleton",
  props: {
    bg: {
      type: String,
      default: "#fff",
    },
  },
};
</script>

<style scoped lang="less">
.home-skeleton {
  width: 1240px;
  height: 406px;
  display: flex;
  justify-content: space-between;
  .item {
    width: 306px;
    .xtx-skeleton ~ .xtx-skeleton {
      display: block;
      margin: 16px auto 0;
    }
  }
}
</style>
```

- 在 新鲜好物  人气推荐 分别使用

`home-new.vue`

```diff
+      <Transition name="fade">
+        <ul class="goods-list" v-if="list.length">
          <li v-for="item in list" :key="item.id">
            <RouterLink to="/">
              <img :src="item.picture" />
              <p class="name ellipsis">{{ item.name }}</p>
              <p class="price">&yen;{{ item.price }}</p>
            </RouterLink>
          </li>
        </ul>
+        <HomeSkeleton name="fade" v-else bg="#f0f9f4" />
+      </Transition>
```

`home-hot.vue`

```diff
+      <Transition name="fade">
+        <ul class="goods-list" v-if="list.length">
          <li v-for="item in list" :key="item.id">
            <RouterLink to="/">
              <img :src="item.picture" />
              <p class="name ellipsis">{{ item.title }}</p>
              <p class="desc">{{ item.alt }}</p>
            </RouterLink>
          </li>
        </ul>
+        <HomeSkeleton v-else />
+      </Transition>
```



UI组件库代码：`erabbit-ui/packages/theme/index.less` 不用写，组件库提供

```less
 // 离开时候淡出动画
.fade{
  &-leave {
    &-active {
      position: absolute;
      width: 100%;
      transition: opacity .5s .2s;
      z-index: 1;
    }
    &-to {
      opacity: 0;
    }
  }
}
```





### 13-首页-数据懒加载

> 目标：使用vueuse提供的函数监听进入可视区，完成数据懒加载

大致步骤：

- 知道 [useIntersectionObserver](https://vueuse.org/core/useIntersectionObserver/) 使用方法
- 使用 `useIntersectionObserver` 实现数据懒加载（进入可视区发请求）
- 封装 `useLazyData` 函数，在 新鲜好物 人气推荐 组件使用



落地代码：

- 知道 `useIntersectionObserver`  使用

```js
import { ref } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'

export default {
  setup() {
    const target = ref(null)
    const targetIsVisible = ref(false)

    // stop 停止观察函数
    const { stop } = useIntersectionObserver(
      // 需要观察的元素，通过ref获取的DOM元素或组件
      target,
      // isIntersecting 是否进入可视区 observerElement 被观察的元素
      ([{ isIntersecting }], observerElement) => {
        targetIsVisible.value = isIntersecting
      },
    )

    return {
      target,
      targetIsVisible,
    }
  },
}
```

- 使用 `useIntersectionObserver` 实现数据懒加载

```diff
+import { useIntersectionObserver } from "@vueuse/core";
export default {
  name: "HomeNew",
  components: { HomePanel, HomeSkeleton },
  setup() {
    const list = ref(0);
    
+    const target = ref(null);
+    const { stop } = useIntersectionObserver(
+      target,
+      async ([{ isIntersecting }]) => {
+        if (isIntersecting) {
+          stop();
+          const data = await getNewGoods();
+          list.value = data.result;
+        }
+      }
+    );

+    return { list, target };
  },
};
```

```vue
  <HomePanel ref="target" title="新鲜好物" sub-title="新鲜出炉 品质靠谱">
```

- 封装 `useLazyData` 函数，在 新鲜好物 人气推荐 组件使用

`utils/hooks.js`

```js
import { useIntersectionObserver } from "@vueuse/core";
import { ref } from "vue";

/**
 * 懒加载函数
 * @param {function} apiFn API函数
 * @returns
 */
export const useLazyData = (apiFn) => {
  const target = ref(null);
  const list = ref([]);
  const { stop } = useIntersectionObserver(
    target,
    async ([{ isIntersecting }]) => {
      if (isIntersecting) {
        stop();
        const data = await apiFn();
        list.value = data.result;
      }
    }
  );
  return { target, list };
};
```

新鲜好物 `home-new`

```diff
import HomePanel from "./home-panel";
import { getNewGoods } from "@/api/home";
+import { useLazyData } from "@/utils/hooks";
import HomeSkeleton from "./home-skeleton";
export default {
  name: "HomeNew",
  components: { HomePanel, HomeSkeleton },
  setup() {
+    const { list, target } = useLazyData(getNewGoods);
    return { list, target };
  },
};
```

人气推荐 `home-hot`

```vue
<HomePanel ref="target" title="人气推荐" sub-title="人气推荐 不容错过">
```

```diff
import HomePanel from "./home-panel";
import { getHot } from "@/api/home";
+import { useLazyData } from "@/utils/hooks";
import HomeSkeleton from "./home-skeleton";
export default {
  name: "HomeNew",
  components: { HomePanel, HomeSkeleton },
  setup() {
+    const { list, target } = useLazyData(getHot);
+    return { list, target };
  },
};
```



**总结：**

- 体会组合API提高逻辑复用



### 14-首页-热门品牌（作业）

> 目标：使用懒加载函数和骨架完成热门品牌功能

大致步骤：

- 完成组件布局和样式
- 使用 `useLazyData` 加载数据，渲染列表
- 利用骨架组件完成加载效果
- 完成列表滑动效果



具体代码：

- 完成组件布局和样式

`home-brand.vue`

```vue
<template>
  <HomePanel title="热门品牌" sub-title="国际经典 品质保证">
    <template v-slot:right>
      <a href="javascript:;" class="iconfont icon-angle-left"></a>
      <a href="javascript:;" class="iconfont icon-angle-right"></a>
    </template>
    <div class="box" ref="box">
      <ul class="list">
        <li v-for="i in 10" :key="i">
          <RouterLink to="/">
            <img
              src="http://zhoushugang.gitee.io/erabbit-client-pc-static/uploads/brand_goods_1.jpg"
              alt=""
            />
          </RouterLink>
        </li>
      </ul>
    </div>
  </HomePanel>
</template>

<script>
import HomePanel from "./home-panel";
export default {
  name: "HomeBrand",
  components: { HomePanel },
};
</script>

<style scoped lang="less">
.home-panel {
  background: #f5f5f5;
}
.iconfont {
  width: 20px;
  height: 20px;
  background: #ccc;
  color: #fff;
  display: inline-block;
  text-align: center;
  margin-left: 5px;
  background: var(--xtx-color);
  &::before {
    font-size: 12px;
    position: relative;
    top: -2px;
  }
  &.disabled {
    background: #ccc;
    cursor: not-allowed;
  }
}
.box {
  display: flex;
  width: 100%;
  height: 345px;
  overflow: hidden;
  padding-bottom: 40px;
  .list {
    width: 200%;
    display: flex;
    transition: all 1s;
    li {
      margin-right: 10px;
      width: 240px;
      &:nth-child(5n) {
        margin-right: 0;
      }
      img {
        width: 240px;
        height: 305px;
      }
    }
  }
}
</style>
```

- 使用 `useLazyData` 加载数据，渲染列表

```js
import { useLazyData } from "@/utils/hooks";
import HomePanel from "./home-panel";
import { getBrand } from "@/api/home";
export default {
  name: "HomeBrand",
  components: { HomePanel },
  setup() {
    // 数据
    const { target, list } = useLazyData(() => getBrand(10));
    return { target, list };
  },
};
```

```vue
          <li v-for="item in list" :key="item.id">
            <RouterLink to="/">
              <img :src="item.picture" alt="" />
            </RouterLink>
          </li>
```

- 利用骨架组件完成加载效果

```diff
+      <Transition name="fade">
+        <ul class="list" v-if="list.length">
          <li v-for="item in list" :key="item.id">
            <RouterLink to="/">
              <img :src="item.picture" alt="" />
            </RouterLink>
          </li>
        </ul>
+        <div v-else class="skeleton">
+          <XtxSkeleton
+            class="item"
+            v-for="i in 5"
+            :key="i"
+            animated
+            bg="#e4e4e4"
+            width="240px"
+            height="305px"
+          />
+        </div>
+      </Transition>
```

```less
.skeleton {
  display: flex;
  .xtx-skeleton {
    margin-right: 10px;
    &:nth-child(5n) {
      margin-right: 0;
    }
  }
}
```



- 完成列表滑动效果

```diff
+import { ref } from "vue";
export default {
  name: "HomeBrand",
  components: { HomePanel },
  setup() {
+    // 切换
+    const translateX = ref(0);
+    const toggle = (x) => {
+      translateX.value = x;
+    };
    // 数据
    const { target, list } = useLazyData(() => getBrand(10));
+    return { target, list, translateX, toggle };
  },
};
```

```vue
      <a
        @click="toggle(0)"
        href="javascript:;"
        class="iconfont icon-angle-left prev"
        :class="{ disabled: translateX === 0 }"
      ></a>
      <a
        @click="toggle(-1240)"
        href="javascript:;"
        class="iconfont icon-angle-right next"
        :class="{ disabled: translateX === -1240 }"
      ></a>
```

```vue
        <ul
          class="list"
          v-if="list.length"
          :style="{ transform: `translateX(${translateX}px)` }"
        >
```



**总结：**

- 综合 数据懒加上 骨架效果 完成该功能



