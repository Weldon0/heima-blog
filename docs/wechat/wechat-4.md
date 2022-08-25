---
title: 🌹4、小程序第四天
---



## [#](https://weldon0.github.io/wxxcx-docs/day04/#_1、学习目标)1、学习目标

提示

今天所学习的所有知识点都是围绕**自定义组件** ， 具体参见：[【指南=>自定义组件】(opens new window)](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/)

| 知识点名称             | 知识点内容                                                   | 难度系数 | 要求程度 |
| ---------------------- | ------------------------------------------------------------ | -------- | -------- |
| 组件创建和引用         | 创建自定义组件、局部引用、全局引用、全局和局部比较、组件和页面的区别 | 3星      | 掌握     |
| 组件样式               | 样式的隔离特性、隔离特性注意点、修改样式隔离特性选项         | 3星      | 掌握     |
| 数据、方法、属性       | 定义data私有数据、method方法、properties属性、data和properties的区别 | 3星      | 掌握     |
| 数据监听器             | 数据监听器定义和语法格式、基本用法、监听数据变化、监视器案例 | 3星      | 了解     |
| 纯数据字段             | 什么是纯数据字段、使用规则、纯数据字段使用案例               | 2星      | 了解     |
| 组件生命周期           | 全部生命周期函数、主要生命周期函数、lifetimes节点            | 2星      | 了解     |
| 组件所在页面的生命周期 | 概念、pageLifetimes节点                                      | 4星      | 了解     |
| 插槽                   | 概念、单个插槽、多个插槽、定义和使用多个插槽                 | 3星      | 掌握     |
| 父子通信               | 父子通信三种方式、属性绑定（父子）、事件绑定（子父）、selectComponent获取组件实例（父子） | 4星      | 掌握     |
| behaviors              | 概念和定义、创建behavior、导入并使用、了解所有可用节点、同名覆盖和组合规则 | 4星      | 掌握     |

## [#](https://weldon0.github.io/wxxcx-docs/day04/#_2、组件创建和引用)2、组件创建和引用

### [#](https://weldon0.github.io/wxxcx-docs/day04/#_2-1、组件创建)2.1、组件创建

- ① 在项目的根目录中，鼠标右键，创建 `components -> test` 文件夹
- ② 在新建的 `components -> test` 文件夹上，鼠标右键，点击 新建 `Component`
- ③ 键入组件的名称之后回车，会自动生成组件对应的 4 个文件，后缀名分别为`.js`，`.json` ， `.wxml`和`.wxss`

**注意：** 为了保证目录结构的清晰，建议把不同的组件，存放到单独目录中

![img](https://weldon0.github.io/wxxcx-docs/assets/img/img1.8d1ca4f3.png)

### [#](https://weldon0.github.io/wxxcx-docs/day04/#_2-2、组件的引用方式)2.2、组件的引用方式

组件的引用方式分为 **局部引用** 和 **全局引用**

- 局部引用：**组件只能在当前被引用的页面内使用**
- 全局引用：**组件可以在每个小程序页面中使用**

#### [#](https://weldon0.github.io/wxxcx-docs/day04/#局部引用组件)局部引用组件

在页面的 `.json` 配置文件中引用组件的方式，叫做 **局部引用**

```json
{
	// 在页面的.json 文件 usingComponents 字段导入组件
	"usingComponents":{
		"myTest":"../../components/test01/test01"
	}
}
```

```html
<!--在页面中使用导入的组件-->
<myTest></myTest>
```

#### [#](https://weldon0.github.io/wxxcx-docs/day04/#全局引用组件)全局引用组件

在 `app.json` 全局配置文件中引用组件的方式，叫做 **全局引用**

```json
{
	"pages":[...],
    "windows":{...},
	"tabBar":{...},
    // 在app.json文件的usingComponents 字段导入组件
    "usingComponents":{
        "myTest02":"./components/test02/test02"
    },
    "style":"v2",
    "sitemapLocation":"sitemap.json"
}
```

```html
<!--在页面中使用导入的组件-->
<myTest02></myTest02>
```

#### [#](https://weldon0.github.io/wxxcx-docs/day04/#全局引用和局部引用的区别)全局引用和局部引用的区别

根据组件的使用频率和范围，来选择合适的引用方式：

- 如果某组件在多个页面中经常被用到，建议进行 全局引用
- 如果某组件只在特定的页面中被用到，建议进行 局部引用

### [#](https://weldon0.github.io/wxxcx-docs/day04/#_2-3、组件和页面的区别)2.3、组件和页面的区别

从表面来看，组件和页面都是由 `.js`、`.json` 、`.wxml` 和 `.wxss`这四个文件组成的。但是，组件和 页面的 `.js`与`.json` 文件有明显的不同：

1. 组件的 `.json`文件中需要声明`"component": true` 属性
2. 组件的 `.js`文件中调用的是`Component()`函数
   - 整个程序启动调用的是 `App()`
   - 某个页面的渲染调用的是`Page()`
   - 某个组件的渲染调用的是`Component()`
3. 组件的事件处理函数需要定义到 `methods`节点中

## [#](https://weldon0.github.io/wxxcx-docs/day04/#_3、组件样式)3、组件样式

思考

❓ vue中组件的样式有什么特别之处？

::: details 答案

​	在`vue`文件里面的 `style`标签上面，如果加上了 `scoped`属性，那么书写的样式只会作用于当前组件，否则会和其他外部之间互相影响。

:::

默认情况下，自定义组件的样式只对当前组件有效，不会影响组件之外的UI结构，如下图显示

- 组件A的样式 **不会影响**组件C的样式
- 组件A的样式 **不会影响** 小程序页面的样式
- 小程序页面的样式 **不会影响** 组件A和C的样式

**好处：**

- ①防止外界的样式影响组件内部的样式
- ②防止组件的样式破坏外界的样式

![img](https://weldon0.github.io/wxxcx-docs/assets/img/img2.4c61c449.jpg)

### [#](https://weldon0.github.io/wxxcx-docs/day04/#_3-2、组件样式隔离的注意点)3.2、组件样式隔离的注意点

- `app.wxss`中全局样式对组件无效
- 只有`class`选择器才有样式隔离效果，`id`选择器，属性选择器、标签选择器不受样式隔离的影响

**建议：\**在 \*\*组件\*\*和\**引用组件的页面**中建议使用class选择器，**不要使用`id`、属性、标签选择器！**

### [#](https://weldon0.github.io/wxxcx-docs/day04/#_3-3、修改组件样式隔离选项)3.3、修改组件样式隔离选项

默认情况下，自定义的 **样式隔离特性** 能够 **防止组件内外样式互相干扰的问题。** 但有时，我们希望在外界能够控制组件内部的样式，此时，可以通过 `styleIsolation` 修改组件的样式隔离选项，用法如下：

```js
// 组件的 .js 文件中新增如下配置
Component({
    options:{ 
        styleIsolation:'isolated'
    }
})
// 或在组件的.json文件中新增如下配置
{
    "styleIsolation":"isolated"
}
```

### [#](https://weldon0.github.io/wxxcx-docs/day04/#_3-4、styleisolation的可选值)3.4、styleIsolation的可选值

```
styleIsolation` 的默认值是`isolated
```

| 可选值       | 默认值 | 描述                                                         |
| ------------ | ------ | ------------------------------------------------------------ |
| isolated     | 是     | 表示**启用样式隔离**，在自定义组件内外，使用class指定的样式将**组件内外不会相互影响** |
| apply-shared | 否     | 表示**页面`wxss`样式将影响自定义组件**，但是自定义组件`wxss`中指定的样式不会影响页面 |
| shared       | 否     | 表示页面`wxss`样式将影响到自定义组件，自定义组件`wxss`中指定的样式也会影响页面和其他设置了`apply-shared` 或 `shared`的自定义组件， 即**组件内外相互影响** |

关于自定义组件样式的其他内容，具体参见：[【指南=>自定义组件=>组件模板和样式】(opens new window)](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/wxml-wxss.html)

## [#](https://weldon0.github.io/wxxcx-docs/day04/#_4、组件数据、方法、属性)4、组件数据、方法、属性

### [#](https://weldon0.github.io/wxxcx-docs/day04/#_4-1、定义-data-私有数据)4.1、定义 data 私有数据

在小程序组件中，用于组件模板渲染的私有数据，需要定义到 `data` 节点中

```js
// 组件的JS文件中

Component({
    // 组件的初始数据
    data:{
        name:'德玛西亚'
    }
})
```

### [#](https://weldon0.github.io/wxxcx-docs/day04/#_4-2、定义-methods-方法)4.2、定义 methods 方法

在小程序组件中，事件处理函数和自定义方法需要定义到 `methods` 节点中

```js
// 组件的JS文件中

Component({
    // 组件的方法列表
    methods:{
        btnFn(){
            this.setData({
                name:'蕾欧娜'
            })
        }
    }
})
```

### [#](https://weldon0.github.io/wxxcx-docs/day04/#_4-3、定义-properties-属性)4.3、定义 properties 属性

在小程序组件中， `properties`是组件的对外属性，**用来接收外界(父组件)传递到组件中的数据**

```js
// 组件的JS文件中

Component({
    // 组件的属性列表
    properties:{
        // 完整定义属性的方式，当需要指定属性默认值时，建议使用此方法
        myId:{
            type:Number, //  数据类型
            value:10  // 默认值
        }，
        // 简化定义属性的方法，不需要指定属性默认值时，可以使用简化方式
        myAge:Number
    }
})
```

### [#](https://weldon0.github.io/wxxcx-docs/day04/#_4-4、data-和-properties-的区别)4.4、data 和 properties 的区别

在小程序的组件中， `properties` 属性和 `data` 数据的用法相同，它们**都是可读可写的**，只不过

- **`data`** 更倾向于**存储组件的私有数据**
- **`properties`** 更倾向于**存储外界传递到组件中的数据**
- 虽然 `properties` 属性是可读可写的，**但不太建议修改`properties`数据**，如果要修改 `properties`的数据, 最好通过子组件通信给父组件的方式实现

### [#](https://weldon0.github.io/wxxcx-docs/day04/#_4-5、使用-setdata-修改-properties-的值)4.5、使用 setData 修改 properties 的值

由于 `data` 数据和`properties` 属性在本质上没有任何区别，因此 `properties`属性的值也可以用于页面渲 染，或使用 `setData` 为 `properties` 中的属性重新赋值

```js
// 组件的JS文件中

Component({
    // 组件的属性列表
    properties:{
        myAge:Number
    },
    methods:{
        // 更新properties属性的值
        changeAge(){
            this.setData({
                myAge:this.properties.myAge+1
            })
        }
    }
})
```

## [#](https://weldon0.github.io/wxxcx-docs/day04/#_5、数据监听器)5、数据监听器

### [#](https://weldon0.github.io/wxxcx-docs/day04/#_5-1、基本介绍)5.1、基本介绍

数据监听器用于监听和响应任何属性和数据字段的变化，从而执行特定的操作。它的作用类似于vue 中的 watch 侦听器。

### [#](https://weldon0.github.io/wxxcx-docs/day04/#_5-2、基础语法)5.2、基础语法

```js
// 组件的JS中

Component({
    // 数据监听器
    observers:{
        '字段X':function(字段X新值){  // 监听单个
            // 逻辑功能处理
        },
        '字段A,字段B':function(字段A新值，字段B新值){ // 监听多个
            // 逻辑功能处理
        },
        '对象.属性':function(属性新值){  // 监听对象某个属性变化
            // 逻辑功能处理
        },
        '对象.**':function(属性新值){  // 监听对象所有属性变化
            // 逻辑功能处理
        },
        '**': function() {  //每次 setData 都触发
           // 逻辑功能处理
        },
    }
})
```

### [#](https://weldon0.github.io/wxxcx-docs/day04/#_5-3、监听器的基本用法)5.3、监听器的基本用法

- **组件结构**

  ```html
  <!--组件wxml中-->
  <view>
  	{{num1}}  + {{ num2 }} = {{ sum }}
  </view>
  <button type="warn" bindtap="addNum1">Num + 1</button>
  <button type="warn" bindtap="addNum2">Num + 2</button>
  ```

- **监听加法事件**

  ```js
  // 组件的JS中
  
  Component({
      // 组件初始数据
      data:{
          num1:0,
          num2:0,
          sum:0
      },
      // 组件方法列表
      methods:{
          addNum1(){
              this.setData({
                  num1:this.data.num1+1
              })
          },
          addNum2(){
              this.setData({
                  num2:this.data.num2+1
              })
          }
      }
  })
  ```

- **监听 num1 和 num2 的值是否发生改变，如果改变就对 sum 进行重新赋值**

  ```js
  // 组件的JS中
  
  Component({
  	...,
      // 数据侦听器
      observers:{
      	'num1,num2':function(newNum1,newNum2){
      		this.setData({
                  sum:newNum1+newNum2
              })
  		}
  	}
  })
  ```

### [#](https://weldon0.github.io/wxxcx-docs/day04/#_5-4、监听对象属性的变化)5.4、监听对象属性的变化

数据监听器支持**监听对象中单个或多个属性的变化**

```js
// 组件JS中
Component({
    // 组件的初始数据
    data:{
        obj:{
            name:'tome'
        }
    },
    // 数据侦听器
    observers:{
        // 监听obj里面的name字段变化
        'obj.name':function(newName){
            console.log(newName)
        }
    },
    // 方法列表
    methods:{
        changeObj(){
            this.setData({
                'obj.name':'jerry'  // 修改obj里面的name字段
            })
        }
    }
})
```

### [#](https://weldon0.github.io/wxxcx-docs/day04/#_5-5、案例演示)5.5、案例演示

#### [#](https://weldon0.github.io/wxxcx-docs/day04/#效果展示)效果展示

![img](https://weldon0.github.io/wxxcx-docs/assets/img/img3.61c72a40.jpg)

#### [#](https://weldon0.github.io/wxxcx-docs/day04/#代码实现)代码实现

- **①设置组件数据**

```js
// 组件JS中

Component({
    // 组件初始数据
    data:{    
        rgb:{  // rgb 的颜色值对象
            r:0,
            g:0,
            b:0
        },
        fullColor:'0,0,0'  // 根据rgb对象的三个属性，动态计算fullColor的值
    }
})
```

- **②渲染UI结构**

```html
// wxml 结构
<view style="background-color:rgb({{fullColor}});" class="colorBox">颜色值：{{fullColor}}</view>
<button size="mini" bindtap="changeR" type="default">R</button>
<button size="mini" bindtap="changeG" type="primary">G</button>
<button size="mini" bindtap="changeB" type="warn">B</button>
```

```css
/* wxss 样式 */
.colorBox{
    line-height:200rpx;
    font-size:24rpx;
    color:white;
    text-shadow:0rpx 0rpx 2rpx black;
    text-align:center;
}
```

- **③定义button的事件处理函数**

```js
// 组件JS中
Component({
    data:{...},
    methods:{
    	changeR(){  // 修改 rgb 对象上 r 属性的值
    		this.setData({
                'rgb.r':this.data.rgb.r +5 > 255 ? 255 : this.data.rgb.r+5
            })
		},
        changeG(){  // 修改 rgb 对象上 g 属性的值
    		this.setData({
                'rgb.g':this.data.rgb.g +5 > 255 ? 255 : this.data.rgb.g+5
            })
		},
        changeB(){  // 修改 rgb 对象上 b 属性的值
    		this.setData({
                'rgb.b':this.data.rgb.b +5 > 255 ? 255 : this.data.rgb.b+5
            })
		}
	}
})
```



- **④监听对象中指定属性的变化**

```js
// 组件JS中
Component({
    data:{...},
    methods:{...},
    observers:{
    	// 监听 rgb 对象上 r,g,b 三个子属性的变化
    	'rgb.r,rgb.g,rgb.b':function(r,g,b){
    		this.setData({
                // 为data中的fullColor 重新赋值
                fullColor:`${r},${g},${b}`
            })
    	}
    }
})
```

- **⑤监听对象中所有属性的变化**

  如果对象中需要被监听的属性太多了，为了方便，可以使用 **通配符\**** 来 **监听** 对象中所有属性的变化，所以上述代码可级为如下：



```js
// 组件JS中
Component({
    data:{...},
    methods:{...},
    observers:{
        // 监听 rgb 里面所有属性的变化
        'rgb.**':function(obj){
            this.setData({
                // 为data中的fullColor 重新赋值
                fullColor:`${obj.r},${obj.g},${obj.b}`
            })
        }
    }
})
```

## [#](https://weldon0.github.io/wxxcx-docs/day04/#_6、纯数据字段)6、纯数据字段

### [#](https://weldon0.github.io/wxxcx-docs/day04/#_6-1、概念定义)6.1、概念定义

- 概念： **纯数据字段**指的是那些**不用于界面渲染的`data`字段**
- 应用场景： 例如有些情况下，某些data中的字段**既不会展示在界面上，也不会传递给其他组件**，仅仅在当前组件内部使用。带有这种特性的`data`字段适合被设置为纯数据字段。
- 好处： 纯数据字段有助于提升页面更新的性能。

### [#](https://weldon0.github.io/wxxcx-docs/day04/#_6-2、使用规则)6.2、使用规则

在`Component`构造器的`options`节点中，指定`pureDataPattern`为一个正则表达式，字段名符合这个正则表达式的字段将成为纯数据字段，示例代码如下：

```js
// 组件的JS中

Component({
  options:{
    // 指定所有_开头的数据字段为纯数据字段
    pureDataPattern:/^_/
  },
  data:{
    a:true,   // 普通数据字段
    _b:true  // 纯数据字段
  }
})
```

### [#](https://weldon0.github.io/wxxcx-docs/day04/#_6-3、使用案例)6.3、使用案例

使用纯数据字段改造数据监听器案例



```js
// 组件JS中

Component({
  options:{
    // 指定所有_开头的数据字段为纯数据字段
    pureDatePattern:/^_/
  },
  data:{
    // 将rgb改造为以_开头的纯数据字段
    _rgb:{
      r:0,
      g:0,
      b:0
    },
    fullColor:'0,0,0'
  },
  methods:{
    changeR(){  // 修改 _rgb 对象上 r 属性的值
      this.setData({
          '_rgb.r':this.data._rgb.r +5 > 255 ? 255 : this.data._rgb.r+5
      })
	},
    changeG(){  // 修改 _rgb 对象上 g 属性的值
      this.setData({
          '_rgb.g':this.data._rgb.g +5 > 255 ? 255 : this.data._rgb.g+5
      })
	},
    changeB(){  // 修改 _rgb 对象上 b 属性的值
      this.setData({
          '_rgb.b':this.data._rgb.b +5 > 255 ? 255 : this.data._rgb.b+5
      })
	}
  },
  observers:{
    // 监听 rgb 对象上 r,g,b 三个子属性的变化
    '_rgb.**':function(obj){
        this.setData({
            // 为data中的fullColor 重新赋值
            fullColor:`${obj.r},${obj.g},${obj.b}`
        })
    }
  }
})
```

## [#](https://weldon0.github.io/wxxcx-docs/day04/#_7、生命周期)7、生命周期

### [#](https://weldon0.github.io/wxxcx-docs/day04/#_7-1、全部生命周期函数)7.1、全部生命周期函数

| 生命周期     | 参数         | 描述                                                         |
| ------------ | ------------ | ------------------------------------------------------------ |
| **created**  | 无           | 在组件实例刚刚被创建时执行，刚创建好还没放入到小程序页面中   |
| **attached** | 无           | 在组件实例进入页面节点树时执行，刚被放入到小程序页面中，还没渲染好 |
| ready        | 无           | 在组件在视图层布局完成后执行，这个时候已经渲染完成           |
| moved        | 无           | 在组件实例被移动到节点树另一个位置时执行，组件被移动时触发   |
| **detached** | 无           | 在组件实例被从页面节点树移除时执行，组件销毁了时候触发       |
| error        | Object Error | 每当组件方法抛出错误时执行                                   |

### [#](https://weldon0.github.io/wxxcx-docs/day04/#_7-2、主要生命周期函数)7.2、主要生命周期函数

组件的生命周期，指的是组件自身的一些函数，这些函数在特殊的时间点或遇到一些特殊的框架事件时被自动触发 最重要的生命周期是 **`created`, `attached`, `detached`** ，包含一个组件实例生命流程的最主要时间点。

①组件实例**刚刚被创建好**时， created 生命周期被触发

- **此时还不能调用 `setData`**
- 通常情况下，这个生命周期只应该用于给组件 this 添加一些自定义属性字段

②在组件完全**初始化完毕、进入页面节点树后**， attached 生命周期被触发

- this.data 已被初始化完毕
- **这个生命周期很有用，绝大多数初始化工作可以在这个时机进行**

③在组件**离开页面节点树后**， detached 生命周期被触发

- 退出一个页面时，会触发页面内每个自定义组件的detached 生命周期被触发
- 此时适合做一些清理性质的工作

### [#](https://weldon0.github.io/wxxcx-docs/day04/#_7-3、lifetimes节点)7.3、lifetimes节点

生命周期方法可以直接定义在 **Component 构造器的第一级参数**中 组件的的生命周期也可以在 **`lifetimes` 字段**内进行声明（这是推荐的方式，其优先级最高）

```js
// 组件JS里面

Component({
    // 在lifetimes 字段中声明钩子函数
    lifetimes:{
        attached(){
            console.log('在组件实例进入页面节点树')
        },
        detached(){
            console.log('在组件实例被从页面节点树移除')
        }
    },
    // 老写法
     attached(){
         console.log('~~~~在组件实例进入页面节点树')
     },
    detached(){
        console.log('~~~~在组件实例被从页面节点树移除')
    }
})
```

### [#](https://weldon0.github.io/wxxcx-docs/day04/#_7-4、组件所在页面生命周期)7.4、组件所在页面生命周期

#### [#](https://weldon0.github.io/wxxcx-docs/day04/#什么是组件所在页面的生命周期)什么是组件所在页面的生命周期

**自定义组件的行为依赖于页面状态的变化**，此时就需要用到组件所在页面的生命周期，在自定义组件中，组件所在页 面的生命周期函数有如下 3 个，分别是：

| 生命周期 | 参数        | 描述                         |
| -------- | ----------- | ---------------------------- |
| show     | 无          | 组件所在的页面被展示时执行   |
| hide     | 无          | 组件所在的页面被隐藏时执行   |
| resize   | Object Size | 组件所在的页面尺寸变化时执行 |

#### [#](https://weldon0.github.io/wxxcx-docs/day04/#pagelifetimes-节-点)pageLifetimes 节 点

组件所在页面的生命周期函数，需要定义在 **`pageLifetimes`**节点中

```js
// 组件JS里面

Component({
	// 在组件内部的pageLifetimes 节点中，监听组件在页面的生命周期函数
	pageLifetimes:{
		show(){},  // 在页面被展示的时候，调用该方法
		hide(){},  // 页面被隐藏
		resize(){} // 页面尺寸变化
	}
})
```

## [#](https://weldon0.github.io/wxxcx-docs/day04/#_8、插槽)8、插槽

### [#](https://weldon0.github.io/wxxcx-docs/day04/#_8-1、什么是插槽)8.1、什么是插槽

在自定义组件的`wxml` 结构中，可以提供一个 节点（插槽），用于承载组件使用者提供的`wxml`结构

![img](https://weldon0.github.io/wxxcx-docs/assets/img/img4.ace87bf7.jpg)

插槽说白了: 就是 **子组件挖坑，父组件填坑** 的过程。由父组件在使用子组件的时候, 决定子组件内部的某一些布局展示

- 子组件通过挖坑
- 父组件通过组件标签中间的内容来填坑

### [#](https://weldon0.github.io/wxxcx-docs/day04/#_8-2、单个插槽)8.2、单个插槽

在小程序中，**默认每个自定义组件中只允许使用一个 slot 占位**，这种个数上的限制叫做**单个插槽**

- 默认情况下，**一个组件的`wxml`中只能有一个 `slot`**
- 需要**`使用多 slot`** 时，可以在组件 `js`中声明启用
- 注意：小程序中目前只有**默认插槽和多个插槽，暂不支持作用域插槽**

```html
<!--组件的wxml-->
<view class="wrapper">
	<view>这里是组件的内部节点</view>
    <!--对于不确定的内容，可以使用<slot> 进行占位，具体的内容由组件的使用者决定-->
    <slot></slot>
</view>
```

```html
<!--组件使用者的wxml-->
<component-tag-name>
    <!--这部分内容将被放置在组件<slot>的位置上-->
    <view>这里是插入到组件 slot 中的内容</view>
</component-tag-name>
```



### [#](https://weldon0.github.io/wxxcx-docs/day04/#_8-3、多个插槽)8.3、多个插槽

默认情况下，**一个组件的`wxml`中只能有一个 `slot`**，需要多个一定要开启配置才可以

#### [#](https://weldon0.github.io/wxxcx-docs/day04/#启用多插槽)启用多插槽

在小程序的自定义组件中，需要使用多 插槽时，可以在**组件的`.js`文件中配置启用**才可以

```js
// 组件JS中

Component({
    options:{
        multipleSlots:true // 在组件定义时的选项中启用多slot支持
    },
    properties:{...},
    methods:{...}
})
```

#### [#](https://weldon0.github.io/wxxcx-docs/day04/#使用多插槽)使用多插槽

可以在组件的`.wxml` 中使用多个标签，以不同的 `name`来区分不同的插槽

```html
<!--组件的wxml-->
<view class="wrapper">
    <!-- name为before的slot插槽 -->
    <slot name="before"></slot>
	<view>这里是组件的内部节点</view>
    <!-- 默认插槽 -->
    <slot></slot>
    <!-- name为after的slot插槽 -->
    <slot name="after"></slot>
</view>
```

```html
<!--组件使用者的wxml-->
<component-tag-name>
    <!--渲染到name为before的slot标签位置-->
    <view slot="before">我是内容AAA</view>
    <!-- 默认插槽内容-->
    <view>这里是插入到组件 slot 中的内容</view>
    <!--渲染到name为after的slot标签位置-->
    <view slot="after">我是内容CCC</view>
</component-tag-name>
```

## [#](https://weldon0.github.io/wxxcx-docs/day04/#_9、父子通信)9、父子通信

### [#](https://weldon0.github.io/wxxcx-docs/day04/#_9-1、父子通信主要方式)9.1、父子通信主要方式

父子组件之间通信的 3 个方式

**①属性绑定（父子）**

用于父组件向子组件的指定属性设置数据，仅能设置 JSON 兼容的数据(只能传递数据，不能传递方法)

**②事件绑定（子父）**

用于子组件向父组件传递数据，可以传递任意数据(包括数组和方法)

**③获取组件实例（父子）**

父组件还可以通过 `this.selectComponent()` 获取子组件实例对象这样就可以直接访问子组件的任意数据和方法

### [#](https://weldon0.github.io/wxxcx-docs/day04/#_9-2、属性绑定-父子)9.2、属性绑定(父子)

**传递数据**

- 属性绑定用于实现父向子传值，而且只能传递普通类型的数据，无法将方法传递给子组件

```js
// 父的JS
data:{
    count:1  // 父组件中的数据
}
```



```html
<!--父的wxml-->
<view>
	<myTest02 count="{{count}}"></myTest02>
    <view>父组件传递的数据为：{{count}}</view>
</view>
```



**接收数据**

- 子组件在 `properties`节点中声明对应的属性并使用

```js
// 子组件的JS
Component({
    // 组件的属性列表
    properties:{
        count:{
            type:Number,
            value:0
        }
    }
})
```



```html
<!--子组件的wxml-->
<view>{{count}}</view>
```

### [#](https://weldon0.github.io/wxxcx-docs/day04/#_9-3、事件绑定-子父)9.3、事件绑定（子父）

**实现步骤**

事件绑定用于实现子向父传值，可以传递**任何类型**的数据。使用步骤如下：

① 在**父组件 的 `js`**中，定义一个函数，这个函数即将通过自定义事件的形式，传递给子组件

② 在 **父组件 的 `wxml`**中，通过自定义事件的形式，将步骤 1 中定义的函数引用，传递给子组件

③ 在 **子组件的 `js`** 中，通过调用 **`this.triggerEvent('自定义事件名称', {/\* 参数对象 \*/})`**，将数据发送到父组件

④ 在父组件的 `js`中，通过 **`e.detail`**获取到子组件传递过来的数据

**代码实现**

步骤 1： 在父组件的 `js`中，定义一个函数，这个函数即将通过自定义事件的形式，传递给子组件

```js
// 父组件JS
Page({
	// 定义回调函数
	changeCount(e){
		console.log('触发')
	}
})
```

步骤 2：在父组件的 `wxml`中，通过自定义事件的形式，将 步骤 1 中定义的函数引用，传递给子组件

```html
<!--父的wxml-->
<!--使用bind:自定义事件名(推荐：结构清晰)-->
<myTest02 count="{{ count }}" bind:event="changeCount"></myTest02>
<!--或在bind 后面直接写上自定义名称-->
<myTest02 count="{{ count }}" bindevent="changeCount"></myTest02>
```

步骤 3：在 子组件的 `js` 中，通过调用`this.triggerEvent('自定义事件名称', {/* 参数对象 */})`，将数据发送到父组件

```html
<!--子的wxml-->
<view>
	<button bindtap="setData">传值给父组件</button>
</view>
```



```js
// 子的JS
Component({
    // 组件初始数据
    data:{
        age:10
    },
    // 组件方法列表
    methods:{
        setDate(){
              this.triggerEvent('event',{age:this.data.age})
        }
    }
})
```



步骤 4：在父组件的`js`中，通过`e.detail`获取到子组件传递过来的数据

```js
// 父组件JS
Page({
	// 定义回调函数
	changeCount(e){
		// 获取子组件传递过来的数据
		console.log(e.detail.age)
	}
})
```

### [#](https://weldon0.github.io/wxxcx-docs/day04/#_9-4、selectcomponent-父子)9.4、selectComponent（父子）

可在父组件里调用 `this.selectComponent("id或class选择器")`，获取子组件的实例对象，从而直接访问子组件的任 意数据和方法。调用时需要传入一个选择器，例如 `this.selectComponent(".my-component")`

**这个方法的思路和`vue`中的通过ref关联找到组件实例的思路几乎是一致的**

```html
<!--父的wxml-->
<view>
    <!--使用bind:自定义事件名(推荐：结构清晰)-->
    <myTest02 count="{{ count }}" id="box" class="box" bind:event="changeCount"></myTest02>
    <button bindtap="getSonObj">获取子组件实例</button>
</view>
```

```js
// 父的JS
Page({
    getSonObj(){
        // 切记： 选择器的参数不能传递标签选择器，不然返回的是null
        // const child = this.selectComponent('.box') 
        const child = this.selectComponent('#box') 
        console.log(child)
    }
})
```

总结概况

❓ 小程序中组件传值的方式有几种，分别是什 么 ？

::: details 小程序组件传值的方式 三种

- 父往子传值：属性绑定
- 子往父传值：事件绑定
- 获取组件实例 `selectComponent`

:::

## [#](https://weldon0.github.io/wxxcx-docs/day04/#_10、behaviors)10、behaviors

### [#](https://weldon0.github.io/wxxcx-docs/day04/#_10-1、基础介绍)10.1、基础介绍

#### [#](https://weldon0.github.io/wxxcx-docs/day04/#什么是-behaviors)什么是 behaviors

`behaviors`是小程序中， **用于实现组件间代码共享**的特性，类似Vue.js中的`"mixins"`。

![img](https://weldon0.github.io/wxxcx-docs/assets/img/img5.4f65ef87.jpg)

#### [#](https://weldon0.github.io/wxxcx-docs/day04/#behaviors-的工作方式)behaviors 的工作方式

每个`behavior` 可以包含一组**属性、数据、生命周期** 和 **方法**。 组件引用它时，它的属性、数据和方法**会被合并到组件中**。

每个组件可以引用多个`behavior`，`behavior`也可以引用其他`behavior`。

### [#](https://weldon0.github.io/wxxcx-docs/day04/#_10-2、创建和使用)10.2、创建和使用

#### [#](https://weldon0.github.io/wxxcx-docs/day04/#创建behavior)创建behavior

调用 **`Behavior(Object object)`\**方法即可创建一个\**共享的`behavior`实例对象**，供所有组件使用

```js
// 调用 Behavior() 方法，创建实例对象
// 并使用module.exports 将 behavior 实例对象共享出去
module.exports = Behavior({
    // 属性节点
    properties:{},
    // 私有数据节点
    data:{ username:'德玛西亚' },
    // 事件处理函数和自定义方法节点
    methods:{},
    // 其他节点...
})
```



#### [#](https://weldon0.github.io/wxxcx-docs/day04/#导入使用behavior)导入使用behavior

```js
// 1. 使用require() 导入需要的自定义 behavior 模块
const myBehavior = require('../../behaviors/my-behavior')

Component({
    // 2. 将导入的behavior实例对象，挂载到behaviors 数组节点中，即可生效
    behaviors:[myBehavior],
    // 组件其他节点
})
```



### [#](https://weldon0.github.io/wxxcx-docs/day04/#_10-3、behavior可使用节点)10.3、behavior可使用节点

| 可用节点       | 类型         | 是否必填 | 描述                  |
| :------------- | :----------- | :------- | :-------------------- |
| **properties** | Object Map   | 否       | 同组件的属性          |
| **data**       | Object       | 否       | 同组件的数据          |
| **methods**    | Object       | 否       | 同自定义组件的方法    |
| **behaviors**  | String Array | 否       | 引入其它的 `behavior` |
| created        | Function     | 否       | 生命周期函数          |
| attached       | Function     | 否       | 生命周期函数          |
| ready          | Function     | 否       | 生命周期函数          |
| moved          | Function     | 否       | 生命周期函数          |
| detached       | Function     | 否       | 生命周期函数          |

### [#](https://weldon0.github.io/wxxcx-docs/day04/#_10-4、同名覆盖和组合规则)10.4、同名覆盖和组合规则

组件和它引用的`behavior`中可以包含同名的字段，此时可以参考如下3中同名时的处理规则：

- ①同名的数据字段（**`data`**）
- ②同名的属性（**`properties`**）或方法（**`methods`**）
- ③同名的**生命周期函数**

具体规则参见：

关于自定义组件样式的其他内容，具体参见：[【指南=>自定义组件=>behavior】](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/behaviors.html)∫
