---
title: day01-Vue3入门
---





## Vue3.0入门



### 01-vue3基本介绍

> 知道：vue3的现状以及它特点

大致内容：

- Vue3的现状
- 相关文档
- 了解框架优点特点



具体落地：

1. Vue3的现状

2020 年 9 月 18 日发布，许多开发者还在观望。2022 年 2 月 7 日称为默认版本，意味着vue3是现在也是未来。

| 组件（插件）名称 | 官方地址                                      | 简介                                                         |
| :--------------- | :-------------------------------------------- | :----------------------------------------------------------- |
| ant-design-vue   | https://antdv.com/docs/vue/introduce-cn/      | ant-design-vue 是 Ant Design 的 Vue 实现，组件的风格与 Ant Design 保持同步 |
| element-plus     | https://element-plus.gitee.io/#/zh-CN         | Element Plus，一套为开发者、设计师和产品经理准备的基于 Vue 3.0 的桌面端组件库 |
| vant             | https://vant-contrib.gitee.io/vant/v3/#/zh-CN | 有赞前端团队开源的移动端组件库，于 2016 年开源，已持续维护 4 年时间 |
| Naive UI         | https://www.naiveui.com/zh-CN/                | 一个 Vue 3 组件库比较完整，主题可调，使用 TypeScript，不算太慢，有点意思 |
| VueUse           | https://vueuse.org/                           | 基于composition组合api的常用集合，小兔鲜儿项目会部分使用     |



2. 相关文档
   1. Vue3 中文文档  https://vue3js.cn/docs/zh/
   2. Vue3 设计理念  https://vue3js.cn/vue-composition/   



3. 了解框架优点特点
   1. 首次渲染更快
   2. diff算法更快
   3. 内存占用更少
   4. 打包体积更小
   5. 更好的Typescript支持
   6. <font color="red">Composition API </font> 组合API



**总结：**

- 前端学习vue3是必须的，学习vue3主要学习组合API的使用。



### 02-vue3开发环境

> 掌握：使用vue-cli完成项目创建知道初始化代码含义

大致步骤：

- 创建项目
- 默认代码



具体落地：

1. 创建项目

![image-20220308122522939](https://wuxiaohui-1254415986.cos.ap-nanjing.myqcloud.com/uPic/image-20220308122522939.png)

2. 默认代码

```js
// 1. 导入一个创建App的函数
import { createApp } from 'vue'
// 2. 导入根组件
import App from './App.vue'
// 3. 根据根组件创建vue应用实例，挂载到html的app元素上
createApp(App).mount('#app')
```



其他发现：

- vue3的组件组件根标签不再是强制，支持代码片段。



**总结：**

- createApp 创建vue应用实例，组件支持代码片段代码



### 03-vue3组合API介绍

> 知道：什么是选项API什么是组合API，对比它们之间的代码组织特点

大致内容：

- 选项API与组合API
- 它们组织代码特点



具体落地：

1. 选项API，data 选项写数据，methods 选项写逻辑，...
   1. 代码分散，一个功能会拆分在各个选项中，不利于维护不利于复用
2. 组合API，数据、逻辑和其他都在setup内写
   1. 代码集中，一个功能可以组织在一起，利于维护，可抽离可复用

![image-20220308131233377](https://wuxiaohui-1254415986.cos.ap-nanjing.myqcloud.com/uPic/image-20220308131051174.png)

**总结：**

-  data methods 是选项API，写在 setup 里的就是组合API
- 如果你使用了vue3那么使用组合API一定是不错的选择。



### 04-vue3组合API体验

> 体验：组合API实现couter和显示隐藏



大致步骤：

- 使用选项API实现
- 使用组合API实现
- 抽离复用逻辑



落地代码：

1. 选项API实现

```vue
<template>
  <button @click="toggle">显示隐藏图片</button>
  <img v-show="show" alt="Vue logo" src="./assets/logo.png" />
  <hr />
  计数器：{{ count }} <button @click="increment">累加</button>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      show: true,
      count: 0,
    };
  },
  methods: {
    toggle() {
      this.show = !this.show;
    },
    increment() {
      this.count++;
    },
  },
};
</script>
```

2. 组合API实现

```vue
<template>
  <button @click="toggle">显示隐藏图片</button>
  <img v-show="show" alt="Vue logo" src="./assets/logo.png" />
  <hr />
  计数器：{{ count }} <button @click="increment">累加</button>
</template>

<script>
import { ref } from 'vue';
export default {
  name: "App",
  setup () {
    // 显示隐藏
    const show = ref(true)
    const toggle = () => {
      show.value = !show.value
    }
    // 计数器
    const count = ref(0)
    const increment = () => {
      count.value ++
    }

    return { show, toggle, count, increment }
  }
};
</script>
```

3. 复用逻辑

```vue
<template>
  <button @click="toggle">显示隐藏图片</button>
  <img v-show="show" alt="Vue logo" src="./assets/logo.png" />
  <hr />
  计数器：{{ count }} <button @click="increment">累加</button>
  <hr />
  计数器：{{ count1 }} <button @click="increment1">累加</button>
</template>

<script>
import { ref } from "vue";
// 逻辑抽离
const useCounter = () => {
  const count = ref(0);
  const increment = () => {
    count.value++;
  };
  return { count, increment };
};
export default {
  name: "App",
  setup() {
    // 显示隐藏
    const show = ref(true);
    const toggle = () => {
      show.value = !show.value;
    };

    // 逻辑复用
    const { count, increment } = useCounter();
    const { count: count1, increment: increment1 } = useCounter();

    return { show, toggle, count, increment, count1, increment1 };
  },
};
</script>
```



**总结：**

- 体会组合API对逻辑复用和代码维护支撑，将来在项目中我们会有实践。





### 05-组合API-setup函数

> 掌握：setup使用和它的执行时机。

大致内容：

- setup的基本用法
- 确定它的执行时机



具体落地：

- setup是一个新的配置选项，它是一个函数，该函数是组合API的入口函数。
- setup函数只会在组件初始化执行一次，且在beforeCreate生命周期函数之前执行。

```vue
<template>
  <div>根组件</div>
</template>

<script>
export default {
  name: "App",
  setup() {
    // 组合API入口函数
    console.log("setup执行了");
    console.log(this);
  },
  beforeCreate() {
    console.log("beforeCreate执行了");
    console.log(this);
  },
};
</script>
```



**总结：**

- steup在beforeCreate之前执行，函数内this是undefined不是组件实例



### 06-组合API-reactive函数

> 掌握：使用reactive函数把普通对象转换成响应式数据

使用步骤：

- 从 `vue` 中导出 `reactive` 函数
- 在 `setup` 函数中，使用 `reactive` 函数，传入一个普通对象，返回一个响应式数据对象
- 最后 `setup` 函数返回一个对象，包含该响应式对象即可，模板中可使用



落地代码：

```vue
<template>
  <div>
    <p>姓名：{{state.name}}</p>
    <p>年龄：{{state.age}} <button @click="state.age++">一年又一年</button></p>
  </div>
</template>

<script>
// 1. 导入函数
import { reactive } from "vue"; 
export default {
  name: "App",
  setup() {
    // 2. 创建响应式数据对象
    const state = reactive({ name: 'tom', age: 18 })
    // 3. 返回数据
    return { state }
  }
};
</script>
```



**总结：**

- 使用 `reactive` 传入普通对象可以转换成响应式对象
- 可以转换简单数据吗？不能



### 07-组合API-ref函数

> 掌握：使用ref函数创建响应式数据

使用步骤：

- 从 `vue` 中导出 `ref` 函数
- 在 `setup` 函数中，使用 `ref` 函数，传入一个普通数据（简单or复杂），返回一个响应式数据
- 最后 `setup` 函数返回一个对象，包含该响应式数据即可
- 注意：使用 `ref` 创建的数据，`js` 中需要 `.value` ，`template` 中可省略



落地代码：

```vue
<template>
  <div>
    <p>
      计数器：{{ count }}
      <button @click="count++">累加1</button>
      <!-- template中使用可省略.value -->
      <button @click="increment">累加10</button>
    </p>
  </div>
</template>

<script>
// 1. 导入函数
import { ref } from "vue";
export default {
  name: "App",
  setup() {
    // 2. 创建响应式数据对象
    const count = ref(0);
    const increment = () => {
      // js中使用需要.value
      count.value += 10;
    };
    // 3. 返回数据
    return { count, increment };
  },
};
</script>
```



**总结：**

- `ref `可以把简单数据或者复杂数据转换成响应式数据，注意使用加上 `.value`，不过模板可省略。
- 疑问：定义响应式数据使用 `ref` 还是 `reactive` 呢？



### 08-组合API-reactive和ref的选择

> 知道：在定义响应式数据的时候如何选择reactive和ref

开始分析：

- `reactive` 可以转换对象成为响应式数据对象，但是不支持简单数据类型。
- `ref` 可以转换简单数据类型为响应式数据对象，也支持复杂数据类型，但是操作的时候需要 `.value` 。
- 它们各有特点，现在也没有最佳实践，没有明显的界限，所有大家可以自由选择。



**推荐用法：**

- 如果能确定数据是对象且字段名称也确定，可使用 `reactive` 转成响应式数据，其他一概使用 `ref` 。这样就没有 心智负担 。



参考代码：

```js
    // 1. 明确表单对象有两个字段
    const form = reactive({
      username: '',
      password: ''
    })

    // 2. 后台返回的数据对象
    const data = ref(null)
    const res = await axios.get('/user/100')
    data.value = res.data
```



**总结：**

- 在定义响应式数据的函数选择上，遵循：确定字段的对象使用 `reactive` 其他都使用 `ref` 函数 



### 09-组合API-toRefs函数

> 掌握：在使用reactive创建的响应式数据被展开或解构的时候使用toRefs保持响应式



大致步骤：

- 使用 `reactive` 创建响应式数据，踩坑
- 使用 `toRefs` 处理响应式数据，爬坑
- `toRefs` 函数的作用，与使用场景



落地代码：

- 基础案例

```vue
<template>
  <div>
    <p>姓名：{{ user.name }}</p>
    <p>年龄：{{ user.age }} <button @click="user.age++">一年又一年</button></p>
  </div>
</template>

<script>
import { reactive } from "vue";
export default {
  name: "App",
  setup() {
    const user = reactive({ name: "tom", age: 18 });
    return { user };
  },
};
</script>
```

- 使用 `reactive` 创建响应式数据，踩坑

```diff
<template>
  <div>
+    <p>姓名：{{ name }}</p>
+    <!-- 响应式丢失 -->
+    <p>年龄：{{ age }} <button @click="age++">一年又一年</button></p>
  </div>
</template>

<script>
import { reactive } from "vue";
export default {
  name: "App",
  setup() {
    const user = reactive({ name: "tom", age: 18 });
+    return { ...user };
  },
};
</script>
```

- 使用 `toRefs` 处理响应式数据，爬坑

```diff
+import { reactive, toRefs } from "vue";
export default {
  name: "App",
  setup() {
    const user = reactive({ name: "tom", age: 18 });
+    // 展开前使用 toRefs 处理    
+    return { ...toRefs(user) };
  },
};
```

- `toRefs` 函数的作用，与使用场景
  - 作用：把对象中的每一个属性做一次包装成为响应式数据
  - 响应式数据展开的时候使用，解构响应式数据的时候使用



**总结：**

- 当去解构和展开 `reactive` 的响应式数据对象使用 `toRefs` 保持响应式



### 10-组合API-computed函数

> 掌握：使用 computed 函数定义计算属性

大致步骤：

- 从 `vue` 中导出 `computed` 函数
- 在 `setup` 函数中，使用 `computed` 函数，传入一个函数，函数返回计算好的数据
- 最后 `setup` 函数返回一个对象，包含该计算属性数据即可，然后模板内使用



![image-20220308212303686](https://wuxiaohui-1254415986.cos.ap-nanjing.myqcloud.com/uPic/image-20220308212303686.png)

落地代码：

```vue
<template>
  <div>
    <p>分数：{{ scoreList }}</p>
    <p>优秀：{{ betterList }}</p>
  </div>
</template>

<script>
import { ref, computed } from "vue";
export default {
  name: "App",
  setup() {
    const scoreList = ref([80, 100, 90, 70, 60]);
    // 计算属性
    const betterList = computed(() =>
      scoreList.value.filter((item) => item >= 90)
    );

    // 改变数据，计算属性改变
    setTimeout(() => {
      scoreList.value.push(92, 66);
    }, 3000);

    return {
      scoreList,
      betterList,
    };
  },
};
</script>
```



**总结：**

- 使用 `computed` 定义计算属性，场景：当需要依赖一个数据得到新的数据使用计算属性



### 11-组合API-watch函数

> 掌握：使用watch函数监听数据的变化

大致内容：

- 使用 `watch` 监听一个响应式数据
- 使用 `watch` 监听多个响应式数据
- 使用 `watch` 监听响应式对象数据中的一个属性(简单)
- 使用 `watch` 监听响应式对象数据中的一个属性(复杂)，配置深度监听
- 使用 `watch` 监听，配置默认执行



落地代码：

- 使用 `watch` 监听一个响应式数据

```vue
<template>
  <p>计数器：{{ count }}</p>
</template>

<script>
import { ref, watch } from "vue";
export default {
  name: "App",
  setup() {
    const count = ref(0);
    // 1. 监听一个响应式数据
    // watch(数据, 改变后回调函数)
    watch(count, () => {
      console.log("count改变了");
    });
    // 2s改变数据
    setTimeout(() => {
      count.value++;
    }, 2000);
    return { count };
  },
};
</script>
```

- 使用 `watch` 监听多个响应式数据

```vue
<template>
  <p>计数器：{{ count }}</p>
  <p>
    姓名：{{ user.name }} 性别：{{ user.info.gender }} 年龄：{{ user.info.age }}
  </p>
</template>

<script>
import { reactive, ref, watch } from "vue";
export default {
  name: "App",
  setup() {
    const count = ref(0);
    const user = reactive({
      name: "tom",
      info: {
        gender: "男",
        age: 18,
      },
    });
    // 2. 监听多个响应式数据
    // watch([数据1, 数据2, ...], 改变后回调函数)
    watch([count, user], () => {
      console.log("数据改变了");
    });
    // 2s改变数据
    setTimeout(() => {
      count.value++;
    }, 2000);
    // 4s改变数据
    setTimeout(() => {
      user.info.age++;
    }, 4000);
    return { count, user };
  },
};
</script>
```

- 使用 `watch` 监听响应式对象数据中的一个属性(简单)

```vue
<template>
  <p>
    姓名：{{ user.name }} 性别：{{ user.info.gender }} 年龄：{{ user.info.age }}
  </p>
</template>

<script>
import { reactive, watch } from "vue";
export default {
  name: "App",
  setup() {
    const user = reactive({
      name: "tom",
      info: {
        gender: "男",
        age: 18,
      },
    });
    // 3. 监听响应式对象数据的一个数据，简单类型
    // watch(()=>数据, 改变后回调函数)
    watch(()=>user.name, () => {
      console.log("数据改变了");
    });
    // 2s改变数据
    setTimeout(() => {
      user.name = 'jack';
    }, 2000);
    // 4s改变数据
    setTimeout(() => {
      user.info.age = 60;
    }, 4000);
    return { user };
  },
};
</script>
```

- 使用 `watch` 监听响应式对象数据中的一个属性(复杂)，配置深度监听

```vue
<template>
  <p>
    姓名：{{ user.name }} 性别：{{ user.info.gender }} 年龄：{{ user.info.age }}
  </p>
</template>

<script>
import { reactive, watch } from "vue";
export default {
  name: "App",
  setup() {
    const user = reactive({
      name: "tom",
      info: {
        gender: "男",
        age: 18,
      },
    });
    // 4. 监听响应式对象数据的一个数据，复杂类型
    // watch(()=>数据, 改变后回调函数, {deep: true})
    watch(
      () => user.info,
      () => {
        console.log("数据改变了");
      },
      {
        // 开启深度监听
        deep: true,
      }
    );
    // 2s改变数据
    setTimeout(() => {
      user.info.age = 60;
    }, 2000);
    return { user };
  },
};
</script>
```

- 使用 `watch` 监听，配置默认执行

```diff
      {
        // 开启深度监听
        deep: true,
+        // 默认执行一次
+        immediate: true
      }
```



**总结：**

- `watch('需要监听的数据',数据改变执行函数,配置对象)` 来进行数据的侦听
- 数据：单个数据，多个数据，函数返回对象属性，属性复杂需要开启深度监听
- 配置对象：`deep` 深度监听  `immediate` 默认执行



### 12-组合API-生命周期函数

> 掌握：vue3的常用生命周期函数

使用步骤：

1. 先从vue中导入以`on打头`的生命周期钩子函数
2. 在setup函数中调用生命周期函数并传入回调函数
3. 生命周期钩子函数可以调用多次



具体内容：

- Vue3和vue2的生命周期对比

| 选项式API下的生命周期函数使用 | 组合式API下的生命周期函数使用 |
| ----------------------------- | ----------------------------- |
| beforeCreate                  | 不需要（直接写到setup函数中） |
| created                       | 不需要（直接写到setup函数中） |
| beforeMount                   | `onBeforeMount`               |
| mounted                       | `onMounted`                   |
| beforeUpdate                  | `onBeforeUpdate`              |
| updated                       | `onUpdated`                   |
| beforeDestroyed               | `onBeforeUnmount`             |
| destroyed                     | `onUnmounted`                 |
| activated                     | `onActivated`                 |
| deactivated                   | `onDeactivated`               |

- 参考代码

```vue
<template>
  <div>生命周期函数</div>
</template>
<script>
import { onMounted } from "vue";
export default {
  name: "App",
  setup() {
    // 生命周期函数：组件渲染完毕
  
    onMounted(()=>{
      console.log('onMounted触发了')
    })

    onMounted(()=>{
      console.log('onMounted也触发了')
    })
  },
};
</script>
```



**总结：**

- 常用的 `onMounted` 组件渲染完毕：发请求，操作dom，初始化图表...



### 13-组合API-父子通讯

> 掌握：在组合API中父子通讯的过程

知识梳理：

- 组合API中的父传子数据通讯
- 组合API中的子传父数据通讯

![截屏2022-03-09 下午1.39.45](https://wuxiaohui-1254415986.cos.ap-nanjing.myqcloud.com/uPic/1.png)



具体代码：

1. 父传子

父组件

```vue
<template>
  <div class="app">
    父组件：{{ money }}
    <hr />
    <SonCom :money="money" />
  </div>
</template>
<script>
import SonCom from "./SonCom.vue";
export default {
  name: "App",
  components: { SonCom },
  setup () {
    const money = ref(10000)
    return { money }
  }
};
</script>
```

子组件

```vue
<template>
  <div class="son">子组件：{{ money }}</div>
</template>
<script>
export default {
  name: "SonCom",
  props: {
    money: {
      type: Number,
    },
  },
  setup(props) {
    console.log("数据money：", props.money);
  },
};
</script>
```



2. 子传父

子组件

```vue
<template>
  <div class="son">
    子组件：{{ money }} <button @click="changeMoney">买手机</button>
  </div>
</template>
<script>
export default {
  name: "SonCom",
  props: {
    money: {
      type: Number,
    },
  },
  // vue3规范，自定义事件需要在这声明
  emits: ["change-money"],
  setup(props, { emit }) {
    console.log("数据money：", props.money);
    // 通过emit触发自定义事件
    const changeMoney = () => {
      emit("change-money", props.money - 3999);
    };
    return { changeMoney };
  },
};
</script>
```

父组件

```vue
<template>
  <div class="app">
    父组件：{{ money }}
    <hr />
    <SonCom :money="money" @change-money="money = $event" />
  </div>
</template>
<script>
import SonCom from "./SonCom.vue";
export default {
  name: "App",
  components: { SonCom },
  setup () {
    const money = ref(10000)
    return { money }
  }
};
</script>
```



**总结：**

- 父传子，通过props传递，setup函数  `第一个参数就是props`
- 子传父，通过emit函数，setup函数 `第二个参数解构出emit函数`，emits选项需要声明自定义事件名称



### 14-组合API-provide和inject函数

> 掌握：通过 provide 和 inject 函数实现跨级组件通讯

大致内容：

- 后代组件 `使用` 祖先组件的数据，祖传后
- 后代组件 `修改` 祖先组件的数据，后传祖





![1646882003452](https://wuxiaohui-1254415986.cos.ap-nanjing.myqcloud.com/uPic/1646882003452.png)



具体落地：

- 祖先传递后代
  - `provide` 和 `inject` 从 `vue` 中导入
  - `provide('数据名称', 响应式数据)`   提供数据的祖先组件使用
  - `const data = inject('数据名称')`  注入数据的后代组件使用

`App.vue`

```vue
<template>
  <div class="app">
    根组件：{{ money }}
    <hr />
    <ParentCom />
  </div>
</template>
<script>
import { ref, provide } from 'vue';
import ParentCom from "./ParentCom.vue";
export default {
  name: "App",
  components: { ParentCom },
  setup () {
    const money = ref(10000)
    // 提供数据给后代
    provide('money', money)
    return { money }
  }
};
</script>
```

`ParentCom.vue`

```vue
<template>
  <div class="parent-com" style="padding-left:50px">
    父组件：
    <hr />
    <ChildCom />
  </div>
</template>
<script>
import ChildCom from './ChildCom.vue'
export default {
  name: 'ParentCom',
  components: { ChildCom }
}
</script>
```

`ChildCom.vue`

```vue
<template>
  <div class="child-com" style="padding-left:50px">
    子组件：{{money}}
  </div>
</template>
<script>
import { inject } from 'vue'
export default {
  name: 'ChildCom',
  setup () {
    // 注入祖先组件提供的数据
    const money = inject('money')
    return { money }
  }
}
</script>
```



- 后代传递祖先
  - `provide('数据名称', 修改函数)`   提供函数的祖先组件使用
  - `const changeMoney = inject('数据名称')`  注入函数的后代组件使用
  - 遵循：数据由谁定义，由谁修改。

`App.vue`

```diff
<template>
  <div class="app">
    根组件：{{ money }}
    <hr />
    <ParentCom />
  </div>
</template>
<script>
import { ref, provide } from 'vue';
import ParentCom from "./ParentCom.vue";
export default {
  name: "App",
  components: { ParentCom },
  setup () {
    const money = ref(10000)
    // 提供数据给后代
    provide('money', money)
+    // 提供函数给后代    
+    provide('changeMoney', newMoney => {
+      money.value = newMoney
+    })
    return { money }
  }
};
</script>

```

`ChildCom.vue`

```diff
<template>
  <div class="child-com" style="padding-left: 50px">
    子组件：{{ money }}
+    <button @click="changeMoney(money - 3999)">买手机</button>
  </div>
</template>
<script>
import { inject } from "vue";
export default {
  name: "ChildCom",
  setup() {
    // 注入祖先组件提供的数据
    const money = inject("money");
+    // 注入祖先组件提供的函数
+    const changeMoney = inject("changeMoney");
+    return { money , changeMoney};
  },
};
</script>
```





**总结：**

- 使用 `provide` 提供数据，使用 `inject` 注入数据。
  - 可以传递数据（使用数据），可以传递函数（修改数据）



### 15-组合API-ref属性

> 掌握：使用 ref 属性获取DOM元素或者组件实例

大致内容：

- 通过 ref 属性获取DOM元素
- 通过 ref 属性获取组件实例



落地代码：

1. 通过 ref 属性获取DOM元素

```vue
<template>
  <div class="app">
    <!-- 2. 使用ref属性绑定响应式数据 -->
    <h1 ref="refH">App组件</h1>
  </div>
</template>
<script>
import { ref, onMounted } from 'vue';
export default {
  name: "App",
  setup () {
    // 1. 声明响应式数据并返回给模板使用
    const refH = ref(null)

    // 3. 组件渲染后查看dom
    onMounted(()=>{
      console.log(refH.value)
    })

    return { refH }
  }
};
</script>

```

2. 通过 ref 属性获取组件实例

`App.vue`

```vue
<template>
  <div class="app">
    App组件
    <!-- 2. 使用ref属性绑定响应式 -->
    <ChildCom ref="refCom" />
  </div>
</template>
<script>
import { ref, onMounted } from 'vue';
import ChildCom from "./ChildCom.vue";
export default {
  name: "App",
  components: { ChildCom },
  setup () {
    // 1. 声明响应式数据并返回给模板使用
    const refCom = ref(null)

    // 3. 组件渲染后查看组件实例，可以调用组件函数
    onMounted(()=>{
      console.log(refCom.value)
      refCom.value.show()
    })

    return { refCom }
  }
};
</script>
```

`ChildCom.vue`

```vue
<template>
  <div class="child-com">
    子组件
  </div>
</template>
<script>
export default {
  name: 'ChildCom',
  setup () {
    const show = () => {
      console.log('组件内函数执行了')
    }
    return { show }
  }
}
</script>
```



**总结：**

- 通过ref函数创建一个数据，给标签或者组件使用ref属性绑定这个数据，组件渲染后可获取dom或者组件实例。





### 16-vue3的一些破坏性改变

> 了解：一些不兼容vue2的一些改变

参考文档：[非兼容的变更](https://v3.cn.vuejs.org/guide/migration/introduction.html#%E9%9D%9E%E5%85%BC%E5%AE%B9%E7%9A%84%E5%8F%98%E6%9B%B4)



不再支持：

- 过滤器 `filter`
- 同步修饰符 `:visible.sync="dialogFormVisible"`



怎么替代：

- 函数（过滤器）
- v-model （支持多个数据双向绑定）
  - v-model="数据"
  - V-model:visible="数据"




**总结：**

- vue3移除了过滤器，sync修饰符，项目中有实践。



### 17-vue3综合案例

> 掌握：axios 和 组合API 配合开发

![1646970811328](https://wuxiaohui-1254415986.cos.ap-nanjing.myqcloud.com/uPic/1646970811328.png)

#### 1）模板案例准备

- 克隆代码 `git@gitee.com:zhoushugang/vue3-case.git`

- 模板代码分析

```diff
import { createApp } from 'vue'
import App from './App.vue'

+// element-plus 支持vue3的ui组件库，使用和element-ui一致 
+import ElementUI from 'element-plus'
+import 'element-plus/dist/index.css'

+// use(ElementUI) 使用组件库
+createApp(App).use(ElementUI).mount('#app')
```

- 需求说明
  - 列表渲染
  - 删除数据
  - 使用组合API实现



#### 2）实现案例功能

```vue
<template>
  <div class="app">
    <el-table :data="list">
      <el-table-column label="ID" prop="id"></el-table-column>
      <el-table-column label="姓名" prop="name" width="150"></el-table-column>
      <el-table-column label="籍贯" prop="place"></el-table-column>
      <el-table-column label="操作" width="100">
        <template v-slot="{ row }">
          <el-button type="text" @click="delRow(row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import { onMounted, ref } from "vue";
import axios from 'axios'

export default {
  name: "App",
  setup() {
    // 获取列表数据
    const list = ref([])
    const geList = async () => {
      const res = await axios.get('/list')
      list.value = res.data
    }

    onMounted(() => {
      geList()
    })

    // 删除数据
    const delRow = async (id) => {
      await axios.delete(`/del?id=${id}`)
      geList()
    }

    return { list, delRow }
  }
};
</script>
<style>
.app {
  width: 980px;
  margin: 100px auto 0;
}
</style>
```





### 18-每日总结

- Vue3 组合API的入口？
  - setup()
- 如果明确知道数据是对象且知道字段名称，用什么函数什么响应式数据？
  - reactive()
- 如果不知道数据类和字段，使用什么声明响应式数据？
  - ref()
- 如果去解构 reactive 声明的数据对象，需要使用那个函数保持响应式特性？
  - toRefs()
- 组合API中定义计算属性？
  - Computed(()=>计算后的数据)
- 使用watch进行侦探数据的改变
  - 监听一个数据
    - watch(数据,()=>{})
  - 监听多个数据
    - watch([数据1,数据2],()=>{})
  - 监听对象中的一个属性，简单数据
    - watch(()=>对象.属性,()=>{})
  - 监听对象中的一个属性，复杂数据
    - watch(()=>对象.属性,()=>{},{deep:true})
  - 如果想立即执行
    - watch(()=>对象.属性,()=>{},{deep:true,immediate:true})
- 声明周期钩子函数，那个钩子发请求？
  - onMounted
- 父子通讯
  - 父给子：props 传递，模板中直接使用，setup(props){ // 使用props }
  - 子给父：setup(props,{emit}){} 通过emit触发事件，规范：emits选项需要显性声明
- 跨级组件通讯
  - 祖先到后代
    - 祖先  provide('money', money)
    - 后代  injec('money')
  - 后代到祖先
    - 祖先 provide('修改数据函数', (newVal)=>{ moeny.value=newVal })
    - 后代 inject('修改数据函数') 调用这个函数传递需要改的值
- 通过获取dom元素和组件实例
  - 通过ref定义一个响应式数据，return 给模板使用，组件或元素上通过ref属性绑定即可
  - 组件渲染完毕后课获取实例和元素
